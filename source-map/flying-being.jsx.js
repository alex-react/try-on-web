var JSX = {};
(function () {

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
 * global functions called by JSX
 * (enamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
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

JSX.postProfileResults = function (url) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
/**
 * class Flyable
 * @constructor
 */
function Flyable() {
}

Flyable.prototype.$__jsx_implements_Flyable = true;

/**
 * @constructor
 */
function Flyable$() {
};

Flyable$.prototype = new Flyable;

/**
 * class Animal extends Object
 * @constructor
 */
function Animal() {
}

Animal.prototype = new Object;
/**
 * @constructor
 */
function Animal$() {
};

Animal$.prototype = new Animal;

/**
 */
Animal.prototype.eat$ = function () {
	console.log("An animal is eating!");
};

/**
 * class Bat extends Animal
 * @constructor
 */
function Bat() {
}

Bat.prototype = new Animal;
$__jsx_merge_interface(Bat, Flyable);

/**
 * @constructor
 */
function Bat$() {
	Animal$.call(this);
	Flyable$.call(this);
};

Bat$.prototype = new Bat;

/**
 */
Bat.prototype.fly$ = function () {
	console.log("A bat is flying!");
};

/**
 * class Insect extends Object
 * @constructor
 */
function Insect() {
}

Insect.prototype = new Object;
/**
 * @constructor
 */
function Insect$() {
};

Insect$.prototype = new Insect;

/**
 * class Bee extends Insect
 * @constructor
 */
function Bee() {
}

Bee.prototype = new Insect;
$__jsx_merge_interface(Bee, Flyable);

/**
 * @constructor
 */
function Bee$() {
	Insect$.call(this);
	Flyable$.call(this);
};

Bee$.prototype = new Bee;

/**
 */
Bee.prototype.fly$ = function () {
	console.log("A bee is flying!");
};

/**
 * class _Main extends Object
 * @constructor
 */
function _Main() {
}

_Main.prototype = new Object;
/**
 * @constructor
 */
function _Main$() {
};

_Main$.prototype = new _Main;

/**
 * @param {Array.<undefined|!string>} args
 */
_Main.main$AS = function (args) {
	/** @type {Bat} */
	var bat;
	/** @type {Animal} */
	var animal;
	/** @type {Flyable} */
	var flyable;
	/** @type {Bee} */
	var bee;
	bat = new Bat$();
	animal = bat;
	animal.eat$();
	flyable = bat;
	flyable.fly$();
	bee = new Bee$();
	flyable = bee;
	flyable.fly$();
};

var _Main$main$AS = _Main.main$AS;

var $__jsx_classMap = {
	"flying-being.jsx": {
		Flyable: Flyable,
		Flyable$: Flyable$,
		Animal: Animal,
		Animal$: Animal$,
		Bat: Bat,
		Bat$: Bat$,
		Insect: Insect,
		Insect$: Insect$,
		Bee: Bee,
		Bee$: Bee$,
		_Main: _Main,
		_Main$: _Main$
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);

	if (! module._Main) {
		throw new Error("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main$AS) {
		throw new Error("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main$AS(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	var testClass = module._Test$;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function
				&& /^test.*[$]$/.test(m)) {
				tests.push(m);
			}
		}
	}

	var test = new testClass();

	if (test.beforeClass$AS != null)
		test.beforeClass$AS(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (m) {
			test.run$SF$V$(m, function() { test[m](); });
		}(tests[i]));
	}

	if (test.afterClass$ != null)
		test.afterClass$();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("flying-being.jsx", [])
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})();

//@ sourceMappingURL=flying-being.jsx.js.mapping
