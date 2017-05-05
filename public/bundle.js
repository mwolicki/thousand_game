/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 141);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Array__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ListClass__ = __webpack_require__(23);
/* unused harmony export Enumerator */
/* unused harmony export getEnumerator */
/* unused harmony export toIterator */
/* harmony export (immutable) */ __webpack_exports__["a"] = toList;
/* unused harmony export ofList */
/* unused harmony export ofArray */
/* unused harmony export append */
/* unused harmony export average */
/* unused harmony export averageBy */
/* unused harmony export concat */
/* harmony export (immutable) */ __webpack_exports__["c"] = collect;
/* harmony export (immutable) */ __webpack_exports__["i"] = choose;
/* harmony export (immutable) */ __webpack_exports__["o"] = compareWith;
/* harmony export (immutable) */ __webpack_exports__["b"] = delay;
/* unused harmony export empty */
/* unused harmony export enumerateWhile */
/* unused harmony export enumerateThenFinally */
/* unused harmony export enumerateUsing */
/* unused harmony export exactlyOne */
/* unused harmony export except */
/* harmony export (immutable) */ __webpack_exports__["m"] = exists;
/* unused harmony export exists2 */
/* harmony export (immutable) */ __webpack_exports__["j"] = filter;
/* unused harmony export where */
/* harmony export (immutable) */ __webpack_exports__["k"] = fold;
/* harmony export (immutable) */ __webpack_exports__["n"] = foldBack;
/* unused harmony export fold2 */
/* unused harmony export foldBack2 */
/* harmony export (immutable) */ __webpack_exports__["t"] = forAll;
/* unused harmony export forAll2 */
/* unused harmony export tryHead */
/* unused harmony export head */
/* unused harmony export initialize */
/* unused harmony export initializeInfinite */
/* unused harmony export tryItem */
/* unused harmony export item */
/* harmony export (immutable) */ __webpack_exports__["s"] = iterate;
/* unused harmony export iterate2 */
/* unused harmony export iterateIndexed */
/* unused harmony export iterateIndexed2 */
/* unused harmony export isEmpty */
/* unused harmony export tryLast */
/* unused harmony export last */
/* unused harmony export count */
/* harmony export (immutable) */ __webpack_exports__["d"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export map2 */
/* unused harmony export mapIndexed2 */
/* unused harmony export map3 */
/* unused harmony export chunkBySize */
/* unused harmony export mapFold */
/* unused harmony export mapFoldBack */
/* unused harmony export max */
/* unused harmony export maxBy */
/* unused harmony export min */
/* unused harmony export minBy */
/* unused harmony export pairwise */
/* unused harmony export permute */
/* unused harmony export rangeStep */
/* unused harmony export rangeChar */
/* unused harmony export range */
/* unused harmony export readOnly */
/* harmony export (immutable) */ __webpack_exports__["h"] = reduce;
/* unused harmony export reduceBack */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* harmony export (immutable) */ __webpack_exports__["r"] = scan;
/* unused harmony export scanBack */
/* unused harmony export singleton */
/* harmony export (immutable) */ __webpack_exports__["g"] = skip;
/* unused harmony export skipWhile */
/* harmony export (immutable) */ __webpack_exports__["e"] = sortWith;
/* unused harmony export sum */
/* unused harmony export sumBy */
/* unused harmony export tail */
/* harmony export (immutable) */ __webpack_exports__["f"] = take;
/* unused harmony export truncate */
/* unused harmony export takeWhile */
/* unused harmony export tryFind */
/* unused harmony export find */
/* unused harmony export tryFindBack */
/* unused harmony export findBack */
/* unused harmony export tryFindIndex */
/* unused harmony export findIndex */
/* unused harmony export tryFindIndexBack */
/* unused harmony export findIndexBack */
/* harmony export (immutable) */ __webpack_exports__["q"] = tryPick;
/* harmony export (immutable) */ __webpack_exports__["p"] = pick;
/* unused harmony export unfold */
/* harmony export (immutable) */ __webpack_exports__["l"] = zip;
/* unused harmony export zip3 */












var Enumerator = function () {
    function Enumerator(iter) {
        __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, Enumerator);

        this.iter = iter;
    }

    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(Enumerator, [{
        key: "MoveNext",
        value: function MoveNext() {
            var cur = this.iter.next();
            this.current = cur.value;
            return !cur.done;
        }
    }, {
        key: "Reset",
        value: function Reset() {
            throw new Error("JS iterators cannot be reset");
        }
    }, {
        key: "Dispose",
        value: function Dispose() {}
    }, {
        key: "Current",
        get: function get() {
            return this.current;
        }
    }]);

    return Enumerator;
}();
function getEnumerator(o) {
    return typeof o.GetEnumerator === "function" ? o.GetEnumerator() : new Enumerator(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(o));
}
function toIterator(en) {
    return {
        next: function next() {
            return en.MoveNext() ? { done: false, value: en.Current } : { done: true, value: null };
        }
    };
}
function __failIfNone(res) {
    if (res == null) throw new Error("Seq did not contain any matching element");
    return res;
}
function toList(xs) {
    return foldBack(function (x, acc) {
        return new __WEBPACK_IMPORTED_MODULE_9__ListClass__["a" /* default */](x, acc);
    }, xs, new __WEBPACK_IMPORTED_MODULE_9__ListClass__["a" /* default */]());
}
function ofList(xs) {
    return delay(function () {
        return unfold(function (x) {
            return x.tail != null ? [x.head, x.tail] : null;
        }, xs);
    });
}
function ofArray(xs) {
    return delay(function () {
        return unfold(function (i) {
            return i < xs.length ? [xs[i], i + 1] : null;
        }, 0);
    });
}
function append(xs, ys) {
    return delay(function () {
        var firstDone = false;
        var i = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var iters = [i, null];
        return unfold(function () {
            var cur = void 0;
            if (!firstDone) {
                cur = iters[0].next();
                if (!cur.done) {
                    return [cur.value, iters];
                } else {
                    firstDone = true;
                    iters = [null, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys)];
                }
            }
            cur = iters[1].next();
            return !cur.done ? [cur.value, iters] : null;
        }, iters);
    });
}
function average(xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return acc + x;
    }, xs);
    return sum / count;
}
function averageBy(f, xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return (count === 2 ? f(acc) : acc) + f(x);
    }, xs);
    return sum / count;
}
function concat(xs) {
    return delay(function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var output = { value: null };
        return unfold(function (innerIter) {
            var hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    var cur = iter.next();
                    if (!cur.done) {
                        innerIter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(cur.value);
                    } else {
                        hasFinished = true;
                    }
                } else {
                    var _cur = innerIter.next();
                    if (!_cur.done) {
                        output = { value: _cur.value };
                        hasFinished = true;
                    } else {
                        innerIter = null;
                    }
                }
            }
            return innerIter != null && output != null ? [output.value, innerIter] : null;
        }, null);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    var trySkipToNext = function trySkipToNext(iter) {
        var cur = iter.next();
        if (!cur.done) {
            var y = f(cur.value);
            return y != null ? [y, iter] : trySkipToNext(iter);
        }
        return void 0;
    };
    return delay(function () {
        return unfold(function (iter) {
            return trySkipToNext(iter);
        }, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
    });
}
function compareWith(f, xs, ys) {
    var nonZero = tryFind(function (i) {
        return i != 0;
    }, map2(function (x, y) {
        return f(x, y);
    }, xs, ys));
    return nonZero != null ? nonZero : count(xs) - count(ys);
}
function delay(f) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default.a, function () {
        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(f());
    });
}
function empty() {
    return unfold(function () {
        return void 0;
    });
}
function enumerateWhile(cond, xs) {
    return concat(unfold(function () {
        return cond() ? [xs, true] : null;
    }));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(function () {
        var iter = void 0;
        try {
            iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        } catch (err) {
            return void 0;
        } finally {
            finalFn();
        }
        return unfold(function (iter) {
            try {
                var cur = iter.next();
                return !cur.done ? [cur.value, iter] : null;
            } catch (err) {
                return void 0;
            } finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    var isDisposed = false;
    var disposeOnce = function disposeOnce() {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    } catch (err) {
        return void 0;
    } finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var fst = iter.next();
    if (fst.done) throw new Error("Seq was empty");
    var snd = iter.next();
    if (!snd.done) throw new Error("Seq had multiple items");
    return fst.value;
}
function except(itemsToExclude, source) {
    var exclusionItems = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(itemsToExclude);
    var testIsNotInExclusionItems = function testIsNotInExclusionItems(element) {
        return !exclusionItems.some(function (excludedItem) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Util__["a" /* equals */])(excludedItem, element);
        });
    };
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    function aux(iter) {
        var cur = iter.next();
        return !cur.done && (f(cur.value) || aux(iter));
    }
    return aux(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
}
function exists2(f, xs, ys) {
    function aux(iter1, iter2) {
        var cur1 = iter1.next(),
            cur2 = iter2.next();
        return !cur1.done && !cur2.done && (f(cur1.value, cur2.value) || aux(iter1, iter2));
    }
    return aux(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys));
}
function filter(f, xs) {
    function trySkipToNext(iter) {
        var cur = iter.next();
        while (!cur.done) {
            if (f(cur.value)) {
                return [cur.value, iter];
            }
            cur = iter.next();
        }
        return void 0;
    }
    return delay(function () {
        return unfold(trySkipToNext, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
    });
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    } else {
        var cur = void 0;
        for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
            cur = iter.next();
            if (cur.done) break;
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs),
        iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);
    var cur1 = void 0,
        cur2 = void 0;
    for (var i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(ys);
    for (var i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function forAll(f, xs) {
    return fold(function (acc, x) {
        return acc && f(x);
    }, true, xs);
}
function forAll2(f, xs, ys) {
    return fold2(function (acc, x, y) {
        return acc && f(x, y);
    }, true, xs, ys);
}
function tryHead(xs) {
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var cur = iter.next();
    return cur.done ? null : cur.value;
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(function () {
        return unfold(function (i) {
            return i < n ? [f(i), i + 1] : null;
        }, 0);
    });
}
function initializeInfinite(f) {
    return delay(function () {
        return unfold(function (i) {
            return [f(i), i + 1];
        }, 0);
    });
}
function tryItem(i, xs) {
    if (i < 0) return null;
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return i < xs.length ? xs[i] : null;
    for (var j = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; j++) {
        var cur = iter.next();
        if (cur.done) return null;
        if (j === i) return cur.value;
    }
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold(function (_, x) {
        return f(x);
    }, null, xs);
}
function iterate2(f, xs, ys) {
    fold2(function (_, x, y) {
        return f(x, y);
    }, null, xs, ys);
}
function iterateIndexed(f, xs) {
    fold(function (_, x, i) {
        return f(i, x);
    }, null, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2(function (_, x, y, i) {
        return f(i, x, y);
    }, null, xs, ys);
}
function isEmpty(xs) {
    var i = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    return i.next().done;
}
function tryLast(xs) {
    try {
        return reduce(function (_, x) {
            return x;
        }, xs);
    } catch (err) {
        return null;
    }
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
function count(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : fold(function (acc, x) {
        return acc + 1;
    }, 0, xs);
}
function map(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(cur.value), iter] : null;
        }, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
    });
}
function mapIndexed(f, xs) {
    return delay(function () {
        var i = 0;
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : null;
        }, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
    });
}
function map2(f, xs, ys) {
    return delay(function () {
        var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);
        return unfold(function () {
            var cur1 = iter1.next(),
                cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
        });
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(function () {
        var i = 0;
        var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);
        return unfold(function () {
            var cur1 = iter1.next(),
                cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
        });
    });
}
function map3(f, xs, ys, zs) {
    return delay(function () {
        var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);
        var iter3 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(zs);
        return unfold(function () {
            var cur1 = iter1.next(),
                cur2 = iter2.next(),
                cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
        });
    });
}
function chunkBySize(size, xs) {
    var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__Array__["a" /* chunkBySize */])(size, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs));
    return ofArray(result.map(ofArray));
}
function mapFold(f, acc, xs, transform) {
    var result = [];
    var r = void 0;
    var cur = void 0;
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        cur = iter.next();
        if (cur.done) break;

        var _f = f(acc, cur.value);

        var _f2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_f, 2);

        r = _f2[0];
        acc = _f2[1];

        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function mapFoldBack(f, xs, acc, transform) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    var result = [];
    var r = void 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        var _f3 = f(arr[i], acc);

        var _f4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_f3, 2);

        r = _f4[0];
        acc = _f4[1];

        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function max(xs) {
    return reduce(function (acc, x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Util__["h" /* compare */])(acc, x) === 1 ? acc : x;
    }, xs);
}
function maxBy(f, xs) {
    return reduce(function (acc, x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Util__["h" /* compare */])(f(acc), f(x)) === 1 ? acc : x;
    }, xs);
}
function min(xs) {
    return reduce(function (acc, x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Util__["h" /* compare */])(acc, x) === -1 ? acc : x;
    }, xs);
}
function minBy(f, xs) {
    return reduce(function (acc, x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Util__["h" /* compare */])(f(acc), f(x)) === -1 ? acc : x;
    }, xs);
}
function pairwise(xs) {
    return skip(2, scan(function (last, next) {
        return [last[1], next];
    }, [0, 0], xs));
}
function permute(f, xs) {
    return ofArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__Array__["b" /* permute */])(f, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs)));
}
function rangeStep(first, step, last) {
    if (step === 0) throw new Error("Step cannot be 0");
    return delay(function () {
        return unfold(function (x) {
            return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
        }, first);
    });
}
function rangeChar(first, last) {
    return delay(function () {
        return unfold(function (x) {
            return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
        }, first);
    });
}
function range(first, last) {
    return rangeStep(first, 1, last);
}
function readOnly(xs) {
    return map(function (x) {
        return x;
    }, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return xs.reduce(f);
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var cur = iter.next();
    if (cur.done) throw new Error("Seq was empty");
    var acc = cur.value;
    for (;;) {
        cur = iter.next();
        if (cur.done) break;
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    if (ar.length === 0) throw new Error("Seq was empty");
    var acc = ar[ar.length - 1];
    for (var i = ar.length - 2; i >= 0; i--) {
        acc = f(ar[i], acc, i);
    }return acc;
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function reverse(xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        return unfold(function (acc) {
            if (acc == null) return [seed, seed];
            var cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return void 0;
        }, null);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan(function (acc, x) {
        return f(x, acc);
    }, seed, reverse(xs)));
}
function singleton(x) {
    return unfold(function (x) {
        return x != null ? [x, null] : null;
    }, x);
}
function skip(n, xs) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default.a, function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        for (var i = 1; i <= n; i++) {
            if (iter.next().done) throw new Error("Seq has not enough elements");
        }return iter;
    });
}
function skipWhile(f, xs) {
    return delay(function () {
        var hasPassed = false;
        return filter(function (x) {
            return hasPassed || (hasPassed = !f(x));
        }, xs);
    });
}
function sortWith(f, xs) {
    var ys = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    return ofArray(ys.sort(f));
}
function sum(xs) {
    return fold(function (acc, x) {
        return acc + x;
    }, 0, xs);
}
function sumBy(f, xs) {
    return fold(function (acc, x) {
        return acc + f(x);
    }, 0, xs);
}
function tail(xs) {
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var cur = iter.next();
    if (cur.done) throw new Error("Seq was empty");
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default.a, function () {
        return iter;
    });
}
function take(n, xs) {
    var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return delay(function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        return unfold(function (i) {
            if (i < n) {
                var cur = iter.next();
                if (!cur.done) return [cur.value, i + 1];
                if (!truncate) throw new Error("Seq has not enough elements");
            }
            return void 0;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        return unfold(function (i) {
            var cur = iter.next();
            if (!cur.done && f(cur.value)) return [cur.value, null];
            return void 0;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        var cur = iter.next();
        if (cur.done) return defaultValue === void 0 ? null : defaultValue;
        if (f(cur.value, i)) return cur.value;
    }
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    var match = null;
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        var cur = iter.next();
        if (cur.done) return match === null ? defaultValue === void 0 ? null : defaultValue : match;
        if (f(cur.value, i)) match = cur.value;
    }
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        var cur = iter.next();
        if (cur.done) return null;
        if (f(cur.value, i)) return i;
    }
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    var match = -1;
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        var cur = iter.next();
        if (cur.done) return match === -1 ? null : match;
        if (f(cur.value, i)) match = i;
    }
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        var cur = iter.next();
        if (cur.done) break;
        var y = f(cur.value, i);
        if (y != null) return y;
    }
    return void 0;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, acc) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default.a, function () {
        return {
            next: function next() {
                var res = f(acc);
                if (res != null) {
                    acc = res[1];
                    return { done: false, value: res[0] };
                }
                return { done: true };
            }
        };
    });
}
function zip(xs, ys) {
    return map2(function (x, y) {
        return [x, y];
    }, xs, ys);
}
function zip3(xs, ys, zs) {
    return map3(function (x, y, z) {
        return [x, y, z];
    }, xs, ys, zs);
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_array_from__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_assign__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_names__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_names___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_names__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_typeof__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Symbol__ = __webpack_require__(8);
/* unused harmony export NonDeclaredType */
/* unused harmony export Any */
/* unused harmony export Unit */
/* unused harmony export Option */
/* unused harmony export Array */
/* harmony export (immutable) */ __webpack_exports__["f"] = Tuple;
/* unused harmony export Function */
/* unused harmony export GenericParam */
/* unused harmony export Interface */
/* harmony export (immutable) */ __webpack_exports__["g"] = makeGeneric;
/* unused harmony export isGeneric */
/* unused harmony export getDefinition */
/* unused harmony export extendInfo */
/* unused harmony export hasInterface */
/* unused harmony export getPropertyNames */
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["c"] = toString;
/* unused harmony export hash */
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
/* unused harmony export comparePrimitives */
/* harmony export (immutable) */ __webpack_exports__["h"] = compare;
/* harmony export (immutable) */ __webpack_exports__["d"] = equalsRecords;
/* harmony export (immutable) */ __webpack_exports__["e"] = compareRecords;
/* unused harmony export equalsUnions */
/* harmony export (immutable) */ __webpack_exports__["b"] = compareUnions;
/* unused harmony export createDisposable */
/* unused harmony export createObj */
/* unused harmony export toPlainJsObj */
/* unused harmony export round */
/* harmony export (immutable) */ __webpack_exports__["i"] = randomNext;
/* unused harmony export defaultArg */
/* unused harmony export applyOperator */
/* unused harmony export parseNumber */
/* unused harmony export tryParse */
/* unused harmony export parse */














var NonDeclaredType = function () {
    function NonDeclaredType(kind, definition, generics) {
        __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_classCallCheck___default()(this, NonDeclaredType);

        this.kind = kind;
        this.definition = definition;
        this.generics = generics;
    }

    __WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_createClass___default()(NonDeclaredType, [{
        key: "Equals",
        value: function Equals(other) {
            if (this.kind === other.kind && this.definition === other.definition) {
                return __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_typeof___default()(this.generics) === "object" ? equalsRecords(this.generics, other.generics) : this.generics === other.generics;
            }
            return false;
        }
    }]);

    return NonDeclaredType;
}();
var Any = new NonDeclaredType("Any");
var Unit = new NonDeclaredType("Unit");
function Option(t) {
    return new NonDeclaredType("Option", null, [t]);
}
function FableArray(t) {
    var isTypedArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var def = null,
        genArg = null;
    if (isTypedArray) {
        def = t;
    } else {
        genArg = t;
    }
    return new NonDeclaredType("Array", def, [genArg]);
}

function Tuple(types) {
    return new NonDeclaredType("Tuple", null, types);
}
function FableFunction(types) {
    return new NonDeclaredType("Function", null, types);
}

function GenericParam(definition) {
    return new NonDeclaredType("GenericParam", definition);
}
function Interface(definition) {
    return new NonDeclaredType("Interface", definition);
}
function makeGeneric(typeDef, genArgs) {
    return new NonDeclaredType("GenericType", typeDef, genArgs);
}
function isGeneric(typ) {
    return typ instanceof NonDeclaredType && typ.kind === "GenericType";
}
function getDefinition(typ) {
    return isGeneric(typ) ? typ.definition : typ;
}
function extendInfo(cons, info) {
    var parent = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default()(cons.prototype);
    if (typeof parent[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection] === "function") {
        var newInfo = {},
            parentInfo = parent[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection]();
        __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_names___default()(info).forEach(function (k) {
            var i = info[k];
            if ((typeof i === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_typeof___default()(i)) === "object") {
                newInfo[k] = Array.isArray(i) ? (parentInfo[k] || []).concat(i) : __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_assign___default()(parentInfo[k] || {}, i);
            } else {
                newInfo[k] = i;
            }
        });
        return newInfo;
    }
    return info;
}
function hasInterface(obj, interfaceName) {
    if (interfaceName === "System.Collections.Generic.IEnumerable") {
        return typeof obj[__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol_iterator___default.a] === "function";
    } else if (typeof obj[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection] === "function") {
        var interfaces = obj[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection]().interfaces;
        return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
    }
    return false;
}
function getPropertyNames(obj) {
    if (obj == null) {
        return [];
    }
    var propertyMap = typeof obj[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection] === "function" ? obj[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection]().properties || [] : obj;
    return __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_names___default()(propertyMap);
}
function isArray(obj) {
    return Array.isArray(obj) || ArrayBuffer.isView(obj);
}
function toString(obj) {
    var quoteStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    function isObject(x) {
        return x !== null && (typeof x === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_typeof___default()(x)) === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
    }
    if (obj == null || typeof obj === "number") {
        return String(obj);
    }
    if (typeof obj === "string") {
        return quoteStrings ? __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify___default()(obj) : obj;
    }
    if (typeof obj.ToString == "function") {
        return obj.ToString();
    }
    if (hasInterface(obj, "FSharpUnion")) {
        var info = obj[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection]();
        var uci = info.cases[obj.tag];
        switch (uci.length) {
            case 1:
                return uci[0];
            case 2:
                return uci[0] + " (" + toString(obj.data, true) + ")";
            default:
                return uci[0] + " (" + obj.data.map(function (x) {
                    return toString(x, true);
                }).join(",") + ")";
        }
    }
    try {
        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify___default()(obj, function (k, v) {
            return v && v[__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_symbol_iterator___default.a] && !Array.isArray(v) && isObject(v) ? __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_array_from___default()(v) : v && typeof v.ToString === "function" ? toString(v) : v;
        });
    } catch (err) {
        return "{" + __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_names___default()(obj).map(function (k) {
            return k + ": " + String(obj[k]);
        }).join(", ") + "}";
    }
}
function hash(x) {
    if (x != null && typeof x.GetHashCode == "function") {
        return x.GetHashCode();
    } else {
        var s = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify___default()(x);
        var h = 5381,
            i = 0,
            len = s.length;
        while (i < len) {
            h = h * 33 ^ s.charCodeAt(i++);
        }
        return h;
    }
}
function equals(x, y) {
    if (x === y) return true;else if (x == null) return y == null;else if (y == null) return false;else if (__WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default()(x) !== __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default()(y)) return false;else if (typeof x.Equals === "function") return x.Equals(y);else if (Array.isArray(x)) {
        if (x.length != y.length) return false;
        for (var i = 0; i < x.length; i++) {
            if (!equals(x[i], y[i])) return false;
        }return true;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) return false;
        var dv1 = new DataView(x.buffer),
            dv2 = new DataView(y.buffer);
        for (var _i = 0; _i < x.byteLength; _i++) {
            if (dv1.getUint8(_i) !== dv2.getUint8(_i)) return false;
        }return true;
    } else if (x instanceof Date) return x.getTime() === y.getTime();else return false;
}
function comparePrimitives(x, y) {
    return x === y ? 0 : x < y ? -1 : 1;
}
function compare(x, y) {
    if (x === y) return 0;
    if (x == null) return y == null ? 0 : -1;else if (y == null) return 1;else if (__WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default()(x) !== __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default()(y)) return -1;else if (typeof x.CompareTo === "function") return x.CompareTo(y);else if (Array.isArray(x)) {
        if (x.length != y.length) return x.length < y.length ? -1 : 1;
        for (var i = 0, j = 0; i < x.length; i++) {
            if ((j = compare(x[i], y[i])) !== 0) return j;
        }return 0;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength != y.byteLength) return x.byteLength < y.byteLength ? -1 : 1;
        var dv1 = new DataView(x.buffer),
            dv2 = new DataView(y.buffer);
        for (var _i2 = 0, b1 = 0, b2 = 0; _i2 < x.byteLength; _i2++) {
            b1 = dv1.getUint8(_i2), b2 = dv2.getUint8(_i2);
            if (b1 < b2) return -1;
            if (b1 > b2) return 1;
        }
        return 0;
    } else if (x instanceof Date) {
        var xtime = x.getTime(),
            ytime = y.getTime();
        return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
    } else if ((typeof x === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_typeof___default()(x)) === "object") {
        var xhash = hash(x),
            yhash = hash(y);
        if (xhash === yhash) {
            return equals(x, y) ? 0 : -1;
        } else {
            return xhash < yhash ? -1 : 1;
        }
    } else return x < y ? -1 : 1;
}
function equalsRecords(x, y) {
    if (x === y) {
        return true;
    } else {
        var keys = getPropertyNames(x);
        for (var i = 0; i < keys.length; i++) {
            if (!equals(x[keys[i]], y[keys[i]])) return false;
        }
        return true;
    }
}
function compareRecords(x, y) {
    if (x === y) {
        return 0;
    } else {
        var keys = getPropertyNames(x);
        for (var i = 0; i < keys.length; i++) {
            var res = compare(x[keys[i]], y[keys[i]]);
            if (res !== 0) return res;
        }
        return 0;
    }
}
function equalsUnions(x, y) {
    return x === y || x.tag === y.tag && equals(x.data, y.data);
}
function compareUnions(x, y) {
    if (x === y) {
        return 0;
    } else {
        var res = x.tag < y.tag ? -1 : x.tag > y.tag ? 1 : 0;
        return res !== 0 ? res : compare(x.data, y.data);
    }
}
function createDisposable(f) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()({
        Dispose: f
    }, __WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection, function () {
        return { interfaces: ["System.IDisposable"] };
    });
}
var CaseRules = {
    None: 0,
    LowerFirst: 1
};
function createObj(fields) {
    var caseRule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaseRules.None;

    var iter = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(fields);
    var cur = iter.next(),
        o = {},
        casesCache = null;
    while (!cur.done) {
        var value = cur.value;
        if (Array.isArray(value)) {
            o[value[0]] = value[1];
        } else {
            casesCache = casesCache || new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default.a();
            var proto = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default()(value);
            var cases = casesCache.get(proto),
                caseInfo = null;
            if (cases == null) {
                if (typeof proto[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection] === "function") {
                    cases = proto[__WEBPACK_IMPORTED_MODULE_13__Symbol__["a" /* default */].reflection]().cases;
                    casesCache.set(proto, cases);
                }
            }
            if (cases != null && Array.isArray(caseInfo = cases[value.tag])) {
                var key = caseInfo[0];
                if (caseRule === CaseRules.LowerFirst) {
                    key = key[0].toLowerCase() + key.substr(1);
                }
                o[key] = caseInfo.length === 1 ? true : value.data;
            } else {
                throw new Error("Cannot infer key and value of " + value);
            }
        }
        cur = iter.next();
    }
    return o;
}
function toPlainJsObj(source) {
    if (source != null && source.constructor != Object) {
        var target = {};
        var props = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_names___default()(source);
        for (var i = 0; i < props.length; i++) {
            target[props[i]] = source[props[i]];
        }
        var proto = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default()(source);
        if (proto != null) {
            props = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_get_own_property_names___default()(proto);
            for (var _i3 = 0; _i3 < props.length; _i3++) {
                var prop = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(proto, props[_i3]);
                if (prop.value) {
                    target[props[_i3]] = prop.value;
                } else if (prop.get) {
                    target[props[_i3]] = prop.get.apply(source);
                }
            }
        }
        return target;
    } else {
        return source;
    }
}
function round(value) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var m = Math.pow(10, digits);
    var n = +(digits ? value * m : value).toFixed(8);
    var i = Math.floor(n),
        f = n - i;
    var e = 1e-8;
    var r = f > 0.5 - e && f < 0.5 + e ? i % 2 == 0 ? i : i + 1 : Math.round(n);
    return digits ? r / m : r;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function defaultArg(arg, defaultValue, f) {
    return arg == null ? defaultValue : f != null ? f(arg) : arg;
}
function applyOperator(x, y, operator) {
    function getMethod(obj) {
        if ((typeof obj === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_10_babel_runtime_helpers_typeof___default()(obj)) === "object") {
            var cons = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_prototype_of___default()(obj).constructor;
            if (typeof cons[operator] === "function") {
                return cons[operator];
            }
        }
        return null;
    }
    var meth = getMethod(x);
    if (meth != null) {
        return meth(x, y);
    }
    meth = getMethod(y);
    if (meth != null) {
        return meth(x, y);
    }
    switch (operator) {
        case "op_Addition":
            return x + y;
        case "op_Subtraction":
            return x - y;
        case "op_Multiply":
            return x * y;
        case "op_Division":
            return x / y;
        case "op_Modulus":
            return x % y;
        case "op_LeftShift":
            return x << y;
        case "op_RightShift":
            return x >> y;
        case "op_BitwiseAnd":
            return x & y;
        case "op_BitwiseOr":
            return x | y;
        case "op_ExclusiveOr":
            return x ^ y;
        case "op_LogicalNot":
            return x + y;
        case "op_UnaryNegation":
            return !x;
        case "op_BooleanAnd":
            return x && y;
        case "op_BooleanOr":
            return x || y;
        default:
            return null;
    }
}
function parseNumber(v) {
    return +v;
}
function tryParse(v, initial, parser, fn) {
    if (v != null) {
        var a = parser.exec(v);
        if (a !== null) {
            return [true, fn(a[1])];
        }
    }
    return [false, initial];
}
function parse(v, initial, parser, fn) {
    var a = tryParse(v, initial, parser, fn);
    if (a[0]) {
        return a[1];
    } else {
        throw new Error("Input string was not in a correct format.");
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(49)('wks')
  , uid        = __webpack_require__(34)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(14)
  , IE8_DOM_DEFINE = __webpack_require__(69)
  , toPrimitive    = __webpack_require__(51)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(1)
  , ctx       = __webpack_require__(24)
  , hide      = __webpack_require__(12)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__);
/* harmony export (immutable) */ __webpack_exports__["b"] = setType;
/* unused harmony export getType */


var types = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default.a();
function setType(fullName, cons) {
    types.set(fullName, cons);
}
function getType(fullName) {
    return types.get(fullName);
}
/* harmony default export */ __webpack_exports__["a"] = ({
    reflection: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default()("reflection")
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(61);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(26);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41)
  , defined = __webpack_require__(30);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeSpan__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Long__ = __webpack_require__(57);
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* unused harmony export parse */
/* unused harmony export tryParse */
/* unused harmony export create */
/* unused harmony export now */
/* unused harmony export utcNow */
/* unused harmony export today */
/* unused harmony export isLeapYear */
/* unused harmony export daysInMonth */
/* unused harmony export toUniversalTime */
/* unused harmony export toLocalTime */
/* unused harmony export timeOfDay */
/* unused harmony export date */
/* unused harmony export kind */
/* harmony export (immutable) */ __webpack_exports__["e"] = day;
/* harmony export (immutable) */ __webpack_exports__["c"] = hour;
/* unused harmony export millisecond */
/* harmony export (immutable) */ __webpack_exports__["f"] = minute;
/* harmony export (immutable) */ __webpack_exports__["d"] = month;
/* harmony export (immutable) */ __webpack_exports__["a"] = second;
/* harmony export (immutable) */ __webpack_exports__["b"] = year;
/* unused harmony export dayOfWeek */
/* unused harmony export ticks */
/* unused harmony export toBinary */
/* unused harmony export dayOfYear */
/* unused harmony export add */
/* unused harmony export addDays */
/* unused harmony export addHours */
/* unused harmony export addMinutes */
/* unused harmony export addSeconds */
/* unused harmony export addMilliseconds */
/* unused harmony export addTicks */
/* unused harmony export addYears */
/* unused harmony export addMonths */
/* unused harmony export subtract */
/* unused harmony export toLongDateString */
/* unused harmony export toShortDateString */
/* unused harmony export toLongTimeString */
/* unused harmony export toShortTimeString */
/* unused harmony export equals */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export op_Addition */
/* unused harmony export op_Subtraction */



function minValue() {
    return parse(-8640000000000000, 1);
}
function maxValue() {
    return parse(8640000000000000, 1);
}
function parse(v, kind) {
    if (kind == null) {
        kind = typeof v == "string" && v.slice(-1) == "Z" ? 1 : 2;
    }
    var date = v == null ? new Date() : new Date(v);
    if (kind === 2) {
        date.kind = kind;
    }
    if (isNaN(date.getTime())) {
        throw new Error("The string is not a valid Date.");
    }
    return date;
}
function tryParse(v) {
    try {
        return [true, parse(v)];
    } catch (_err) {
        return [false, minValue()];
    }
}
function create(year, month, day) {
    var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var kind = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 2;

    var date = void 0;
    if (kind === 2) {
        date = new Date(year, month - 1, day, h, m, s, ms);
        date.kind = kind;
    } else {
        date = new Date(Date.UTC(year, month - 1, day, h, m, s, ms));
    }
    if (isNaN(date.getTime())) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    return date;
}
function now() {
    return parse();
}
function utcNow() {
    return parse(null, 1);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
function daysInMonth(year, month) {
    return month == 2 ? isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 == 0 ? 31 : 30 : month % 2 == 0 ? 30 : 31;
}
function toUniversalTime(d) {
    return d.kind === 2 ? new Date(d.getTime()) : d;
}
function toLocalTime(d) {
    if (d.kind === 2) {
        return d;
    } else {
        var d2 = new Date(d.getTime());
        d2.kind = 2;
        return d2;
    }
}
function timeOfDay(d) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__TimeSpan__["a" /* create */])(0, hour(d), minute(d), second(d), millisecond(d));
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind || 1);
}
function kind(d) {
    return d.kind || 1;
}
function day(d) {
    return d.kind === 2 ? d.getDate() : d.getUTCDate();
}
function hour(d) {
    return d.kind === 2 ? d.getHours() : d.getUTCHours();
}
function millisecond(d) {
    return d.kind === 2 ? d.getMilliseconds() : d.getUTCMilliseconds();
}
function minute(d) {
    return d.kind === 2 ? d.getMinutes() : d.getUTCMinutes();
}
function month(d) {
    return (d.kind === 2 ? d.getMonth() : d.getUTCMonth()) + 1;
}
function second(d) {
    return d.kind === 2 ? d.getSeconds() : d.getUTCSeconds();
}
function year(d) {
    return d.kind === 2 ? d.getFullYear() : d.getUTCFullYear();
}
function dayOfWeek(d) {
    return d.kind === 2 ? d.getDay() : d.getUTCDay();
}
function ticks(d) {
    return __WEBPACK_IMPORTED_MODULE_2__Long__["a" /* fromNumber */](d.getTime()).add(62135596800000).sub(d.kind == 2 ? d.getTimezoneOffset() * 60 * 1000 : 0).mul(10000);
}
function toBinary(d) {
    return ticks(d);
}
function dayOfYear(d) {
    var _year = year(d);
    var _month = month(d);
    var _day = day(d);
    for (var i = 1; i < _month; i++) {
        _day += daysInMonth(_year, i);
    }return _day;
}
function add(d, ts) {
    return parse(d.getTime() + ts, d.kind || 1);
}
function addDays(d, v) {
    return parse(d.getTime() + v * 86400000, d.kind || 1);
}
function addHours(d, v) {
    return parse(d.getTime() + v * 3600000, d.kind || 1);
}
function addMinutes(d, v) {
    return parse(d.getTime() + v * 60000, d.kind || 1);
}
function addSeconds(d, v) {
    return parse(d.getTime() + v * 1000, d.kind || 1);
}
function addMilliseconds(d, v) {
    return parse(d.getTime() + v, d.kind || 1);
}
function addTicks(d, t) {
    return parse(__WEBPACK_IMPORTED_MODULE_2__Long__["a" /* fromNumber */](d.getTime()).add(t.div(10000)).toNumber(), d.kind || 1);
}
function addYears(d, v) {
    var newMonth = month(d);
    var newYear = year(d) + v;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
}
function addMonths(d, v) {
    var newMonth = month(d) + v;
    var newMonth_ = 0;
    var yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    } else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ == 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    var newYear = year(d) + yearOffset;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
}
function subtract(d, that) {
    return typeof that == "number" ? parse(d.getTime() - that, d.kind || 1) : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() == d2.getTime();
}
function compare(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["h" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["h" /* compare */])(x, y);
}
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(122)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(42)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Symbol__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Util__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["b"] = ofArray;









