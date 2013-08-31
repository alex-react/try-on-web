// generatedy by JSX compiler 0.9.63 (2013-08-31 12:05:12 +0900; 2ec017d883d4d01af3d13db10eb1dfa291034b54)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = true;
function StopIteration() {
	Error.call(this);
	this.name = "StopIteration";
	if (Error.captureStackTrace) Error.captureStackTrace(this, StopIteration);
};

$__jsx_extend([StopIteration], Error);
function AnimalConcept() {
};

$__jsx_extend([AnimalConcept], Object);
AnimalConcept.prototype.$__jsx_implements_AnimalConcept = true;

function Duck() {
};

$__jsx_extend([Duck], Object);
Duck.prototype.say$ = function () {
	console.log("quack!");
};


function Dog() {
};

$__jsx_extend([Dog], Object);
Dog.prototype.say$ = function () {
	console.log("bow!");
};


function Human(animal) {
	this._animal = animal;
};

$__jsx_extend([Human], Object);
Human.prototype.touch$ = function () {
	this._animal.say$();
};


function Human$make$LDuck$(target) {
	return new Human(new Human$x2E_AnimalHolder$x2E$x3CDuck$x3E(target));
};

Human.make$LDuck$ = Human$make$LDuck$;

function Human$make$LDog$(target) {
	return new Human(new Human$x2E_AnimalHolder$x2E$x3CDog$x3E(target));
};

Human.make$LDog$ = Human$make$LDog$;

function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var duck;
	var dog;
	var human1;
	var human2;
	duck = new Duck();
	dog = new Dog();
	human1 = Human$make$LDuck$(duck);
	human1.touch$();
	human2 = Human$make$LDog$(dog);
	human2.touch$();
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function Human$x2E_AnimalHolder$x2E$x3CDuck$x3E(target) {
	AnimalConcept.call(this);
	this._target = target;
};

$__jsx_extend([Human$x2E_AnimalHolder$x2E$x3CDuck$x3E], Object);
$__jsx_merge_interface(Human$x2E_AnimalHolder$x2E$x3CDuck$x3E, AnimalConcept);

Human$x2E_AnimalHolder$x2E$x3CDuck$x3E.prototype.say$ = function () {
	this._target.say$();
};


function Human$x2E_AnimalHolder$x2E$x3CDog$x3E(target) {
	AnimalConcept.call(this);
	this._target = target;
};

$__jsx_extend([Human$x2E_AnimalHolder$x2E$x3CDog$x3E], Object);
$__jsx_merge_interface(Human$x2E_AnimalHolder$x2E$x3CDog$x3E, AnimalConcept);

Human$x2E_AnimalHolder$x2E$x3CDog$x3E.prototype.say$ = function () {
	this._target.say$();
};



var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		StopIteration: StopIteration,
		StopIteration$: StopIteration
	},
	"system:example/type-erasure.jsx": {
		AnimalConcept: AnimalConcept,
		AnimalConcept$: AnimalConcept,
		Duck: Duck,
		Duck$: Duck,
		Dog: Dog,
		Dog$: Dog,
		Human: Human,
		Human$LAnimalConcept$: Human,
		_Main: _Main,
		_Main$: _Main
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	if (! module) return;

	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("system:example/type-erasure.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);

//# sourceMappingURL=type-erasure.jsx.js.mapping