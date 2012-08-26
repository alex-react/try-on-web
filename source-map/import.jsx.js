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
	console.log("fib(10)=" + Fib$fib1$I(10).toString());
};

var _Main$main$AS = _Main.main$AS;

/**
 * class Fib extends Object
 * @constructor
 */
function Fib() {
}

Fib.prototype = new Object;
/**
 * @constructor
 */
function Fib$() {
};

Fib$.prototype = new Fib;

/**
 * @param {!number} n
 * @return {!number}
 */
Fib.fib1$I = function (n) {
	if (n <= 2) {
		return 1;
	} else {
		return Fib$fib1$I(n - 1) + Fib$fib1$I(n - 2);
	}
};

var Fib$fib1$I = Fib.fib1$I;

/**
 * @param {!number} n
 * @return {!number}
 */
Fib.fib2$N = function (n) {
	return (n <= 2 ? 1 : Fib$fib2$N(n - 1) + Fib$fib2$N(n - 2));
};

var Fib$fib2$N = Fib.fib2$N;

/**
 * @param {!number} n
 * @return {!number}
 */
Fib.fib3$I = function (n) {
	/** @type {!number} */
	var value;
	/** @type {!number} */
	var prevValue;
	/** @type {!number} */
	var i;
	/** @type {!number} */
	var t;
	if (n <= 2) {
		return 1;
	}
	value = 1;
	prevValue = 1;
	for (i = 3; i <= n; i++) {
		t = value + prevValue;
		prevValue = value;
		value = t;
	}
	return (value | 0);
};

var Fib$fib3$I = Fib.fib3$I;

/**
 * @param {!number} n
 * @return {!number}
 */
Fib.fib4$I = function (n) {
	switch (n) {
	case 1:
		return 1;
	case 2:
		return 1;
	default:
		return Fib$fib4$I(n - 1) + Fib$fib4$I(n - 2);
	}
};

var Fib$fib4$I = Fib.fib4$I;

/**
 * class _Main$0 extends Object
 * @constructor
 */
function _Main$0() {
}

_Main$0.prototype = new Object;
/**
 * @constructor
 */
function _Main$0$() {
};

_Main$0$.prototype = new _Main$0;

/**
 * @param {Array.<undefined|!string>} args
 */
_Main$0.main$AS = function (args) {
	/** @type {!number} */
	var n;
	n = (args.length > 0 ? +(function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[fib.jsx:42] null access");
		}
		return v;
	}(args[0])) : 10);
	console.log("fib1(" + (n + "") + ") =", Fib$fib1$I(n));
	console.log("fib2(" + (n + "") + ") =", Fib$fib2$N(n));
	console.log("fib3(" + (n + "") + ") =", Fib$fib3$I(n));
	console.log("fib4(" + (n + "") + ") =", Fib$fib4$I(n));
};

var _Main$0$main$AS = _Main$0.main$AS;

/**
 * class TestCase extends Object
 * @constructor
 */
function TestCase() {
}

TestCase.prototype = new Object;
/**
 * @constructor
 */
function TestCase$() {
	this._totalCount = 0;
	this._totalPass = 0;
	this._count = 0;
	this._pass = 0;
	this._tests = null;
	this._currentName = null;
	this._tasks = [  ];
};

TestCase$.prototype = new TestCase;

/**
 * @param {Array.<undefined|!string>} tests
 */
TestCase.prototype.beforeClass$AS = function (tests) {
	this._tests = tests;
	this._say$S("1.." + (this._tests.length + ""));
};

/**
 * @param {!string} name
 */
TestCase.prototype.run$SF$V$ = function (name, testFunction) {
	/** @type {!number} */
	var numAsyncTasks;
	name = name.replace(/[$].*$/, "");
	numAsyncTasks = this._tasks.length;
	this._currentName = name;
	testFunction();
	if (numAsyncTasks === this._tasks.length) {
		this.after$S(name);
	}
};

/**
 */
TestCase.prototype.afterClass$ = function () {
	var next;
	if (this._tasks.length === 0) {
		this.finish$();
	} else {
		next = this._tasks.shift();
		next();
	}
};

/**
 * @param {!string} name
 */
TestCase.prototype.after$S = function (name) {
	++ this._totalCount;
	this._say$S("\t" + "1.." + (this._count + ""));
	if (this._count === this._pass) {
		++ this._totalPass;
		this._say$S("ok " + (this._totalCount + "") + " - " + name);
	} else {
		this._say$S("not ok " + (this._totalCount + "") + " - " + name);
	}
	this._count = 0;
	this._pass = 0;
};

/**
 */