function ofArray(args, base) {
    var acc = base || new List();
    for (var i = args.length - 1; i >= 0; i--) {
        acc = new List(args[i], acc);
    }
    return acc;
}

var List = function () {
    function List(head, tail) {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, List);

        this.head = head;
        this.tail = tail;
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(List, [{
        key: "ToString",
        value: function ToString() {
            return "[" + __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from___default()(this).map(function (x) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Util__["c" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(x) {
            if (this === x) {
                return true;
            } else {
                var iter1 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this),
                    iter2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(x);
                for (;;) {
                    var cur1 = iter1.next(),
                        cur2 = iter2.next();
                    if (cur1.done) return cur2.done ? true : false;else if (cur2.done) return false;else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Util__["a" /* equals */])(cur1.value, cur2.value)) return false;
                }
            }
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(x) {
            if (this === x) {
                return 0;
            } else {
                var acc = 0;
                var iter1 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this),
                    iter2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(x);
                for (;;) {
                    var cur1 = iter1.next(),
                        cur2 = iter2.next();
                    if (cur1.done) return cur2.done ? acc : -1;else if (cur2.done) return 1;else {
                        acc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Util__["h" /* compare */])(cur1.value, cur2.value);
                        if (acc != 0) return acc;
                    }
                }
            }
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator___default.a,
        value: function value() {
            var cur = this;
            return {
                next: function next() {
                    var tmp = cur;
                    cur = cur.tail;
                    return { done: tmp.tail == null, value: tmp.head };
                }
            };
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_5__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpList",
                interfaces: ["System.IEquatable", "System.IComparable"]
            };
        }
    }, {
        key: "length",
        get: function get() {
            var cur = this,
                acc = 0;
            while (cur.tail != null) {
                cur = cur.tail;
                acc++;
            }
            return acc;
        }
    }]);

    return List;
}();

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(106);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(78)
  , enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(30);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
