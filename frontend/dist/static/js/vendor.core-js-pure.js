/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["vendor.core-js-pure"],{

/***/ "./node_modules/core-js-pure/actual/global-this.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/global-this.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar parent = __webpack_require__(/*! ../stable/global-this */ \"./node_modules/core-js-pure/stable/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/actual/global-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/es/global-this.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/global-this.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n__webpack_require__(/*! ../modules/es.global-this */ \"./node_modules/core-js-pure/modules/es.global-this.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/es/global-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/features/global-this.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/global-this.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nmodule.exports = __webpack_require__(/*! ../full/global-this */ \"./node_modules/core-js-pure/full/global-this.js\");\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/features/global-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/full/global-this.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/full/global-this.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n// TODO: remove from `core-js@4`\n__webpack_require__(/*! ../modules/esnext.global-this */ \"./node_modules/core-js-pure/modules/esnext.global-this.js\");\n\nvar parent = __webpack_require__(/*! ../actual/global-this */ \"./node_modules/core-js-pure/actual/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/full/global-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-callable.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-callable.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw new $TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/a-callable.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar isPossiblePrototype = __webpack_require__(/*! ../internals/is-possible-prototype */ \"./node_modules/core-js-pure/internals/is-possible-prototype.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument) {\n  if (isPossiblePrototype(argument)) return argument;\n  throw new $TypeError(\"Can't set \" + $String(argument) + ' as a prototype');\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/a-possible-prototype.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
eval("{\nmodule.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/add-to-unscopables.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-instance.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-instance.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (it, Prototype) {\n  if (isPrototypeOf(Prototype, it)) return it;\n  throw new $TypeError('Incorrect invocation');\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/an-instance.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw new $TypeError($String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/an-object.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-from.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js-pure/internals/is-constructor.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js-pure/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nvar $Array = Array;\n\n// `Array.from` method implementation\n// https://tc39.es/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var IS_CONSTRUCTOR = isConstructor(this);\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value;\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {\n    result = IS_CONSTRUCTOR ? new this() : [];\n    iterator = getIterator(O, iteratorMethod);\n    next = iterator.next;\n    for (;!(step = call(next, iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = lengthOfArrayLike(O);\n    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);\n    for (;length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/array-from.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js-pure/internals/length-of-array-like.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = lengthOfArrayLike(O);\n    if (length === 0) return !IS_INCLUDES && -1;\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el !== el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value !== value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/array-includes.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-slice.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-slice.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis([].slice);\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/array-slice.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-sort.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-sort.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js-pure/internals/array-slice.js\");\n\nvar floor = Math.floor;\n\nvar sort = function (array, comparefn) {\n  var length = array.length;\n\n  if (length < 8) {\n    // insertion sort\n    var i = 1;\n    var element, j;\n\n    while (i < length) {\n      j = i;\n      element = array[i];\n      while (j && comparefn(array[j - 1], element) > 0) {\n        array[j] = array[--j];\n      }\n      if (j !== i++) array[j] = element;\n    }\n  } else {\n    // merge sort\n    var middle = floor(length / 2);\n    var left = sort(arraySlice(array, 0, middle), comparefn);\n    var right = sort(arraySlice(array, middle), comparefn);\n    var llength = left.length;\n    var rlength = right.length;\n    var lindex = 0;\n    var rindex = 0;\n\n    while (lindex < llength || rindex < rlength) {\n      array[lindex + rindex] = (lindex < llength && rindex < rlength)\n        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]\n        : lindex < llength ? left[lindex++] : right[rindex++];\n    }\n  }\n\n  return array;\n};\n\nmodule.exports = sort;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/array-sort.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js-pure/internals/iterator-close.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  } catch (error) {\n    iteratorClose(iterator, 'throw', error);\n  }\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/classof-raw.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar $Object = Object;\n\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/classof.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/correct-prototype-getter.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-iter-result-object.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iter-result-object.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n// `CreateIterResultObject` abstract operation\n// https://tc39.es/ecma262/#sec-createiterresultobject\nmodule.exports = function (value, done) {\n  return { value: value, done: done };\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/create-iter-result-object.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/create-non-enumerable-property.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\nmodule.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/create-property-descriptor.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));\n  else object[key] = value;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/create-property.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-built-in-accessor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-built-in-accessor.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\nmodule.exports = function (target, name, descriptor) {\n  return defineProperty.f(target, name, descriptor);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/define-built-in-accessor.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-built-in.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-built-in.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;\n  else createNonEnumerableProperty(target, key, value);\n  return target;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/define-built-in.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-built-ins.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-built-ins.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) {\n    if (options && options.unsafe && target[key]) target[key] = src[key];\n    else defineBuiltIn(target, key, src[key], options);\n  } return target;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/define-built-ins.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-global-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-global-property.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    globalThis[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/define-global-property.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/descriptors.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = globalThis.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/document-create-element.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/enum-bug-keys.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/environment-user-agent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/environment-user-agent.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\n\nvar navigator = globalThis.navigator;\nvar userAgent = navigator && navigator.userAgent;\n\nmodule.exports = userAgent ? String(userAgent) : '';\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/environment-user-agent.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/environment-v8-version.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/environment-v8-version.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ \"./node_modules/core-js-pure/internals/environment-user-agent.js\");\n\nvar process = globalThis.process;\nvar Deno = globalThis.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/environment-v8-version.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js-pure/internals/function-apply.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js-pure/internals/function-uncurry-this-clause.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f);\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\n// add debugging info\n__webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof Wrapper) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return apply(NativeConstructor, this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target         - name of the target object\n  options.global         - target is the global object\n  options.stat           - export as static methods of target\n  options.proto          - export as prototype methods of target\n  options.real           - real prototype method for the `pure` version\n  options.forced         - export even if the native feature is available\n  options.bind           - bind methods to the target, required for the `pure` version\n  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe         - use the simple assignment of property instead of delete + defineProperty\n  options.sham           - add a flag to not completely full polyfills\n  options.enumerable     - export as enumerable property\n  options.dontCallGetSet - prevent calling a getter on target\n  options.name           - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? globalThis : STATIC ? globalThis[TARGET] : globalThis[TARGET] && globalThis[TARGET].prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.dontCallGetSet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;\n\n    // bind methods to global for calling from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis);\n    // wrap global constructors for prevent changes in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    createNonEnumerableProperty(target, key, resultProperty);\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);\n      // export real prototype methods\n      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/export.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("{\nmodule.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/fails.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-apply.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-apply.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar call = FunctionPrototype.call;\n\n// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/function-apply.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js-pure/internals/function-uncurry-this-clause.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/function-bind-context.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-native.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-native.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-function-prototype-bind -- safe\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/function-bind-native.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-call.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-call.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n// eslint-disable-next-line es/no-function-prototype-bind -- safe\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/function-call.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-name.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-name.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\n\nvar FunctionPrototype = Function.prototype;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;\n\nvar EXISTS = hasOwn(FunctionPrototype, 'name');\n// additional protection from minified / mangled / dropped function names\nvar PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';\nvar CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));\n\nmodule.exports = {\n  EXISTS: EXISTS,\n  PROPER: PROPER,\n  CONFIGURABLE: CONFIGURABLE\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/function-name.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this-accessor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this-accessor.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\n\nmodule.exports = function (object, key, method) {\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));\n  } catch (error) { /* empty */ }\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/function-uncurry-this-accessor.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this-clause.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this-clause.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = function (fn) {\n  // Nashorn bug:\n  //   https://github.com/zloirock/core-js/issues/1128\n  //   https://github.com/zloirock/core-js/issues/1130\n  if (classofRaw(fn) === 'Function') return uncurryThis(fn);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/function-uncurry-this-clause.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js-pure/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar call = FunctionPrototype.call;\n// eslint-disable-next-line es/no-function-prototype-bind -- safe\nvar uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);\n\nmodule.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {\n  return function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/function-uncurry-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar aFunction = function (variable) {\n  return isCallable(variable) ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis[namespace])\n    : path[namespace] && path[namespace][method] || globalThis[namespace] && globalThis[namespace][method];\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/get-built-in.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js-pure/internals/get-method.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)\n    || getMethod(it, '@@iterator')\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/get-iterator-method.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument, usingIterator) {\n  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;\n  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));\n  throw new $TypeError(tryToString(argument) + ' is not iterable');\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/get-iterator.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-method.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-method.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return isNullOrUndefined(func) ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/get-method.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global-this.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global-this.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\nvar check = function (it) {\n  return it && it.Math === Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  check(typeof this == 'object' && this) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/global-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has-own-property.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has-own-property.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\n// eslint-disable-next-line es/no-object-hasown -- safe\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/has-own-property.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("{\nmodule.exports = {};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/hidden-keys.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/html.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a !== 7;\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/ie8-dom-define.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar $Object = Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !$Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) === 'String' ? split(it, '') : $Object(it);\n} : $Object;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/indexed-object.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/inspect-source.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\nvar functionToString = uncurryThis(Function.toString);\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (!isCallable(store.inspectSource)) {\n  store.inspectSource = function (it) {\n    return functionToString(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/inspect-source.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-state.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ \"./node_modules/core-js-pure/internals/weak-map-basic-detection.js\");\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar TypeError = globalThis.TypeError;\nvar WeakMap = globalThis.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  /* eslint-disable no-self-assign -- prototype methods protection */\n  store.get = store.get;\n  store.has = store.has;\n  store.set = store.set;\n  /* eslint-enable no-self-assign -- prototype methods protection */\n  set = function (it, metadata) {\n    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    store.set(it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return store.get(it) || {};\n  };\n  has = function (it) {\n    return store.has(it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return hasOwn(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return hasOwn(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/internal-state.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-array-iterator-method.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-callable.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-callable.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot\nvar documentAll = typeof document == 'object' && document.all;\n\n// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\n// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing\nmodule.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {\n  return typeof argument == 'function' || argument === documentAll;\n} : function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-callable.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-constructor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js-pure/internals/inspect-source.js\");\n\nvar noop = function () { /* empty */ };\nvar construct = getBuiltIn('Reflect', 'construct');\nvar constructorRegExp = /^\\s*(?:class|function)\\b/;\nvar exec = uncurryThis(constructorRegExp.exec);\nvar INCORRECT_TO_STRING = !constructorRegExp.test(noop);\n\nvar isConstructorModern = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  try {\n    construct(noop, [], argument);\n    return true;\n  } catch (error) {\n    return false;\n  }\n};\n\nvar isConstructorLegacy = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  switch (classof(argument)) {\n    case 'AsyncFunction':\n    case 'GeneratorFunction':\n    case 'AsyncGeneratorFunction': return false;\n  }\n  try {\n    // we can't check .prototype since constructors produced by .bind haven't it\n    // `Function#toString` throws on some built-it function in some legacy engines\n    // (for example, `DOMQuad` and similar in FF41-)\n    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));\n  } catch (error) {\n    return true;\n  }\n};\n\nisConstructorLegacy.sham = true;\n\n// `IsConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-isconstructor\nmodule.exports = !construct || fails(function () {\n  var called;\n  return isConstructorModern(isConstructorModern.call)\n    || !isConstructorModern(Object)\n    || !isConstructorModern(function () { called = true; })\n    || called;\n}) ? isConstructorLegacy : isConstructorModern;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-constructor.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value === POLYFILL ? true\n    : value === NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-forced.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-null-or-undefined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-null-or-undefined.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n// we can't use just `it == null` since of `document.all` special case\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec\nmodule.exports = function (it) {\n  return it === null || it === undefined;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-null-or-undefined.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nmodule.exports = function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-object.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-possible-prototype.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-possible-prototype.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (argument) {\n  return isObject(argument) || argument === null;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-possible-prototype.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("{\nmodule.exports = true;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-pure.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-symbol.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar $Object = Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/is-symbol.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterator-close.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-close.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js-pure/internals/get-method.js\");\n\nmodule.exports = function (iterator, kind, value) {\n  var innerResult, innerError;\n  anObject(iterator);\n  try {\n    innerResult = getMethod(iterator, 'return');\n    if (!innerResult) {\n      if (kind === 'throw') throw value;\n      return value;\n    }\n    innerResult = call(innerResult, iterator);\n  } catch (error) {\n    innerError = true;\n    innerResult = error;\n  }\n  if (kind === 'throw') throw value;\n  if (innerError) throw innerResult;\n  anObject(innerResult);\n  return value;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/iterator-close.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterator-create-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-create-constructor.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype);\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/iterator-create-constructor.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterator-define.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-define.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar FunctionName = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js-pure/internals/function-name.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ \"./node_modules/core-js-pure/internals/iterator-create-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar PROPER_FUNCTION_NAME = FunctionName.PROPER;\nvar CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];\n\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    }\n\n    return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {\n          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF\n  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {\n      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);\n    } else {\n      INCORRECT_VALUES_NAME = true;\n      defaultIterator = function values() { return call(nativeIterator, this); };\n    }\n  }\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });\n  }\n  Iterators[NAME] = defaultIterator;\n\n  return methods;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/iterator-define.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators-core.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\n// `%IteratorPrototype%` object\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\n/* eslint-disable es/no-array-prototype-keys -- safe */\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nvar NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {\n  var test = {};\n  // FF44- legacy iterators case\n  return IteratorPrototype[ITERATOR].call(test) !== test;\n});\n\nif (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};\nelse if (IS_PURE) IteratorPrototype = create(IteratorPrototype);\n\n// `%IteratorPrototype%[@@iterator]()` method\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator\nif (!isCallable(IteratorPrototype[ITERATOR])) {\n  defineBuiltIn(IteratorPrototype, ITERATOR, function () {\n    return this;\n  });\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/iterators-core.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("{\nmodule.exports = {};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/iterators.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/length-of-array-like.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/length-of-array-like.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\n\n// `LengthOfArrayLike` abstract operation\n// https://tc39.es/ecma262/#sec-lengthofarraylike\nmodule.exports = function (obj) {\n  return toLength(obj.length);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/length-of-array-like.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/math-trunc.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/math-trunc.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("{\nvar ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `Math.trunc` method\n// https://tc39.es/ecma262/#sec-math.trunc\n// eslint-disable-next-line es/no-math-trunc -- safe\nmodule.exports = Math.trunc || function trunc(x) {\n  var n = +x;\n  return (n > 0 ? floor : ceil)(n);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/math-trunc.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-assign.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-assign.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\n\n// eslint-disable-next-line es/no-object-assign -- safe\nvar $assign = Object.assign;\n// eslint-disable-next-line es/no-object-defineproperty -- required for testing\nvar defineProperty = Object.defineProperty;\nvar concat = uncurryThis([].concat);\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\nmodule.exports = !$assign || fails(function () {\n  // should have correct order of operations (Edge bug)\n  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {\n    enumerable: true,\n    get: function () {\n      defineProperty(this, 'b', {\n        value: 3,\n        enumerable: false\n      });\n    }\n  }), { b: 2 })).b !== 1) return true;\n  // should work with symbols and should have deterministic property order (V8 bug)\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line es/no-symbol -- safe\n  var symbol = Symbol('assign detection');\n  var alphabet = 'abcdefghijklmnopqrst';\n  A[symbol] = 7;\n  // eslint-disable-next-line es/no-array-prototype-foreach -- safe\n  alphabet.split('').forEach(function (chr) { B[chr] = chr; });\n  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-assign.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n/* global ActiveXObject -- old IE, WSH */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js-pure/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js-pure/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  // eslint-disable-next-line no-useless-assignment -- avoid memory leak\n  activeXDocument = null;\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    activeXDocument = new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = typeof document != 'undefined'\n    ? document.domain && activeXDocument\n      ? NullProtoObjectViaActiveX(activeXDocument) // old IE\n      : NullProtoObjectViaIFrame()\n    : NullProtoObjectViaActiveX(activeXDocument); // WSH\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\n// eslint-disable-next-line es/no-object-create -- safe\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-create.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-properties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js-pure/internals/v8-prototype-define-bug.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\nexports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var props = toIndexedObject(Properties);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-define-properties.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js-pure/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\n\nvar $TypeError = TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-define-property.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-symbols.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("{\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-get-own-property-symbols.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar $Object = Object;\nvar ObjectPrototype = $Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n// eslint-disable-next-line es/no-object-getprototypeof -- safe\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {\n  var object = toObject(O);\n  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];\n  var constructor = object.constructor;\n  if (isCallable(constructor) && object instanceof constructor) {\n    return constructor.prototype;\n  } return object instanceof $Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-get-prototype-of.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-is-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-is-prototype-of.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-is-prototype-of.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar push = uncurryThis([].push);\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (hasOwn(O, key = names[i++])) {\n    ~indexOf(result, key) || push(result, key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-keys-internal.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n// eslint-disable-next-line es/no-object-keys -- safe\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-keys.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("{\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-property-is-enumerable.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n/* eslint-disable no-proto -- safe */\nvar uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ \"./node_modules/core-js-pure/internals/function-uncurry-this-accessor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js-pure/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');\n    setter(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    requireObjectCoercible(O);\n    aPossiblePrototype(proto);\n    if (!isObject(O)) return O;\n    if (CORRECT_SETTER) setter(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-set-prototype-of.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/object-to-string.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ordinary-to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ordinary-to-primitive.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar $TypeError = TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw new $TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/ordinary-to-primitive.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("{\nmodule.exports = {};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/path.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js-pure/internals/is-null-or-undefined.js\");\n\nvar $TypeError = TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (isNullOrUndefined(it)) throw new $TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/require-object-coercible.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/safe-get-built-in.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/safe-get-built-in.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Avoid NodeJS experimental warning\nmodule.exports = function (name) {\n  if (!DESCRIPTORS) return globalThis[name];\n  var descriptor = getOwnPropertyDescriptor(globalThis, name);\n  return descriptor && descriptor.value;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/safe-get-built-in.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js-pure/internals/object-to-string.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  var target = STATIC ? it : it && it.prototype;\n  if (target) {\n    if (!hasOwn(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n    }\n    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {\n      createNonEnumerableProperty(target, 'toString', toString);\n    }\n  }\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/set-to-string-tag.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/shared-key.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js-pure/internals/define-global-property.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});\n\n(store.versions || (store.versions = [])).push({\n  version: '3.44.0',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/shared-store.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\nmodule.exports = function (key, value) {\n  return store[key] || (store[key] = value || {});\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/shared.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-multibyte.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js-pure/internals/to-integer-or-infinity.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar stringSlice = uncurryThis(''.slice);\n\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = toString(requireObjectCoercible($this));\n    var position = toIntegerOrInfinity(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = charCodeAt(S, position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING\n          ? charAt(S, position)\n          : first\n        : CONVERT_TO_STRING\n          ? stringSlice(S, position, position + 2)\n          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/string-multibyte.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-punycode-to-ascii.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-punycode-to-ascii.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1\nvar base = 36;\nvar tMin = 1;\nvar tMax = 26;\nvar skew = 38;\nvar damp = 700;\nvar initialBias = 72;\nvar initialN = 128; // 0x80\nvar delimiter = '-'; // '\\x2D'\nvar regexNonASCII = /[^\\0-\\u007E]/; // non-ASCII chars\nvar regexSeparators = /[.\\u3002\\uFF0E\\uFF61]/g; // RFC 3490 separators\nvar OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';\nvar baseMinusTMin = base - tMin;\n\nvar $RangeError = RangeError;\nvar exec = uncurryThis(regexSeparators.exec);\nvar floor = Math.floor;\nvar fromCharCode = String.fromCharCode;\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar join = uncurryThis([].join);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar split = uncurryThis(''.split);\nvar toLowerCase = uncurryThis(''.toLowerCase);\n\n/**\n * Creates an array containing the numeric code points of each Unicode\n * character in the string. While JavaScript uses UCS-2 internally,\n * this function will convert a pair of surrogate halves (each of which\n * UCS-2 exposes as separate characters) into a single code point,\n * matching UTF-16.\n */\nvar ucs2decode = function (string) {\n  var output = [];\n  var counter = 0;\n  var length = string.length;\n  while (counter < length) {\n    var value = charCodeAt(string, counter++);\n    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {\n      // It's a high surrogate, and there is a next character.\n      var extra = charCodeAt(string, counter++);\n      if ((extra & 0xFC00) === 0xDC00) { // Low surrogate.\n        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);\n      } else {\n        // It's an unmatched surrogate; only append this code unit, in case the\n        // next code unit is the high surrogate of a surrogate pair.\n        push(output, value);\n        counter--;\n      }\n    } else {\n      push(output, value);\n    }\n  }\n  return output;\n};\n\n/**\n * Converts a digit/integer into a basic code point.\n */\nvar digitToBasic = function (digit) {\n  //  0..25 map to ASCII a..z or A..Z\n  // 26..35 map to ASCII 0..9\n  return digit + 22 + 75 * (digit < 26);\n};\n\n/**\n * Bias adaptation function as per section 3.4 of RFC 3492.\n * https://tools.ietf.org/html/rfc3492#section-3.4\n */\nvar adapt = function (delta, numPoints, firstTime) {\n  var k = 0;\n  delta = firstTime ? floor(delta / damp) : delta >> 1;\n  delta += floor(delta / numPoints);\n  while (delta > baseMinusTMin * tMax >> 1) {\n    delta = floor(delta / baseMinusTMin);\n    k += base;\n  }\n  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));\n};\n\n/**\n * Converts a string of Unicode symbols (e.g. a domain name label) to a\n * Punycode string of ASCII-only symbols.\n */\nvar encode = function (input) {\n  var output = [];\n\n  // Convert the input in UCS-2 to an array of Unicode code points.\n  input = ucs2decode(input);\n\n  // Cache the length.\n  var inputLength = input.length;\n\n  // Initialize the state.\n  var n = initialN;\n  var delta = 0;\n  var bias = initialBias;\n  var i, currentValue;\n\n  // Handle the basic code points.\n  for (i = 0; i < input.length; i++) {\n    currentValue = input[i];\n    if (currentValue < 0x80) {\n      push(output, fromCharCode(currentValue));\n    }\n  }\n\n  var basicLength = output.length; // number of basic code points.\n  var handledCPCount = basicLength; // number of code points that have been handled;\n\n  // Finish the basic string with a delimiter unless it's empty.\n  if (basicLength) {\n    push(output, delimiter);\n  }\n\n  // Main encoding loop:\n  while (handledCPCount < inputLength) {\n    // All non-basic code points < n have been handled already. Find the next larger one:\n    var m = maxInt;\n    for (i = 0; i < input.length; i++) {\n      currentValue = input[i];\n      if (currentValue >= n && currentValue < m) {\n        m = currentValue;\n      }\n    }\n\n    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.\n    var handledCPCountPlusOne = handledCPCount + 1;\n    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {\n      throw new $RangeError(OVERFLOW_ERROR);\n    }\n\n    delta += (m - n) * handledCPCountPlusOne;\n    n = m;\n\n    for (i = 0; i < input.length; i++) {\n      currentValue = input[i];\n      if (currentValue < n && ++delta > maxInt) {\n        throw new $RangeError(OVERFLOW_ERROR);\n      }\n      if (currentValue === n) {\n        // Represent delta as a generalized variable-length integer.\n        var q = delta;\n        var k = base;\n        while (true) {\n          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;\n          if (q < t) break;\n          var qMinusT = q - t;\n          var baseMinusT = base - t;\n          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));\n          q = floor(qMinusT / baseMinusT);\n          k += base;\n        }\n\n        push(output, fromCharCode(digitToBasic(q)));\n        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);\n        delta = 0;\n        handledCPCount++;\n      }\n    }\n\n    delta++;\n    n++;\n  }\n  return join(output, '');\n};\n\nmodule.exports = function (input) {\n  var encoded = [];\n  var labels = split(replace(toLowerCase(input), regexSeparators, '\\u002E'), '.');\n  var i, label;\n  for (i = 0; i < labels.length; i++) {\n    label = labels[i];\n    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);\n  }\n  return join(encoded, '.');\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/string-punycode-to-ascii.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/symbol-constructor-detection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/symbol-constructor-detection.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ \"./node_modules/core-js-pure/internals/environment-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\n\nvar $String = globalThis.String;\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol('symbol detection');\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,\n  // of course, fail.\n  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/symbol-constructor-detection.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js-pure/internals/to-integer-or-infinity.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toIntegerOrInfinity(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-absolute-index.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-indexed-object.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer-or-infinity.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer-or-infinity.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar trunc = __webpack_require__(/*! ../internals/math-trunc */ \"./node_modules/core-js-pure/internals/math-trunc.js\");\n\n// `ToIntegerOrInfinity` abstract operation\n// https://tc39.es/ecma262/#sec-tointegerorinfinity\nmodule.exports = function (argument) {\n  var number = +argument;\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return number !== number || number === 0 ? 0 : trunc(number);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-integer-or-infinity.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js-pure/internals/to-integer-or-infinity.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  var len = toIntegerOrInfinity(argument);\n  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-length.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nvar $Object = Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return $Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-object.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js-pure/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js-pure/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar $TypeError = TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw new $TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-primitive.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-property-key.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-property-key.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-property-key.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string-tag-support.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-string-tag-support.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\nvar $String = String;\n\nmodule.exports = function (argument) {\n  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');\n  return $String(argument);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/to-string.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/try-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/try-to-string.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("{\nvar $String = String;\n\nmodule.exports = function (argument) {\n  try {\n    return $String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/try-to-string.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.1.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/uid.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/url-constructor-detection.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/url-constructor-detection.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line unicorn/relative-url-style -- required for testing\n  var url = new URL('b?a=1&b=2&c=3', 'https://a');\n  var params = url.searchParams;\n  var params2 = new URLSearchParams('a=1&a=2&b=3');\n  var result = '';\n  url.pathname = 'c%20d';\n  params.forEach(function (value, key) {\n    params['delete']('b');\n    result += key + value;\n  });\n  params2['delete']('a', 2);\n  // `undefined` case is a Chromium 117 bug\n  // https://bugs.chromium.org/p/v8/issues/detail?id=14222\n  params2['delete']('b', undefined);\n  return (IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))\n    || (!params.size && (IS_PURE || !DESCRIPTORS))\n    || !params.sort\n    || url.href !== 'https://a/c%20d?a=1&c=3'\n    || params.get('c') !== '3'\n    || String(new URLSearchParams('?a=1')) !== 'a=1'\n    || !params[ITERATOR]\n    // throws in Edge\n    || new URL('https://a@b').username !== 'a'\n    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'\n    // not punycoded in Edge\n    || new URL('https://тест').host !== 'xn--e1aybc'\n    // not escaped in Chrome 62-\n    || new URL('https://a#б').hash !== '#%D0%B1'\n    // fails in Chrome 66-\n    || result !== 'a1c3'\n    // throws in Safari\n    || new URL('https://x', undefined).host !== 'x';\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/url-constructor-detection.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\n\nmodule.exports = NATIVE_SYMBOL &&\n  !Symbol.sham &&\n  typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/use-symbol-as-uid.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/v8-prototype-define-bug.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/v8-prototype-define-bug.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype !== 42;\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/v8-prototype-define-bug.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/validate-arguments-length.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/validate-arguments-length.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\nvar $TypeError = TypeError;\n\nmodule.exports = function (passed, required) {\n  if (passed < required) throw new $TypeError('Not enough arguments');\n  return passed;\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/validate-arguments-length.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/weak-map-basic-detection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/weak-map-basic-detection.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar WeakMap = globalThis.WeakMap;\n\nmodule.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/weak-map-basic-detection.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js-pure/internals/symbol-constructor-detection.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar Symbol = globalThis.Symbol;\nvar WellKnownSymbolsStore = shared('wks');\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name)) {\n    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)\n      ? Symbol[name]\n      : createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/internals/well-known-symbol.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f);\nvar defineIterator = __webpack_require__(/*! ../internals/iterator-define */ \"./node_modules/core-js-pure/internals/iterator-define.js\");\nvar createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ \"./node_modules/core-js-pure/internals/create-iter-result-object.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.es/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.es/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.es/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.es/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = null;\n    return createIterResultObject(undefined, true);\n  }\n  switch (state.kind) {\n    case 'keys': return createIterResultObject(index, false);\n    case 'values': return createIterResultObject(target[index], false);\n  } return createIterResultObject([index, target[index]], false);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.es/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.es/ecma262/#sec-createmappedargumentsobject\nvar values = Iterators.Arguments = Iterators.Array;\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n// V8 ~ Chrome 45- bug\nif (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {\n  defineProperty(values, 'name', { value: 'values' });\n} catch (error) { /* empty */ }\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/es.array.iterator.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.global-this.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.global-this.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\n\n// `globalThis` object\n// https://tc39.es/ecma262/#sec-globalthis\n$({ global: true, forced: globalThis.globalThis !== globalThis }, {\n  globalThis: globalThis\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/es.global-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.from-code-point.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.from-code-point.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\n\nvar $RangeError = RangeError;\nvar fromCharCode = String.fromCharCode;\n// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing\nvar $fromCodePoint = String.fromCodePoint;\nvar join = uncurryThis([].join);\n\n// length should be 1, old FF problem\nvar INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;\n\n// `String.fromCodePoint` method\n// https://tc39.es/ecma262/#sec-string.fromcodepoint\n$({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  fromCodePoint: function fromCodePoint(x) {\n    var elements = [];\n    var length = arguments.length;\n    var i = 0;\n    var code;\n    while (length > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw new $RangeError(code + ' is not a valid code point');\n      elements[i] = code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);\n    } return join(elements, '');\n  }\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/es.string.from-code-point.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar charAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js-pure/internals/string-multibyte.js\").charAt);\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/iterator-define */ \"./node_modules/core-js-pure/internals/iterator-define.js\");\nvar createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ \"./node_modules/core-js-pure/internals/create-iter-result-object.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: toString(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return createIterResultObject(undefined, true);\n  point = charAt(string, index);\n  state.index += point.length;\n  return createIterResultObject(point, false);\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/es.string.iterator.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.global-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.global-this.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.global-this */ \"./node_modules/core-js-pure/modules/es.global-this.js\");\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/esnext.global-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url-search-params.constructor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url-search-params.constructor.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`\n__webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n__webpack_require__(/*! ../modules/es.string.from-code-point */ \"./node_modules/core-js-pure/modules/es.string.from-code-point.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar safeGetBuiltIn = __webpack_require__(/*! ../internals/safe-get-built-in */ \"./node_modules/core-js-pure/internals/safe-get-built-in.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/url-constructor-detection */ \"./node_modules/core-js-pure/internals/url-constructor-detection.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ \"./node_modules/core-js-pure/internals/define-built-in-accessor.js\");\nvar defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ \"./node_modules/core-js-pure/internals/define-built-ins.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ \"./node_modules/core-js-pure/internals/iterator-create-constructor.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js-pure/internals/an-instance.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js-pure/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\nvar createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ \"./node_modules/core-js-pure/internals/create-iter-result-object.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js-pure/internals/validate-arguments-length.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar arraySort = __webpack_require__(/*! ../internals/array-sort */ \"./node_modules/core-js-pure/internals/array-sort.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar URL_SEARCH_PARAMS = 'URLSearchParams';\nvar URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);\nvar getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);\n\nvar nativeFetch = safeGetBuiltIn('fetch');\nvar NativeRequest = safeGetBuiltIn('Request');\nvar Headers = safeGetBuiltIn('Headers');\nvar RequestPrototype = NativeRequest && NativeRequest.prototype;\nvar HeadersPrototype = Headers && Headers.prototype;\nvar TypeError = globalThis.TypeError;\nvar encodeURIComponent = globalThis.encodeURIComponent;\nvar fromCharCode = String.fromCharCode;\nvar fromCodePoint = getBuiltIn('String', 'fromCodePoint');\nvar $parseInt = parseInt;\nvar charAt = uncurryThis(''.charAt);\nvar join = uncurryThis([].join);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar shift = uncurryThis([].shift);\nvar splice = uncurryThis([].splice);\nvar split = uncurryThis(''.split);\nvar stringSlice = uncurryThis(''.slice);\nvar exec = uncurryThis(/./.exec);\n\nvar plus = /\\+/g;\nvar FALLBACK_REPLACER = '\\uFFFD';\nvar VALID_HEX = /^[0-9a-f]+$/i;\n\nvar parseHexOctet = function (string, start) {\n  var substr = stringSlice(string, start, start + 2);\n  if (!exec(VALID_HEX, substr)) return NaN;\n\n  return $parseInt(substr, 16);\n};\n\nvar getLeadingOnes = function (octet) {\n  var count = 0;\n  for (var mask = 0x80; mask > 0 && (octet & mask) !== 0; mask >>= 1) {\n    count++;\n  }\n  return count;\n};\n\nvar utf8Decode = function (octets) {\n  var codePoint = null;\n\n  switch (octets.length) {\n    case 1:\n      codePoint = octets[0];\n      break;\n    case 2:\n      codePoint = (octets[0] & 0x1F) << 6 | (octets[1] & 0x3F);\n      break;\n    case 3:\n      codePoint = (octets[0] & 0x0F) << 12 | (octets[1] & 0x3F) << 6 | (octets[2] & 0x3F);\n      break;\n    case 4:\n      codePoint = (octets[0] & 0x07) << 18 | (octets[1] & 0x3F) << 12 | (octets[2] & 0x3F) << 6 | (octets[3] & 0x3F);\n      break;\n  }\n\n  return codePoint > 0x10FFFF ? null : codePoint;\n};\n\nvar decode = function (input) {\n  input = replace(input, plus, ' ');\n  var length = input.length;\n  var result = '';\n  var i = 0;\n\n  while (i < length) {\n    var decodedChar = charAt(input, i);\n\n    if (decodedChar === '%') {\n      if (charAt(input, i + 1) === '%' || i + 3 > length) {\n        result += '%';\n        i++;\n        continue;\n      }\n\n      var octet = parseHexOctet(input, i + 1);\n\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (octet !== octet) {\n        result += decodedChar;\n        i++;\n        continue;\n      }\n\n      i += 2;\n      var byteSequenceLength = getLeadingOnes(octet);\n\n      if (byteSequenceLength === 0) {\n        decodedChar = fromCharCode(octet);\n      } else {\n        if (byteSequenceLength === 1 || byteSequenceLength > 4) {\n          result += FALLBACK_REPLACER;\n          i++;\n          continue;\n        }\n\n        var octets = [octet];\n        var sequenceIndex = 1;\n\n        while (sequenceIndex < byteSequenceLength) {\n          i++;\n          if (i + 3 > length || charAt(input, i) !== '%') break;\n\n          var nextByte = parseHexOctet(input, i + 1);\n\n          // eslint-disable-next-line no-self-compare -- NaN check\n          if (nextByte !== nextByte) {\n            i += 3;\n            break;\n          }\n          if (nextByte > 191 || nextByte < 128) break;\n\n          push(octets, nextByte);\n          i += 2;\n          sequenceIndex++;\n        }\n\n        if (octets.length !== byteSequenceLength) {\n          result += FALLBACK_REPLACER;\n          continue;\n        }\n\n        var codePoint = utf8Decode(octets);\n        if (codePoint === null) {\n          result += FALLBACK_REPLACER;\n        } else {\n          decodedChar = fromCodePoint(codePoint);\n        }\n      }\n    }\n\n    result += decodedChar;\n    i++;\n  }\n\n  return result;\n};\n\nvar find = /[!'()~]|%20/g;\n\nvar replacements = {\n  '!': '%21',\n  \"'\": '%27',\n  '(': '%28',\n  ')': '%29',\n  '~': '%7E',\n  '%20': '+'\n};\n\nvar replacer = function (match) {\n  return replacements[match];\n};\n\nvar serialize = function (it) {\n  return replace(encodeURIComponent(it), find, replacer);\n};\n\nvar URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {\n  setInternalState(this, {\n    type: URL_SEARCH_PARAMS_ITERATOR,\n    target: getInternalParamsState(params).entries,\n    index: 0,\n    kind: kind\n  });\n}, URL_SEARCH_PARAMS, function next() {\n  var state = getInternalIteratorState(this);\n  var target = state.target;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = null;\n    return createIterResultObject(undefined, true);\n  }\n  var entry = target[index];\n  switch (state.kind) {\n    case 'keys': return createIterResultObject(entry.key, false);\n    case 'values': return createIterResultObject(entry.value, false);\n  } return createIterResultObject([entry.key, entry.value], false);\n}, true);\n\nvar URLSearchParamsState = function (init) {\n  this.entries = [];\n  this.url = null;\n\n  if (init !== undefined) {\n    if (isObject(init)) this.parseObject(init);\n    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));\n  }\n};\n\nURLSearchParamsState.prototype = {\n  type: URL_SEARCH_PARAMS,\n  bindURL: function (url) {\n    this.url = url;\n    this.update();\n  },\n  parseObject: function (object) {\n    var entries = this.entries;\n    var iteratorMethod = getIteratorMethod(object);\n    var iterator, next, step, entryIterator, entryNext, first, second;\n\n    if (iteratorMethod) {\n      iterator = getIterator(object, iteratorMethod);\n      next = iterator.next;\n      while (!(step = call(next, iterator)).done) {\n        entryIterator = getIterator(anObject(step.value));\n        entryNext = entryIterator.next;\n        if (\n          (first = call(entryNext, entryIterator)).done ||\n          (second = call(entryNext, entryIterator)).done ||\n          !call(entryNext, entryIterator).done\n        ) throw new TypeError('Expected sequence with length 2');\n        push(entries, { key: $toString(first.value), value: $toString(second.value) });\n      }\n    } else for (var key in object) if (hasOwn(object, key)) {\n      push(entries, { key: key, value: $toString(object[key]) });\n    }\n  },\n  parseQuery: function (query) {\n    if (query) {\n      var entries = this.entries;\n      var attributes = split(query, '&');\n      var index = 0;\n      var attribute, entry;\n      while (index < attributes.length) {\n        attribute = attributes[index++];\n        if (attribute.length) {\n          entry = split(attribute, '=');\n          push(entries, {\n            key: decode(shift(entry)),\n            value: decode(join(entry, '='))\n          });\n        }\n      }\n    }\n  },\n  serialize: function () {\n    var entries = this.entries;\n    var result = [];\n    var index = 0;\n    var entry;\n    while (index < entries.length) {\n      entry = entries[index++];\n      push(result, serialize(entry.key) + '=' + serialize(entry.value));\n    } return join(result, '&');\n  },\n  update: function () {\n    this.entries.length = 0;\n    this.parseQuery(this.url.query);\n  },\n  updateURL: function () {\n    if (this.url) this.url.update();\n  }\n};\n\n// `URLSearchParams` constructor\n// https://url.spec.whatwg.org/#interface-urlsearchparams\nvar URLSearchParamsConstructor = function URLSearchParams(/* init */) {\n  anInstance(this, URLSearchParamsPrototype);\n  var init = arguments.length > 0 ? arguments[0] : undefined;\n  var state = setInternalState(this, new URLSearchParamsState(init));\n  if (!DESCRIPTORS) this.size = state.entries.length;\n};\n\nvar URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;\n\ndefineBuiltIns(URLSearchParamsPrototype, {\n  // `URLSearchParams.prototype.append` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-append\n  append: function append(name, value) {\n    var state = getInternalParamsState(this);\n    validateArgumentsLength(arguments.length, 2);\n    push(state.entries, { key: $toString(name), value: $toString(value) });\n    if (!DESCRIPTORS) this.length++;\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.delete` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete\n  'delete': function (name /* , value */) {\n    var state = getInternalParamsState(this);\n    var length = validateArgumentsLength(arguments.length, 1);\n    var entries = state.entries;\n    var key = $toString(name);\n    var $value = length < 2 ? undefined : arguments[1];\n    var value = $value === undefined ? $value : $toString($value);\n    var index = 0;\n    while (index < entries.length) {\n      var entry = entries[index];\n      if (entry.key === key && (value === undefined || entry.value === value)) {\n        splice(entries, index, 1);\n        if (value !== undefined) break;\n      } else index++;\n    }\n    if (!DESCRIPTORS) this.size = entries.length;\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.get` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-get\n  get: function get(name) {\n    var entries = getInternalParamsState(this).entries;\n    validateArgumentsLength(arguments.length, 1);\n    var key = $toString(name);\n    var index = 0;\n    for (; index < entries.length; index++) {\n      if (entries[index].key === key) return entries[index].value;\n    }\n    return null;\n  },\n  // `URLSearchParams.prototype.getAll` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall\n  getAll: function getAll(name) {\n    var entries = getInternalParamsState(this).entries;\n    validateArgumentsLength(arguments.length, 1);\n    var key = $toString(name);\n    var result = [];\n    var index = 0;\n    for (; index < entries.length; index++) {\n      if (entries[index].key === key) push(result, entries[index].value);\n    }\n    return result;\n  },\n  // `URLSearchParams.prototype.has` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-has\n  has: function has(name /* , value */) {\n    var entries = getInternalParamsState(this).entries;\n    var length = validateArgumentsLength(arguments.length, 1);\n    var key = $toString(name);\n    var $value = length < 2 ? undefined : arguments[1];\n    var value = $value === undefined ? $value : $toString($value);\n    var index = 0;\n    while (index < entries.length) {\n      var entry = entries[index++];\n      if (entry.key === key && (value === undefined || entry.value === value)) return true;\n    }\n    return false;\n  },\n  // `URLSearchParams.prototype.set` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-set\n  set: function set(name, value) {\n    var state = getInternalParamsState(this);\n    validateArgumentsLength(arguments.length, 1);\n    var entries = state.entries;\n    var found = false;\n    var key = $toString(name);\n    var val = $toString(value);\n    var index = 0;\n    var entry;\n    for (; index < entries.length; index++) {\n      entry = entries[index];\n      if (entry.key === key) {\n        if (found) splice(entries, index--, 1);\n        else {\n          found = true;\n          entry.value = val;\n        }\n      }\n    }\n    if (!found) push(entries, { key: key, value: val });\n    if (!DESCRIPTORS) this.size = entries.length;\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.sort` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort\n  sort: function sort() {\n    var state = getInternalParamsState(this);\n    arraySort(state.entries, function (a, b) {\n      return a.key > b.key ? 1 : -1;\n    });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.forEach` method\n  forEach: function forEach(callback /* , thisArg */) {\n    var entries = getInternalParamsState(this).entries;\n    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);\n    var index = 0;\n    var entry;\n    while (index < entries.length) {\n      entry = entries[index++];\n      boundFunction(entry.value, entry.key, this);\n    }\n  },\n  // `URLSearchParams.prototype.keys` method\n  keys: function keys() {\n    return new URLSearchParamsIterator(this, 'keys');\n  },\n  // `URLSearchParams.prototype.values` method\n  values: function values() {\n    return new URLSearchParamsIterator(this, 'values');\n  },\n  // `URLSearchParams.prototype.entries` method\n  entries: function entries() {\n    return new URLSearchParamsIterator(this, 'entries');\n  }\n}, { enumerable: true });\n\n// `URLSearchParams.prototype[@@iterator]` method\ndefineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });\n\n// `URLSearchParams.prototype.toString` method\n// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior\ndefineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {\n  return getInternalParamsState(this).serialize();\n}, { enumerable: true });\n\n// `URLSearchParams.prototype.size` getter\n// https://github.com/whatwg/url/pull/734\nif (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {\n  get: function size() {\n    return getInternalParamsState(this).entries.length;\n  },\n  configurable: true,\n  enumerable: true\n});\n\nsetToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);\n\n$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {\n  URLSearchParams: URLSearchParamsConstructor\n});\n\n// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`\nif (!USE_NATIVE_URL && isCallable(Headers)) {\n  var headersHas = uncurryThis(HeadersPrototype.has);\n  var headersSet = uncurryThis(HeadersPrototype.set);\n\n  var wrapRequestOptions = function (init) {\n    if (isObject(init)) {\n      var body = init.body;\n      var headers;\n      if (classof(body) === URL_SEARCH_PARAMS) {\n        headers = init.headers ? new Headers(init.headers) : new Headers();\n        if (!headersHas(headers, 'content-type')) {\n          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');\n        }\n        return create(init, {\n          body: createPropertyDescriptor(0, $toString(body)),\n          headers: createPropertyDescriptor(0, headers)\n        });\n      }\n    } return init;\n  };\n\n  if (isCallable(nativeFetch)) {\n    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {\n      fetch: function fetch(input /* , init */) {\n        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});\n      }\n    });\n  }\n\n  if (isCallable(NativeRequest)) {\n    var RequestConstructor = function Request(input /* , init */) {\n      anInstance(this, RequestPrototype);\n      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});\n    };\n\n    RequestPrototype.constructor = RequestConstructor;\n    RequestConstructor.prototype = RequestPrototype;\n\n    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {\n      Request: RequestConstructor\n    });\n  }\n}\n\nmodule.exports = {\n  URLSearchParams: URLSearchParamsConstructor,\n  getState: getInternalParamsState\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url-search-params.constructor.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url-search-params.delete.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url-search-params.delete.js ***!
  \***************************************************************************/
/***/ (() => {

eval("{// empty\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url-search-params.delete.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url-search-params.has.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url-search-params.has.js ***!
  \************************************************************************/
/***/ (() => {

eval("{// empty\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url-search-params.has.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url-search-params.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url-search-params.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n// TODO: Remove this module from `core-js@4` since it's replaced to module below\n__webpack_require__(/*! ../modules/web.url-search-params.constructor */ \"./node_modules/core-js-pure/modules/web.url-search-params.constructor.js\");\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url-search-params.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url-search-params.size.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url-search-params.size.js ***!
  \*************************************************************************/
/***/ (() => {

eval("{// empty\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url-search-params.size.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url.can-parse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url.can-parse.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js-pure/internals/validate-arguments-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/url-constructor-detection */ \"./node_modules/core-js-pure/internals/url-constructor-detection.js\");\n\nvar URL = getBuiltIn('URL');\n\n// https://github.com/nodejs/node/issues/47505\n// https://github.com/denoland/deno/issues/18893\nvar THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function () {\n  URL.canParse();\n});\n\n// Bun ~ 1.0.30 bug\n// https://github.com/oven-sh/bun/issues/9250\nvar WRONG_ARITY = fails(function () {\n  return URL.canParse.length !== 1;\n});\n\n// `URL.canParse` method\n// https://url.spec.whatwg.org/#dom-url-canparse\n$({ target: 'URL', stat: true, forced: !THROWS_WITHOUT_ARGUMENTS || WRONG_ARITY }, {\n  canParse: function canParse(url) {\n    var length = validateArgumentsLength(arguments.length, 1);\n    var urlString = toString(url);\n    var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);\n    try {\n      return !!new URL(urlString, base);\n    } catch (error) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url.can-parse.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url.constructor.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url.constructor.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/url-constructor-detection */ \"./node_modules/core-js-pure/internals/url-constructor-detection.js\");\nvar globalThis = __webpack_require__(/*! ../internals/global-this */ \"./node_modules/core-js-pure/internals/global-this.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js-pure/internals/define-built-in.js\");\nvar defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ \"./node_modules/core-js-pure/internals/define-built-in-accessor.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js-pure/internals/an-instance.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js-pure/internals/object-assign.js\");\nvar arrayFrom = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js-pure/internals/array-from.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js-pure/internals/array-slice.js\");\nvar codeAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js-pure/internals/string-multibyte.js\").codeAt);\nvar toASCII = __webpack_require__(/*! ../internals/string-punycode-to-ascii */ \"./node_modules/core-js-pure/internals/string-punycode-to-ascii.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js-pure/internals/validate-arguments-length.js\");\nvar URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params.constructor */ \"./node_modules/core-js-pure/modules/web.url-search-params.constructor.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\n\nvar setInternalState = InternalStateModule.set;\nvar getInternalURLState = InternalStateModule.getterFor('URL');\nvar URLSearchParams = URLSearchParamsModule.URLSearchParams;\nvar getInternalSearchParamsState = URLSearchParamsModule.getState;\n\nvar NativeURL = globalThis.URL;\nvar TypeError = globalThis.TypeError;\nvar parseInt = globalThis.parseInt;\nvar floor = Math.floor;\nvar pow = Math.pow;\nvar charAt = uncurryThis(''.charAt);\nvar exec = uncurryThis(/./.exec);\nvar join = uncurryThis([].join);\nvar numberToString = uncurryThis(1.1.toString);\nvar pop = uncurryThis([].pop);\nvar push = uncurryThis([].push);\nvar replace = uncurryThis(''.replace);\nvar shift = uncurryThis([].shift);\nvar split = uncurryThis(''.split);\nvar stringSlice = uncurryThis(''.slice);\nvar toLowerCase = uncurryThis(''.toLowerCase);\nvar unshift = uncurryThis([].unshift);\n\nvar INVALID_AUTHORITY = 'Invalid authority';\nvar INVALID_SCHEME = 'Invalid scheme';\nvar INVALID_HOST = 'Invalid host';\nvar INVALID_PORT = 'Invalid port';\n\nvar ALPHA = /[a-z]/i;\n// eslint-disable-next-line regexp/no-obscure-range -- safe\nvar ALPHANUMERIC = /[\\d+-.a-z]/i;\nvar DIGIT = /\\d/;\nvar HEX_START = /^0x/i;\nvar OCT = /^[0-7]+$/;\nvar DEC = /^\\d+$/;\nvar HEX = /^[\\da-f]+$/i;\n/* eslint-disable regexp/no-control-character -- safe */\nvar FORBIDDEN_HOST_CODE_POINT = /[\\0\\t\\n\\r #%/:<>?@[\\\\\\]^|]/;\nvar FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\\0\\t\\n\\r #/:<>?@[\\\\\\]^|]/;\nvar LEADING_C0_CONTROL_OR_SPACE = /^[\\u0000-\\u0020]+/;\nvar TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\\u0000-\\u0020])[\\u0000-\\u0020]+$/;\nvar TAB_AND_NEW_LINE = /[\\t\\n\\r]/g;\n/* eslint-enable regexp/no-control-character -- safe */\n// eslint-disable-next-line no-unassigned-vars -- expected `undefined` value\nvar EOF;\n\n// https://url.spec.whatwg.org/#ipv4-number-parser\nvar parseIPv4 = function (input) {\n  var parts = split(input, '.');\n  var partsLength, numbers, index, part, radix, number, ipv4;\n  if (parts.length && parts[parts.length - 1] === '') {\n    parts.length--;\n  }\n  partsLength = parts.length;\n  if (partsLength > 4) return input;\n  numbers = [];\n  for (index = 0; index < partsLength; index++) {\n    part = parts[index];\n    if (part === '') return input;\n    radix = 10;\n    if (part.length > 1 && charAt(part, 0) === '0') {\n      radix = exec(HEX_START, part) ? 16 : 8;\n      part = stringSlice(part, radix === 8 ? 1 : 2);\n    }\n    if (part === '') {\n      number = 0;\n    } else {\n      if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return input;\n      number = parseInt(part, radix);\n    }\n    push(numbers, number);\n  }\n  for (index = 0; index < partsLength; index++) {\n    number = numbers[index];\n    if (index === partsLength - 1) {\n      if (number >= pow(256, 5 - partsLength)) return null;\n    } else if (number > 255) return null;\n  }\n  ipv4 = pop(numbers);\n  for (index = 0; index < numbers.length; index++) {\n    ipv4 += numbers[index] * pow(256, 3 - index);\n  }\n  return ipv4;\n};\n\n// https://url.spec.whatwg.org/#concept-ipv6-parser\n// eslint-disable-next-line max-statements -- TODO\nvar parseIPv6 = function (input) {\n  var address = [0, 0, 0, 0, 0, 0, 0, 0];\n  var pieceIndex = 0;\n  var compress = null;\n  var pointer = 0;\n  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;\n\n  var chr = function () {\n    return charAt(input, pointer);\n  };\n\n  if (chr() === ':') {\n    if (charAt(input, 1) !== ':') return;\n    pointer += 2;\n    pieceIndex++;\n    compress = pieceIndex;\n  }\n  while (chr()) {\n    if (pieceIndex === 8) return;\n    if (chr() === ':') {\n      if (compress !== null) return;\n      pointer++;\n      pieceIndex++;\n      compress = pieceIndex;\n      continue;\n    }\n    value = length = 0;\n    while (length < 4 && exec(HEX, chr())) {\n      value = value * 16 + parseInt(chr(), 16);\n      pointer++;\n      length++;\n    }\n    if (chr() === '.') {\n      if (length === 0) return;\n      pointer -= length;\n      if (pieceIndex > 6) return;\n      numbersSeen = 0;\n      while (chr()) {\n        ipv4Piece = null;\n        if (numbersSeen > 0) {\n          if (chr() === '.' && numbersSeen < 4) pointer++;\n          else return;\n        }\n        if (!exec(DIGIT, chr())) return;\n        while (exec(DIGIT, chr())) {\n          number = parseInt(chr(), 10);\n          if (ipv4Piece === null) ipv4Piece = number;\n          else if (ipv4Piece === 0) return;\n          else ipv4Piece = ipv4Piece * 10 + number;\n          if (ipv4Piece > 255) return;\n          pointer++;\n        }\n        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;\n        numbersSeen++;\n        if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;\n      }\n      if (numbersSeen !== 4) return;\n      break;\n    } else if (chr() === ':') {\n      pointer++;\n      if (!chr()) return;\n    } else if (chr()) return;\n    address[pieceIndex++] = value;\n  }\n  if (compress !== null) {\n    swaps = pieceIndex - compress;\n    pieceIndex = 7;\n    while (pieceIndex !== 0 && swaps > 0) {\n      swap = address[pieceIndex];\n      address[pieceIndex--] = address[compress + swaps - 1];\n      address[compress + --swaps] = swap;\n    }\n  } else if (pieceIndex !== 8) return;\n  return address;\n};\n\nvar findLongestZeroSequence = function (ipv6) {\n  var maxIndex = null;\n  var maxLength = 1;\n  var currStart = null;\n  var currLength = 0;\n  var index = 0;\n  for (; index < 8; index++) {\n    if (ipv6[index] !== 0) {\n      if (currLength > maxLength) {\n        maxIndex = currStart;\n        maxLength = currLength;\n      }\n      currStart = null;\n      currLength = 0;\n    } else {\n      if (currStart === null) currStart = index;\n      ++currLength;\n    }\n  }\n  return currLength > maxLength ? currStart : maxIndex;\n};\n\n// https://url.spec.whatwg.org/#host-serializing\nvar serializeHost = function (host) {\n  var result, index, compress, ignore0;\n\n  // ipv4\n  if (typeof host == 'number') {\n    result = [];\n    for (index = 0; index < 4; index++) {\n      unshift(result, host % 256);\n      host = floor(host / 256);\n    }\n    return join(result, '.');\n  }\n\n  // ipv6\n  if (typeof host == 'object') {\n    result = '';\n    compress = findLongestZeroSequence(host);\n    for (index = 0; index < 8; index++) {\n      if (ignore0 && host[index] === 0) continue;\n      if (ignore0) ignore0 = false;\n      if (compress === index) {\n        result += index ? ':' : '::';\n        ignore0 = true;\n      } else {\n        result += numberToString(host[index], 16);\n        if (index < 7) result += ':';\n      }\n    }\n    return '[' + result + ']';\n  }\n\n  return host;\n};\n\nvar C0ControlPercentEncodeSet = {};\nvar fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {\n  ' ': 1, '\"': 1, '<': 1, '>': 1, '`': 1\n});\nvar pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {\n  '#': 1, '?': 1, '{': 1, '}': 1\n});\nvar userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {\n  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\\\': 1, ']': 1, '^': 1, '|': 1\n});\n\nvar percentEncode = function (chr, set) {\n  var code = codeAt(chr, 0);\n  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);\n};\n\n// https://url.spec.whatwg.org/#special-scheme\nvar specialSchemes = {\n  ftp: 21,\n  file: null,\n  http: 80,\n  https: 443,\n  ws: 80,\n  wss: 443\n};\n\n// https://url.spec.whatwg.org/#windows-drive-letter\nvar isWindowsDriveLetter = function (string, normalized) {\n  var second;\n  return string.length === 2 && exec(ALPHA, charAt(string, 0))\n    && ((second = charAt(string, 1)) === ':' || (!normalized && second === '|'));\n};\n\n// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter\nvar startsWithWindowsDriveLetter = function (string) {\n  var third;\n  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (\n    string.length === 2 ||\n    ((third = charAt(string, 2)) === '/' || third === '\\\\' || third === '?' || third === '#')\n  );\n};\n\n// https://url.spec.whatwg.org/#single-dot-path-segment\nvar isSingleDot = function (segment) {\n  return segment === '.' || toLowerCase(segment) === '%2e';\n};\n\n// https://url.spec.whatwg.org/#double-dot-path-segment\nvar isDoubleDot = function (segment) {\n  segment = toLowerCase(segment);\n  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';\n};\n\n// States:\nvar SCHEME_START = {};\nvar SCHEME = {};\nvar NO_SCHEME = {};\nvar SPECIAL_RELATIVE_OR_AUTHORITY = {};\nvar PATH_OR_AUTHORITY = {};\nvar RELATIVE = {};\nvar RELATIVE_SLASH = {};\nvar SPECIAL_AUTHORITY_SLASHES = {};\nvar SPECIAL_AUTHORITY_IGNORE_SLASHES = {};\nvar AUTHORITY = {};\nvar HOST = {};\nvar HOSTNAME = {};\nvar PORT = {};\nvar FILE = {};\nvar FILE_SLASH = {};\nvar FILE_HOST = {};\nvar PATH_START = {};\nvar PATH = {};\nvar CANNOT_BE_A_BASE_URL_PATH = {};\nvar QUERY = {};\nvar FRAGMENT = {};\n\nvar URLState = function (url, isBase, base) {\n  var urlString = $toString(url);\n  var baseState, failure, searchParams;\n  if (isBase) {\n    failure = this.parse(urlString);\n    if (failure) throw new TypeError(failure);\n    this.searchParams = null;\n  } else {\n    if (base !== undefined) baseState = new URLState(base, true);\n    failure = this.parse(urlString, null, baseState);\n    if (failure) throw new TypeError(failure);\n    searchParams = getInternalSearchParamsState(new URLSearchParams());\n    searchParams.bindURL(this);\n    this.searchParams = searchParams;\n  }\n};\n\nURLState.prototype = {\n  type: 'URL',\n  // https://url.spec.whatwg.org/#url-parsing\n  // eslint-disable-next-line max-statements -- TODO\n  parse: function (input, stateOverride, base) {\n    var url = this;\n    var state = stateOverride || SCHEME_START;\n    var pointer = 0;\n    var buffer = '';\n    var seenAt = false;\n    var seenBracket = false;\n    var seenPasswordToken = false;\n    var codePoints, chr, bufferCodePoints, failure;\n\n    input = $toString(input);\n\n    if (!stateOverride) {\n      url.scheme = '';\n      url.username = '';\n      url.password = '';\n      url.host = null;\n      url.port = null;\n      url.path = [];\n      url.query = null;\n      url.fragment = null;\n      url.cannotBeABaseURL = false;\n      input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');\n      input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');\n    }\n\n    input = replace(input, TAB_AND_NEW_LINE, '');\n\n    codePoints = arrayFrom(input);\n\n    while (pointer <= codePoints.length) {\n      chr = codePoints[pointer];\n      switch (state) {\n        case SCHEME_START:\n          if (chr && exec(ALPHA, chr)) {\n            buffer += toLowerCase(chr);\n            state = SCHEME;\n          } else if (!stateOverride) {\n            state = NO_SCHEME;\n            continue;\n          } else return INVALID_SCHEME;\n          break;\n\n        case SCHEME:\n          if (chr && (exec(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {\n            buffer += toLowerCase(chr);\n          } else if (chr === ':') {\n            if (stateOverride && (\n              (url.isSpecial() !== hasOwn(specialSchemes, buffer)) ||\n              (buffer === 'file' && (url.includesCredentials() || url.port !== null)) ||\n              (url.scheme === 'file' && !url.host)\n            )) return;\n            url.scheme = buffer;\n            if (stateOverride) {\n              if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;\n              return;\n            }\n            buffer = '';\n            if (url.scheme === 'file') {\n              state = FILE;\n            } else if (url.isSpecial() && base && base.scheme === url.scheme) {\n              state = SPECIAL_RELATIVE_OR_AUTHORITY;\n            } else if (url.isSpecial()) {\n              state = SPECIAL_AUTHORITY_SLASHES;\n            } else if (codePoints[pointer + 1] === '/') {\n              state = PATH_OR_AUTHORITY;\n              pointer++;\n            } else {\n              url.cannotBeABaseURL = true;\n              push(url.path, '');\n              state = CANNOT_BE_A_BASE_URL_PATH;\n            }\n          } else if (!stateOverride) {\n            buffer = '';\n            state = NO_SCHEME;\n            pointer = 0;\n            continue;\n          } else return INVALID_SCHEME;\n          break;\n\n        case NO_SCHEME:\n          if (!base || (base.cannotBeABaseURL && chr !== '#')) return INVALID_SCHEME;\n          if (base.cannotBeABaseURL && chr === '#') {\n            url.scheme = base.scheme;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n            url.fragment = '';\n            url.cannotBeABaseURL = true;\n            state = FRAGMENT;\n            break;\n          }\n          state = base.scheme === 'file' ? FILE : RELATIVE;\n          continue;\n\n        case SPECIAL_RELATIVE_OR_AUTHORITY:\n          if (chr === '/' && codePoints[pointer + 1] === '/') {\n            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n            pointer++;\n          } else {\n            state = RELATIVE;\n            continue;\n          } break;\n\n        case PATH_OR_AUTHORITY:\n          if (chr === '/') {\n            state = AUTHORITY;\n            break;\n          } else {\n            state = PATH;\n            continue;\n          }\n\n        case RELATIVE:\n          url.scheme = base.scheme;\n          if (chr === EOF) {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n          } else if (chr === '/' || (chr === '\\\\' && url.isSpecial())) {\n            state = RELATIVE_SLASH;\n          } else if (chr === '?') {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = '';\n            state = QUERY;\n          } else if (chr === '#') {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.query = base.query;\n            url.fragment = '';\n            state = FRAGMENT;\n          } else {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            url.path = arraySlice(base.path);\n            url.path.length--;\n            state = PATH;\n            continue;\n          } break;\n\n        case RELATIVE_SLASH:\n          if (url.isSpecial() && (chr === '/' || chr === '\\\\')) {\n            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n          } else if (chr === '/') {\n            state = AUTHORITY;\n          } else {\n            url.username = base.username;\n            url.password = base.password;\n            url.host = base.host;\n            url.port = base.port;\n            state = PATH;\n            continue;\n          } break;\n\n        case SPECIAL_AUTHORITY_SLASHES:\n          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n          if (chr !== '/' || charAt(buffer, pointer + 1) !== '/') continue;\n          pointer++;\n          break;\n\n        case SPECIAL_AUTHORITY_IGNORE_SLASHES:\n          if (chr !== '/' && chr !== '\\\\') {\n            state = AUTHORITY;\n            continue;\n          } break;\n\n        case AUTHORITY:\n          if (chr === '@') {\n            if (seenAt) buffer = '%40' + buffer;\n            seenAt = true;\n            bufferCodePoints = arrayFrom(buffer);\n            for (var i = 0; i < bufferCodePoints.length; i++) {\n              var codePoint = bufferCodePoints[i];\n              if (codePoint === ':' && !seenPasswordToken) {\n                seenPasswordToken = true;\n                continue;\n              }\n              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);\n              if (seenPasswordToken) url.password += encodedCodePoints;\n              else url.username += encodedCodePoints;\n            }\n            buffer = '';\n          } else if (\n            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||\n            (chr === '\\\\' && url.isSpecial())\n          ) {\n            if (seenAt && buffer === '') return INVALID_AUTHORITY;\n            pointer -= arrayFrom(buffer).length + 1;\n            buffer = '';\n            state = HOST;\n          } else buffer += chr;\n          break;\n\n        case HOST:\n        case HOSTNAME:\n          if (stateOverride && url.scheme === 'file') {\n            state = FILE_HOST;\n            continue;\n          } else if (chr === ':' && !seenBracket) {\n            if (buffer === '') return INVALID_HOST;\n            failure = url.parseHost(buffer);\n            if (failure) return failure;\n            buffer = '';\n            state = PORT;\n            if (stateOverride === HOSTNAME) return;\n          } else if (\n            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||\n            (chr === '\\\\' && url.isSpecial())\n          ) {\n            if (url.isSpecial() && buffer === '') return INVALID_HOST;\n            if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;\n            failure = url.parseHost(buffer);\n            if (failure) return failure;\n            buffer = '';\n            state = PATH_START;\n            if (stateOverride) return;\n            continue;\n          } else {\n            if (chr === '[') seenBracket = true;\n            else if (chr === ']') seenBracket = false;\n            buffer += chr;\n          } break;\n\n        case PORT:\n          if (exec(DIGIT, chr)) {\n            buffer += chr;\n          } else if (\n            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||\n            (chr === '\\\\' && url.isSpecial()) ||\n            stateOverride\n          ) {\n            if (buffer !== '') {\n              var port = parseInt(buffer, 10);\n              if (port > 0xFFFF) return INVALID_PORT;\n              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;\n              buffer = '';\n            }\n            if (stateOverride) return;\n            state = PATH_START;\n            continue;\n          } else return INVALID_PORT;\n          break;\n\n        case FILE:\n          url.scheme = 'file';\n          if (chr === '/' || chr === '\\\\') state = FILE_SLASH;\n          else if (base && base.scheme === 'file') {\n            switch (chr) {\n              case EOF:\n                url.host = base.host;\n                url.path = arraySlice(base.path);\n                url.query = base.query;\n                break;\n              case '?':\n                url.host = base.host;\n                url.path = arraySlice(base.path);\n                url.query = '';\n                state = QUERY;\n                break;\n              case '#':\n                url.host = base.host;\n                url.path = arraySlice(base.path);\n                url.query = base.query;\n                url.fragment = '';\n                state = FRAGMENT;\n                break;\n              default:\n                if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {\n                  url.host = base.host;\n                  url.path = arraySlice(base.path);\n                  url.shortenPath();\n                }\n                state = PATH;\n                continue;\n            }\n          } else {\n            state = PATH;\n            continue;\n          } break;\n\n        case FILE_SLASH:\n          if (chr === '/' || chr === '\\\\') {\n            state = FILE_HOST;\n            break;\n          }\n          if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {\n            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);\n            else url.host = base.host;\n          }\n          state = PATH;\n          continue;\n\n        case FILE_HOST:\n          if (chr === EOF || chr === '/' || chr === '\\\\' || chr === '?' || chr === '#') {\n            if (!stateOverride && isWindowsDriveLetter(buffer)) {\n              state = PATH;\n            } else if (buffer === '') {\n              url.host = '';\n              if (stateOverride) return;\n              state = PATH_START;\n            } else {\n              failure = url.parseHost(buffer);\n              if (failure) return failure;\n              if (url.host === 'localhost') url.host = '';\n              if (stateOverride) return;\n              buffer = '';\n              state = PATH_START;\n            } continue;\n          } else buffer += chr;\n          break;\n\n        case PATH_START:\n          if (url.isSpecial()) {\n            state = PATH;\n            if (chr !== '/' && chr !== '\\\\') continue;\n          } else if (!stateOverride && chr === '?') {\n            url.query = '';\n            state = QUERY;\n          } else if (!stateOverride && chr === '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr !== EOF) {\n            state = PATH;\n            if (chr !== '/') continue;\n          } break;\n\n        case PATH:\n          if (\n            chr === EOF || chr === '/' ||\n            (chr === '\\\\' && url.isSpecial()) ||\n            (!stateOverride && (chr === '?' || chr === '#'))\n          ) {\n            if (isDoubleDot(buffer)) {\n              url.shortenPath();\n              if (chr !== '/' && !(chr === '\\\\' && url.isSpecial())) {\n                push(url.path, '');\n              }\n            } else if (isSingleDot(buffer)) {\n              if (chr !== '/' && !(chr === '\\\\' && url.isSpecial())) {\n                push(url.path, '');\n              }\n            } else {\n              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {\n                if (url.host) url.host = '';\n                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter\n              }\n              push(url.path, buffer);\n            }\n            buffer = '';\n            if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {\n              while (url.path.length > 1 && url.path[0] === '') {\n                shift(url.path);\n              }\n            }\n            if (chr === '?') {\n              url.query = '';\n              state = QUERY;\n            } else if (chr === '#') {\n              url.fragment = '';\n              state = FRAGMENT;\n            }\n          } else {\n            buffer += percentEncode(chr, pathPercentEncodeSet);\n          } break;\n\n        case CANNOT_BE_A_BASE_URL_PATH:\n          if (chr === '?') {\n            url.query = '';\n            state = QUERY;\n          } else if (chr === '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr !== EOF) {\n            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);\n          } break;\n\n        case QUERY:\n          if (!stateOverride && chr === '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          } else if (chr !== EOF) {\n            if (chr === \"'\" && url.isSpecial()) url.query += '%27';\n            else if (chr === '#') url.query += '%23';\n            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);\n          } break;\n\n        case FRAGMENT:\n          if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);\n          break;\n      }\n\n      pointer++;\n    }\n  },\n  // https://url.spec.whatwg.org/#host-parsing\n  parseHost: function (input) {\n    var result, codePoints, index;\n    if (charAt(input, 0) === '[') {\n      if (charAt(input, input.length - 1) !== ']') return INVALID_HOST;\n      result = parseIPv6(stringSlice(input, 1, -1));\n      if (!result) return INVALID_HOST;\n      this.host = result;\n    // opaque host\n    } else if (!this.isSpecial()) {\n      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;\n      result = '';\n      codePoints = arrayFrom(input);\n      for (index = 0; index < codePoints.length; index++) {\n        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);\n      }\n      this.host = result;\n    } else {\n      input = toASCII(input);\n      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;\n      result = parseIPv4(input);\n      if (result === null) return INVALID_HOST;\n      this.host = result;\n    }\n  },\n  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port\n  cannotHaveUsernamePasswordPort: function () {\n    return !this.host || this.cannotBeABaseURL || this.scheme === 'file';\n  },\n  // https://url.spec.whatwg.org/#include-credentials\n  includesCredentials: function () {\n    return this.username !== '' || this.password !== '';\n  },\n  // https://url.spec.whatwg.org/#is-special\n  isSpecial: function () {\n    return hasOwn(specialSchemes, this.scheme);\n  },\n  // https://url.spec.whatwg.org/#shorten-a-urls-path\n  shortenPath: function () {\n    var path = this.path;\n    var pathSize = path.length;\n    if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {\n      path.length--;\n    }\n  },\n  // https://url.spec.whatwg.org/#concept-url-serializer\n  serialize: function () {\n    var url = this;\n    var scheme = url.scheme;\n    var username = url.username;\n    var password = url.password;\n    var host = url.host;\n    var port = url.port;\n    var path = url.path;\n    var query = url.query;\n    var fragment = url.fragment;\n    var output = scheme + ':';\n    if (host !== null) {\n      output += '//';\n      if (url.includesCredentials()) {\n        output += username + (password ? ':' + password : '') + '@';\n      }\n      output += serializeHost(host);\n      if (port !== null) output += ':' + port;\n    } else if (scheme === 'file') output += '//';\n    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';\n    if (query !== null) output += '?' + query;\n    if (fragment !== null) output += '#' + fragment;\n    return output;\n  },\n  // https://url.spec.whatwg.org/#dom-url-href\n  setHref: function (href) {\n    var failure = this.parse(href);\n    if (failure) throw new TypeError(failure);\n    this.searchParams.update();\n  },\n  // https://url.spec.whatwg.org/#dom-url-origin\n  getOrigin: function () {\n    var scheme = this.scheme;\n    var port = this.port;\n    if (scheme === 'blob') try {\n      return new URLConstructor(scheme.path[0]).origin;\n    } catch (error) {\n      return 'null';\n    }\n    if (scheme === 'file' || !this.isSpecial()) return 'null';\n    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');\n  },\n  // https://url.spec.whatwg.org/#dom-url-protocol\n  getProtocol: function () {\n    return this.scheme + ':';\n  },\n  setProtocol: function (protocol) {\n    this.parse($toString(protocol) + ':', SCHEME_START);\n  },\n  // https://url.spec.whatwg.org/#dom-url-username\n  getUsername: function () {\n    return this.username;\n  },\n  setUsername: function (username) {\n    var codePoints = arrayFrom($toString(username));\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    this.username = '';\n    for (var i = 0; i < codePoints.length; i++) {\n      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);\n    }\n  },\n  // https://url.spec.whatwg.org/#dom-url-password\n  getPassword: function () {\n    return this.password;\n  },\n  setPassword: function (password) {\n    var codePoints = arrayFrom($toString(password));\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    this.password = '';\n    for (var i = 0; i < codePoints.length; i++) {\n      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);\n    }\n  },\n  // https://url.spec.whatwg.org/#dom-url-host\n  getHost: function () {\n    var host = this.host;\n    var port = this.port;\n    return host === null ? ''\n      : port === null ? serializeHost(host)\n      : serializeHost(host) + ':' + port;\n  },\n  setHost: function (host) {\n    if (this.cannotBeABaseURL) return;\n    this.parse(host, HOST);\n  },\n  // https://url.spec.whatwg.org/#dom-url-hostname\n  getHostname: function () {\n    var host = this.host;\n    return host === null ? '' : serializeHost(host);\n  },\n  setHostname: function (hostname) {\n    if (this.cannotBeABaseURL) return;\n    this.parse(hostname, HOSTNAME);\n  },\n  // https://url.spec.whatwg.org/#dom-url-port\n  getPort: function () {\n    var port = this.port;\n    return port === null ? '' : $toString(port);\n  },\n  setPort: function (port) {\n    if (this.cannotHaveUsernamePasswordPort()) return;\n    port = $toString(port);\n    if (port === '') this.port = null;\n    else this.parse(port, PORT);\n  },\n  // https://url.spec.whatwg.org/#dom-url-pathname\n  getPathname: function () {\n    var path = this.path;\n    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';\n  },\n  setPathname: function (pathname) {\n    if (this.cannotBeABaseURL) return;\n    this.path = [];\n    this.parse(pathname, PATH_START);\n  },\n  // https://url.spec.whatwg.org/#dom-url-search\n  getSearch: function () {\n    var query = this.query;\n    return query ? '?' + query : '';\n  },\n  setSearch: function (search) {\n    search = $toString(search);\n    if (search === '') {\n      this.query = null;\n    } else {\n      if (charAt(search, 0) === '?') search = stringSlice(search, 1);\n      this.query = '';\n      this.parse(search, QUERY);\n    }\n    this.searchParams.update();\n  },\n  // https://url.spec.whatwg.org/#dom-url-searchparams\n  getSearchParams: function () {\n    return this.searchParams.facade;\n  },\n  // https://url.spec.whatwg.org/#dom-url-hash\n  getHash: function () {\n    var fragment = this.fragment;\n    return fragment ? '#' + fragment : '';\n  },\n  setHash: function (hash) {\n    hash = $toString(hash);\n    if (hash === '') {\n      this.fragment = null;\n      return;\n    }\n    if (charAt(hash, 0) === '#') hash = stringSlice(hash, 1);\n    this.fragment = '';\n    this.parse(hash, FRAGMENT);\n  },\n  update: function () {\n    this.query = this.searchParams.serialize() || null;\n  }\n};\n\n// `URL` constructor\n// https://url.spec.whatwg.org/#url-class\nvar URLConstructor = function URL(url /* , base */) {\n  var that = anInstance(this, URLPrototype);\n  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;\n  var state = setInternalState(that, new URLState(url, false, base));\n  if (!DESCRIPTORS) {\n    that.href = state.serialize();\n    that.origin = state.getOrigin();\n    that.protocol = state.getProtocol();\n    that.username = state.getUsername();\n    that.password = state.getPassword();\n    that.host = state.getHost();\n    that.hostname = state.getHostname();\n    that.port = state.getPort();\n    that.pathname = state.getPathname();\n    that.search = state.getSearch();\n    that.searchParams = state.getSearchParams();\n    that.hash = state.getHash();\n  }\n};\n\nvar URLPrototype = URLConstructor.prototype;\n\nvar accessorDescriptor = function (getter, setter) {\n  return {\n    get: function () {\n      return getInternalURLState(this)[getter]();\n    },\n    set: setter && function (value) {\n      return getInternalURLState(this)[setter](value);\n    },\n    configurable: true,\n    enumerable: true\n  };\n};\n\nif (DESCRIPTORS) {\n  // `URL.prototype.href` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-href\n  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));\n  // `URL.prototype.origin` getter\n  // https://url.spec.whatwg.org/#dom-url-origin\n  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));\n  // `URL.prototype.protocol` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-protocol\n  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));\n  // `URL.prototype.username` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-username\n  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));\n  // `URL.prototype.password` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-password\n  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));\n  // `URL.prototype.host` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-host\n  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));\n  // `URL.prototype.hostname` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-hostname\n  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));\n  // `URL.prototype.port` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-port\n  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));\n  // `URL.prototype.pathname` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-pathname\n  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));\n  // `URL.prototype.search` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-search\n  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));\n  // `URL.prototype.searchParams` getter\n  // https://url.spec.whatwg.org/#dom-url-searchparams\n  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));\n  // `URL.prototype.hash` accessors pair\n  // https://url.spec.whatwg.org/#dom-url-hash\n  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));\n}\n\n// `URL.prototype.toJSON` method\n// https://url.spec.whatwg.org/#dom-url-tojson\ndefineBuiltIn(URLPrototype, 'toJSON', function toJSON() {\n  return getInternalURLState(this).serialize();\n}, { enumerable: true });\n\n// `URL.prototype.toString` method\n// https://url.spec.whatwg.org/#URL-stringification-behavior\ndefineBuiltIn(URLPrototype, 'toString', function toString() {\n  return getInternalURLState(this).serialize();\n}, { enumerable: true });\n\nif (NativeURL) {\n  var nativeCreateObjectURL = NativeURL.createObjectURL;\n  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;\n  // `URL.createObjectURL` method\n  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL\n  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));\n  // `URL.revokeObjectURL` method\n  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL\n  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));\n}\n\nsetToStringTag(URLConstructor, 'URL');\n\n$({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {\n  URL: URLConstructor\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url.constructor.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n// TODO: Remove this module from `core-js@4` since it's replaced to module below\n__webpack_require__(/*! ../modules/web.url.constructor */ \"./node_modules/core-js-pure/modules/web.url.constructor.js\");\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url.parse.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url.parse.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js-pure/internals/validate-arguments-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js-pure/internals/to-string.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/url-constructor-detection */ \"./node_modules/core-js-pure/internals/url-constructor-detection.js\");\n\nvar URL = getBuiltIn('URL');\n\n// `URL.parse` method\n// https://url.spec.whatwg.org/#dom-url-canparse\n$({ target: 'URL', stat: true, forced: !USE_NATIVE_URL }, {\n  parse: function parse(url) {\n    var length = validateArgumentsLength(arguments.length, 1);\n    var urlString = toString(url);\n    var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);\n    try {\n      return new URL(urlString, base);\n    } catch (error) {\n      return null;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url.parse.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.url.to-json.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.url.to-json.js ***!
  \**************************************************************/
/***/ (() => {

eval("{// empty\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/modules/web.url.to-json.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/global-this.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/global-this.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\nvar parent = __webpack_require__(/*! ../es/global-this */ \"./node_modules/core-js-pure/es/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/stable/global-this.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/web/url-search-params.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/web/url-search-params.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n__webpack_require__(/*! ../modules/web.url-search-params */ \"./node_modules/core-js-pure/modules/web.url-search-params.js\");\n__webpack_require__(/*! ../modules/web.url-search-params.delete */ \"./node_modules/core-js-pure/modules/web.url-search-params.delete.js\");\n__webpack_require__(/*! ../modules/web.url-search-params.has */ \"./node_modules/core-js-pure/modules/web.url-search-params.has.js\");\n__webpack_require__(/*! ../modules/web.url-search-params.size */ \"./node_modules/core-js-pure/modules/web.url-search-params.size.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.URLSearchParams;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/web/url-search-params.js?\n}");

/***/ }),

/***/ "./node_modules/core-js-pure/web/url.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js-pure/web/url.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n__webpack_require__(/*! ./url-search-params */ \"./node_modules/core-js-pure/web/url-search-params.js\");\n__webpack_require__(/*! ../modules/web.url */ \"./node_modules/core-js-pure/modules/web.url.js\");\n__webpack_require__(/*! ../modules/web.url.can-parse */ \"./node_modules/core-js-pure/modules/web.url.can-parse.js\");\n__webpack_require__(/*! ../modules/web.url.parse */ \"./node_modules/core-js-pure/modules/web.url.parse.js\");\n__webpack_require__(/*! ../modules/web.url.to-json */ \"./node_modules/core-js-pure/modules/web.url.to-json.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.URL;\n\n\n//# sourceURL=webpack://frontend/./node_modules/core-js-pure/web/url.js?\n}");

/***/ })

}]);