TestCase.prototype.finish$ = function () {
	/** @type {!number} */
	var failed;
	if (this._totalCount !== this._totalPass) {
		failed = this._totalCount - this._totalPass;
		this.diag$S("tests failed " + (failed + "") + " of " + (this._totalCount + ""));
	}
};

/**
 * @param {!number} timeoutMS
 */
TestCase.prototype.async$F$LAsyncContext$V$F$LAsyncContext$V$I = function (testBody, timeoutHandler, timeoutMS) {
	var $this = this;
	/** @type {AsyncContext} */
	var async;
	async = new AsyncContext$LTestCase$SF$LAsyncContext$V$I(this, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:147] null access");
		}
		return v;
	}(this._currentName)), timeoutHandler, timeoutMS);
	this._tasks.push((function () {
		testBody(async);
	}));
};

/**
 * @param {!number} timeoutMS
 */
TestCase.prototype.async$F$LAsyncContext$V$I = function (testBody, timeoutMS) {
	var $this = this;
	this.async$F$LAsyncContext$V$F$LAsyncContext$V$I(testBody, (function (async) {
		$this.fail$S("TIMEOUT: " + async.name$());
		async.done$();
	}), timeoutMS);
};

/**
 * @param {*} value
 * @return {_Matcher}
 */
TestCase.prototype.expect$X = function (value) {
	++ this._count;
	return new _Matcher$LTestCase$X(this, value);
};

/**
 * @param {*} value
 * @param {!string} message
 * @return {_Matcher}
 */
TestCase.prototype.expect$XS = function (value, message) {
	++ this._count;
	return new _Matcher$LTestCase$XS(this, value, message);
};

/**
 * @param {undefined|!string} name
 */
TestCase.prototype._ok$US = function (name) {
	/** @type {!string} */
	var s;
	++ this._pass;
	s = (name != null ? " - " + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:175] null access");
		}
		return v;
	}(name)) : "");
	this._say$S("\t" + "ok " + (this._count + "") + s);
};

/**
 * @param {undefined|!string} name
 * @param {!string} op
 * @param {*} got
 * @param {*} expected
 */
TestCase.prototype._nok$USSXX = function (name, op, got, expected) {
	/** @type {!string} */
	var s;
	s = (name != null ? " - " + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:186] null access");
		}
		return v;
	}(name)) : "");
	this._say$S("\t" + "not ok " + (this._count + "") + s);
	this.diag$S("comparing with " + op + s.replace(" - ", " for "));
	this._dump$SX("got:      ", got);
	this._dump$SX("expected: ", expected);
};

/**
 * @param {!string} reason
 */
TestCase.prototype.pass$S = function (reason) {
	++ this._count;
	++ this._pass;
	this._say$S("\t" + "ok " + (this._count + "") + " - " + reason);
};

/**
 * @param {!string} reason
 */
TestCase.prototype.fail$S = function (reason) {
	this._say$S("not ok - fail");
	this.diag$S(reason);
};

/**
 * @param {!string} tag
 * @param {*} value
 */
TestCase.prototype._dump$SX = function (tag, value) {
	if (typeof value === "object" && (function (o) { return o instanceof Object ? o : null; })(value) != null) {
		this.diag$S(tag);
		console.dir(value);
	} else {
		this.diag$S(tag + (value + ""));
	}
};

/**
 * @param {!string} message
 */
TestCase.prototype._say$S = function (message) {
	console.info(message);
};

/**
 * @param {!string} message
 */
TestCase.prototype.diag$S = function (message) {
	this._say$S(message.replace(/^/mg, "# "));
};

/**
 * @param {!string} message
 */
TestCase.prototype.note$S = function (message) {
	if (TestCase.verbose) {
		this._say$S(message.replace(/^/mg, "# "));
	}
};

/**
 * @return {!string}
 */
TestCase.prototype.toString = function () {
	if (this._tests != null) {
		return "TestCase[" + this._tests.join(", ") + "]";
	} else {
		return "TestCase";
	}
};

/**
 * class _Test extends TestCase
 * @constructor
 */
function _Test() {
}

_Test.prototype = new TestCase;
/**
 * @constructor
 */
function _Test$() {
	TestCase$.call(this);
};

_Test$.prototype = new _Test;

/**
 */
_Test.prototype.testFib1$ = function () {
	this.expect$X(Fib$fib1$I(10)).toBe$X(55);
};

/**
 */
_Test.prototype.testFib2$ = function () {
	this.expect$X(Fib$fib2$N(10)).toBe$X(55);
};

/**
 */
_Test.prototype.testFib3$ = function () {
	this.expect$X(Fib$fib3$I(10)).toBe$X(55);
};