var global        = __webpack_require__(6)
  , hide          = __webpack_require__(12)
  , Iterators     = __webpack_require__(21)
  , TO_STRING_TAG = __webpack_require__(3)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Seq__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Map__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ListClass__["b"]; });
/* harmony export (immutable) */ __webpack_exports__["e"] = append;
/* harmony export (immutable) */ __webpack_exports__["f"] = choose;
/* unused harmony export collect */
/* unused harmony export concat */
/* harmony export (immutable) */ __webpack_exports__["c"] = filter;
/* unused harmony export where */
/* unused harmony export initialize */
/* harmony export (immutable) */ __webpack_exports__["d"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export partition */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* unused harmony export singleton */
/* unused harmony export slice */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* unused harmony export groupBy */






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]);

function append(xs, ys) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc);
    }, ys, reverse(xs));
}
function choose(f, xs) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x) {
        var y = f(x);
        return y != null ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](y, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
    return reverse(r);
}
function collect(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x) {
        return append(acc, f(x));
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
function concat(xs) {
    return collect(function (x) {
        return x;
    }, xs);
}
function filter(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x) {
        return f(x) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function where(f, xs) {
    return filter(f, xs);
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("List length must be non-negative");
    }
    var xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]();
    for (var i = 1; i <= n; i++) {
        xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(n - i), xs);
    }
    return xs;
}
function map(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(x), acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function mapIndexed(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x, i) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(i, x), acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function partition(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x) {
        var lacc = acc[0],
            racc = acc[1];
        return f(x) ? [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, lacc), racc] : [lacc, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, racc)];
    }, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()], reverse(xs));
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function reverse(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
function singleton(x) {
    return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]());
}
function slice(lower, upper, xs) {
    var noLower = lower == null;
    var noUpper = upper == null;
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["k" /* fold */])(function (acc, x, i) {
        return (noLower || lower <= i) && (noUpper || i <= upper) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function unzip(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["n" /* foldBack */])(function (xy, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[1], acc[1])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
function unzip3(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["n" /* foldBack */])(function (xyz, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[1], acc[1]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[2], acc[2])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
function groupBy(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["d" /* map */])(function (k) {
        return [k[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* toList */])(k[1])];
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Map__["d" /* groupBy */])(f, xs)));
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f
  , has = __webpack_require__(16)
  , TAG = __webpack_require__(3)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(50)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Symbol__ = __webpack_require__(8);
/* unused harmony export fromEqualityComparer */





var Comparer = function () {
    function Comparer(f) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Comparer);

        this.Compare = f || __WEBPACK_IMPORTED_MODULE_2__Util__["h" /* compare */];
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Comparer, [{
        key: __WEBPACK_IMPORTED_MODULE_3__Symbol__["a" /* default */].reflection,
        value: function value() {
            return { interfaces: ["System.IComparer"] };
        }
    }]);

    return Comparer;
}();

/* harmony default export */ __webpack_exports__["a"] = (Comparer);

function fromEqualityComparer(comparer) {
    if (typeof comparer.Compare === "function") {
        return new Comparer(comparer.Compare);
    } else {
        return new Comparer(function (x, y) {
            var xhash = comparer.GetHashCode(x),
                yhash = comparer.GetHashCode(y);
            if (xhash === yhash) {
                return comparer.Equals(x, y) ? 0 : -1;
            } else {
                return xhash < yhash ? -1 : 1;
            }
        });
    }
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ListClass__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Comparer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Symbol__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Seq__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["d"] = groupBy;
/* unused harmony export countBy */
/* unused harmony export MapTree */
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* harmony export (immutable) */ __webpack_exports__["c"] = add;
/* unused harmony export remove */
/* unused harmony export containsValue */
/* unused harmony export tryGetValue */
/* unused harmony export exists */
/* unused harmony export find */
/* unused harmony export tryFind */
/* unused harmony export filter */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export forAll */
/* unused harmony export isEmpty */
/* unused harmony export iterate */
/* unused harmony export map */
/* unused harmony export partition */
/* unused harmony export findKey */
/* unused harmony export tryFindKey */
/* unused harmony export pick */
/* unused harmony export tryPick */

















function groupBy(f, xs) {
    var keys = [],
        iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var acc = create(),
        cur = iter.next();
    while (!cur.done) {
        var k = f(cur.value),
            vs = tryFind(k, acc);
        if (vs == null) {
            keys.push(k);
            acc = add(k, [cur.value], acc);
        } else {
            vs.push(cur.value);
        }
        cur = iter.next();
    }
    return keys.map(function (k) {
        return [k, acc.get(k)];
    });
}
function countBy(f, xs) {
    return groupBy(f, xs).map(function (kv) {
        return [kv[0], kv[1].length];
    });
}
var MapTree = function MapTree(tag, data) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, MapTree);

    this.tag = tag | 0;
    this.data = data;
};
function tree_sizeAux(acc, m) {
    sizeAux: while (true) {
        if (m.tag === 1) {
            return acc + 1 | 0;
        } else if (m.tag === 2) {
            acc = tree_sizeAux(acc + 1, m.data[2]);
            m = m.data[3];
            continue sizeAux;
        } else {
            return acc | 0;
        }
    }
}
function tree_size(x) {
    return tree_sizeAux(0, x);
}
function tree_empty() {
    return new MapTree(0);
}
function tree_height(_arg1) {
    return _arg1.tag === 1 ? 1 : _arg1.tag === 2 ? _arg1.data[4] : 0;
}
function tree_isEmpty(m) {
    return m.tag === 0 ? true : false;
}
function tree_mk(l, k, v, r) {
    var matchValue = l.tag === 0 ? r.tag === 0 ? 0 : 1 : 1;
    switch (matchValue) {
        case 0:
            return new MapTree(1, [k, v]);
        case 1:
            var hl = tree_height(l) | 0;
            var hr = tree_height(r) | 0;
            var m = (hl < hr ? hr : hl) | 0;
            return new MapTree(2, [k, v, l, r, m + 1]);
    }
    throw new Error("internal error: Map.tree_mk");
}
;
function tree_rebalance(t1, k, v, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + 2) {
        if (t2.tag === 2) {
            if (tree_height(t2.data[2]) > t1h + 1) {
                if (t2.data[2].tag === 2) {
                    return tree_mk(tree_mk(t1, k, v, t2.data[2].data[2]), t2.data[2].data[0], t2.data[2].data[1], tree_mk(t2.data[2].data[3], t2.data[0], t2.data[1], t2.data[3]));
                } else {
                    throw new Error("rebalance");
                }
            } else {
                return tree_mk(tree_mk(t1, k, v, t2.data[2]), t2.data[0], t2.data[1], t2.data[3]);
            }
        } else {
            throw new Error("rebalance");
        }
    } else {
        if (t1h > t2h + 2) {
            if (t1.tag === 2) {
                if (tree_height(t1.data[3]) > t2h + 1) {
                    if (t1.data[3].tag === 2) {
                        return tree_mk(tree_mk(t1.data[2], t1.data[0], t1.data[1], t1.data[3].data[2]), t1.data[3].data[0], t1.data[3].data[1], tree_mk(t1.data[3].data[3], k, v, t2));
                    } else {
                        throw new Error("rebalance");
                    }
                } else {
                    return tree_mk(t1.data[2], t1.data[0], t1.data[1], tree_mk(t1.data[3], k, v, t2));
                }
            } else {
                throw new Error("rebalance");
            }
        } else {
            return tree_mk(t1, k, v, t2);
        }
    }
}
function tree_add(comparer, k, v, m) {
    if (m.tag === 1) {
        var c = comparer.Compare(k, m.data[0]);
        if (c < 0) {
            return new MapTree(2, [k, v, new MapTree(0), m, 2]);
        } else if (c === 0) {
            return new MapTree(1, [k, v]);
        }
        return new MapTree(2, [k, v, m, new MapTree(0), 2]);
    } else if (m.tag === 2) {
        var _c = comparer.Compare(k, m.data[0]);
        if (_c < 0) {
            return tree_rebalance(tree_add(comparer, k, v, m.data[2]), m.data[0], m.data[1], m.data[3]);
        } else if (_c === 0) {
            return new MapTree(2, [k, v, m.data[2], m.data[3], m.data[4]]);
        }
        return tree_rebalance(m.data[2], m.data[0], m.data[1], tree_add(comparer, k, v, m.data[3]));
    }
    return new MapTree(1, [k, v]);
}
function tree_find(comparer, k, m) {
    var res = tree_tryFind(comparer, k, m);
    if (res != null) return res;
    throw new Error("key not found");
}
function tree_tryFind(comparer, k, m) {
    tryFind: while (true) {
        if (m.tag === 1) {
            var c = comparer.Compare(k, m.data[0]) | 0;
            if (c === 0) {
                return m.data[1];
            } else {
                return null;
            }
        } else if (m.tag === 2) {
            var c_1 = comparer.Compare(k, m.data[0]) | 0;
            if (c_1 < 0) {
                comparer = comparer;
                k = k;
                m = m.data[2];
                continue tryFind;
            } else if (c_1 === 0) {
                return m.data[1];
            } else {
                comparer = comparer;
                k = k;
                m = m.data[3];
                continue tryFind;
            }
        } else {
            return null;
        }
    }
}
function tree_partition1(comparer, f, k, v, acc1, acc2) {
    return f(k, v) ? [tree_add(comparer, k, v, acc1), acc2] : [acc1, tree_add(comparer, k, v, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.tag === 1) {
        return tree_partition1(comparer, f, s.data[0], s.data[1], acc[0], acc[1]);
    } else if (s.tag === 2) {
        var acc_2 = tree_partitionAux(comparer, f, s.data[3], acc[0], acc[1]);
        var acc_3 = tree_partition1(comparer, f, s.data[0], s.data[1], acc_2[0], acc_2[1]);
        return tree_partitionAux(comparer, f, s.data[2], acc_3[0], acc_3[1]);
    }
    return acc;
}
function tree_partition(comparer, f, s) {
    return tree_partitionAux(comparer, f, s, tree_empty(), tree_empty());
}
function tree_filter1(comparer, f, k, v, acc) {
    return f(k, v) ? tree_add(comparer, k, v, acc) : acc;
}
function tree_filterAux(comparer, f, s, acc) {
    return s.tag === 1 ? tree_filter1(comparer, f, s.data[0], s.data[1], acc) : s.tag === 2 ? tree_filterAux(comparer, f, s.data[3], tree_filter1(comparer, f, s.data[0], s.data[1], tree_filterAux(comparer, f, s.data[2], acc))) : acc;
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, tree_empty());
}
function tree_spliceOutSuccessor(m) {
    if (m.tag === 1) {
        return [m.data[0], m.data[1], new MapTree(0)];
    } else if (m.tag === 2) {
        if (m.data[2].tag === 0) {
            return [m.data[0], m.data[1], m.data[3]];
        } else {
            var kvl = tree_spliceOutSuccessor(m.data[2]);
            return [kvl[0], kvl[1], tree_mk(kvl[2], m.data[0], m.data[1], m.data[3])];
        }
    }
    throw new Error("internal error: Map.spliceOutSuccessor");
}
function tree_remove(comparer, k, m) {
    if (m.tag === 1) {
        var c = comparer.Compare(k, m.data[0]);
        if (c === 0) {
            return new MapTree(0);
        } else {
            return m;
        }
    } else if (m.tag === 2) {
        var _c2 = comparer.Compare(k, m.data[0]);
        if (_c2 < 0) {
            return tree_rebalance(tree_remove(comparer, k, m.data[2]), m.data[0], m.data[1], m.data[3]);
        } else if (_c2 === 0) {
            if (m.data[2].tag === 0) {
                return m.data[3];
            } else {
                if (m.data[3].tag === 0) {
                    return m.data[2];
                } else {
                    var input = tree_spliceOutSuccessor(m.data[3]);
                    return tree_mk(m.data[2], input[0], input[1], input[2]);
                }
            }
        } else {
            return tree_rebalance(m.data[2], m.data[0], m.data[1], tree_remove(comparer, k, m.data[3]));
        }
    } else {
        return tree_empty();
    }
}
function tree_mem(comparer, k, m) {
    mem: while (true) {
        if (m.tag === 1) {
            return comparer.Compare(k, m.data[0]) === 0;
        } else if (m.tag === 2) {
            var c = comparer.Compare(k, m.data[0]) | 0;
            if (c < 0) {
                comparer = comparer;
                k = k;
                m = m.data[2];
                continue mem;
            } else if (c === 0) {
                return true;
            } else {
                comparer = comparer;
                k = k;
                m = m.data[3];
                continue mem;
            }
        } else {
            return false;
        }
    }
}
function tree_iter(f, m) {
    if (m.tag === 1) {
        f(m.data[0], m.data[1]);
    } else if (m.tag === 2) {
        tree_iter(f, m.data[2]);
        f(m.data[0], m.data[1]);
        tree_iter(f, m.data[3]);
    }
}
function tree_tryPick(f, m) {
    if (m.tag === 1) {
        return f(m.data[0], m.data[1]);
    } else if (m.tag === 2) {
        var matchValue = tree_tryPick(f, m.data[2]);
        if (matchValue == null) {
            var matchValue_1 = f(m.data[0], m.data[1]);
            if (matchValue_1 == null) {
                return tree_tryPick(f, m.data[3]);
            } else {
                var res = matchValue_1;
                return res;
            }
        } else {
            return matchValue;
        }
    } else {
        return null;
    }
}
function tree_exists(f, m) {
    return m.tag === 1 ? f(m.data[0], m.data[1]) : m.tag === 2 ? (tree_exists(f, m.data[2]) ? true : f(m.data[0], m.data[1])) ? true : tree_exists(f, m.data[3]) : false;
}
function tree_forall(f, m) {
    return m.tag === 1 ? f(m.data[0], m.data[1]) : m.tag === 2 ? (tree_forall(f, m.data[2]) ? f(m.data[0], m.data[1]) : false) ? tree_forall(f, m.data[3]) : false : true;
}
function tree_mapi(f, m) {
    return m.tag === 1 ? new MapTree(1, [m.data[0], f(m.data[0], m.data[1])]) : m.tag === 2 ? new MapTree(2, [m.data[0], f(m.data[0], m.data[1]), tree_mapi(f, m.data[2]), tree_mapi(f, m.data[3]), m.data[4]]) : tree_empty();
}
function tree_foldBack(f, m, x) {
    return m.tag === 1 ? f(m.data[0], m.data[1], x) : m.tag === 2 ? tree_foldBack(f, m.data[2], f(m.data[0], m.data[1], tree_foldBack(f, m.data[3], x))) : x;
}
function tree_fold(f, x, m) {
    return m.tag === 1 ? f(x, m.data[0], m.data[1]) : m.tag === 2 ? tree_fold(f, f(tree_fold(f, x, m.data[2]), m.data[0], m.data[1]), m.data[3]) : x;
}
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value[0], cur.value[1], acc);
        cur = e.next();
    }
    return acc;
}
function tree_ofSeq(comparer, c) {
    var ie = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(c);
    return tree_mkFromEnumerator(comparer, tree_empty(), ie);
}
function tree_collapseLHS(stack) {
    if (stack.tail != null) {
        if (stack.head.tag === 1) {
            return stack;
        } else if (stack.head.tag === 2) {
            return tree_collapseLHS(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ListClass__["b" /* ofArray */])([stack.head.data[2], new MapTree(1, [stack.head.data[0], stack.head.data[1]]), stack.head.data[3]], stack.tail));
        } else {
            return tree_collapseLHS(stack.tail);
        }
    } else {
        return new __WEBPACK_IMPORTED_MODULE_5__ListClass__["a" /* default */]();
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_5__ListClass__["a" /* default */](s, new __WEBPACK_IMPORTED_MODULE_5__ListClass__["a" /* default */]())), started: false };
}
function tree_moveNext(i) {
    function current(i) {
        if (i.stack.tail == null) {
            return null;
        } else if (i.stack.head.tag === 1) {
            return [i.stack.head.data[0], i.stack.head.data[1]];
        }
        throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        } else {
            if (i.stack.head.tag === 1) {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            } else {
                throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
            }
        }
    } else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
    ;
}

