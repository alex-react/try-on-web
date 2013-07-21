// generatedy by JSX compiler 0.9.57 (2013-07-21 09:29:11 -0700; 3116e11459163d65dd09e578fd516f0c532fb30b)
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
function g_StopIteration() {
	Error.call(this);
};

$__jsx_extend([g_StopIteration], Error);
function g_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E() {
};

$__jsx_extend([g_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E], Object);
g_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E.prototype.$__jsx_implements_g_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E = true;

function __jsx_generator$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E() {
	g_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E.call(this);
	this.__next = null;
	this.__value = null;
	this.__end = false;
};

$__jsx_extend([__jsx_generator$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E], Object);
$__jsx_merge_interface(__jsx_generator$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E, g_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E);

__jsx_generator$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E.prototype.next$ = function () {
	if (! this.__end) {
		try {
			this.__next();
		} catch ($__jsx_catch_0) {
			if ($__jsx_catch_0 instanceof g_StopIteration) {
				this.__end = true;
				throw $__jsx_catch_0;
			} else {
				throw $__jsx_catch_0;
			}
		}
		return this.__value;
	} else {
		throw new g_StopIteration();
	}
};


function Async() {
};

$__jsx_extend([Async], Object);
function Async$sleep$N(durationMS) {
	return (function (g) {
		Timer$setTimeout$F$V$N((function () {
			Async$go$X(g);
		}), durationMS);
	});
};

Async.sleep$N = Async$sleep$N;

function Async$run$F$Lg_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E$$(coro) {
	Async$go$X(coro());
};

Async.run$F$Lg_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E$$ = Async$run$F$Lg_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E$$;

function Async$go$X(v) {
	var g;
	var cb;
	g = (function ($v) {
		if (! ($v == null || $v.$__jsx_implements_g_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/example/yield.jsx:21:14] detected invalid cast, value is not an instance of the designated type or null\n    var g = v as g_Enumerable.<(variant)->void>;\n              ^^\n");
		}
		return $v;
	}(v));
	try {
		cb = g.next$();
		cb(g);
	} catch ($__jsx_catch_0) {
		if ($__jsx_catch_0 instanceof g_StopIteration) {
			return;
		} else {
			throw $__jsx_catch_0;
		}
	}
};

Async.go$X = Async$go$X;