/**
 */
_Test.prototype.testFib4$ = function () {
	this.expect$X(Fib$fib4$I(10)).toBe$X(55);
};

/**
 * class AsyncContext extends Object
 * @constructor
 */
function AsyncContext() {
}

AsyncContext.prototype = new Object;
/**
 * @constructor
 * @param {TestCase} test
 * @param {!string} name
 * @param {!number} timeoutMS
 */
function AsyncContext$LTestCase$SF$LAsyncContext$V$I(test, name, timeoutHandler, timeoutMS) {
	var $this = this;
	/** @type {TimerHandle} */
	var id;
	this._timerId = null;
	this._test = test;
	this._name = name;
	id = Timer$setTimeout$F$V$N((function () {
		timeoutHandler($this);
	}), timeoutMS);
	this._timerId = id;
};

AsyncContext$LTestCase$SF$LAsyncContext$V$I.prototype = new AsyncContext;

/**
 * @return {!string}
 */
AsyncContext.prototype.name$ = function () {
	return this._name;
};

/**
 */
AsyncContext.prototype.done$ = function () {
	var next;
	Timer$clearTimeout$LTimerHandle$(this._timerId);
	this._test.after$S(this._name);
	if (this._test._tasks.length !== 0) {
		next = this._test._tasks.shift();
		next();
	} else {
		this._test.finish$();
	}
};

/**
 * class _Matcher extends Object
 * @constructor
 */
function _Matcher() {
}

_Matcher.prototype = new Object;
/**
 * @constructor
 * @param {TestCase} test
 * @param {*} got
 */
function _Matcher$LTestCase$X(test, got) {
	this._name = null;
	this._test = test;
	this._got = got;
};

_Matcher$LTestCase$X.prototype = new _Matcher;

/**
 * @constructor
 * @param {TestCase} test
 * @param {*} got
 * @param {!string} name
 */
function _Matcher$LTestCase$XS(test, got, name) {
	this._test = test;
	this._got = got;
	this._name = name;
};

_Matcher$LTestCase$XS.prototype = new _Matcher;

/**
 * @param {!boolean} value
 * @param {*} got
 * @param {*} expected
 * @param {!string} op
 */
_Matcher.prototype._match$BXXS = function (value, got, expected, op) {
	if (value) {
		this._test._ok$US(this._name);
	} else {
		this._test._nok$USSXX(this._name, op, got, expected);
	}
};

/**
 * @param {*} x
 */
_Matcher.prototype.toBe$X = function (x) {
	this._match$BXXS(this._got == x, this._got, x, "==");
};

/**
 * @param {*} x
 */
_Matcher.prototype.notToBe$X = function (x) {
	this._match$BXXS(this._got != x, this._got, x, "!=");
};

/**
 * @param {!number} x
 */
_Matcher.prototype.toBeLT$N = function (x) {
	this._match$BXXS(+this._got < x, this._got, x, "<");
};

/**
 * @param {!number} x
 */
_Matcher.prototype.toBeLE$N = function (x) {
	this._match$BXXS(+this._got <= x, this._got, x, "<=");
};

/**
 * @param {!number} x
 */
_Matcher.prototype.toBeGT$N = function (x) {
	this._match$BXXS(+this._got > x, this._got, x, ">");
};

/**
 * @param {!number} x
 */
_Matcher.prototype.toBeGE$N = function (x) {
	this._match$BXXS(+this._got >= x, this._got, x, ">=");
};

/**
 * class Timer extends Object
 * @constructor
 */
function Timer() {
}

Timer.prototype = new Object;
/**
 * @constructor
 */
function Timer$() {
};

Timer$.prototype = new Timer;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:27] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.setTimeout))(callback, intervalMS);
};

var Timer$setTimeout$F$V$N = Timer.setTimeout$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearTimeout$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:31] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearTimeout))(timer);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:35] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.setInterval))(callback, intervalMS);
};

var Timer$setInterval$F$V$N = Timer.setInterval$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearInterval$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:39] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearInterval))(timer);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

/**
 * @return {TimerHandle}
 */
Timer.requestAnimationFrame$F$NV$ = function (callback) {
	return Timer._requestAnimationFrame(callback);
};

var Timer$requestAnimationFrame$F$NV$ = Timer.requestAnimationFrame$F$NV$;

/**
 * @param {TimerHandle} timer
 */
Timer.cancelAnimationFrame$LTimerHandle$ = function (timer) {
	Timer._cancelAnimationFrame(timer);
};

var Timer$cancelAnimationFrame$LTimerHandle$ = Timer.cancelAnimationFrame$LTimerHandle$;