var FableMap = function () {
    function FableMap() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, FableMap);
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FableMap, [{
        key: "ToString",
        value: function ToString() {
            return "map [" + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(this).map(function (x) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Util__["c" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(m2) {
            return this.CompareTo(m2) === 0;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(m2) {
            var _this = this;

            return this === m2 ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Seq__["o" /* compareWith */])(function (kvp1, kvp2) {
                var c = _this.comparer.Compare(kvp1[0], kvp2[0]);
                return c !== 0 ? c : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Util__["h" /* compare */])(kvp1[1], kvp2[1]);
            }, this, m2);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator___default.a,
        value: function value() {
            var i = tree_mkIterator(this.tree);
            return {
                next: function next() {
                    return tree_moveNext(i);
                }
            };
        }
    }, {
        key: "entries",
        value: function entries() {
            return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(this);
        }
    }, {
        key: "keys",
        value: function keys() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Seq__["d" /* map */])(function (kv) {
                return kv[0];
            }, this);
        }
    }, {
        key: "values",
        value: function values() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Seq__["d" /* map */])(function (kv) {
                return kv[1];
            }, this);
        }
    }, {
        key: "get",
        value: function get(k) {
            return tree_find(this.comparer, k, this.tree);
        }
    }, {
        key: "has",
        value: function has(k) {
            return tree_mem(this.comparer, k, this.tree);
        }
    }, {
        key: "set",
        value: function set(k, v) {
            this.tree = tree_add(this.comparer, k, v, this.tree);
        }
    }, {
        key: "delete",
        value: function _delete(k) {
            var oldSize = tree_size(this.tree);
            this.tree = tree_remove(this.comparer, k, this.tree);
            return oldSize > tree_size(this.tree);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.tree = tree_empty();
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_8__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpMap",
                interfaces: ["System.IEquatable", "System.IComparable", "System.Collections.Generic.IDictionary"]
            };
        }
    }, {
        key: "size",
        get: function get() {
            return tree_size(this.tree);
        }
    }]);

    return FableMap;
}();

/* harmony default export */ __webpack_exports__["a"] = (FableMap);

function from(comparer, tree) {
    var map = new FableMap();
    map.tree = tree;
    map.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_7__Comparer__["a" /* default */]();
    return map;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_7__Comparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : tree_empty());
}
function add(k, v, map) {
    return from(map.comparer, tree_add(map.comparer, k, v, map.tree));
}
function remove(item, map) {
    return from(map.comparer, tree_remove(map.comparer, item, map.tree));
}
function containsValue(v, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Seq__["k" /* fold */])(function (acc, k) {
        return acc || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Util__["a" /* equals */])(map.get(k), v);
    }, false, map.keys());
}
function tryGetValue(map, key, defaultValue) {
    return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
function exists(f, map) {
    return tree_exists(f, map.tree);
}
function find(k, map) {
    return tree_find(map.comparer, k, map.tree);
}
function tryFind(k, map) {
    return tree_tryFind(map.comparer, k, map.tree);
}
function filter(f, map) {
    return from(map.comparer, tree_filter(map.comparer, f, map.tree));
}
function fold(f, seed, map) {
    return tree_fold(f, seed, map.tree);
}
function foldBack(f, map, seed) {
    return tree_foldBack(f, map.tree, seed);
}
function forAll(f, map) {
    return tree_forall(f, map.tree);
}
function isEmpty(map) {
    return tree_isEmpty(map.tree);
}
function iterate(f, map) {
    tree_iter(f, map.tree);
}
function map(f, map) {
    return from(map.comparer, tree_mapi(f, map.tree));
}
function partition(f, map) {
    var rs = tree_partition(map.comparer, f, map.tree);
    return [from(map.comparer, rs[0]), from(map.comparer, rs[1])];
}
function findKey(f, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Seq__["p" /* pick */])(function (kv) {
        return f(kv[0], kv[1]) ? kv[0] : null;
    }, map);
}
function tryFindKey(f, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Seq__["q" /* tryPick */])(function (kv) {
        return f(kv[0], kv[1]) ? kv[0] : null;
    }, map);
}
function pick(f, map) {
    var res = tryPick(f, map);
    if (res != null) return res;
    throw new Error("key not found");
}
function tryPick(f, map) {
    return tree_tryPick(f, map.tree);
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(38)
  , TAG = __webpack_require__(3)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(24)
  , call        = __webpack_require__(72)
  , isArrayIter = __webpack_require__(70)
  , anObject    = __webpack_require__(14)
  , toLength    = __webpack_require__(33)
  , getIterFn   = __webpack_require__(54)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(38);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(43)
  , $export        = __webpack_require__(7)
  , redefine       = __webpack_require__(80)
  , hide           = __webpack_require__(12)
  , has            = __webpack_require__(16)
  , Iterators      = __webpack_require__(21)
  , $iterCreate    = __webpack_require__(116)
  , setToStringTag = __webpack_require__(32)
  , getPrototypeOf = __webpack_require__(77)
  , ITERATOR       = __webpack_require__(3)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(34)('meta')
  , isObject = __webpack_require__(20)
  , has      = __webpack_require__(16)
  , setDesc  = __webpack_require__(4).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(15)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(14)
  , dPs         = __webpack_require__(120)
  , enumBugKeys = __webpack_require__(39)
  , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(68)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(115).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7)
  , core    = __webpack_require__(1)
  , fails   = __webpack_require__(15);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(49)('keys')
  , uid    = __webpack_require__(34);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(6)
  , core           = __webpack_require__(1)
  , LIBRARY        = __webpack_require__(43)
  , wksExt         = __webpack_require__(53)
  , defineProperty = __webpack_require__(4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(37)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(21);
module.exports = __webpack_require__(1).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* unused harmony export addRangeInPlace */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* harmony export (immutable) */ __webpack_exports__["b"] = permute;
/* unused harmony export removeInPlace */
/* unused harmony export setSlice */
/* unused harmony export sortInPlaceBy */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* harmony export (immutable) */ __webpack_exports__["a"] = chunkBySize;
/* unused harmony export getSubArray */
/* unused harmony export fill */

function addRangeInPlace(range, xs) {
    var iter = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(range);
    var cur = iter.next();
    while (!cur.done) {
        xs.push(cur.value);
        cur = iter.next();
    }
}
function copyTo(source, sourceIndex, target, targetIndex, count) {
    while (count--) {
        target[targetIndex++] = source[sourceIndex++];
    }
}
function partition(f, xs) {
    var ys = [],
        zs = [],
        j = 0,
        k = 0;
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i])) ys[j++] = xs[i];else zs[k++] = xs[i];
    }return [ys, zs];
}
function permute(f, xs) {
    var ys = xs.map(function () {
        return null;
    });
    var checkFlags = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        var j = f(i);
        if (j < 0 || j >= xs.length) throw new Error("Not a valid permutation");
        ys[j] = xs[i];
        checkFlags[j] = 1;
    }
    for (var _i = 0; _i < xs.length; _i++) {
        if (checkFlags[_i] != 1) throw new Error("Not a valid permutation");
    }return ys;
}
function removeInPlace(item, xs) {
    var i = xs.indexOf(item);
    if (i > -1) {
        xs.splice(i, 1);
        return true;
    }
    return false;
}
function setSlice(target, lower, upper, source) {
    var length = (upper || target.length - 1) - lower;
    if (ArrayBuffer.isView(target) && source.length <= length) target.set(source, lower);else for (var i = lower | 0, j = 0; j <= length; i++, j++) {
        target[i] = source[j];
    }
}
function sortInPlaceBy(f, xs) {
    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return xs.sort(function (x, y) {
        x = f(x);
        y = f(y);
        return (x < y ? -1 : x == y ? 0 : 1) * dir;
    });
}
function unzip(xs) {
    var bs = new Array(xs.length),
        cs = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
    }
    return [bs, cs];
}
function unzip3(xs) {
    var bs = new Array(xs.length),
        cs = new Array(xs.length),
        ds = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
        ds[i] = xs[i][2];
    }
    return [bs, cs, ds];
}
function chunkBySize(size, xs) {
    if (size < 1) {
        throw new Error("The input must be positive. parameter name: chunkSize");
    }
    if (xs.length === 0) {
        return [[]];
    }
    var result = [];
    for (var x = 0; x < Math.ceil(xs.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(xs.slice(start, end));
    }
    return result;
}
function getSubArray(xs, startIndex, count) {
    return xs.slice(startIndex, startIndex + count);
}
function fill(target, targetIndex, count, value) {
    target.fill(value, targetIndex, targetIndex + count);
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Symbol__ = __webpack_require__(8);
/* unused harmony export Long */
/* unused harmony export isLong */
/* unused harmony export fromInt */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromNumber;
/* unused harmony export fromBits */
/* unused harmony export fromString */
/* unused harmony export fromValue */
/* unused harmony export ZERO */
/* unused harmony export UZERO */
/* unused harmony export ONE */
/* unused harmony export UONE */
/* unused harmony export NEG_ONE */
/* unused harmony export MAX_VALUE */
/* unused harmony export MAX_UNSIGNED_VALUE */
/* unused harmony export MIN_VALUE */



var Long = function () {
    function Long(low, high, unsigned) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Long);

        this.eq = this.equals;
        this.neq = this.notEquals;
        this.lt = this.lessThan;
        this.lte = this.lessThanOrEqual;
        this.gt = this.greaterThan;
        this.gte = this.greaterThanOrEqual;
        this.comp = this.compare;
        this.neg = this.negate;
        this.abs = this.absolute;
        this.sub = this.subtract;
        this.mul = this.multiply;
        this.div = this.divide;
        this.mod = this.modulo;
        this.shl = this.shiftLeft;
        this.shr = this.shiftRight;
        this.shru = this.shiftRightUnsigned;
        this.Equals = this.equals;
        this.CompareTo = this.compare;
        this.ToString = this.toString;
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Long, [{
        key: "toInt",
        value: function toInt() {
            return this.unsigned ? this.low >>> 0 : this.low;
        }
    }, {
        key: "toNumber",
        value: function toNumber() {
            if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
            return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
        }
    }, {
        key: "toString",
        value: function toString() {
            var radix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            radix = radix || 10;
            if (radix < 2 || 36 < radix) throw RangeError("radix");
            if (this.isZero()) return "0";
            if (this.isNegative()) {
                if (this.eq(MIN_VALUE)) {
                    var radixLong = fromNumber(radix),
                        div = this.div(radixLong),
                        rem1 = div.mul(radixLong).sub(this);
                    return div.toString(radix) + rem1.toInt().toString(radix);
                } else return "-" + this.neg().toString(radix);
            }
            var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
                rem = this;
            var result = "";
            while (true) {
                var remDiv = rem.div(radixToPower),
                    intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
                    digits = intval.toString(radix);
                rem = remDiv;
                if (rem.isZero()) return digits + result;else {
                    while (digits.length < 6) {
                        digits = "0" + digits;
                    }result = "" + digits + result;
                }
            }
        }
    }, {
        key: "getHighBits",
        value: function getHighBits() {
            return this.high;
        }
    }, {
        key: "getHighBitsUnsigned",
        value: function getHighBitsUnsigned() {
            return this.high >>> 0;
        }
    }, {
        key: "getLowBits",
        value: function getLowBits() {
            return this.low;
        }
    }, {
        key: "getLowBitsUnsigned",
        value: function getLowBitsUnsigned() {
            return this.low >>> 0;
        }
    }, {
        key: "getNumBitsAbs",
        value: function getNumBitsAbs() {
            if (this.isNegative()) return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
            var val = this.high != 0 ? this.high : this.low;
            for (var bit = 31; bit > 0; bit--) {
                if ((val & 1 << bit) != 0) break;
            }return this.high != 0 ? bit + 33 : bit + 1;
        }
    }, {
        key: "isZero",
        value: function isZero() {
            return this.high === 0 && this.low === 0;
        }
    }, {
        key: "isNegative",
        value: function isNegative() {
            return !this.unsigned && this.high < 0;
        }
    }, {
        key: "isPositive",
        value: function isPositive() {
            return this.unsigned || this.high >= 0;
        }
    }, {
        key: "isOdd",
        value: function isOdd() {
            return (this.low & 1) === 1;
        }
    }, {
        key: "isEven",
        value: function isEven() {
            return (this.low & 1) === 0;
        }
    }, {
        key: "equals",
        value: function equals(other) {
            if (!isLong(other)) other = fromValue(other);
            if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
            return this.high === other.high && this.low === other.low;
        }
    }, {
        key: "notEquals",
        value: function notEquals(other) {
            return !this.eq(other);
        }
    }, {
        key: "lessThan",
        value: function lessThan(other) {
            return this.comp(other) < 0;
        }
    }, {
        key: "lessThanOrEqual",
        value: function lessThanOrEqual(other) {
            return this.comp(other) <= 0;
        }
    }, {
        key: "greaterThan",
        value: function greaterThan(other) {
            return this.comp(other) > 0;
        }
    }, {
        key: "greaterThanOrEqual",
        value: function greaterThanOrEqual(other) {
            return this.comp(other) >= 0;
        }
    }, {
        key: "compare",
        value: function compare(other) {
            if (!isLong(other)) other = fromValue(other);
            if (this.eq(other)) return 0;
            var thisNeg = this.isNegative(),
                otherNeg = other.isNegative();
            if (thisNeg && !otherNeg) return -1;
            if (!thisNeg && otherNeg) return 1;
            if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
            return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
        }
    }, {
        key: "negate",
        value: function negate() {
            if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
            return this.not().add(ONE);
        }
    }, {
        key: "absolute",
        value: function absolute() {
            if (!this.unsigned && this.isNegative()) return this.negate();else return this;
        }
    }, {
        key: "add",
        value: function add(addend) {
            if (!isLong(addend)) addend = fromValue(addend);
            var a48 = this.high >>> 16;
            var a32 = this.high & 0xFFFF;
            var a16 = this.low >>> 16;
            var a00 = this.low & 0xFFFF;
            var b48 = addend.high >>> 16;
            var b32 = addend.high & 0xFFFF;
            var b16 = addend.low >>> 16;
            var b00 = addend.low & 0xFFFF;
            var c48 = 0,
                c32 = 0,
                c16 = 0,
                c00 = 0;
            c00 += a00 + b00;
            c16 += c00 >>> 16;
            c00 &= 0xFFFF;
            c16 += a16 + b16;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c32 += a32 + b32;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c48 += a48 + b48;
            c48 &= 0xFFFF;
            return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        }
    }, {
        key: "subtract",
        value: function subtract(subtrahend) {
            if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
            return this.add(subtrahend.neg());
        }
    }, {
        key: "multiply",
        value: function multiply(multiplier) {
            if (this.isZero()) return ZERO;
            if (!isLong(multiplier)) multiplier = fromValue(multiplier);
            if (multiplier.isZero()) return ZERO;
            if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
            if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
            if (this.isNegative()) {
                if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());else return this.neg().mul(multiplier).neg();
            } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();
            if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
            var a48 = this.high >>> 16;
            var a32 = this.high & 0xFFFF;
            var a16 = this.low >>> 16;
            var a00 = this.low & 0xFFFF;
            var b48 = multiplier.high >>> 16;
            var b32 = multiplier.high & 0xFFFF;
            var b16 = multiplier.low >>> 16;
            var b00 = multiplier.low & 0xFFFF;
            var c48 = 0,
                c32 = 0,
                c16 = 0,
                c00 = 0;
            c00 += a00 * b00;
            c16 += c00 >>> 16;
            c00 &= 0xFFFF;
            c16 += a16 * b00;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c16 += a00 * b16;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c32 += a32 * b00;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c32 += a16 * b16;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c32 += a00 * b32;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
            c48 &= 0xFFFF;
            return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        }
    }, {
        key: "divide",
        value: function divide(divisor) {
            if (!isLong(divisor)) divisor = fromValue(divisor);
            if (divisor.isZero()) throw Error("division by zero");
            if (this.isZero()) return this.unsigned ? UZERO : ZERO;
            var approx = 0,
                rem = ZERO,
                res = ZERO;
            if (!this.unsigned) {
                if (this.eq(MIN_VALUE)) {
                    if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE;else if (divisor.eq(MIN_VALUE)) return ONE;else {
                        var halfThis = this.shr(1);
                        var _approx = halfThis.div(divisor).shl(1);
                        if (_approx.eq(ZERO)) {
                            return divisor.isNegative() ? ONE : NEG_ONE;
                        } else {
                            rem = this.sub(divisor.mul(_approx));
                            res = _approx.add(rem.div(divisor));
                            return res;
                        }
                    }
                } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
                if (this.isNegative()) {
                    if (divisor.isNegative()) return this.neg().div(divisor.neg());
                    return this.neg().div(divisor).neg();
                } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
                res = ZERO;
            } else {
                if (!divisor.unsigned) divisor = divisor.toUnsigned();
                if (divisor.gt(this)) return UZERO;
                if (divisor.gt(this.shru(1))) return UONE;
                res = UZERO;
            }
            rem = this;
            while (rem.gte(divisor)) {
                approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
                var log2 = Math.ceil(Math.log(approx) / Math.LN2),
                    delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),
                    approxRes = fromNumber(approx),
                    approxRem = approxRes.mul(divisor);
                while (approxRem.isNegative() || approxRem.gt(rem)) {
                    approx -= delta;
                    approxRes = fromNumber(approx, this.unsigned);
                    approxRem = approxRes.mul(divisor);
                }
                if (approxRes.isZero()) approxRes = ONE;
                res = res.add(approxRes);
                rem = rem.sub(approxRem);
            }
            return res;
        }
    }, {
        key: "modulo",
        value: function modulo(divisor) {
            if (!isLong(divisor)) divisor = fromValue(divisor);
            return this.sub(this.div(divisor).mul(divisor));
        }
    }, {
        key: "not",
        value: function not() {
            return fromBits(~this.low, ~this.high, this.unsigned);
        }
    }, {
        key: "and",
        value: function and(other) {
            if (!isLong(other)) other = fromValue(other);
            return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
        }
    }, {
        key: "or",
        value: function or(other) {
            if (!isLong(other)) other = fromValue(other);
            return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
        }
    }, {
        key: "xor",
        value: function xor(other) {
            if (!isLong(other)) other = fromValue(other);
            return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
        }
    }, {
        key: "shiftLeft",
        value: function shiftLeft(numBits) {
            if (isLong(numBits)) numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0) return this;else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);else return fromBits(0, this.low << numBits - 32, this.unsigned);
        }
    }, {
        key: "shiftRight",
        value: function shiftRight(numBits) {
            if (isLong(numBits)) numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0) return this;else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        }
    }, {
        key: "shiftRightUnsigned",
        value: function shiftRightUnsigned(numBits) {
            if (isLong(numBits)) numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0) return this;else {
                var high = this.high;
                if (numBits < 32) {
                    var low = this.low;
                    return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
                } else if (numBits === 32) return fromBits(high, 0, this.unsigned);else return fromBits(high >>> numBits - 32, 0, this.unsigned);
            }
        }
    }, {
        key: "toSigned",
        value: function toSigned() {
            if (!this.unsigned) return this;
            return fromBits(this.low, this.high, false);
        }
    }, {
        key: "toUnsigned",
        value: function toUnsigned() {
            if (this.unsigned) return this;
            return fromBits(this.low, this.high, true);
        }
    }, {
        key: "toBytes",
        value: function toBytes(le) {
            return le ? this.toBytesLE() : this.toBytesBE();
        }
    }, {
        key: "toBytesLE",
        value: function toBytesLE() {
            var hi = this.high,
                lo = this.low;
            return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24 & 0xff, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24 & 0xff];
        }
    }, {
        key: "toBytesBE",
        value: function toBytesBE() {
            var hi = this.high,
                lo = this.low;
            return [hi >>> 24 & 0xff, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24 & 0xff, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "System.Int64",
                interfaces: ["FSharpRecord", "System.IComparable"],
                properties: {
                    low: "number",
                    high: "number",
                    unsigned: "boolean"
                }
            };
        }
    }]);

    return Long;
}();
var INT_CACHE = {};
var UINT_CACHE = {};
function isLong(obj) {
    return obj && obj instanceof Long;
}
function fromInt(value) {
    var unsigned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = 0 <= value && value < 256) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache) UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = -128 <= value && value < 128) {
            cachedObj = INT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache) INT_CACHE[value] = obj;
        return obj;
    }
}
function fromNumber(value) {
    var unsigned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (isNaN(value) || !isFinite(value)) return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0) return UZERO;
        if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
    }
    if (value < 0) return fromNumber(-value, unsigned).neg();
    return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
}
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
var pow_dbl = Math.pow;
function fromString(str) {
    var unsigned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    if (str.length === 0) throw Error("empty string");
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return ZERO;
    if (typeof unsigned === "number") {
        radix = unsigned, unsigned = false;
    } else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix) throw RangeError("radix");
    var p = str.indexOf("-");
    if (p > 0) throw Error("interior hyphen");else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