function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	Async$run$F$Lg_Enumerable$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E$$((function () {
		var $START;
		var $YIELD_0;
		var $YIELD_1;
		var $YIELD_2;
		var $YIELD_3;
		var $END;
		var $generator0;
		$generator0 = new __jsx_generator$x2E$x3Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E();
		$START = (function () {
			console.log("H");
			$generator0.__value = Async$sleep$N(100);
			$generator0.__next = $YIELD_0;
		});
		$YIELD_0 = (function () {
			console.log("e");
			$generator0.__value = Async$sleep$N(100);
			$generator0.__next = $YIELD_1;
		});
		$YIELD_1 = (function () {
			console.log("l");
			$generator0.__value = Async$sleep$N(100);
			$generator0.__next = $YIELD_2;
		});
		$YIELD_2 = (function () {
			console.log("l");
			$generator0.__value = Async$sleep$N(100);
			$generator0.__next = $YIELD_3;
		});
		$YIELD_3 = (function () {
			console.log("o");
			throw new g_StopIteration();
			$END();
		});
		$END = (function () {
		});
		$generator0.__next = $START;
		return $generator0;
	}));
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return (function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:34:40] detected invalid cast, value is not a function or null\n        return (js.global[\"setTimeout\"] as __noconvert__ function(:function():void,:number) : TimerHandle)(callback, intervalMS);\n                                        ^^\n");
		}
		return $v;
	}(js.global.setTimeout))(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	(function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:38:35] detected invalid cast, value is not a function or null\n        (js.global[\"clearTimeout\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                   ^^\n");
		}
		return $v;
	}(js.global.clearTimeout))(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return (function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:42:41] detected invalid cast, value is not a function or null\n        return (js.global[\"setInterval\"] as __noconvert__ function(:function():void,:number) : TimerHandle)(callback, intervalMS);\n                                         ^^\n");
		}
		return $v;
	}(js.global.setInterval))(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	(function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:46:36] detected invalid cast, value is not a function or null\n        (js.global[\"clearInterval\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                    ^^\n");
		}
		return $v;
	}(js.global.clearInterval))(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
	var lastTime;
	if (useNativeImpl) {
		if (js.global.requestAnimationFrame) {
			return (function (callback) {
				return (function ($v) {
					if (! ($v == null || typeof $v === "function")) {
						debugger;
						throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:72:63] detected invalid cast, value is not a function or null\n                    return (js.global[\"requestAnimationFrame\"] as __noconvert__\n                                                               ^^\n");
					}
					return $v;
				}(js.global.requestAnimationFrame))(callback);
			});
		} else {
			if (js.global.webkitRequestAnimationFrame) {
				return (function (callback) {
					return (function ($v) {
						if (! ($v == null || typeof $v === "function")) {
							debugger;
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:78:69] detected invalid cast, value is not a function or null\n                    return (js.global[\"webkitRequestAnimationFrame\"] as __noconvert__\n                                                                     ^^\n");
						}
						return $v;
					}(js.global.webkitRequestAnimationFrame))(callback);
				});
			} else {
				if (js.global.mozRequestAnimationFrame) {
					return (function (callback) {
						return (function ($v) {
							if (! ($v == null || typeof $v === "function")) {
								debugger;
								throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:84:66] detected invalid cast, value is not a function or null\n                    return (js.global[\"mozRequestAnimationFrame\"] as __noconvert__\n                                                                  ^^\n");
							}
							return $v;
						}(js.global.mozRequestAnimationFrame))(callback);
					});
				} else {
					if (js.global.oRequestAnimationFrame) {
						return (function (callback) {
							return (function ($v) {
								if (! ($v == null || typeof $v === "function")) {
									debugger;
									throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:90:64] detected invalid cast, value is not a function or null\n                    return (js.global[\"oRequestAnimationFrame\"] as __noconvert__\n                                                                ^^\n");
								}
								return $v;
							}(js.global.oRequestAnimationFrame))(callback);
						});
					} else {
						if (js.global.msRequestAnimationFrame) {
							return (function (callback) {
								return (function ($v) {
									if (! ($v == null || typeof $v === "function")) {
										debugger;
										throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:96:65] detected invalid cast, value is not a function or null\n                    return (js.global[\"msRequestAnimationFrame\"] as __noconvert__\n                                                                 ^^\n");
									}
									return $v;
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
		var now;
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				(function ($v) {
					if (! ($v == null || typeof $v === "function")) {
						debugger;
						throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:119:55] detected invalid cast, value is not a function or null\n                    (js.global[\"cancelAnimationFrame\"] as __noconvert__\n                                                       ^^\n");
					}
					return $v;
				}(js.global.cancelAnimationFrame))(timer);
			});
		} else {
			if (js.global.webkitCancelAnimationFrame) {
				return (function (timer) {
					(function ($v) {
						if (! ($v == null || typeof $v === "function")) {
							debugger;
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:125:61] detected invalid cast, value is not a function or null\n                    (js.global[\"webkitCancelAnimationFrame\"] as __noconvert__\n                                                             ^^\n");
						}
						return $v;
					}(js.global.webkitCancelAnimationFrame))(timer);
				});
			} else {
				if (js.global.mozCancelAnimationFrame) {
					return (function (timer) {
						(function ($v) {
							if (! ($v == null || typeof $v === "function")) {
								debugger;
								throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:131:58] detected invalid cast, value is not a function or null\n                    (js.global[\"mozCancelAnimationFrame\"] as __noconvert__\n                                                          ^^\n");
							}
							return $v;
						}(js.global.mozCancelAnimationFrame))(timer);
					});
				} else {
					if (js.global.oCancelAnimationFrame) {
						return (function (timer) {
							(function ($v) {
								if (! ($v == null || typeof $v === "function")) {
									debugger;
									throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:137:56] detected invalid cast, value is not a function or null\n                    (js.global[\"oCancelAnimationFrame\"] as __noconvert__\n                                                        ^^\n");
								}
								return $v;
							}(js.global.oCancelAnimationFrame))(timer);
						});
					} else {
						if (js.global.msCancelAnimationFrame) {
							return (function (timer) {
								(function ($v) {
									if (! ($v == null || typeof $v === "function")) {
										debugger;
										throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:143:57] detected invalid cast, value is not a function or null\n                    (js.global[\"msCancelAnimationFrame\"] as __noconvert__\n                                                         ^^\n");
									}
									return $v;
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

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {
};

$__jsx_extend([TimerHandle], Object);
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
var js = { global: function () { return this; }() };

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		g_StopIteration: g_StopIteration,
		g_StopIteration$: g_StopIteration
	},
	"system:example/yield.jsx": {
		Async: Async,
		Async$: Async,
		_Main: _Main,
		_Main$: _Main
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle
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
	JSX.runMain("system:example/yield.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);

//# sourceMappingURL=yield.jsx.js.mapping