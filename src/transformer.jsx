/*
 * Copyright (c) 2012-2014 DeNA Co., Ltd. et al.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import "./analysis.jsx";
import "./classdef.jsx";
import "./compiler.jsx";
import "./expression.jsx";
import "./parser.jsx";
import "./statement.jsx";
import "./type.jsx";
import "./util.jsx";

abstract class TransformCommand {

	var _compiler : Compiler;
	var _identifier : string;
	var errors : CompileError[];

	function constructor (compiler : Compiler, identifier : string) {
		this._compiler = compiler;
		this._identifier = identifier;
	}

	function setup (errors : CompileError[]) : void {
		this.errors = errors;
	}

	function getCompiler() : Compiler {
		return this._compiler;
	}

	abstract function performTransformation () : void;

}

abstract class FunctionTransformCommand extends TransformCommand {

	function constructor (compiler : Compiler, identifier : string) {
		super(compiler, identifier);
	}

	override function performTransformation () : void {
		this._getAllClosures().forEach((funcDef) -> {
			this.transformFunction(funcDef);
		});
	}

	abstract function transformFunction (funcDef : MemberFunctionDefinition) : void;

	function _getAllClosures () : MemberFunctionDefinition[] {
		var closures = new MemberFunctionDefinition[];
		// deeper is first
		this._compiler.forEachClassDef(function (parser, classDef) {
			return classDef.forEachMember(function onMember(member) {
				member.forEachClosure(function (funcDef) {
					return onMember(funcDef);
				});
				if (member instanceof MemberFunctionDefinition) {
					closures.push(member as MemberFunctionDefinition);
				}
				return true;
			});
		});
		return closures;
	}

}

abstract class ExpressionTransformCommand extends TransformCommand {

	function constructor(compiler : Compiler, identifier : string) {
		super(compiler, identifier);
	}

	override function performTransformation() : void {
		function touchMemberFunction(member : MemberFunctionDefinition) : void {
			member.forEachStatement((stmt) -> this.touchStatement(stmt));
		}

		function touchMemberVariable(member : MemberVariableDefinition) : void {
			var expr = member.getInitialValue();
			if (expr != null) {
				this.touchExpression(expr, (expr) -> member.setInitialValue(expr));
			}
		}

		this._compiler.forEachClassDef(function (parser, classDef) {
			if (! (classDef instanceof TemplateClassDefinition)) {
				classDef.forEachMember(function (member) {
					if (! (classDef instanceof TemplateFunctionDefinition)) {
						if (member instanceof MemberFunctionDefinition) {
							touchMemberFunction(member as MemberFunctionDefinition);
						} else {
							assert member instanceof MemberVariableDefinition;
							touchMemberVariable(member as MemberVariableDefinition);
						}
					}
					return true;
				});
			}
			return true;
		});
	}

	function touchStatement(stmt : Statement) : boolean {
		if (stmt instanceof FunctionStatement) {
			(stmt as FunctionStatement).getFuncDef().forEachStatement((stmt) -> this.touchStatement(stmt));
		}
		stmt.forEachStatement((stmt) -> {
			return this.touchStatement(stmt);
		});
		stmt.forEachExpression((expr, replaceCb) -> {
			return this.touchExpression(expr, replaceCb);
		});
		return true;
	}

	function touchExpression(expr : Expression, replaceCb : (Expression) -> void) : boolean {
		if (expr instanceof FunctionExpression) {
			(expr as FunctionExpression).getFuncDef().forEachStatement((stmt) -> this.touchStatement(stmt));
		}

		// the default
		expr.forEachExpression((expr, replaceCb) -> this.touchExpression(expr, replaceCb));
		return true;
	}

}

class FixedExpressionTransformCommand extends ExpressionTransformCommand {

	static const IDENTIFIER = "fixed";

	function constructor(compiler : Compiler) {
		super(compiler, __CLASS__.IDENTIFIER);
	}

	override function touchExpression(expr : Expression, replaceCb : (Expression) -> void) : boolean {

		// check that JSX.ENV is only used in form of "JSX.ENV[string-literal]" and transform
		if (expr instanceof ArrayExpression
			&& (expr as ArrayExpression).getFirstExpr() instanceof PropertyExpression
			&& __CLASS__._refersToJSXENV((expr as ArrayExpression).getFirstExpr() as PropertyExpression)
			&& ((expr as ArrayExpression).getSecondExpr() instanceof StringLiteralExpression)) {
			// JSX.ENV["foo"] -> OK!
			var envName = ((expr as ArrayExpression).getSecondExpr() as StringLiteralExpression).getDecoded();
			var envVar = this.getCompiler().getUserEnvironment()[envName];
			if (envVar != null) {
				replaceCb(new StringLiteralExpression(new Token(Util.encodeStringLiteral(envVar), false)));
			} else {
				replaceCb(new NullExpression(new Token("null", false), new NullableType(Type.stringType)));
			}
			return true;
		} else if (expr instanceof PropertyExpression && __CLASS__._refersToJSXENV(expr as PropertyExpression)) {
			// fail!  is referring to JSX.ENV but not in the above form
			this.errors.push(new CompileError(expr.getToken(), "JSX.ENV can only be accessed via: JSX.ENV[\"string-literal\"]"));
		}

		// other transformations may go in here

		// default
		return super.touchExpression(expr, replaceCb);
	}

	static function _refersToJSXENV(expr : PropertyExpression) : boolean {
		return expr.getExpr() instanceof ClassExpression
			&& expr.getExpr().getToken().getValue() == "JSX"
			&& expr.getIdentifierToken().getValue() == "ENV";
	}

}