function fromValue(val) {
    if (val instanceof Long) return val;
    if (typeof val === "number") return fromNumber(val);
    if (typeof val === "string") return fromString(val);
    return fromBits(val.low, val.high, val.unsigned);
}
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
var ZERO = fromInt(0);
var UZERO = fromInt(0, true);
var ONE = fromInt(1);
var UONE = fromInt(1, true);
var NEG_ONE = fromInt(-1);
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__List__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Comparer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Symbol__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Seq__ = __webpack_require__(0);
/* unused harmony export distinctBy */
/* unused harmony export distinct */
/* unused harmony export SetTree */
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* unused harmony export isEmpty */
/* unused harmony export add */
/* unused harmony export addInPlace */
/* unused harmony export remove */
/* unused harmony export union */
/* unused harmony export op_Addition */
/* unused harmony export unionInPlace */
/* unused harmony export unionMany */
/* unused harmony export difference */
/* unused harmony export op_Subtraction */
/* unused harmony export differenceInPlace */
/* unused harmony export intersect */
/* unused harmony export intersectInPlace */
/* unused harmony export intersectMany */
/* unused harmony export isProperSubsetOf */
/* unused harmony export isProperSubset */
/* unused harmony export isSubsetOf */
/* unused harmony export isSubset */
/* unused harmony export isProperSupersetOf */
/* unused harmony export isProperSuperset */
/* unused harmony export isSupersetOf */
/* unused harmony export isSuperset */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* unused harmony export filter */
/* unused harmony export map */
/* unused harmony export exists */
/* unused harmony export forAll */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export iterate */
/* unused harmony export minimumElement */
/* unused harmony export minElement */
/* unused harmony export maximumElement */
/* unused harmony export maxElement */


















function distinctBy(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["i" /* choose */])(function (tup) {
        return tup[0];
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["r" /* scan */])(function (tup, x) {
        var acc = tup[1];
        var k = f(x);
        return acc.has(k) ? [null, acc] : [x, add(k, acc)];
    }, [null, create()], xs));
}
function distinct(xs) {
    return distinctBy(function (x) {
        return x;
    }, xs);
}
var SetTree = function SetTree(tag, data) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, SetTree);

    this.tag = tag | 0;
    this.data = data;
};
var tree_tolerance = 2;
function tree_countAux(s, acc) {
    countAux: while (true) {
        if (s.tag === 1) {
            return acc + 1 | 0;
        } else if (s.tag === 0) {
            return acc | 0;
        } else {
            var _var5 = s.data[1];
            acc = tree_countAux(s.data[2], acc + 1);
            s = _var5;
            continue countAux;
        }
    }
}
function tree_count(s) {
    return tree_countAux(s, 0);
}
function tree_SetOne(n) {
    return new SetTree(1, [n]);
}
function tree_SetNode(x, l, r, h) {
    return new SetTree(2, [x, l, r, h]);
}
function tree_height(t) {
    return t.tag === 1 ? 1 : t.tag === 2 ? t.data[3] : 0;
}
function tree_mk(l, k, r) {
    var matchValue = l.tag === 0 ? r.tag === 0 ? 0 : 1 : 1;
    switch (matchValue) {
        case 0:
            return tree_SetOne(k);
        case 1:
            var hl = tree_height(l) | 0;
            var hr = tree_height(r) | 0;
            var m = (hl < hr ? hr : hl) | 0;
            return tree_SetNode(k, l, r, m + 1);
    }
    throw new Error("internal error: Set.tree_mk");
}
function tree_rebalance(t1, k, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + tree_tolerance) {
        if (t2.tag === 2) {
            if (tree_height(t2.data[1]) > t1h + 1) {
                if (t2.data[1].tag === 2) {
                    return tree_mk(tree_mk(t1, k, t2.data[1].data[1]), t2.data[1].data[0], tree_mk(t2.data[1].data[2], t2.data[0], t2.data[2]));
                } else {
                    throw new Error("rebalance");
                }
            } else {
                return tree_mk(tree_mk(t1, k, t2.data[1]), t2.data[0], t2.data[2]);
            }
        } else {
            throw new Error("rebalance");
        }
    } else {
        if (t1h > t2h + tree_tolerance) {
            if (t1.tag === 2) {
                if (tree_height(t1.data[2]) > t2h + 1) {
                    if (t1.data[2].tag === 2) {
                        return tree_mk(tree_mk(t1.data[1], t1.data[0], t1.data[2].data[1]), t1.data[2].data[0], tree_mk(t1.data[2].data[2], k, t2));
                    } else {
                        throw new Error("rebalance");
                    }
                } else {
                    return tree_mk(t1.data[1], t1.data[0], tree_mk(t1.data[2], k, t2));
                }
            } else {
                throw new Error("rebalance");
            }
        } else {
            return tree_mk(t1, k, t2);
        }
    }
}
function tree_add(comparer, k, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(k, t.data[0]);
        if (c < 0) {
            return tree_SetNode(k, new SetTree(0), t, 2);
        } else if (c === 0) {
            return t;
        } else {
            return tree_SetNode(k, t, new SetTree(0), 2);
        }
    } else if (t.tag === 0) {
        return tree_SetOne(k);
    } else {
        var _c = comparer.Compare(k, t.data[0]);
        if (_c < 0) {
            return tree_rebalance(tree_add(comparer, k, t.data[1]), t.data[0], t.data[2]);
        } else if (_c === 0) {
            return t;
        } else {
            return tree_rebalance(t.data[1], t.data[0], tree_add(comparer, k, t.data[2]));
        }
    }
}
function tree_balance(comparer, t1, k, t2) {
    var matchValue = t1.tag === 2 ? t2.tag === 0 ? [1, t1] : t2.tag === 2 ? [2, t1.data[0], t2] : [2, t1.data[0], t2] : t1.tag === 1 ? t2.tag === 2 ? [3, t2.data[0], t1] : t2.tag === 1 ? [4, t1.data[3], t2.data[3], t1.data[0], t2.data[0], t1.data[1], t1.data[2], t2.data[1], t2.data[2]] : [1, t1] : [0, t2];
    switch (matchValue[0]) {
        case 0:
            return tree_add(comparer, k, matchValue[1]);
        case 1:
            return tree_add(comparer, k, matchValue[1]);
        case 2:
            return tree_add(comparer, k, tree_add(comparer, matchValue[1], matchValue[2]));
        case 3:
            return tree_add(comparer, k, tree_add(comparer, matchValue[1], matchValue[2]));
        case 4:
            if (matchValue[1] + tree_tolerance < matchValue[2]) {
                return tree_rebalance(tree_balance(comparer, t1, k, matchValue[7]), matchValue[4], matchValue[8]);
            } else if (matchValue[2] + tree_tolerance < matchValue[1]) {
                return tree_rebalance(matchValue[5], matchValue[3], tree_balance(comparer, matchValue[6], k, t2));
            } else {
                return tree_mk(t1, k, t2);
            }
    }
    throw new Error("internal error: Set.tree_balance");
}
function tree_split(comparer, pivot, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(t.data[0], pivot);
        if (c < 0) {
            return [t, false, new SetTree(0)];
        } else if (c === 0) {
            return [new SetTree(0), true, new SetTree(0)];
        } else {
            return [new SetTree(0), false, t];
        }
    } else if (t.tag === 0) {
        return [new SetTree(0), false, new SetTree(0)];
    } else {
        var _c2 = comparer.Compare(pivot, t.data[0]);
        if (_c2 < 0) {
            var patternInput = tree_split(comparer, pivot, t.data[1]);
            return [patternInput[0], patternInput[1], tree_balance(comparer, patternInput[2], t.data[0], t.data[2])];
        } else if (_c2 === 0) {
            return [t.data[1], true, t.data[2]];
        } else {
            var _patternInput = tree_split(comparer, pivot, t.data[2]);
            return [tree_balance(comparer, t.data[1], t.data[0], _patternInput[0]), _patternInput[1], _patternInput[2]];
        }
    }
}
function tree_spliceOutSuccessor(t) {
    if (t.tag === 1) {
        return [t.data[0], new SetTree(0)];
    } else if (t.tag === 2) {
        if (t.data[1].tag === 0) {
            return [t.data[0], t.data[2]];
        } else {
            var patternInput = tree_spliceOutSuccessor(t.data[1]);
            return [patternInput[0], tree_mk(patternInput[1], t.data[0], t.data[2])];
        }
    } else {
        throw new Error("internal error: Map.spliceOutSuccessor");
    }
}
function tree_remove(comparer, k, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(k, t.data[0]);
        if (c === 0) {
            return new SetTree(0);
        } else {
            return t;
        }
    } else if (t.tag === 2) {
        var _c3 = comparer.Compare(k, t.data[0]);
        if (_c3 < 0) {
            return tree_rebalance(tree_remove(comparer, k, t.data[1]), t.data[0], t.data[2]);
        } else if (_c3 === 0) {
            var matchValue = [t.data[1], t.data[2]];
            if (matchValue[0].tag === 0) {
                return t.data[2];
            } else if (matchValue[1].tag === 0) {
                return t.data[1];
            } else {
                var patternInput = tree_spliceOutSuccessor(t.data[2]);
                return tree_mk(t.data[1], patternInput[0], patternInput[1]);
            }
        } else {
            return tree_rebalance(t.data[1], t.data[0], tree_remove(comparer, k, t.data[2]));
        }
    } else {
        return t;
    }
}
function tree_mem(comparer, k, t) {
    mem: while (true) {
        if (t.tag === 1) {
            return comparer.Compare(k, t.data[0]) === 0;
        } else if (t.tag === 0) {
            return false;
        } else {
            var c = comparer.Compare(k, t.data[0]) | 0;
            if (c < 0) {
                comparer = comparer;
                k = k;
                t = t.data[1];
                continue mem;
            } else if (c === 0) {
                return true;
            } else {
                comparer = comparer;
                k = k;
                t = t.data[2];
                continue mem;
            }
        }
    }
}
function tree_iter(f, t) {
    if (t.tag === 1) {
        f(t.data[0]);
    } else {
        if (t.tag === 0) {} else {
            tree_iter(f, t.data[1]);
            f(t.data[0]);
            tree_iter(f, t.data[2]);
        }
    }
}
function tree_foldBack(f, m, x) {
    return m.tag === 1 ? f(m.data[0], x) : m.tag === 0 ? x : tree_foldBack(f, m.data[1], f(m.data[0], tree_foldBack(f, m.data[2], x)));
}
function tree_fold(f, x, m) {
    if (m.tag === 1) {
        return f(x, m.data[0]);
    } else if (m.tag === 0) {
        return x;
    } else {
        var x_1 = tree_fold(f, x, m.data[1]);
        var x_2 = f(x_1, m.data[0]);
        return tree_fold(f, x_2, m.data[2]);
    }
}
function tree_forall(f, m) {
    return m.tag === 1 ? f(m.data[0]) : m.tag === 0 ? true : (f(m.data[0]) ? tree_forall(f, m.data[1]) : false) ? tree_forall(f, m.data[2]) : false;
}
function tree_exists(f, m) {
    return m.tag === 1 ? f(m.data[0]) : m.tag === 0 ? false : (f(m.data[0]) ? true : tree_exists(f, m.data[1])) ? true : tree_exists(f, m.data[2]);
}
function tree_isEmpty(m) {
    return m.tag === 0 ? true : false;
}
function tree_subset(comparer, a, b) {
    return tree_forall(function (x) {
        return tree_mem(comparer, x, b);
    }, a);
}
function tree_psubset(comparer, a, b) {
    return tree_forall(function (x) {
        return tree_mem(comparer, x, b);
    }, a) ? tree_exists(function (x) {
        return !tree_mem(comparer, x, a);
    }, b) : false;
}
function tree_filterAux(comparer, f, s, acc) {
    if (s.tag === 1) {
        if (f(s.data[0])) {
            return tree_add(comparer, s.data[0], acc);
        } else {
            return acc;
        }
    } else if (s.tag === 0) {
        return acc;
    } else {
        var acc_1 = f(s.data[0]) ? tree_add(comparer, s.data[0], acc) : acc;
        return tree_filterAux(comparer, f, s.data[1], tree_filterAux(comparer, f, s.data[2], acc_1));
    }
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, new SetTree(0));
}
function tree_diffAux(comparer, m, acc) {
    diffAux: while (true) {
        if (m.tag === 1) {
            return tree_remove(comparer, m.data[0], acc);
        } else if (m.tag === 0) {
            return acc;
        } else {
            var _var6 = comparer;
            var _var7 = m.data[1];
            acc = tree_diffAux(comparer, m.data[2], tree_remove(comparer, m.data[0], acc));
            comparer = _var6;
            m = _var7;
            continue diffAux;
        }
    }
}
function tree_diff(comparer, a, b) {
    return tree_diffAux(comparer, b, a);
}
function tree_union(comparer, t1, t2) {
    var matchValue = t1.tag === 0 ? [1, t2] : t1.tag === 1 ? t2.tag === 0 ? [2, t1] : t2.tag === 1 ? [3, t1.data[0], t2] : [3, t1.data[0], t2] : t2.tag === 0 ? [2, t1] : t2.tag === 1 ? [4, t2.data[0], t1] : [0, t1.data[3], t2.data[3], t1.data[0], t2.data[0], t1.data[1], t1.data[2], t2.data[1], t2.data[2]];
    switch (matchValue[0]) {
        case 0:
            if (matchValue[1] > matchValue[2]) {
                var patternInput = tree_split(comparer, matchValue[3], t2);
                return tree_balance(comparer, tree_union(comparer, matchValue[5], patternInput[0]), matchValue[3], tree_union(comparer, matchValue[6], patternInput[2]));
            } else {
                var patternInput_1 = tree_split(comparer, matchValue[4], t1);
                return tree_balance(comparer, tree_union(comparer, matchValue[7], patternInput_1[0]), matchValue[4], tree_union(comparer, matchValue[8], patternInput_1[2]));
            }
        case 1:
            return matchValue[1];
        case 2:
            return matchValue[1];
        case 3:
            return tree_add(comparer, matchValue[1], matchValue[2]);
        case 4:
            return tree_add(comparer, matchValue[1], matchValue[2]);
    }
    throw new Error("internal error: Set.tree_union");
}
function tree_intersectionAux(comparer, b, m, acc) {
    intersectionAux: while (true) {
        if (m.tag === 1) {
            if (tree_mem(comparer, m.data[0], b)) {
                return tree_add(comparer, m.data[0], acc);
            } else {
                return acc;
            }
        } else if (m.tag === 0) {
            return acc;
        } else {
            var acc_1 = tree_intersectionAux(comparer, b, m.data[2], acc);
            var acc_2 = tree_mem(comparer, m.data[0], b) ? tree_add(comparer, m.data[0], acc_1) : acc_1;
            comparer = comparer;
            b = b;
            m = m.data[1];
            acc = acc_2;
            continue intersectionAux;
        }
    }
}
function tree_intersection(comparer, a, b) {
    return tree_intersectionAux(comparer, b, a, new SetTree(0));
}
function tree_partition1(comparer, f, k, acc1, acc2) {
    return f(k) ? [tree_add(comparer, k, acc1), acc2] : [acc1, tree_add(comparer, k, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.tag === 1) {
        return tree_partition1(comparer, f, s.data[0], acc[0], acc[1]);
    } else if (s.tag === 0) {
        return acc;
    } else {
        var acc_2 = tree_partitionAux(comparer, f, s.data[2], acc[0], acc[1]);
        var acc_3 = tree_partition1(comparer, f, s.data[0], acc_2[0], acc_2[1]);
        return tree_partitionAux(comparer, f, s.data[1], acc_3[0], acc_3[1]);
    }
}
function tree_partition(comparer, f, s) {
    return tree_partitionAux(comparer, f, s, new SetTree(0), new SetTree(0));
}
function tree_minimumElementAux(s, n) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? n : tree_minimumElementAux(s.data[1], s.data[0]);
}
function tree_minimumElementOpt(s) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? null : tree_minimumElementAux(s.data[1], s.data[0]);
}
function tree_maximumElementAux(s, n) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? n : tree_maximumElementAux(s.data[2], s.data[0]);
}
function tree_maximumElementOpt(s) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? null : tree_maximumElementAux(s.data[2], s.data[0]);
}
function tree_minimumElement(s) {
    var matchValue = tree_minimumElementOpt(s);
    if (matchValue == null) {
        throw new Error("Set contains no elements");
    } else {
        return matchValue;
    }
}
function tree_maximumElement(s) {
    var matchValue = tree_maximumElementOpt(s);
    if (matchValue == null) {
        throw new Error("Set contains no elements");
    } else {
        return matchValue;
    }
}
function tree_collapseLHS(stack) {
    collapseLHS: while (true) {
        if (stack.tail != null) {
            if (stack.head.tag === 1) {
                return stack;
            } else if (stack.head.tag === 2) {
                stack = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__List__["b" /* ofArray */])([stack.head.data[1], tree_SetOne(stack.head.data[0]), stack.head.data[2]], stack.tail);
                continue collapseLHS;
            } else {
                stack = stack.tail;
                continue collapseLHS;
            }
        } else {
            return new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */]();
        }
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */](s, new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */]())), started: false };
}
;
function tree_moveNext(i) {
    function current(i) {
        if (i.stack.tail == null) {
            return null;
        } else if (i.stack.head.tag === 1) {
            return i.stack.head.data[0];
        }
        throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        } else {
            if (i.stack.head.tag === 1) {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            } else {
                throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
            }
        }
    } else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
    ;
}
function tree_compareStacks(comparer, l1, l2) {
    compareStacks: while (true) {
        var matchValue = l1.tail != null ? l2.tail != null ? l2.head.tag === 1 ? l1.head.tag === 1 ? [4, l1.head.data[0], l2.head.data[0], l1.tail, l2.tail] : l1.head.tag === 2 ? l1.head.data[1].tag === 0 ? [6, l1.head.data[1], l1.head.data[0], l1.head.data[2], l2.head.data[0], l1.tail, l2.tail] : [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [10, l2.head.data[0], l2.tail] : l2.head.tag === 2 ? l2.head.data[1].tag === 0 ? l1.head.tag === 1 ? [5, l1.head.data[0], l2.head.data[0], l2.head.data[2], l1.tail, l2.tail] : l1.head.tag === 2 ? l1.head.data[1].tag === 0 ? [7, l1.head.data[0], l1.head.data[2], l2.head.data[0], l2.head.data[2], l1.tail, l2.tail] : [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [11, l2.head.data[0], l2.head.data[1], l2.head.data[2], l2.tail] : l1.head.tag === 1 ? [8, l1.head.data[0], l1.tail] : l1.head.tag === 2 ? [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [11, l2.head.data[0], l2.head.data[1], l2.head.data[2], l2.tail] : l1.head.tag === 1 ? [8, l1.head.data[0], l1.tail] : l1.head.tag === 2 ? [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [3, l1.tail, l2.tail] : [2] : l2.tail != null ? [1] : [0];
        switch (matchValue[0]) {
            case 0:
                return 0;
            case 1:
                return -1;
            case 2:
                return 1;
            case 3:
                comparer = comparer;
                l1 = matchValue[1];
                l2 = matchValue[2];
                continue compareStacks;
            case 4:
                var c = comparer.Compare(matchValue[1], matchValue[2]) | 0;
                if (c !== 0) {
                    return c | 0;
                } else {
                    comparer = comparer;
                    l1 = matchValue[3];
                    l2 = matchValue[4];
                    continue compareStacks;
                }
            case 5:
                var c_1 = comparer.Compare(matchValue[1], matchValue[2]) | 0;
                if (c_1 !== 0) {
                    return c_1 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */](new SetTree(0), matchValue[4]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */](matchValue[3], matchValue[5]);
                    continue compareStacks;
                }
            case 6:
                var c_2 = comparer.Compare(matchValue[2], matchValue[4]) | 0;
                if (c_2 !== 0) {
                    return c_2 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */](matchValue[3], matchValue[5]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */](matchValue[1], matchValue[6]);
                    continue compareStacks;
                }
            case 7:
                var c_3 = comparer.Compare(matchValue[1], matchValue[3]) | 0;
                if (c_3 !== 0) {
                    return c_3 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */](matchValue[2], matchValue[5]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_6__List__["a" /* default */](matchValue[4], matchValue[6]);
                    continue compareStacks;
                }
            case 8:
                comparer = comparer;
                l1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__List__["b" /* ofArray */])([new SetTree(0), tree_SetOne(matchValue[1])], matchValue[2]);
                l2 = l2;
                continue compareStacks;
            case 9:
                comparer = comparer;
                l1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__List__["b" /* ofArray */])([matchValue[2], tree_SetNode(matchValue[1], new SetTree(0), matchValue[3], 0)], matchValue[4]);
                l2 = l2;
                continue compareStacks;
            case 10:
                comparer = comparer;
                l1 = l1;
                l2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__List__["b" /* ofArray */])([new SetTree(0), tree_SetOne(matchValue[1])], matchValue[2]);
                continue compareStacks;
            case 11:
                comparer = comparer;
                l1 = l1;
                l2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__List__["b" /* ofArray */])([matchValue[2], tree_SetNode(matchValue[1], new SetTree(0), matchValue[3], 0)], matchValue[4]);
                continue compareStacks;
        }
    }
}
function tree_compare(comparer, s1, s2) {
    if (s1.tag === 0) {
        return s2.tag === 0 ? 0 : -1;
    } else {
        return s2.tag === 0 ? 1 : tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__List__["b" /* ofArray */])([s1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__List__["b" /* ofArray */])([s2]));
    }
}
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value, acc);
        cur = e.next();
    }
    return acc;
}
function tree_ofSeq(comparer, c) {
    var ie = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(c);
    return tree_mkFromEnumerator(comparer, new SetTree(0), ie);
}