/**
 * @param {!boolean} enable
 */
Timer.useNativeRAF$B = function (enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

var Timer$useNativeRAF$B = Timer.useNativeRAF$B;

/**
 * @param {!boolean} useNativeImpl
 */
Timer._getRequestAnimationFrameImpl$B = function (useNativeImpl) {
	/** @type {!number} */
	var lastTime;
	if (useNativeImpl) {
		if (js.global.requestAnimationFrame) {
			return (function (callback) {
				return (function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:65] detected invalid cast, value is not a function or null");
					}
					return v;
				}(js.global.requestAnimationFrame))(callback);
			});
		} else {
			if (js.global.webkitRequestAnimationFrame) {
				return (function (callback) {
					return (function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:71] detected invalid cast, value is not a function or null");
						}
						return v;
					}(js.global.webkitRequestAnimationFrame))(callback);
				});
			} else {
				if (js.global.mozRequestAnimationFrame) {
					return (function (callback) {
						return (function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:77] detected invalid cast, value is not a function or null");
							}
							return v;
						}(js.global.mozRequestAnimationFrame))(callback);
					});
				} else {
					if (js.global.oRequestAnimationFrame) {
						return (function (callback) {
							return (function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:83] detected invalid cast, value is not a function or null");
								}
								return v;
							}(js.global.oRequestAnimationFrame))(callback);
						});
					} else {
						if (js.global.msRequestAnimationFrame) {
							return (function (callback) {
								return (function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:89] detected invalid cast, value is not a function or null");
									}
									return v;
								}(js.global.msRequestAnimationFrame))(callback);
							});
						}
					}
				}
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		/** @type {!number} */
		var now;
		/** @type {!number} */
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

var Timer$_getRequestAnimationFrameImpl$B = Timer._getRequestAnimationFrameImpl$B;

/**
 * @param {!boolean} useNativeImpl
 */
Timer._getCancelAnimationFrameImpl$B = function (useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				(function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:112] detected invalid cast, value is not a function or null");
					}
					return v;
				}(js.global.cancelAnimationFrame))(timer);
			});
		} else {
			if (js.global.webkitCancelAnimationFrame) {
				return (function (timer) {
					(function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:118] detected invalid cast, value is not a function or null");
						}
						return v;
					}(js.global.webkitCancelAnimationFrame))(timer);
				});
			} else {
				if (js.global.mozCancelAnimationFrame) {
					return (function (timer) {
						(function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:124] detected invalid cast, value is not a function or null");
							}
							return v;
						}(js.global.mozCancelAnimationFrame))(timer);
					});
				} else {
					if (js.global.oCancelAnimationFrame) {
						return (function (timer) {
							(function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:130] detected invalid cast, value is not a function or null");
								}
								return v;
							}(js.global.oCancelAnimationFrame))(timer);
						});
					} else {
						if (js.global.msCancelAnimationFrame) {
							return (function (timer) {
								(function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:136] detected invalid cast, value is not a function or null");
									}
									return v;
								}(js.global.msCancelAnimationFrame))(timer);
							});
						}
					}
				}
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

var Timer$_getCancelAnimationFrameImpl$B = Timer._getCancelAnimationFrameImpl$B;

/**
 * class TimerHandle extends Object
 * @constructor
 */
function TimerHandle() {
}

TimerHandle.prototype = new Object;
/**
 * @constructor
 */
function TimerHandle$() {
};

TimerHandle$.prototype = new TimerHandle;

/**
 * class js extends Object
 * @constructor
 */
function js() {
}

js.prototype = new Object;
/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

TestCase.verbose = true;
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
js.global = (function () { return this; })();

var $__jsx_classMap = {
	"import.jsx": {
		_Main: _Main,
		_Main$: _Main$,
		_Test: _Test,
		_Test$: _Test$
	},
	"fib.jsx": {
		Fib: Fib,
		Fib$: Fib$,
		_Main: _Main$0,
		_Main$: _Main$0$
	},
	"system:lib/common/test-case.jsx": {
		TestCase: TestCase,
		TestCase$: TestCase$,
		AsyncContext: AsyncContext,
		AsyncContext$LTestCase$SF$LAsyncContext$V$I: AsyncContext$LTestCase$SF$LAsyncContext$V$I,
		_Matcher: _Matcher,
		_Matcher$LTestCase$X: _Matcher$LTestCase$X,
		_Matcher$LTestCase$XS: _Matcher$LTestCase$XS
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer$,
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
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
	JSX.runMain("import.jsx", [])
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})();

//@ sourceMappingURL=import.jsx.js.mapping