var FableSet = function () {
    function FableSet() {
        __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, FableSet);
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FableSet, [{
        key: "ToString",
        value: function ToString() {
            return "set [" + __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from___default()(this).map(function (x) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Util__["c" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(s2) {
            return this.CompareTo(s2) === 0;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(s2) {
            return this === s2 ? 0 : tree_compare(this.comparer, this.tree, s2.tree);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol_iterator___default.a,
        value: function value() {
            var i = tree_mkIterator(this.tree);
            return {
                next: function next() {
                    return tree_moveNext(i);
                }
            };
        }
    }, {
        key: "values",
        value: function values() {
            return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(this);
        }
    }, {
        key: "has",
        value: function has(v) {
            return tree_mem(this.comparer, v, this.tree);
        }
    }, {
        key: "add",
        value: function add(v) {
            this.tree = tree_add(this.comparer, v, this.tree);
            return this;
        }
    }, {
        key: "delete",
        value: function _delete(v) {
            var oldSize = tree_count(this.tree);
            this.tree = tree_remove(this.comparer, v, this.tree);
            return oldSize > tree_count(this.tree);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.tree = new SetTree(0);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpSet",
                interfaces: ["System.IEquatable", "System.IComparable"]
            };
        }
    }, {
        key: "size",
        get: function get() {
            return tree_count(this.tree);
        }
    }]);

    return FableSet;
}();

/* harmony default export */ __webpack_exports__["a"] = (FableSet);

function from(comparer, tree) {
    var s = new FableSet();
    s.tree = tree;
    s.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_8__Comparer__["a" /* default */]();
    return s;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_8__Comparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : new SetTree(0));
}
function isEmpty(s) {
    return tree_isEmpty(s.tree);
}
function add(item, s) {
    return from(s.comparer, tree_add(s.comparer, item, s.tree));
}
function addInPlace(item, s) {
    return s.has(item) ? false : (s.add(item), true);
}
function remove(item, s) {
    return from(s.comparer, tree_remove(s.comparer, item, s.tree));
}
function union(set1, set2) {
    return set2.tree.tag === 0 ? set1 : set1.tree.tag === 0 ? set2 : from(set1.comparer, tree_union(set1.comparer, set1.tree, set2.tree));
}
function op_Addition(set1, set2) {
    return union(set1, set2);
}
function unionInPlace(set1, set2) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["s" /* iterate */])(function (x) {
        set1.add(x);
    }, set2);
}
function unionMany(sets) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["k" /* fold */])(function (acc, s) {
        return union(s, acc);
    }, create(), sets);
}
function difference(set1, set2) {
    return set1.tree.tag === 0 ? set1 : set2.tree.tag === 0 ? set1 : from(set1.comparer, tree_diff(set1.comparer, set1.tree, set2.tree));
}
function op_Subtraction(set1, set2) {
    return difference(set1, set2);
}
function differenceInPlace(set1, set2) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["s" /* iterate */])(function (x) {
        set1.delete(x);
    }, set2);
}
function intersect(set1, set2) {
    return set2.tree.tag === 0 ? set2 : set1.tree.tag === 0 ? set1 : from(set1.comparer, tree_intersection(set1.comparer, set1.tree, set2.tree));
}
function intersectInPlace(set1, set2) {
    var set2_ = set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["s" /* iterate */])(function (x) {
        if (!set2_.has(x)) {
            set1.delete(x);
        }
    }, set1);
}
function intersectMany(sets) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["h" /* reduce */])(function (s1, s2) {
        return intersect(s1, s2);
    }, sets);
}
function isProperSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set1.tree, set2.tree);
    } else {
        set2 = set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["t" /* forAll */])(function (x) {
            return set2.has(x);
        }, set1) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["m" /* exists */])(function (x) {
            return !set1.has(x);
        }, set2);
    }
}
function isProperSubset(set1, set2) {
    return isProperSubsetOf(set1, set2);
}
function isSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_subset(set1.comparer, set1.tree, set2.tree);
    } else {
        set2 = set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Seq__["t" /* forAll */])(function (x) {
            return set2.has(x);
        }, set1);
    }
}
function isSubset(set1, set2) {
    return isSubsetOf(set1, set2);
}
function isProperSupersetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set2.tree, set1.tree);
    } else {
        return isProperSubset(set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2), set1);
    }
}
function isProperSuperset(set1, set2) {
    return isProperSupersetOf(set1, set2);
}
function isSupersetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_subset(set1.comparer, set2.tree, set1.tree);
    } else {
        return isSubset(set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2), set1);
    }
}
function isSuperset(set1, set2) {
    return isSupersetOf(set1, set2);
}
function copyTo(xs, arr, arrayIndex, count) {
    if (!Array.isArray(arr) && !ArrayBuffer.isView(arr)) throw new Error("Array is invalid");
    count = count || arr.length;
    var i = arrayIndex || 0;
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    while (count--) {
        var el = iter.next();
        if (el.done) break;
        arr[i++] = el.value;
    }
}
function partition(f, s) {
    if (s.tree.tag === 0) {
        return [s, s];
    } else {
        var tuple = tree_partition(s.comparer, f, s.tree);
        return [from(s.comparer, tuple[0]), from(s.comparer, tuple[1])];
    }
}
function filter(f, s) {
    if (s.tree.tag === 0) {
        return s;
    } else {
        return from(s.comparer, tree_filter(s.comparer, f, s.tree));
    }
}
function map(f, s) {
    var comparer = new __WEBPACK_IMPORTED_MODULE_8__Comparer__["a" /* default */]();
    return from(comparer, tree_fold(function (acc, k) {
        return tree_add(comparer, f(k), acc);
    }, new SetTree(0), s.tree));
}
function exists(f, s) {
    return tree_exists(f, s.tree);
}
function forAll(f, s) {
    return tree_forall(f, s.tree);
}
function fold(f, seed, s) {
    return tree_fold(f, seed, s.tree);
}
function foldBack(f, s, seed) {
    return tree_foldBack(f, s.tree, seed);
}
function iterate(f, s) {
    tree_iter(f, s.tree);
}
function minimumElement(s) {
    return tree_minimumElement(s.tree);
}
function minElement(s) {
    return tree_minimumElement(s.tree);
}
function maximumElement(s) {
    return tree_maximumElement(s.tree);
}
function maxElement(s) {
    return tree_maximumElement(s.tree);
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RegExp__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Date__ = __webpack_require__(17);
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export startsWith */
/* unused harmony export indexOfAny */
/* harmony export (immutable) */ __webpack_exports__["a"] = fsFormat;
/* unused harmony export format */
/* unused harmony export endsWith */
/* unused harmony export initialize */
/* unused harmony export insert */
/* unused harmony export isNullOrEmpty */
/* unused harmony export isNullOrWhiteSpace */
/* unused harmony export join */
/* unused harmony export newGuid */
/* unused harmony export padLeft */
/* unused harmony export padRight */
/* unused harmony export remove */
/* unused harmony export replace */
/* unused harmony export replicate */
/* unused harmony export getCharAtIndex */
/* unused harmony export split */
/* unused harmony export trim */










var fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
var StringComparison = {
    CurrentCulture: 0,
    CurrentCultureIgnoreCase: 1,
    InvariantCulture: 2,
    InvariantCultureIgnoreCase: 3,
    Ordinal: 4,
    OrdinalIgnoreCase: 5
};
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true || i === StringComparison.CurrentCultureIgnoreCase || i === StringComparison.InvariantCultureIgnoreCase || i === StringComparison.OrdinalIgnoreCase;
    }
    function isOrdinal(i) {
        return i === StringComparison.Ordinal || i === StringComparison.OrdinalIgnoreCase;
    }
    if (x == null) return y == null ? 0 : -1;
    if (y == null) return 1;
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x === y ? 0 : x < y ? -1 : 1;
    } else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    switch (args.length) {
        case 2:
            return cmp(args[0], args[1], false);
        case 3:
            return cmp(args[0], args[1], args[2]);
        case 4:
            return cmp(args[0], args[1], args[2] === true);
        case 5:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default:
            throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareTo(x, y) {
    return cmp(x, y, false);
}
function startsWith(str, pattern, ic) {
    if (str.length >= pattern.length) {
        return cmp(str.substr(0, pattern.length), pattern, ic) === 0;
    }
    return false;
}
function indexOfAny(str, anyOf) {
    if (str == null || str === "") return -1;
    var startIndex = (arguments.length <= 2 ? 0 : arguments.length - 2) > 0 ? arguments.length <= 2 ? undefined : arguments[2] : 0;
    if (startIndex < 0) throw new Error("String.indexOfAny: Start index cannot be negative");
    var length = (arguments.length <= 2 ? 0 : arguments.length - 2) > 1 ? arguments.length <= 3 ? undefined : arguments[3] : str.length - startIndex;
    if (length < 0) throw new Error("String.indexOfAny: Length cannot be negative");
    if (length > str.length - startIndex) throw new Error("String.indexOfAny: Invalid startIndex and length");
    str = str.substr(startIndex, length);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(anyOf), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            var index = str.indexOf(c);
            if (index > -1) return index + startIndex;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return -1;
}
function toHex(value) {
    return value < 0 ? "ff" + (16777215 - (Math.abs(value) - 1)).toString(16) : value.toString(16);
}
function fsFormat(str) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    function formatOnce(str, rep) {
        return str.replace(fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
            switch (format) {
                case "f":
                case "F":
                    rep = rep.toFixed(precision || 6);
                    break;
                case "g":
                case "G":
                    rep = rep.toPrecision(precision);
                    break;
                case "e":
                case "E":
                    rep = rep.toExponential(precision);
                    break;
                case "O":
                    rep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Util__["c" /* toString */])(rep);
                    break;
                case "A":
                    rep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Util__["c" /* toString */])(rep, true);
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
            }
            var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep) >= 0;
            if (!isNaN(pad = parseInt(pad))) {
                var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
                rep = padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
            }
            var once = prefix + (plusPrefix ? "+" + rep : rep);
            return once.replace(/%/g, "%%");
        });
    }
    if (args.length === 0) {
        return function (cont) {
            if (fsFormatRegExp.test(str)) {
                return function () {
                    var strCopy = str;
                    for (var i = 0; i < arguments.length; i++) {
                        strCopy = formatOnce(strCopy, arguments[i]);
                    }
                    return cont(strCopy.replace(/%%/g, "%"));
                };
            } else {
                return cont(str);
            }
        };
    } else {
        for (var i = 0; i < args.length; i++) {
            str = formatOnce(str, args[i]);
        }
        return str.replace(/%%/g, "%");
    }
}
function format(str) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
    }

    return str.replace(formatRegExp, function (match, idx, pad, format) {
        var rep = args[idx],
            padSymbol = " ";
        if (typeof rep === "number") {
            switch ((format || "").substring(0, 1)) {
                case "f":
                case "F":
                    rep = format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
                    break;
                case "g":
                case "G":
                    rep = format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
                    break;
                case "e":
                case "E":
                    rep = format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
                    break;
                case "p":
                case "P":
                    rep = (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
                default:
                    var m = /^(0+)(\.0+)?$/.exec(format);
                    if (m != null) {
                        var decs = 0;
                        if (m[2] != null) rep = rep.toFixed(decs = m[2].length - 1);
                        pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
                        padSymbol = "0";
                    } else if (format) {
                        rep = format;
                    }
            }
        } else if (rep instanceof Date) {
            if (format.length === 1) {
                switch (format) {
                    case "D":
                        rep = rep.toDateString();
                        break;
                    case "T":
                        rep = rep.toLocaleTimeString();
                        break;
                    case "d":
                        rep = rep.toLocaleDateString();
                        break;
                    case "t":
                        rep = rep.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
                        break;
                    case "o":
                    case "O":
                        if (rep.kind === 2) {
                            var offset = rep.getTimezoneOffset() * -1;
                            rep = format("{0:yyyy-MM-dd}T{0:HH:mm}:{1:00.000}{2}{3:00}:{4:00}", rep, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["a" /* second */])(rep), offset >= 0 ? "+" : "-", ~~(offset / 60), offset % 60);
                        } else {
                            rep = rep.toISOString();
                        }
                }
            } else {
                rep = format.replace(/\w+/g, function (match2) {
                    var rep2 = match2;
                    switch (match2.substring(0, 1)) {
                        case "y":
                            rep2 = match2.length < 4 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["b" /* year */])(rep) % 100 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["b" /* year */])(rep);
                            break;
                        case "h":
                            rep2 = rep.getHours() > 12 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["c" /* hour */])(rep) % 12 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["c" /* hour */])(rep);
                            break;
                        case "M":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["d" /* month */])(rep);
                            break;
                        case "d":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["e" /* day */])(rep);
                            break;
                        case "H":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["c" /* hour */])(rep);
                            break;
                        case "m":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["f" /* minute */])(rep);
                            break;
                        case "s":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Date__["a" /* second */])(rep);
                            break;
                    }
                    if (rep2 !== match2 && rep2 < 10 && match2.length > 1) {
                        rep2 = "0" + rep2;
                    }
                    return rep2;
                });
            }
        }
        if (!isNaN(pad = parseInt((pad || "").substring(1)))) {
            rep = padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    var idx = str.lastIndexOf(search);
    return idx >= 0 && idx == str.length - search.length;
}
function initialize(n, f) {
    if (n < 0) throw new Error("String length must be non-negative");
    var xs = new Array(n);
    for (var i = 0; i < n; i++) {
        xs[i] = f(i);
    }return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length == 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function join(delimiter, xs) {
    var xs2 = xs;
    if (typeof xs === "string") {
        var len = arguments.length;
        xs2 = Array(len - 1);
        for (var key = 1; key < len; key++) {
            xs2[key - 1] = arguments[key];
        }
    } else if (!Array.isArray(xs)) {
        xs2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default()(xs);
    }
    return xs2.join(delimiter);
}
function newGuid() {
    var uuid = "";
    for (var i = 0; i < 32; i++) {
        var random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) uuid += "-";
        uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }
    return uuid;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    str = String(str);
    len = len - str.length;
    for (var i = -1; ++i < len;) {
        str = isRight ? str + ch : ch + str;
    }return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && startIndex + count > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__RegExp__["a" /* escape */])(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function getCharAtIndex(input, index) {
    if (index < 0 || index > input.length) {
        throw new Error("System.IndexOutOfRangeException: Index was outside the bounds of the array.");
    }
    return input[index];
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count == "number" ? count : null;
    removeEmpty = typeof removeEmpty == "number" ? removeEmpty : null;
    if (count < 0) throw new Error("Count cannot be less than zero");
    if (count === 0) return [];
    var splitters2 = splitters;
    if (!Array.isArray(splitters)) {
        var len = arguments.length;
        splitters2 = Array(len - 1);
        for (var key = 1; key < len; key++) {
            splitters2[key - 1] = arguments[key];
        }
    }
    splitters2 = splitters2.map(function (x) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__RegExp__["a" /* escape */])(x);
    });
    splitters2 = splitters2.length > 0 ? splitters2 : [" "];
    var m = void 0;
    var i = 0;
    var splits = [];
    var reg = new RegExp(splitters2.join("|"), "g");
    while ((count == null || count > 1) && (m = reg.exec(str)) !== null) {
        if (!removeEmpty || m.index - i > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || str.length - i > 0) splits.push(str.substring(i));
    return splits;
}
function trim(str, side) {
    for (var _len4 = arguments.length, chars = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        chars[_key4 - 2] = arguments[_key4];
    }

    if (side == "both" && chars.length == 0) return str.trim();
    if (side == "start" || side == "both") {
        var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__RegExp__["a" /* escape */])(chars.join("")) + "]+");
        str = str.replace(reg, "");
    }
    if (side == "end" || side == "both") {
        var _reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__RegExp__["a" /* escape */])(chars.join("")) + "]+$");
        str = str.replace(_reg, "");
    }
    return str;
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(61);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(4).f
  , create      = __webpack_require__(45)
  , redefineAll = __webpack_require__(79)
  , ctx         = __webpack_require__(24)
  , anInstance  = __webpack_require__(64)
  , defined     = __webpack_require__(30)
  , forOf       = __webpack_require__(40)
  , $iterDefine = __webpack_require__(42)
  , step        = __webpack_require__(73)
  , setSpecies  = __webpack_require__(121)
  , DESCRIPTORS = __webpack_require__(5)
  , fastKey     = __webpack_require__(44).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(37)
  , from    = __webpack_require__(108);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(6)
  , $export        = __webpack_require__(7)
  , meta           = __webpack_require__(44)
  , fails          = __webpack_require__(15)
  , hide           = __webpack_require__(12)
  , redefineAll    = __webpack_require__(79)
  , forOf          = __webpack_require__(40)
  , anInstance     = __webpack_require__(64)
  , isObject       = __webpack_require__(20)
  , setToStringTag = __webpack_require__(32)
  , dP             = __webpack_require__(4).f
  , each           = __webpack_require__(110)(0)
  , DESCRIPTORS    = __webpack_require__(5);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(15)(function(){
  return Object.defineProperty(__webpack_require__(68)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(21)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(38);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(14);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(31)
  , createDesc     = __webpack_require__(26)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(51)
  , has            = __webpack_require__(16)
  , IE8_DOM_DEFINE = __webpack_require__(69)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13)
  , gOPN      = __webpack_require__(76).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(78)
  , hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(16)
  , toObject    = __webpack_require__(27)
  , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(16)
  , toIObject    = __webpack_require__(13)
  , arrayIndexOf = __webpack_require__(109)(false)
  , IE_PROTO     = __webpack_require__(48)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(12);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_fable_core_String__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game_fs__ = __webpack_require__(140);
/* harmony export (immutable) */ __webpack_exports__["a"] = init;


function init() {
    var canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = 1000;
    canvas.height = 800;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__node_modules_fable_core_String__["a" /* fsFormat */])("%A")(function (x) {
        console.log(x);
    })(__WEBPACK_IMPORTED_MODULE_1__Game_fs__["a" /* cardDeck */]);
}
init();

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["a"] = escape;
/* unused harmony export unescape */
/* unused harmony export isMatch */
/* unused harmony export match */
/* unused harmony export matches */
/* unused harmony export options */
/* unused harmony export replace */
/* unused harmony export split */
function create(pattern, options) {
    var flags = "g";
    flags += options & 1 ? "i" : "";
    flags += options & 2 ? "m" : "";
    return new RegExp(pattern, flags);
}
function escape(str) {
    return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    if (!reg.global) throw new Error("Non-global RegExp");
    var m = void 0;
    var matches = [];
    while ((m = reg.exec(str)) !== null) {
        matches.push(m);
    }return matches;
}
function options(reg) {
    var options = 256;
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit) {
    var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    function replacer() {
        var res = arguments[0];
        if (limit !== 0) {
            limit--;
            var _match = [];
            var len = arguments.length;
            for (var i = 0; i < len - 2; i++) {
                _match.push(arguments[i]);
            }_match.index = arguments[len - 2];
            _match.input = arguments[len - 1];
            res = replacement(_match);
        }
        return res;
    }
    if (typeof reg == "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement == "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    } else {
        if (limit != null) {
            var m = void 0;
            var sub1 = input.substring(offset);
            var _matches = matches(reg, sub1);
            var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
        } else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit) {
    var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (typeof reg == "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Long__ = __webpack_require__(57);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export fromTicks */
/* unused harmony export fromDays */
/* unused harmony export fromHours */
/* unused harmony export fromMinutes */
/* unused harmony export fromSeconds */
/* unused harmony export days */
/* unused harmony export hours */
/* unused harmony export minutes */
/* unused harmony export seconds */
/* unused harmony export milliseconds */
/* unused harmony export ticks */
/* unused harmony export totalDays */
/* unused harmony export totalHours */
/* unused harmony export totalMinutes */
/* unused harmony export totalSeconds */
/* unused harmony export negate */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export duration */


function create() {
    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var ms = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    switch (arguments.length) {
        case 1:
            return fromTicks(arguments[0]);
        case 3:
            d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
            break;
        default:
            d = arguments[0], h = arguments[1], m = arguments[2], s = arguments[3], ms = arguments[4] | 0;
            break;
    }
    return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
}
function fromTicks(ticks) {
    return ticks.div(10000).toNumber();
}
function fromDays(d) {
    return create(d, 0, 0, 0);
}
function fromHours(h) {
    return create(h, 0, 0);
}
function fromMinutes(m) {
    return create(0, m, 0);
}
function fromSeconds(s) {
    return create(0, 0, s);
}
function days(ts) {
    return Math.floor(ts / 86400000);
}
function hours(ts) {
    return Math.floor(ts % 86400000 / 3600000);
}
function minutes(ts) {
    return Math.floor(ts % 3600000 / 60000);
}
function seconds(ts) {
    return Math.floor(ts % 60000 / 1000);
}
function milliseconds(ts) {
    return Math.floor(ts % 1000);
}
function ticks(ts) {
    return __WEBPACK_IMPORTED_MODULE_1__Long__["a" /* fromNumber */](ts).mul(10000);
}
function totalDays(ts) {
    return ts / 86400000;
}
function totalHours(ts) {
    return ts / 3600000;
}
function totalMinutes(ts) {
    return ts / 60000;
}
function totalSeconds(ts) {
    return ts / 1000;
}
function negate(ts) {
    return ts * -1;
}
function add(ts1, ts2) {
    return ts1 + ts2;
}
function subtract(ts1, ts2) {
    return ts1 - ts2;
}
function compare(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */])(x, y);
}
function duration(x) {
    return Math.abs(x);
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(84);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(9);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(19);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(62);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(126);
module.exports = __webpack_require__(1).Array.from;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(22);
module.exports = __webpack_require__(124);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(22);
module.exports = __webpack_require__(125);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(1)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(22);
__webpack_require__(28);
__webpack_require__(128);
__webpack_require__(136);
module.exports = __webpack_require__(1).Map;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
module.exports = __webpack_require__(1).Object.assign;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
var $Object = __webpack_require__(1).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
var $Object = __webpack_require__(1).Object;
module.exports = function getOwnPropertyNames(it){
  return $Object.getOwnPropertyNames(it);
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
module.exports = __webpack_require__(1).Object.getPrototypeOf;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(22);
__webpack_require__(28);
__webpack_require__(134);
__webpack_require__(137);
module.exports = __webpack_require__(1).Set;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
__webpack_require__(55);
__webpack_require__(138);
__webpack_require__(139);
module.exports = __webpack_require__(1).Symbol;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(28);
module.exports = __webpack_require__(53).f('iterator');

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(40);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13)
  , toLength  = __webpack_require__(33)
  , toIndex   = __webpack_require__(123);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(24)
  , IObject  = __webpack_require__(41)
  , toObject = __webpack_require__(27)
  , toLength = __webpack_require__(33)
  , asc      = __webpack_require__(112);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20)
  , isArray  = __webpack_require__(71)
  , SPECIES  = __webpack_require__(3)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(111);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4)
  , createDesc      = __webpack_require__(26);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25)
  , gOPS    = __webpack_require__(46)
  , pIE     = __webpack_require__(31);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(45)
  , descriptor     = __webpack_require__(26)
  , setToStringTag = __webpack_require__(32)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(3)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(25)
  , toIObject = __webpack_require__(13);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(25)
  , gOPS     = __webpack_require__(46)
  , pIE      = __webpack_require__(31)
  , toObject = __webpack_require__(27)
  , IObject  = __webpack_require__(41)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(15)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(4)
  , anObject = __webpack_require__(14)
  , getKeys  = __webpack_require__(25);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(6)
  , core        = __webpack_require__(1)
  , dP          = __webpack_require__(4)
  , DESCRIPTORS = __webpack_require__(5)
  , SPECIES     = __webpack_require__(3)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(50)
  , defined   = __webpack_require__(30);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(50)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14)
  , get      = __webpack_require__(54);
module.exports = __webpack_require__(1).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(37)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(21);
module.exports = __webpack_require__(1).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(24)
  , $export        = __webpack_require__(7)
  , toObject       = __webpack_require__(27)
  , call           = __webpack_require__(72)
  , isArrayIter    = __webpack_require__(70)
  , toLength       = __webpack_require__(33)
  , createProperty = __webpack_require__(113)
  , getIterFn      = __webpack_require__(54);

$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(107)
  , step             = __webpack_require__(73)
  , Iterators        = __webpack_require__(21)
  , toIObject        = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(42)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(65);

// 23.1 Map Objects
module.exports = __webpack_require__(67)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(119)});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(13)
  , $getOwnPropertyDescriptor = __webpack_require__(74).f;

__webpack_require__(47)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(47)('getOwnPropertyNames', function(){
  return __webpack_require__(75).f;
});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(27)
  , $getPrototypeOf = __webpack_require__(77);

__webpack_require__(47)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(65);

// 23.2 Set Objects
module.exports = __webpack_require__(67)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(6)
  , has            = __webpack_require__(16)
  , DESCRIPTORS    = __webpack_require__(5)
  , $export        = __webpack_require__(7)
  , redefine       = __webpack_require__(80)
  , META           = __webpack_require__(44).KEY
  , $fails         = __webpack_require__(15)
  , shared         = __webpack_require__(49)
  , setToStringTag = __webpack_require__(32)
  , uid            = __webpack_require__(34)
  , wks            = __webpack_require__(3)
  , wksExt         = __webpack_require__(53)
  , wksDefine      = __webpack_require__(52)
  , keyOf          = __webpack_require__(118)
  , enumKeys       = __webpack_require__(114)
  , isArray        = __webpack_require__(71)
  , anObject       = __webpack_require__(14)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(51)
  , createDesc     = __webpack_require__(26)
  , _create        = __webpack_require__(45)
  , gOPNExt        = __webpack_require__(75)
  , $GOPD          = __webpack_require__(74)
  , $DP            = __webpack_require__(4)
  , $keys          = __webpack_require__(25)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(76).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f  = $propertyIsEnumerable;
  __webpack_require__(46).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(43)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(7);

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(66)('Map')});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(7);

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(66)('Set')});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52)('asyncIterator');

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52)('observable');

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_fable_core_String__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_fable_core_Set__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_fable_core_Comparer__ = __webpack_require__(35);
/* unused harmony export Suit */
/* unused harmony export Rank */
/* unused harmony export Card */
/* unused harmony export PlayerType */
/* unused harmony export Player */
/* unused harmony export Players */
/* unused harmony export ScoreAdditions */
/* unused harmony export Score */
/* unused harmony export ShuffledCards */
/* unused harmony export BidState */
/* unused harmony export BiddingState */
/* unused harmony export PlayRoundState */
/* unused harmony export PassCardsState */
/* unused harmony export RoundState */
/* unused harmony export PlayGameState */
/* unused harmony export GameState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cardDeck; });
/* unused harmony export rnd */
/* unused harmony export randomCardDeck */
/* unused harmony export cardSort */
/* unused harmony export deckSplit */
/* unused harmony export newGame */
/* unused harmony export RoundEvent */
/* unused harmony export GameEvents */
/* unused harmony export tryFinishBidding */
/* unused harmony export processEvent */














var Suit = function () {
    function Suit(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Suit);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Suit, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.Suit",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Club"], ["Diamond"], ["Heart"], ["Spade"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }, {
        key: "ToString",
        value: function ToString() {
            var copyOfStruct = this.Char;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["c" /* toString */])(copyOfStruct);
        }
    }, {
        key: "Char",
        get: function get() {
            if (this.tag === 1) {
                return "♦";
            } else if (this.tag === 2) {
                return "♥";
            } else if (this.tag === 3) {
                return "♠";
            } else {
                return "♣";
            }
        }
    }, {
        key: "MarriagePoints",
        get: function get() {
            if (this.tag === 1) {
                return 80;
            } else if (this.tag === 2) {
                return 100;
            } else if (this.tag === 3) {
                return 40;
            } else {
                return 60;
            }
        }
    }, {
        key: "Order",
        get: function get() {
            if (this.tag === 1) {
                return 1;
            } else if (this.tag === 2) {
                return 3;
            } else if (this.tag === 3) {
                return 2;
            } else {
                return 0;
            }
        }
    }], [{
        key: "FromChar",
        get: function get() {
            return function (_arg1) {
                return _arg1 === "♠" ? new Suit(3) : _arg1 === "♣" ? new Suit(0) : _arg1 === "♥" ? new Suit(2) : _arg1 === "♦" ? new Suit(1) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__node_modules_fable_core_String__["a" /* fsFormat */])("Cannot parse %c")(function (x) {
                    throw new Error(x);
                })(_arg1);
            };
        }
    }]);

    return Suit;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.Suit", Suit);
var Rank = function () {
    function Rank(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Rank);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Rank, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.Rank",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Rank9"], ["Jack"], ["Queen"], ["King"], ["Rank10"], ["Ace"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }, {
        key: "Char",
        get: function get() {
            if (this.tag === 1) {
                return "J";
            } else if (this.tag === 2) {
                return "Q";
            } else if (this.tag === 3) {
                return "K";
            } else if (this.tag === 4) {
                return "T";
            } else if (this.tag === 5) {
                return "A";
            } else {
                return "9";
            }
        }
    }, {
        key: "Points",
        get: function get() {
            if (this.tag === 1) {
                return 2;
            } else if (this.tag === 2) {
                return 3;
            } else if (this.tag === 3) {
                return 4;
            } else if (this.tag === 4) {
                return 10;
            } else if (this.tag === 5) {
                return 11;
            } else {
                return 0;
            }
        }
    }, {
        key: "Order",
        get: function get() {
            return -this.Points | 0;
        }
    }], [{
        key: "FromChar",
        get: function get() {
            return function (_arg1) {
                return _arg1 === "9" ? new Rank(0) : _arg1 === "A" ? new Rank(5) : _arg1 === "J" ? new Rank(1) : _arg1 === "K" ? new Rank(3) : _arg1 === "Q" ? new Rank(2) : _arg1 === "T" ? new Rank(4) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__node_modules_fable_core_String__["a" /* fsFormat */])("Cannot parse %c")(function (x) {
                    throw new Error(x);
                })(_arg1);
            };
        }
    }]);

    return Rank;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.Rank", Rank);
var Card = function () {
    function Card(suit, rank) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Card);

        this.Suit = suit;
        this.Rank = rank;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Card, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.Card",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Suit: Suit,
                    Rank: Rank
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["d" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["e" /* compareRecords */])(this, other) | 0;
        }
    }, {
        key: "ToString",
        value: function ToString() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__node_modules_fable_core_String__["a" /* fsFormat */])("%c%c")(function (x) {
                return x;
            })(this.Suit.Char, this.Rank.Char);
        }
    }, {
        key: "AsString",
        get: function get() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["c" /* toString */])(this);
        }
    }]);

    return Card;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.Card", Card);
var PlayerType = function () {
    function PlayerType(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PlayerType);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PlayerType, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.PlayerType",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Computer", "string"], ["LocalHuman", "string"], ["RemoteHuman", "string", "string"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return PlayerType;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.PlayerType", PlayerType);
var Player = function () {
    function Player(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Player);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Player, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.Player",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Player1", PlayerType], ["Player2", PlayerType], ["Player3", PlayerType]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }, {
        key: "Number",
        get: function get() {
            if (this.tag === 1) {
                return 2;
            } else if (this.tag === 2) {
                return 3;
            } else {
                return 1;
            }
        }
    }, {
        key: "PlayerType",
        get: function get() {
            var $var1 = this.tag === 1 ? [0, this.data] : this.tag === 2 ? [0, this.data] : [0, this.data];

            switch ($var1[0]) {
                case 0:
                    return $var1[1];
            }
        }
    }]);

    return Player;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.Player", Player);
var Players = function () {
    function Players(player1, player2, player3) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Players);

        this.Player1 = player1;
        this.Player2 = player2;
        this.Player3 = player3;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Players, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.Players",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Player1: Player,
                    Player2: Player,
                    Player3: Player
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["d" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["e" /* compareRecords */])(this, other) | 0;
        }
    }, {
        key: "get_Item",
        value: function get_Item(x) {
            var matchValue = (x - 1) % 3 | 0;

            switch (matchValue) {
                case 0:
                    return this.Player1;

                case 1:
                    return this.Player2;

                default:
                    return this.Player3;
            }
        }
    }, {
        key: "NextPlayer",
        get: function get() {
            var _this = this;

            return function (_arg1) {
                return _arg1.tag === 1 ? _this.Player3 : _arg1.tag === 2 ? _this.Player1 : _this.Player2;
            };
        }
    }, {
        key: "PreviousPlayer",
        get: function get() {
            var _this2 = this;

            return function (_arg2) {
                return _arg2.tag === 1 ? _this2.Player1 : _arg2.tag === 2 ? _this2.Player2 : _this2.Player3;
            };
        }
    }]);

    return Players;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.Players", Players);
var ScoreAdditions = function () {
    function ScoreAdditions(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ScoreAdditions);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ScoreAdditions, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.ScoreAdditions",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Obligation"], ["Bomb"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return ScoreAdditions;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.ScoreAdditions", ScoreAdditions);
var Score = function () {
    function Score(player1, player2, player3) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Score);

        this.Player1 = player1;
        this.Player2 = player2;
        this.Player3 = player3;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Score, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.Score",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Player1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["f" /* Tuple */])(["number", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_5__node_modules_fable_core_Set__["a" /* default */], {
                        T: ScoreAdditions
                    })]),
                    Player2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["f" /* Tuple */])(["number", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_5__node_modules_fable_core_Set__["a" /* default */], {
                        T: ScoreAdditions
                    })]),
                    Player3: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["f" /* Tuple */])(["number", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_5__node_modules_fable_core_Set__["a" /* default */], {
                        T: ScoreAdditions
                    })])
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["d" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["e" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Score;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.Score", Score);
var ShuffledCards = function () {
    function ShuffledCards(stock, player1, player2, player3) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ShuffledCards);

        this.Stock = stock;
        this.Player1 = player1;
        this.Player2 = player2;
        this.Player3 = player3;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ShuffledCards, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.ShuffledCards",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Stock: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                        T: Card
                    }),
                    Player1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                        T: Card
                    }),
                    Player2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                        T: Card
                    }),
                    Player3: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                        T: Card
                    })
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["d" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["e" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return ShuffledCards;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.ShuffledCards", ShuffledCards);
var BidState = function () {
    function BidState(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BidState);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(BidState, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.BidState",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Pass"], ["Bid", "number"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return BidState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.BidState", BidState);
var BiddingState = function () {
    function BiddingState(bids, currentPlayer, cards) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BiddingState);

        this.Bids = bids;
        this.CurrentPlayer = currentPlayer;
        this.Cards = cards;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(BiddingState, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.BiddingState",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Bids: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["a" /* default */], {
                        Key: Player,
                        Value: BidState
                    }),
                    CurrentPlayer: Player,
                    Cards: ShuffledCards
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["d" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["e" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return BiddingState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.BiddingState", BiddingState);
var PlayRoundState = function () {
    function PlayRoundState(biddingWinner, currentPlayer, cards, cardsOnTable) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PlayRoundState);

        this.BiddingWinner = biddingWinner;
        this.CurrentPlayer = currentPlayer;
        this.Cards = cards;
        this.CardsOnTable = cardsOnTable;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PlayRoundState, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.PlayRoundState",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    BiddingWinner: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["f" /* Tuple */])([Player, "number"]),
                    CurrentPlayer: Player,
                    Cards: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["a" /* default */], {
                        Key: Player,
                        Value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                            T: Card
                        })
                    }),
                    CardsOnTable: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                        T: Card
                    })
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["d" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["e" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return PlayRoundState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.PlayRoundState", PlayRoundState);
var PassCardsState = function () {
    function PassCardsState(biddingWinner, cards) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PassCardsState);

        this.BiddingWinner = biddingWinner;
        this.Cards = cards;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PassCardsState, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.PassCardsState",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    BiddingWinner: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["f" /* Tuple */])([Player, "number"]),
                    Cards: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["a" /* default */], {
                        Key: Player,
                        Value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                            T: Card
                        })
                    })
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["d" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["e" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return PassCardsState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.PassCardsState", PassCardsState);
var RoundState = function () {
    function RoundState(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, RoundState);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(RoundState, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.RoundState",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Bidding", BiddingState], ["PassCards", PassCardsState], ["PlayRound", PlayRoundState]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return RoundState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.RoundState", RoundState);
var PlayGameState = function () {
    function PlayGameState(players, score, roundState) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PlayGameState);

        this.Players = players;
        this.Score = score;
        this.RoundState = roundState;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PlayGameState, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.PlayGameState",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Players: Players,
                    Score: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                        T: Score
                    }),
                    RoundState: RoundState
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["d" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["e" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return PlayGameState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.PlayGameState", PlayGameState);
var GameState = function () {
    function GameState(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, GameState);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(GameState, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.GameState",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Game", PlayGameState], ["Finished", Players, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["g" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */], {
                    T: Score
                }), Player]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return GameState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.GameState", GameState);
var cardDeck = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["b" /* delay */])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["c" /* collect */])(function (s) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["d" /* map */])(function (r) {
            return new Card(s, r);
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["b" /* ofArray */])([new Rank(0), new Rank(1), new Rank(2), new Rank(3), new Rank(4), new Rank(5)]));
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["b" /* ofArray */])([new Suit(0), new Suit(1), new Suit(2), new Suit(3)]));
}));
var rnd = {};
function randomCardDeck(rnd_1) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["e" /* sortWith */])(function (x, y) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["h" /* compare */])(function (_arg1) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["i" /* randomNext */])(0, 2147483647);
        }(x), function (_arg1) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["i" /* randomNext */])(0, 2147483647);
        }(y));
    }, cardDeck));
}
var cardSort = function () {
    var projection = function projection(card) {
        return [card.Suit.Order, card.Rank.Order];
    };

    return function (list) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["e" /* sortWith */])(function (x, y) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["h" /* compare */])(projection(x), projection(y));
        }, list));
    };
}();
function deckSplit(deck) {
    return new ShuffledCards(cardSort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["f" /* take */])(3, deck))), cardSort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["f" /* take */])(7, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["g" /* skip */])(3, deck))))), cardSort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["f" /* take */])(7, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["g" /* skip */])(10, deck))))), cardSort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["f" /* take */])(7, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["g" /* skip */])(17, deck))))));
}
function newGame(player1, player2, player3, rnd_1) {
    var matchValue = [player1, player2, player3];
    var $var2 = matchValue[0].tag === 0 ? matchValue[1].tag === 1 ? matchValue[2].tag === 2 ? [0] : [1] : [1] : [1];

    switch ($var2[0]) {
        case 0:
            var players = new Players(player1, player2, player3);
            var shuffledCards = deckSplit(randomCardDeck(rnd_1));
            var obligatedPlayer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["i" /* randomNext */])(0, 3) + 1 | 0;

            var getObligation = function getObligation(player) {
                if (obligatedPlayer === player) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__node_modules_fable_core_Set__["b" /* create */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["b" /* ofArray */])([new ScoreAdditions(0)]), new __WEBPACK_IMPORTED_MODULE_9__node_modules_fable_core_Comparer__["a" /* default */](function (x, y) {
                        return x.CompareTo(y);
                    }));
                } else {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__node_modules_fable_core_Set__["b" /* create */])(null, new __WEBPACK_IMPORTED_MODULE_9__node_modules_fable_core_Comparer__["a" /* default */](function (x, y) {
                        return x.CompareTo(y);
                    }));
                }
            };

            var score = new Score([0, getObligation(1)], [0, getObligation(2)], [0, getObligation(3)]);
            var biddingState = new BiddingState(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["b" /* create */])(null, new __WEBPACK_IMPORTED_MODULE_9__node_modules_fable_core_Comparer__["a" /* default */](function (x, y) {
                return x.CompareTo(y);
            })), players.get_Item(obligatedPlayer + 1), shuffledCards);
            var gameState = new PlayGameState(players, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["b" /* ofArray */])([score]), new RoundState(0, biddingState));
            return new GameState(0, gameState);

        case 1:
            throw new Error("Unsupported players types.");
    }
}
var RoundEvent = function () {
    function RoundEvent(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, RoundEvent);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(RoundEvent, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.RoundEvent",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["PutCard", Card]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return RoundEvent;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.RoundEvent", RoundEvent);
var GameEvents = function () {
    function GameEvents(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, GameEvents);

        this.tag = tag;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(GameEvents, [{
        key: __WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Game.GameEvents",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["BiddingEvent", Player, BidState], ["PassCardsEvent", Card, Card], ["RoundEvent", Player, RoundEvent]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["b" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return GameEvents;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_fable_core_Symbol__["b" /* setType */])("Game.GameEvents", GameEvents);

var Game = function (__exports) {
    return __exports;
}({});

function tryFinishBidding(_arg1) {
    var $var3 = _arg1.tag === 0 ? _arg1.data.RoundState.tag === 0 ? function () {
        var ps = _arg1.data.Players;
        var biddingState = _arg1.data.RoundState.data;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["c" /* filter */])(function (_arg2) {
            return _arg2.tag === 0 ? true : false;
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["d" /* map */])(function (x_1) {
            return x_1[1];
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])(biddingState.Bids))).length === 2;
    }() ? [0, _arg1.data.RoundState.data, _arg1.data.Players, _arg1.data] : [1] : [1] : [1];

    switch ($var3[0]) {
        case 0:
            var patternInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["h" /* reduce */])(function (f) {
                return function (x, y) {
                    return f(x) > f(y) ? x : y;
                };
            }(function (tupledArg) {
                return tupledArg[1];
            }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["i" /* choose */])(function (x) {
                var matchValue = x[1];

                if (matchValue.tag === 0) {
                    return null;
                } else {
                    return [x[0], matchValue.data];
                }
            }, $var3[1].Bids));
            var cards = void 0;
            var map = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["b" /* create */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["b" /* ofArray */])([[$var3[2].Player1, $var3[1].Cards.Player1], [$var3[2].Player2, $var3[1].Cards.Player2], [$var3[2].Player3, $var3[1].Cards.Player3]]), new __WEBPACK_IMPORTED_MODULE_9__node_modules_fable_core_Comparer__["a" /* default */](function (x, y) {
                return x.CompareTo(y);
            }));
            var winningCards = map.get(patternInput[0]);
            cards = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["c" /* add */])(patternInput[0], cardSort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["e" /* append */])(winningCards, $var3[1].Cards.Stock)), map);
            return new GameState(0, function () {
                var RoundState_1 = new RoundState(1, new PassCardsState([patternInput[0], patternInput[1]], cards));
                return new PlayGameState($var3[3].Players, $var3[3].Score, RoundState_1);
            }());

        case 1:
            return _arg1;
    }
}
function processEvent(gameState, event) {
    var matchValue = [gameState, event];
    var $var4 = matchValue[0].tag === 0 ? matchValue[0].data.RoundState.tag === 0 ? matchValue[1].tag === 0 ? function () {
        var state = matchValue[0].data;
        var ps = matchValue[0].data.Players;
        var player = matchValue[1].data[0];
        var event_1 = matchValue[1].data[1];
        var biddingState = matchValue[0].data.RoundState.data;
        return player.Equals(biddingState.CurrentPlayer);
    }() ? [0, matchValue[0].data.RoundState.data, matchValue[1].data[1], matchValue[1].data[0], matchValue[0].data.Players, matchValue[0].data] : [1] : [1] : [1] : [1];

    switch ($var4[0]) {
        case 0:
            var currentBids = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["h" /* reduce */])(function (x, y) {
                return Math.max(x, y);
            }, new __WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */](110, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["f" /* choose */])(function (_arg1) {
                return _arg1.tag === 1 ? _arg1.data : null;
            }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["d" /* map */])(function (x) {
                return x[1];
            }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["a" /* toList */])($var4[1].Bids)))));
            var $var5 = $var4[2].tag === 1 ? $var4[2].data < currentBids ? [0, $var4[2].data] : [1] : [1];

            switch ($var5[0]) {
                case 0:
                    throw new Error("Too low bid!");
                    break;

                case 1:
                    var $var6 = $var4[2].tag === 1 ? $var4[2].data % 10 !== 0 ? [0, $var4[2].data] : [1] : [1];

                    switch ($var6[0]) {
                        case 0:
                            throw new Error("bid needs to end with 0");
                            break;

                        case 1:
                            break;
                    }

                    break;
            }

            return tryFinishBidding(new GameState(0, function () {
                var RoundState_1 = new RoundState(0, function () {
                    var CurrentPlayer = $var4[4].NextPlayer($var4[3]);
                    return new BiddingState(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["c" /* add */])($var4[3], $var4[2], $var4[1].Bids), CurrentPlayer, $var4[1].Cards);
                }());
                return new PlayGameState($var4[5].Players, $var4[5].Score, RoundState_1);
            }()));

        case 1:
            var $var7 = matchValue[0].tag === 0 ? matchValue[0].data.RoundState.tag === 1 ? matchValue[1].tag === 1 ? [0, matchValue[1].data[0], matchValue[1].data[1], matchValue[0].data.RoundState.data, matchValue[0].data] : [1] : [1] : [1];

            switch ($var7[0]) {
                case 0:
                    var players = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["j" /* filter */])(function (kv) {
                        return !$var7[3].BiddingWinner[0].Equals(kv[0]);
                    }, $var7[3].Cards);
                    var map = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["k" /* fold */])(function (m, tupledArg) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["c" /* add */])(tupledArg[0], tupledArg[1], m);
                    }, $var7[3].Cards, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["d" /* map */])(function (tupledArg_1) {
                        return [tupledArg_1[0][0], cardSort(new __WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */](tupledArg_1[1], tupledArg_1[0][1]))];
                    }, function (source2) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["l" /* zip */])(players, source2);
                    }(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["b" /* ofArray */])([$var7[1], $var7[2]]))));
                    var cards = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__node_modules_fable_core_Map__["c" /* add */])($var7[3].BiddingWinner[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["c" /* filter */])(function (x_1) {
                        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__node_modules_fable_core_Seq__["m" /* exists */])(function (x) {
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_fable_core_Util__["a" /* equals */])(x_1, x);
                        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["b" /* ofArray */])([$var7[1], $var7[2]]));
                    }, map.get($var7[3].BiddingWinner[0])), map);
                    return new GameState(0, function () {
                        var RoundState_2 = new RoundState(2, new PlayRoundState($var7[3].BiddingWinner, $var7[3].BiddingWinner[0], cards, new __WEBPACK_IMPORTED_MODULE_6__node_modules_fable_core_List__["a" /* default */]()));
                        return new PlayGameState($var7[4].Players, $var7[4].Score, RoundState_2);
                    }());

                case 1:
                    throw new Error("/Users/kevin/Projects/thousand/src/Game.fs", 150, 10);
            }

    }
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_App_fs__ = __webpack_require__(81);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "init", function() { return __WEBPACK_IMPORTED_MODULE_0__src_App_fs__["a"]; });


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map