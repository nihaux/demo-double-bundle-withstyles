(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global.demoDoubleBundleWithstyles = factory(global._react,global.reactDom));
}(this, (function (_react,reactDom) { 'use strict';

	var _react__default = _react['default'];
	reactDom = reactDom && reactDom.hasOwnProperty('default') ? reactDom['default'] : reactDom;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var interopRequireDefault = createCommonjsModule(function (module) {
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}

	module.exports = _interopRequireDefault;
	});

	unwrapExports(interopRequireDefault);

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var objectWithoutProperties = _objectWithoutProperties;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction_1;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var warning_1 = warning;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	if (process.env.NODE_ENV !== 'production') {
	  var invariant$1 = invariant_1;
	  var warning$1 = warning_1;
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant_1(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning_1(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction_1.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction_1.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning_1(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction_1.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant_1(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			module.exports = classNames;
		} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
			// register as 'classnames', consistent with npm package name
			undefined('classnames', [], function () {
				return classNames;
			});
		} else {
			window.classNames = classNames;
		}
	}());
	});

	var interopRequireWildcard = createCommonjsModule(function (module) {
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

	          if (desc.get || desc.set) {
	            Object.defineProperty(newObj, key, desc);
	          } else {
	            newObj[key] = obj[key];
	          }
	        }
	      }
	    }

	    newObj.default = obj;
	    return newObj;
	  }
	}

	module.exports = _interopRequireWildcard;
	});

	unwrapExports(interopRequireWildcard);

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      defineProperty(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var objectSpread = _objectSpread;

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var __DEV__ = process.env.NODE_ENV !== 'production';

	var warning$2 = function() {};

	if (__DEV__) {
	  warning$2 = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	var warning_1$1 = warning$2;

	var hoistNonReactStatics = createCommonjsModule(function (module, exports) {
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	(function (global, factory) {
	    module.exports = factory();
	}(commonjsGlobal, (function () {
	    
	    var REACT_STATICS = {
	        childContextTypes: true,
	        contextTypes: true,
	        defaultProps: true,
	        displayName: true,
	        getDefaultProps: true,
	        getDerivedStateFromProps: true,
	        mixins: true,
	        propTypes: true,
	        type: true
	    };
	    
	    var KNOWN_STATICS = {
	        name: true,
	        length: true,
	        prototype: true,
	        caller: true,
	        callee: true,
	        arguments: true,
	        arity: true
	    };
	    
	    var defineProperty = Object.defineProperty;
	    var getOwnPropertyNames = Object.getOwnPropertyNames;
	    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    var getPrototypeOf = Object.getPrototypeOf;
	    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	    
	    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	            
	            if (objectPrototype) {
	                var inheritedComponent = getPrototypeOf(sourceComponent);
	                if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	                }
	            }
	            
	            var keys = getOwnPropertyNames(sourceComponent);
	            
	            if (getOwnPropertySymbols) {
	                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	            }
	            
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                    try { // Avoid failures from read-only properties
	                        defineProperty(targetComponent, key, descriptor);
	                    } catch (e) {}
	                }
	            }
	            
	            return targetComponent;
	        }
	        
	        return targetComponent;
	    };
	})));
	});

	var getDisplayName_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }

	  if (!Component) {
	    return undefined;
	  }

	  return Component.displayName || Component.name || 'Component';
	};

	exports.default = getDisplayName;
	});

	unwrapExports(getDisplayName_1);

	var wrapDisplayName_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _getDisplayName2 = _interopRequireDefault(getDisplayName_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};

	exports.default = wrapDisplayName;
	});

	unwrapExports(wrapDisplayName_1);

	var ns = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Namespaces to avoid conflicts on the context.
	 */
	var jss = exports.jss = '64a55d578f856d258dc345b094a2a2b3';
	var sheetsRegistry = exports.sheetsRegistry = 'd4bd0baacbc52bbd48bbb9eb24344ecd';
	var managers = exports.managers = 'b768b78919504fba9de2c03545c5cd3a';
	var sheetOptions = exports.sheetOptions = '6fc570d6bd61383819d0f9e7407c452d';
	});

	unwrapExports(ns);
	var ns_1 = ns.jss;
	var ns_2 = ns.sheetsRegistry;
	var ns_3 = ns.managers;
	var ns_4 = ns.sheetOptions;

	var propTypes$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	exports['default'] = {
	  jss: (0, propTypes.shape)({
	    options: (0, propTypes.shape)({
	      createGenerateClassName: propTypes.func.isRequired
	    }).isRequired,
	    createStyleSheet: propTypes.func.isRequired,
	    removeStyleSheet: propTypes.func.isRequired
	  }),
	  registry: (0, propTypes.shape)({
	    add: propTypes.func.isRequired,
	    toString: propTypes.func.isRequired
	  })
	};
	});

	unwrapExports(propTypes$1);

	var contextTypes = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ns$jss$ns$sheetOptio;





	var ns$$1 = _interopRequireWildcard(ns);



	var _propTypes3 = _interopRequireDefault(propTypes$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports['default'] = (_ns$jss$ns$sheetOptio = {}, _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.jss, _propTypes3['default'].jss), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.sheetOptions, propTypes.object), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.sheetsRegistry, _propTypes3['default'].registry), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.managers, propTypes.object), _ns$jss$ns$sheetOptio);
	});

	unwrapExports(contextTypes);

	var getDynamicStyles_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports['default'] = getDynamicStyles;
	/**
	 * Extracts a styles object with only props that contain function values.
	 */
	function getDynamicStyles(styles) {
	  var to = null;

	  for (var key in styles) {
	    var value = styles[key];
	    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

	    if (type === 'function') {
	      if (!to) to = {};
	      to[key] = value;
	    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
	      var extracted = getDynamicStyles(value);
	      if (extracted) {
	        if (!to) to = {};
	        to[key] = extracted;
	      }
	    }
	  }

	  return to;
	}
	});

	unwrapExports(getDynamicStyles_1);

	var toCssValue_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toCssValue;
	var join = function join(value, by) {
	  var result = '';
	  for (var i = 0; i < value.length; i++) {
	    // Remove !important from the value, it will be readded later.
	    if (value[i] === '!important') break;
	    if (result) result += by;
	    result += value[i];
	  }
	  return result;
	};

	/**
	 * Converts array values to string.
	 *
	 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
	 * `border: ['1px', '2px']` > `border: 1px, 2px;`
	 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
	 * `color: ['red', !important]` > `color: red !important;`
	 */
	function toCssValue(value) {
	  var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (!Array.isArray(value)) return value;

	  var cssValue = '';

	  // Support space separated values via `[['5px', '10px']]`.
	  if (Array.isArray(value[0])) {
	    for (var i = 0; i < value.length; i++) {
	      if (value[i] === '!important') break;
	      if (cssValue) cssValue += ', ';
	      cssValue += join(value[i], ' ');
	    }
	  } else cssValue = join(value, ', ');

	  // Add !important, because it was ignored.
	  if (!ignoreImportant && value[value.length - 1] === '!important') {
	    cssValue += ' !important';
	  }

	  return cssValue;
	}
	});

	unwrapExports(toCssValue_1);

	var SheetsRegistry_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Sheets registry to access them all at one place.
	 */
	var SheetsRegistry = function () {
	  function SheetsRegistry() {
	    _classCallCheck(this, SheetsRegistry);

	    this.registry = [];
	  }

	  _createClass(SheetsRegistry, [{
	    key: 'add',


	    /**
	     * Register a Style Sheet.
	     */
	    value: function add(sheet) {
	      var registry = this.registry;
	      var index = sheet.options.index;


	      if (registry.indexOf(sheet) !== -1) return;

	      if (registry.length === 0 || index >= this.index) {
	        registry.push(sheet);
	        return;
	      }

	      // Find a position.
	      for (var i = 0; i < registry.length; i++) {
	        if (registry[i].options.index > index) {
	          registry.splice(i, 0, sheet);
	          return;
	        }
	      }
	    }

	    /**
	     * Reset the registry.
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.registry = [];
	    }

	    /**
	     * Remove a Style Sheet.
	     */

	  }, {
	    key: 'remove',
	    value: function remove(sheet) {
	      var index = this.registry.indexOf(sheet);
	      this.registry.splice(index, 1);
	    }

	    /**
	     * Convert all attached sheets to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.registry.filter(function (sheet) {
	        return sheet.attached;
	      }).map(function (sheet) {
	        return sheet.toString(options);
	      }).join('\n');
	    }
	  }, {
	    key: 'index',


	    /**
	     * Current highest index number.
	     */
	    get: function get() {
	      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
	    }
	  }]);

	  return SheetsRegistry;
	}();

	exports['default'] = SheetsRegistry;
	});

	unwrapExports(SheetsRegistry_1);

	var SheetsManager_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _warning2 = _interopRequireDefault(warning_1$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * SheetsManager is like a WeakMap which is designed to count StyleSheet
	 * instances and attach/detach automatically.
	 */
	var SheetsManager = function () {
	  function SheetsManager() {
	    _classCallCheck(this, SheetsManager);

	    this.sheets = [];
	    this.refs = [];
	    this.keys = [];
	  }

	  _createClass(SheetsManager, [{
	    key: 'get',
	    value: function get(key) {
	      var index = this.keys.indexOf(key);
	      return this.sheets[index];
	    }
	  }, {
	    key: 'add',
	    value: function add(key, sheet) {
	      var sheets = this.sheets,
	          refs = this.refs,
	          keys = this.keys;

	      var index = sheets.indexOf(sheet);

	      if (index !== -1) return index;

	      sheets.push(sheet);
	      refs.push(0);
	      keys.push(key);

	      return sheets.length - 1;
	    }
	  }, {
	    key: 'manage',
	    value: function manage(key) {
	      var index = this.keys.indexOf(key);
	      var sheet = this.sheets[index];
	      if (this.refs[index] === 0) sheet.attach();
	      this.refs[index]++;
	      if (!this.keys[index]) this.keys.splice(index, 0, key);
	      return sheet;
	    }
	  }, {
	    key: 'unmanage',
	    value: function unmanage(key) {
	      var index = this.keys.indexOf(key);
	      if (index === -1) {
	        // eslint-ignore-next-line no-console
	        (0, _warning2['default'])(false, "SheetsManager: can't find sheet to unmanage");
	        return;
	      }
	      if (this.refs[index] > 0) {
	        this.refs[index]--;
	        if (this.refs[index] === 0) this.sheets[index].detach();
	      }
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this.keys.length;
	    }
	  }]);

	  return SheetsManager;
	}();

	exports['default'] = SheetsManager;
	});

	unwrapExports(SheetsManager_1);

	var toCss_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toCss;



	var _toCssValue2 = _interopRequireDefault(toCssValue_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Indent a string.
	 * http://jsperf.com/array-join-vs-for
	 */
	function indentStr(str, indent) {
	  var result = '';
	  for (var index = 0; index < indent; index++) {
	    result += '  ';
	  }return result + str;
	}

	/**
	 * Converts a Rule to CSS string.
	 */

	function toCss(selector, style) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  var result = '';

	  if (!style) return result;

	  var _options$indent = options.indent,
	      indent = _options$indent === undefined ? 0 : _options$indent;
	  var fallbacks = style.fallbacks;


	  indent++;

	  // Apply fallbacks first.
	  if (fallbacks) {
	    // Array syntax {fallbacks: [{prop: value}]}
	    if (Array.isArray(fallbacks)) {
	      for (var index = 0; index < fallbacks.length; index++) {
	        var fallback = fallbacks[index];
	        for (var prop in fallback) {
	          var value = fallback[prop];
	          if (value != null) {
	            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
	          }
	        }
	      }
	    } else {
	      // Object syntax {fallbacks: {prop: value}}
	      for (var _prop in fallbacks) {
	        var _value = fallbacks[_prop];
	        if (_value != null) {
	          result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
	        }
	      }
	    }
	  }

	  for (var _prop2 in style) {
	    var _value2 = style[_prop2];
	    if (_value2 != null && _prop2 !== 'fallbacks') {
	      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
	    }
	  }

	  // Allow empty style in this case, because properties will be added dynamically.
	  if (!result && !options.allowEmpty) return result;

	  indent--;
	  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

	  return result;
	}
	});

	unwrapExports(toCss_1);

	var StyleRule_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _warning2 = _interopRequireDefault(warning_1$1);



	var _toCss2 = _interopRequireDefault(toCss_1);



	var _toCssValue2 = _interopRequireDefault(toCssValue_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StyleRule = function () {
	  function StyleRule(key, style, options) {
	    _classCallCheck(this, StyleRule);

	    this.type = 'style';
	    this.isProcessed = false;
	    var sheet = options.sheet,
	        Renderer = options.Renderer,
	        selector = options.selector;

	    this.key = key;
	    this.options = options;
	    this.style = style;
	    if (selector) this.selectorText = selector;
	    this.renderer = sheet ? sheet.renderer : new Renderer();
	  }

	  /**
	   * Set selector string.
	   * Attention: use this with caution. Most browsers didn't implement
	   * selectorText setter, so this may result in rerendering of entire Style Sheet.
	   */


	  _createClass(StyleRule, [{
	    key: 'prop',


	    /**
	     * Get or set a style property.
	     */
	    value: function prop(name, value) {
	      // It's a getter.
	      if (value === undefined) return this.style[name];

	      // Don't do anything if the value has not changed.
	      if (this.style[name] === value) return this;

	      value = this.options.jss.plugins.onChangeValue(value, name, this);

	      var isEmpty = value == null || value === false;
	      var isDefined = name in this.style;

	      // Value is empty and wasn't defined before.
	      if (isEmpty && !isDefined) return this;

	      // We are going to remove this value.
	      var remove = isEmpty && isDefined;

	      if (remove) delete this.style[name];else this.style[name] = value;

	      // Renderable is defined if StyleSheet option `link` is true.
	      if (this.renderable) {
	        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, value);
	        return this;
	      }

	      var sheet = this.options.sheet;

	      if (sheet && sheet.attached) {
	        (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
	      }
	      return this;
	    }

	    /**
	     * Apply rule to an element inline.
	     */

	  }, {
	    key: 'applyTo',
	    value: function applyTo(renderable) {
	      var json = this.toJSON();
	      for (var prop in json) {
	        this.renderer.setProperty(renderable, prop, json[prop]);
	      }return this;
	    }

	    /**
	     * Returns JSON representation of the rule.
	     * Fallbacks are not supported.
	     * Useful for inline styles.
	     */

	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var json = {};
	      for (var prop in this.style) {
	        var value = this.style[prop];
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
	      }
	      return json;
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      var sheet = this.options.sheet;

	      var link = sheet ? sheet.options.link : false;
	      var opts = link ? _extends({}, options, { allowEmpty: true }) : options;
	      return (0, _toCss2['default'])(this.selector, this.style, opts);
	    }
	  }, {
	    key: 'selector',
	    set: function set(selector) {
	      if (selector === this.selectorText) return;

	      this.selectorText = selector;

	      if (!this.renderable) return;

	      var hasChanged = this.renderer.setSelector(this.renderable, selector);

	      // If selector setter is not implemented, rerender the rule.
	      if (!hasChanged && this.renderable) {
	        var renderable = this.renderer.replaceRule(this.renderable, this);
	        if (renderable) this.renderable = renderable;
	      }
	    }

	    /**
	     * Get selector string.
	     */
	    ,
	    get: function get() {
	      return this.selectorText;
	    }
	  }]);

	  return StyleRule;
	}();

	exports['default'] = StyleRule;
	});

	unwrapExports(StyleRule_1);

	function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	}

	/* global window */

	var root;

	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (typeof module !== 'undefined') {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = symbolObservablePonyfill(root);

	var es = /*#__PURE__*/Object.freeze({
		default: result
	});

	var _symbolObservable = ( es && result ) || es;

	var isObservable = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = function (value) {
	  return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
	};
	});

	unwrapExports(isObservable);

	var cloneStyle_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports['default'] = cloneStyle;



	var _isObservable2 = _interopRequireDefault(isObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var isArray = Array.isArray;
	function cloneStyle(style) {
	  // Support empty values in case user ends up with them by accident.
	  if (style == null) return style;

	  // Support string value for SimpleRule.
	  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

	  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
	    return style;
	  }

	  // Support array for FontFaceRule.
	  if (isArray(style)) return style.map(cloneStyle);

	  // Support Observable styles.  Observables are immutable, so we don't need to
	  // copy them.
	  if ((0, _isObservable2['default'])(style)) return style;

	  var newStyle = {};
	  for (var name in style) {
	    var value = style[name];
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	      newStyle[name] = cloneStyle(value);
	      continue;
	    }
	    newStyle[name] = value;
	  }

	  return newStyle;
	}
	});

	unwrapExports(cloneStyle_1);

	var createRule_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = createRule;



	var _warning2 = _interopRequireDefault(warning_1$1);



	var _StyleRule2 = _interopRequireDefault(StyleRule_1);



	var _cloneStyle2 = _interopRequireDefault(cloneStyle_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Create a rule instance.
	 */
	function createRule() {
	  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
	  var decl = arguments[1];
	  var options = arguments[2];
	  var jss = options.jss;

	  var declCopy = (0, _cloneStyle2['default'])(decl);

	  var rule = jss.plugins.onCreateRule(name, declCopy, options);
	  if (rule) return rule;

	  // It is an at-rule and it has no instance.
	  if (name[0] === '@') {
	    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
	  }

	  return new _StyleRule2['default'](name, declCopy, options);
	}
	});

	unwrapExports(createRule_1);

	var linkRule_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = linkRule;
	/**
	 * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
	 */
	function linkRule(rule, cssRule) {
	  rule.renderable = cssRule;
	  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
	}
	});

	unwrapExports(linkRule_1);

	var _escape = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CSS = commonjsGlobal.CSS;

	var env = process.env.NODE_ENV;

	var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

	exports['default'] = function (str) {
	  // We don't need to escape it in production, because we are not using user's
	  // input for selectors, we are generating a valid selector.
	  if (env === 'production') return str;

	  if (!CSS || !CSS.escape) {
	    return str.replace(escapeRegex, '\\$1');
	  }

	  return CSS.escape(str);
	};
	});

	unwrapExports(_escape);

	var RuleList_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _createRule2 = _interopRequireDefault(createRule_1);



	var _linkRule2 = _interopRequireDefault(linkRule_1);



	var _StyleRule2 = _interopRequireDefault(StyleRule_1);



	var _escape2 = _interopRequireDefault(_escape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Contains rules objects and allows adding/removing etc.
	 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
	 */
	var RuleList = function () {

	  // Original styles object.
	  function RuleList(options) {
	    _classCallCheck(this, RuleList);

	    this.map = {};
	    this.raw = {};
	    this.index = [];

	    this.options = options;
	    this.classes = options.classes;
	  }

	  /**
	   * Create and register rule.
	   *
	   * Will not render after Style Sheet was rendered the first time.
	   */


	  // Used to ensure correct rules order.

	  // Rules registry for access by .get() method.
	  // It contains the same rule registered by name and by selector.


	  _createClass(RuleList, [{
	    key: 'add',
	    value: function add(name, decl, options) {
	      var _options = this.options,
	          parent = _options.parent,
	          sheet = _options.sheet,
	          jss = _options.jss,
	          Renderer = _options.Renderer,
	          generateClassName = _options.generateClassName;


	      options = _extends({
	        classes: this.classes,
	        parent: parent,
	        sheet: sheet,
	        jss: jss,
	        Renderer: Renderer,
	        generateClassName: generateClassName
	      }, options);

	      if (!options.selector && this.classes[name]) {
	        options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
	      }

	      this.raw[name] = decl;

	      var rule = (0, _createRule2['default'])(name, decl, options);

	      var className = void 0;

	      if (!options.selector && rule instanceof _StyleRule2['default']) {
	        className = generateClassName(rule, sheet);
	        rule.selector = '.' + (0, _escape2['default'])(className);
	      }

	      this.register(rule, className);

	      var index = options.index === undefined ? this.index.length : options.index;
	      this.index.splice(index, 0, rule);

	      return rule;
	    }

	    /**
	     * Get a rule.
	     */

	  }, {
	    key: 'get',
	    value: function get(name) {
	      return this.map[name];
	    }

	    /**
	     * Delete a rule.
	     */

	  }, {
	    key: 'remove',
	    value: function remove(rule) {
	      this.unregister(rule);
	      this.index.splice(this.indexOf(rule), 1);
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.index.indexOf(rule);
	    }

	    /**
	     * Run `onProcessRule()` plugins on every rule.
	     */

	  }, {
	    key: 'process',
	    value: function process() {
	      var plugins = this.options.jss.plugins;
	      // We need to clone array because if we modify the index somewhere else during a loop
	      // we end up with very hard-to-track-down side effects.

	      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
	    }

	    /**
	     * Register a rule in `.map` and `.classes` maps.
	     */

	  }, {
	    key: 'register',
	    value: function register(rule, className) {
	      this.map[rule.key] = rule;
	      if (rule instanceof _StyleRule2['default']) {
	        this.map[rule.selector] = rule;
	        if (className) this.classes[rule.key] = className;
	      }
	    }

	    /**
	     * Unregister a rule.
	     */

	  }, {
	    key: 'unregister',
	    value: function unregister(rule) {
	      delete this.map[rule.key];
	      if (rule instanceof _StyleRule2['default']) {
	        delete this.map[rule.selector];
	        delete this.classes[rule.key];
	      }
	    }

	    /**
	     * Update the function values with a new data.
	     */

	  }, {
	    key: 'update',
	    value: function update(name, data) {
	      var _options2 = this.options,
	          plugins = _options2.jss.plugins,
	          sheet = _options2.sheet;

	      if (typeof name === 'string') {
	        plugins.onUpdate(data, this.get(name), sheet);
	        return;
	      }

	      for (var index = 0; index < this.index.length; index++) {
	        plugins.onUpdate(name, this.index[index], sheet);
	      }
	    }

	    /**
	     * Link renderable rules with CSSRuleList.
	     */

	  }, {
	    key: 'link',
	    value: function link(cssRules) {
	      var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

	      for (var i = 0; i < cssRules.length; i++) {
	        var cssRule = cssRules[i];
	        var _key = this.options.sheet.renderer.getKey(cssRule);
	        if (map[_key]) _key = map[_key];
	        var rule = this.map[_key];
	        if (rule) (0, _linkRule2['default'])(rule, cssRule);
	      }
	    }

	    /**
	     * Convert rules to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      var str = '';
	      var sheet = this.options.sheet;

	      var link = sheet ? sheet.options.link : false;

	      for (var index = 0; index < this.index.length; index++) {
	        var rule = this.index[index];
	        var css = rule.toString(options);

	        // No need to render an empty rule.
	        if (!css && !link) continue;

	        if (str) str += '\n';
	        str += css;
	      }

	      return str;
	    }
	  }]);

	  return RuleList;
	}();

	exports['default'] = RuleList;
	});

	unwrapExports(RuleList_1);

	var sheets = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _SheetsRegistry2 = _interopRequireDefault(SheetsRegistry_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * This is a global sheets registry. Only DomRenderer will add sheets to it.
	 * On the server one should use an own SheetsRegistry instance and add the
	 * sheets to it, because you need to make sure to create a new registry for
	 * each request in order to not leak sheets across requests.
	 */
	exports['default'] = new _SheetsRegistry2['default']();
	});

	unwrapExports(sheets);

	var StyleSheet_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _linkRule2 = _interopRequireDefault(linkRule_1);



	var _RuleList2 = _interopRequireDefault(RuleList_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StyleSheet = function () {
	  function StyleSheet(styles, options) {
	    _classCallCheck(this, StyleSheet);

	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;
	    this.classes = {};
	    this.options = _extends({}, options, {
	      sheet: this,
	      parent: this,
	      classes: this.classes
	    });
	    this.renderer = new options.Renderer(this);
	    this.rules = new _RuleList2['default'](this.options);

	    for (var name in styles) {
	      this.rules.add(name, styles[name]);
	    }

	    this.rules.process();
	  }

	  /**
	   * Attach renderable to the render tree.
	   */


	  _createClass(StyleSheet, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.attached) return this;
	      if (!this.deployed) this.deploy();
	      this.renderer.attach();
	      if (!this.linked && this.options.link) this.link();
	      this.attached = true;
	      return this;
	    }

	    /**
	     * Remove renderable from render tree.
	     */

	  }, {
	    key: 'detach',
	    value: function detach() {
	      if (!this.attached) return this;
	      this.renderer.detach();
	      this.attached = false;
	      return this;
	    }

	    /**
	     * Add a rule to the current stylesheet.
	     * Will insert a rule also after the stylesheet has been rendered first time.
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, decl, options) {
	      var queue = this.queue;

	      // Plugins can create rules.
	      // In order to preserve the right order, we need to queue all `.addRule` calls,
	      // which happen after the first `rules.add()` call.

	      if (this.attached && !queue) this.queue = [];

	      var rule = this.rules.add(name, decl, options);
	      this.options.jss.plugins.onProcessRule(rule);

	      if (this.attached) {
	        if (!this.deployed) return rule;
	        // Don't insert rule directly if there is no stringified version yet.
	        // It will be inserted all together when .attach is called.
	        if (queue) queue.push(rule);else {
	          this.insertRule(rule);
	          if (this.queue) {
	            this.queue.forEach(this.insertRule, this);
	            this.queue = undefined;
	          }
	        }
	        return rule;
	      }

	      // We can't add rules to a detached style node.
	      // We will redeploy the sheet once user will attach it.
	      this.deployed = false;

	      return rule;
	    }

	    /**
	     * Insert rule into the StyleSheet
	     */

	  }, {
	    key: 'insertRule',
	    value: function insertRule(rule) {
	      var renderable = this.renderer.insertRule(rule);
	      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
	    }

	    /**
	     * Create and add rules.
	     * Will render also after Style Sheet was rendered the first time.
	     */

	  }, {
	    key: 'addRules',
	    value: function addRules(styles, options) {
	      var added = [];
	      for (var name in styles) {
	        added.push(this.addRule(name, styles[name], options));
	      }
	      return added;
	    }

	    /**
	     * Get a rule by name.
	     */

	  }, {
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules.get(name);
	    }

	    /**
	     * Delete a rule by name.
	     * Returns `true`: if rule has been deleted from the DOM.
	     */

	  }, {
	    key: 'deleteRule',
	    value: function deleteRule(name) {
	      var rule = this.rules.get(name);

	      if (!rule) return false;

	      this.rules.remove(rule);

	      if (this.attached && rule.renderable) {
	        return this.renderer.deleteRule(rule.renderable);
	      }

	      return true;
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.rules.indexOf(rule);
	    }

	    /**
	     * Deploy pure CSS string to a renderable.
	     */

	  }, {
	    key: 'deploy',
	    value: function deploy() {
	      this.renderer.deploy();
	      this.deployed = true;
	      return this;
	    }

	    /**
	     * Link renderable CSS rules from sheet with their corresponding models.
	     */

	  }, {
	    key: 'link',
	    value: function link() {
	      var cssRules = this.renderer.getRules();

	      // Is undefined when VirtualRenderer is used.
	      if (cssRules) this.rules.link(cssRules);
	      this.linked = true;
	      return this;
	    }

	    /**
	     * Update the function values with a new data.
	     */

	  }, {
	    key: 'update',
	    value: function update(name, data) {
	      this.rules.update(name, data);
	      return this;
	    }

	    /**
	     * Convert rules to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.rules.toString(options);
	    }
	  }]);

	  return StyleSheet;
	}();

	exports['default'] = StyleSheet;
	});

	unwrapExports(StyleSheet_1);

	var moduleId = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
	if (commonjsGlobal[ns] == null) commonjsGlobal[ns] = 0;

	// Bundle may contain multiple JSS versions at the same time. In order to identify
	// the current version with just one short number and use it for classes generation
	// we use a counter. Also it is more accurate, because user can manually reevaluate
	// the module.
	exports['default'] = commonjsGlobal[ns]++;
	});

	unwrapExports(moduleId);

	var createGenerateClassName = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _warning2 = _interopRequireDefault(warning_1$1);



	var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



	var _moduleId2 = _interopRequireDefault(moduleId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var maxRules = 1e10;


	var env = process.env.NODE_ENV;

	/**
	 * Returns a function which generates unique class names based on counters.
	 * When new generator function is created, rule counter is reseted.
	 * We need to reset the rule counter for SSR for each request.
	 */

	exports['default'] = function () {
	  var ruleCounter = 0;
	  var defaultPrefix = env === 'production' ? 'c' : '';

	  return function (rule, sheet) {
	    ruleCounter += 1;

	    if (ruleCounter > maxRules) {
	      (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
	    }

	    var prefix = defaultPrefix;
	    var jssId = '';

	    if (sheet) {
	      prefix = sheet.options.classNamePrefix || defaultPrefix;
	      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
	    }

	    if (env === 'production') {
	      return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
	    }

	    return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
	  };
	};
	});

	unwrapExports(createGenerateClassName);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

	var module$1 = /*#__PURE__*/Object.freeze({
		isBrowser: isBrowser,
		default: isBrowser
	});

	var PluginsRegistry_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _warning2 = _interopRequireDefault(warning_1$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PluginsRegistry = function () {
	  function PluginsRegistry() {
	    _classCallCheck(this, PluginsRegistry);

	    this.hooks = {
	      onCreateRule: [],
	      onProcessRule: [],
	      onProcessStyle: [],
	      onProcessSheet: [],
	      onChangeValue: [],
	      onUpdate: []

	      /**
	       * Call `onCreateRule` hooks and return an object if returned by a hook.
	       */
	    };
	  }

	  _createClass(PluginsRegistry, [{
	    key: 'onCreateRule',
	    value: function onCreateRule(name, decl, options) {
	      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
	        var rule = this.hooks.onCreateRule[i](name, decl, options);
	        if (rule) return rule;
	      }
	      return null;
	    }

	    /**
	     * Call `onProcessRule` hooks.
	     */

	  }, {
	    key: 'onProcessRule',
	    value: function onProcessRule(rule) {
	      if (rule.isProcessed) return;
	      var sheet = rule.options.sheet;

	      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
	        this.hooks.onProcessRule[i](rule, sheet);
	      }

	      // $FlowFixMe
	      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

	      rule.isProcessed = true;
	    }

	    /**
	     * Call `onProcessStyle` hooks.
	     */

	  }, {
	    key: 'onProcessStyle',
	    value: function onProcessStyle(style, rule, sheet) {
	      var nextStyle = style;

	      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
	        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);
	        // $FlowFixMe
	        rule.style = nextStyle;
	      }
	    }

	    /**
	     * Call `onProcessSheet` hooks.
	     */

	  }, {
	    key: 'onProcessSheet',
	    value: function onProcessSheet(sheet) {
	      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
	        this.hooks.onProcessSheet[i](sheet);
	      }
	    }

	    /**
	     * Call `onUpdate` hooks.
	     */

	  }, {
	    key: 'onUpdate',
	    value: function onUpdate(data, rule, sheet) {
	      for (var i = 0; i < this.hooks.onUpdate.length; i++) {
	        this.hooks.onUpdate[i](data, rule, sheet);
	      }
	    }

	    /**
	     * Call `onChangeValue` hooks.
	     */

	  }, {
	    key: 'onChangeValue',
	    value: function onChangeValue(value, prop, rule) {
	      var processedValue = value;
	      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
	        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
	      }
	      return processedValue;
	    }

	    /**
	     * Register a plugin.
	     * If function is passed, it is a shortcut for `{onProcessRule}`.
	     */

	  }, {
	    key: 'use',
	    value: function use(plugin) {
	      for (var name in plugin) {
	        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
	      }
	    }
	  }]);

	  return PluginsRegistry;
	}();

	exports['default'] = PluginsRegistry;
	});

	unwrapExports(PluginsRegistry_1);

	var SimpleRule_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SimpleRule = function () {
	  function SimpleRule(key, value, options) {
	    _classCallCheck(this, SimpleRule);

	    this.type = 'simple';
	    this.isProcessed = false;

	    this.key = key;
	    this.value = value;
	    this.options = options;
	  }

	  /**
	   * Generates a CSS string.
	   */
	  // eslint-disable-next-line no-unused-vars


	  _createClass(SimpleRule, [{
	    key: 'toString',
	    value: function toString(options) {
	      if (Array.isArray(this.value)) {
	        var str = '';
	        for (var index = 0; index < this.value.length; index++) {
	          str += this.key + ' ' + this.value[index] + ';';
	          if (this.value[index + 1]) str += '\n';
	        }
	        return str;
	      }

	      return this.key + ' ' + this.value + ';';
	    }
	  }]);

	  return SimpleRule;
	}();

	exports['default'] = SimpleRule;
	});

	unwrapExports(SimpleRule_1);

	var KeyframesRule_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _RuleList2 = _interopRequireDefault(RuleList_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Rule for @keyframes
	 */
	var KeyframesRule = function () {
	  function KeyframesRule(key, frames, options) {
	    _classCallCheck(this, KeyframesRule);

	    this.type = 'keyframes';
	    this.isProcessed = false;

	    this.key = key;
	    this.options = options;
	    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

	    for (var name in frames) {
	      this.rules.add(name, frames[name], _extends({}, this.options, {
	        parent: this,
	        selector: name
	      }));
	    }

	    this.rules.process();
	  }

	  /**
	   * Generates a CSS string.
	   */


	  _createClass(KeyframesRule, [{
	    key: 'toString',
	    value: function toString() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

	      var inner = this.rules.toString(options);
	      if (inner) inner += '\n';
	      return this.key + ' {\n' + inner + '}';
	    }
	  }]);

	  return KeyframesRule;
	}();

	exports['default'] = KeyframesRule;
	});

	unwrapExports(KeyframesRule_1);

	var ConditionalRule_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _RuleList2 = _interopRequireDefault(RuleList_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Conditional rule for @media, @supports
	 */
	var ConditionalRule = function () {
	  function ConditionalRule(key, styles, options) {
	    _classCallCheck(this, ConditionalRule);

	    this.type = 'conditional';
	    this.isProcessed = false;

	    this.key = key;
	    this.options = options;
	    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

	    for (var name in styles) {
	      this.rules.add(name, styles[name]);
	    }

	    this.rules.process();
	  }

	  /**
	   * Get a rule.
	   */


	  _createClass(ConditionalRule, [{
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules.get(name);
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.rules.indexOf(rule);
	    }

	    /**
	     * Create and register rule, run plugins.
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, style, options) {
	      var rule = this.rules.add(name, style, options);
	      this.options.jss.plugins.onProcessRule(rule);
	      return rule;
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

	      var inner = this.rules.toString(options);
	      return inner ? this.key + ' {\n' + inner + '\n}' : '';
	    }
	  }]);

	  return ConditionalRule;
	}();

	exports['default'] = ConditionalRule;
	});

	unwrapExports(ConditionalRule_1);

	var FontFaceRule_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _toCss2 = _interopRequireDefault(toCss_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FontFaceRule = function () {
	  function FontFaceRule(key, style, options) {
	    _classCallCheck(this, FontFaceRule);

	    this.type = 'font-face';
	    this.isProcessed = false;

	    this.key = key;
	    this.style = style;
	    this.options = options;
	  }

	  /**
	   * Generates a CSS string.
	   */


	  _createClass(FontFaceRule, [{
	    key: 'toString',
	    value: function toString(options) {
	      if (Array.isArray(this.style)) {
	        var str = '';
	        for (var index = 0; index < this.style.length; index++) {
	          str += (0, _toCss2['default'])(this.key, this.style[index]);
	          if (this.style[index + 1]) str += '\n';
	        }
	        return str;
	      }

	      return (0, _toCss2['default'])(this.key, this.style, options);
	    }
	  }]);

	  return FontFaceRule;
	}();

	exports['default'] = FontFaceRule;
	});

	unwrapExports(FontFaceRule_1);

	var ViewportRule_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _toCss2 = _interopRequireDefault(toCss_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewportRule = function () {
	  function ViewportRule(key, style, options) {
	    _classCallCheck(this, ViewportRule);

	    this.type = 'viewport';
	    this.isProcessed = false;

	    this.key = key;
	    this.style = style;
	    this.options = options;
	  }

	  /**
	   * Generates a CSS string.
	   */


	  _createClass(ViewportRule, [{
	    key: 'toString',
	    value: function toString(options) {
	      return (0, _toCss2['default'])(this.key, this.style, options);
	    }
	  }]);

	  return ViewportRule;
	}();

	exports['default'] = ViewportRule;
	});

	unwrapExports(ViewportRule_1);

	var rules = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _SimpleRule2 = _interopRequireDefault(SimpleRule_1);



	var _KeyframesRule2 = _interopRequireDefault(KeyframesRule_1);



	var _ConditionalRule2 = _interopRequireDefault(ConditionalRule_1);



	var _FontFaceRule2 = _interopRequireDefault(FontFaceRule_1);



	var _ViewportRule2 = _interopRequireDefault(ViewportRule_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var classes = {
	  '@charset': _SimpleRule2['default'],
	  '@import': _SimpleRule2['default'],
	  '@namespace': _SimpleRule2['default'],
	  '@keyframes': _KeyframesRule2['default'],
	  '@media': _ConditionalRule2['default'],
	  '@supports': _ConditionalRule2['default'],
	  '@font-face': _FontFaceRule2['default'],
	  '@viewport': _ViewportRule2['default'],
	  '@-ms-viewport': _ViewportRule2['default']

	  /**
	   * Generate plugins which will register all rules.
	   */
	};
	exports['default'] = Object.keys(classes).map(function (key) {
	  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
	  var re = new RegExp('^' + key);
	  var onCreateRule = function onCreateRule(name, decl, options) {
	    return re.test(name) ? new classes[key](name, decl, options) : null;
	  };
	  return { onCreateRule: onCreateRule };
	});
	});

	unwrapExports(rules);

	var observables = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _StyleRule2 = _interopRequireDefault(StyleRule_1);



	var _createRule2 = _interopRequireDefault(createRule_1);



	var _isObservable2 = _interopRequireDefault(isObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = {
	  onCreateRule: function onCreateRule(name, decl, options) {
	    if (!(0, _isObservable2['default'])(decl)) return null;

	    // Cast `decl` to `Observable`, since it passed the type guard.
	    var style$ = decl;

	    var rule = (0, _createRule2['default'])(name, {}, options);

	    // TODO
	    // Call `stream.subscribe()` returns a subscription, which should be explicitly
	    // unsubscribed from when we know this sheet is no longer needed.
	    style$.subscribe(function (style) {
	      for (var prop in style) {
	        rule.prop(prop, style[prop]);
	      }
	    });

	    return rule;
	  },
	  onProcessRule: function onProcessRule(rule) {
	    if (!(rule instanceof _StyleRule2['default'])) return;
	    var styleRule = rule;
	    var style = styleRule.style;

	    var _loop = function _loop(prop) {
	      var value = style[prop];
	      if (!(0, _isObservable2['default'])(value)) return 'continue';
	      delete style[prop];
	      value.subscribe({
	        next: function next(nextValue) {
	          styleRule.prop(prop, nextValue);
	        }
	      });
	    };

	    for (var prop in style) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }
	  }
	};
	});

	unwrapExports(observables);

	var functions = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _RuleList2 = _interopRequireDefault(RuleList_1);



	var _StyleRule2 = _interopRequireDefault(StyleRule_1);



	var _createRule2 = _interopRequireDefault(createRule_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// A symbol replacement.
	var now = Date.now();

	var fnValuesNs = 'fnValues' + now;
	var fnStyleNs = 'fnStyle' + ++now;

	exports['default'] = {
	  onCreateRule: function onCreateRule(name, decl, options) {
	    if (typeof decl !== 'function') return null;
	    var rule = (0, _createRule2['default'])(name, {}, options);
	    rule[fnStyleNs] = decl;
	    return rule;
	  },
	  onProcessStyle: function onProcessStyle(style, rule) {
	    var fn = {};
	    for (var prop in style) {
	      var value = style[prop];
	      if (typeof value !== 'function') continue;
	      delete style[prop];
	      fn[prop] = value;
	    }
	    rule = rule;
	    rule[fnValuesNs] = fn;
	    return style;
	  },
	  onUpdate: function onUpdate(data, rule) {
	    // It is a rules container like for e.g. ConditionalRule.
	    if (rule.rules instanceof _RuleList2['default']) {
	      rule.rules.update(data);
	      return;
	    }
	    if (!(rule instanceof _StyleRule2['default'])) return;

	    rule = rule;

	    // If we have a fn values map, it is a rule with function values.
	    if (rule[fnValuesNs]) {
	      for (var prop in rule[fnValuesNs]) {
	        rule.prop(prop, rule[fnValuesNs][prop](data));
	      }
	    }

	    rule = rule;

	    var fnStyle = rule[fnStyleNs];

	    // If we have a style function, the entire rule is dynamic and style object
	    // will be returned from that function.
	    if (fnStyle) {
	      var style = fnStyle(data);
	      for (var _prop in style) {
	        rule.prop(_prop, style[_prop]);
	      }
	    }
	  }
	};
	});

	unwrapExports(functions);

	var DomRenderer_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _warning2 = _interopRequireDefault(warning_1$1);



	var _sheets2 = _interopRequireDefault(sheets);



	var _StyleRule2 = _interopRequireDefault(StyleRule_1);



	var _toCssValue2 = _interopRequireDefault(toCssValue_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Cache the value from the first time a function is called.
	 */
	var memoize = function memoize(fn) {
	  var value = void 0;
	  return function () {
	    if (!value) value = fn();
	    return value;
	  };
	};

	/**
	 * Get a style property value.
	 */
	function getPropertyValue(cssRule, prop) {
	  try {
	    return cssRule.style.getPropertyValue(prop);
	  } catch (err) {
	    // IE may throw if property is unknown.
	    return '';
	  }
	}

	/**
	 * Set a style property.
	 */
	function setProperty(cssRule, prop, value) {
	  try {
	    var cssValue = value;

	    if (Array.isArray(value)) {
	      cssValue = (0, _toCssValue2['default'])(value, true);

	      if (value[value.length - 1] === '!important') {
	        cssRule.style.setProperty(prop, cssValue, 'important');
	        return true;
	      }
	    }

	    cssRule.style.setProperty(prop, cssValue);
	  } catch (err) {
	    // IE may throw if property is unknown.
	    return false;
	  }
	  return true;
	}

	/**
	 * Remove a style property.
	 */
	function removeProperty(cssRule, prop) {
	  try {
	    cssRule.style.removeProperty(prop);
	  } catch (err) {
	    (0, _warning2['default'])(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
	  }
	}

	var CSSRuleTypes = {
	  STYLE_RULE: 1,
	  KEYFRAMES_RULE: 7

	  /**
	   * Get the CSS Rule key.
	   */

	};var getKey = function () {
	  var extractKey = function extractKey(cssText) {
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    return cssText.substr(from, cssText.indexOf('{') - 1);
	  };

	  return function (cssRule) {
	    if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;
	    if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
	      var name = cssRule.name;

	      if (name) return '@keyframes ' + name;

	      // There is no rule.name in the following browsers:
	      // - IE 9
	      // - Safari 7.1.8
	      // - Mobile Safari 9.0.0
	      var cssText = cssRule.cssText;

	      return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
	    }

	    // Conditionals.
	    return extractKey(cssRule.cssText);
	  };
	}();

	/**
	 * Set the selector.
	 */
	function setSelector(cssRule, selectorText) {
	  cssRule.selectorText = selectorText;

	  // Return false if setter was not successful.
	  // Currently works in chrome only.
	  return cssRule.selectorText === selectorText;
	}

	/**
	 * Gets the `head` element upon the first call and caches it.
	 */
	var getHead = memoize(function () {
	  return document.head || document.getElementsByTagName('head')[0];
	});

	/**
	 * Gets a map of rule keys, where the property is an unescaped key and value
	 * is a potentially escaped one.
	 * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
	 * for CSSStyleRule we normally use `selectorText`. Though if original selector text
	 * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
	 * and so CSS rule's `selectorText` won't match JSS rule selector.
	 *
	 * https://www.w3.org/International/questions/qa-escapes#cssescapes
	 */
	var getUnescapedKeysMap = function () {
	  var style = void 0;
	  var isAttached = false;

	  return function (rules) {
	    var map = {};
	    // https://github.com/facebook/flow/issues/2696
	    if (!style) style = document.createElement('style');
	    for (var i = 0; i < rules.length; i++) {
	      var rule = rules[i];
	      if (!(rule instanceof _StyleRule2['default'])) continue;
	      var selector = rule.selector;
	      // Only unescape selector over CSSOM if it contains a back slash.

	      if (selector && selector.indexOf('\\') !== -1) {
	        // Lazilly attach when needed.
	        if (!isAttached) {
	          getHead().appendChild(style);
	          isAttached = true;
	        }
	        style.textContent = selector + ' {}';
	        var _style = style,
	            sheet = _style.sheet;

	        if (sheet) {
	          var cssRules = sheet.cssRules;

	          if (cssRules) map[cssRules[0].selectorText] = rule.key;
	        }
	      }
	    }
	    if (isAttached) {
	      getHead().removeChild(style);
	      isAttached = false;
	    }
	    return map;
	  };
	}();

	/**
	 * Find attached sheet with an index higher than the passed one.
	 */
	function findHigherSheet(registry, options) {
	  for (var i = 0; i < registry.length; i++) {
	    var sheet = registry[i];
	    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
	      return sheet;
	    }
	  }
	  return null;
	}

	/**
	 * Find attached sheet with the highest index.
	 */
	function findHighestSheet(registry, options) {
	  for (var i = registry.length - 1; i >= 0; i--) {
	    var sheet = registry[i];
	    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
	      return sheet;
	    }
	  }
	  return null;
	}

	/**
	 * Find a comment with "jss" inside.
	 */
	function findCommentNode(text) {
	  var head = getHead();
	  for (var i = 0; i < head.childNodes.length; i++) {
	    var node = head.childNodes[i];
	    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
	      return node;
	    }
	  }
	  return null;
	}

	/**
	 * Find a node before which we can insert the sheet.
	 */
	function findPrevNode(options) {
	  var registry = _sheets2['default'].registry;


	  if (registry.length > 0) {
	    // Try to insert before the next higher sheet.
	    var sheet = findHigherSheet(registry, options);
	    if (sheet) return sheet.renderer.element;

	    // Otherwise insert after the last attached.
	    sheet = findHighestSheet(registry, options);
	    if (sheet) return sheet.renderer.element.nextElementSibling;
	  }

	  // Try to find a comment placeholder if registry is empty.
	  var insertionPoint = options.insertionPoint;

	  if (insertionPoint && typeof insertionPoint === 'string') {
	    var comment = findCommentNode(insertionPoint);
	    if (comment) return comment.nextSibling;
	    // If user specifies an insertion point and it can't be found in the document -
	    // bad specificity issues may appear.
	    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
	  }

	  return null;
	}

	/**
	 * Insert style element into the DOM.
	 */
	function insertStyle(style, options) {
	  var insertionPoint = options.insertionPoint;

	  var prevNode = findPrevNode(options);

	  if (prevNode) {
	    var parentNode = prevNode.parentNode;

	    if (parentNode) parentNode.insertBefore(style, prevNode);
	    return;
	  }

	  // Works with iframes and any node types.
	  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
	    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
	    var insertionPointElement = insertionPoint;
	    var _parentNode = insertionPointElement.parentNode;

	    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
	    return;
	  }

	  getHead().insertBefore(style, prevNode);
	}

	/**
	 * Read jss nonce setting from the page if the user has set it.
	 */
	var getNonce = memoize(function () {
	  var node = document.querySelector('meta[property="csp-nonce"]');
	  return node ? node.getAttribute('content') : null;
	});

	var DomRenderer = function () {
	  function DomRenderer(sheet) {
	    _classCallCheck(this, DomRenderer);

	    this.getPropertyValue = getPropertyValue;
	    this.setProperty = setProperty;
	    this.removeProperty = removeProperty;
	    this.setSelector = setSelector;
	    this.getKey = getKey;
	    this.getUnescapedKeysMap = getUnescapedKeysMap;
	    this.hasInsertedRules = false;

	    // There is no sheet when the renderer is used from a standalone StyleRule.
	    if (sheet) _sheets2['default'].add(sheet);

	    this.sheet = sheet;

	    var _ref = this.sheet ? this.sheet.options : {},
	        media = _ref.media,
	        meta = _ref.meta,
	        element = _ref.element;

	    this.element = element || document.createElement('style');
	    this.element.type = 'text/css';
	    this.element.setAttribute('data-jss', '');
	    if (media) this.element.setAttribute('media', media);
	    if (meta) this.element.setAttribute('data-meta', meta);
	    var nonce = getNonce();
	    if (nonce) this.element.setAttribute('nonce', nonce);
	  }

	  /**
	   * Insert style element into render tree.
	   */


	  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


	  _createClass(DomRenderer, [{
	    key: 'attach',
	    value: function attach() {
	      // In the case the element node is external and it is already in the DOM.
	      if (this.element.parentNode || !this.sheet) return;

	      // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
	      // browsers remove those rules.
	      // TODO figure out if its a bug and if it is known.
	      // Workaround is to redeploy the sheet before attaching as a string.
	      if (this.hasInsertedRules) {
	        this.deploy();
	        this.hasInsertedRules = false;
	      }

	      insertStyle(this.element, this.sheet.options);
	    }

	    /**
	     * Remove style element from render tree.
	     */

	  }, {
	    key: 'detach',
	    value: function detach() {
	      this.element.parentNode.removeChild(this.element);
	    }

	    /**
	     * Inject CSS string into element.
	     */

	  }, {
	    key: 'deploy',
	    value: function deploy() {
	      if (!this.sheet) return;
	      this.element.textContent = '\n' + this.sheet.toString() + '\n';
	    }

	    /**
	     * Insert a rule into element.
	     */

	  }, {
	    key: 'insertRule',
	    value: function insertRule(rule, index) {
	      var sheet = this.element.sheet;
	      var cssRules = sheet.cssRules;

	      var str = rule.toString();
	      if (!index) index = cssRules.length;

	      if (!str) return false;

	      try {
	        sheet.insertRule(str, index);
	      } catch (err) {
	        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
	        return false;
	      }
	      this.hasInsertedRules = true;

	      return cssRules[index];
	    }

	    /**
	     * Delete a rule.
	     */

	  }, {
	    key: 'deleteRule',
	    value: function deleteRule(cssRule) {
	      var sheet = this.element.sheet;

	      var index = this.indexOf(cssRule);
	      if (index === -1) return false;
	      sheet.deleteRule(index);
	      return true;
	    }

	    /**
	     * Get index of a CSS Rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(cssRule) {
	      var cssRules = this.element.sheet.cssRules;

	      for (var _index = 0; _index < cssRules.length; _index++) {
	        if (cssRule === cssRules[_index]) return _index;
	      }
	      return -1;
	    }

	    /**
	     * Generate a new CSS rule and replace the existing one.
	     */

	  }, {
	    key: 'replaceRule',
	    value: function replaceRule(cssRule, rule) {
	      var index = this.indexOf(cssRule);
	      var newCssRule = this.insertRule(rule, index);
	      this.element.sheet.deleteRule(index);
	      return newCssRule;
	    }

	    /**
	     * Get all rules elements.
	     */

	  }, {
	    key: 'getRules',
	    value: function getRules() {
	      return this.element.sheet.cssRules;
	    }
	  }]);

	  return DomRenderer;
	}();

	exports['default'] = DomRenderer;
	});

	unwrapExports(DomRenderer_1);

	var VirtualRenderer_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* eslint-disable class-methods-use-this */

	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	var VirtualRenderer = function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }

	  _createClass(VirtualRenderer, [{
	    key: 'setProperty',
	    value: function setProperty() {
	      return true;
	    }
	  }, {
	    key: 'getPropertyValue',
	    value: function getPropertyValue() {
	      return '';
	    }
	  }, {
	    key: 'removeProperty',
	    value: function removeProperty() {}
	  }, {
	    key: 'setSelector',
	    value: function setSelector() {
	      return true;
	    }
	  }, {
	    key: 'getKey',
	    value: function getKey() {
	      return '';
	    }
	  }, {
	    key: 'attach',
	    value: function attach() {}
	  }, {
	    key: 'detach',
	    value: function detach() {}
	  }, {
	    key: 'deploy',
	    value: function deploy() {}
	  }, {
	    key: 'insertRule',
	    value: function insertRule() {
	      return false;
	    }
	  }, {
	    key: 'deleteRule',
	    value: function deleteRule() {
	      return true;
	    }
	  }, {
	    key: 'replaceRule',
	    value: function replaceRule() {
	      return false;
	    }
	  }, {
	    key: 'getRules',
	    value: function getRules() {}
	  }, {
	    key: 'indexOf',
	    value: function indexOf() {
	      return -1;
	    }
	  }]);

	  return VirtualRenderer;
	}();

	exports['default'] = VirtualRenderer;
	});

	unwrapExports(VirtualRenderer_1);

	var _isInBrowser = ( module$1 && isBrowser ) || module$1;

	var Jss_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



	var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



	var _PluginsRegistry2 = _interopRequireDefault(PluginsRegistry_1);



	var _rules2 = _interopRequireDefault(rules);



	var _observables2 = _interopRequireDefault(observables);



	var _functions2 = _interopRequireDefault(functions);



	var _sheets2 = _interopRequireDefault(sheets);



	var _StyleRule2 = _interopRequireDefault(StyleRule_1);



	var _createGenerateClassName2 = _interopRequireDefault(createGenerateClassName);



	var _createRule3 = _interopRequireDefault(createRule_1);



	var _DomRenderer2 = _interopRequireDefault(DomRenderer_1);



	var _VirtualRenderer2 = _interopRequireDefault(VirtualRenderer_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

	var instanceCounter = 0;

	var Jss = function () {
	  function Jss(options) {
	    _classCallCheck(this, Jss);

	    this.id = instanceCounter++;
	    this.version = "9.8.1";
	    this.plugins = new _PluginsRegistry2['default']();
	    this.options = {
	      createGenerateClassName: _createGenerateClassName2['default'],
	      Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
	      plugins: []
	    };
	    this.generateClassName = (0, _createGenerateClassName2['default'])();

	    // eslint-disable-next-line prefer-spread
	    this.use.apply(this, defaultPlugins);
	    this.setup(options);
	  }

	  _createClass(Jss, [{
	    key: 'setup',
	    value: function setup() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      if (options.createGenerateClassName) {
	        this.options.createGenerateClassName = options.createGenerateClassName;
	        // $FlowFixMe
	        this.generateClassName = options.createGenerateClassName();
	      }

	      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
	      if (options.virtual || options.Renderer) {
	        this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
	      }

	      // eslint-disable-next-line prefer-spread
	      if (options.plugins) this.use.apply(this, options.plugins);

	      return this;
	    }

	    /**
	     * Create a Style Sheet.
	     */

	  }, {
	    key: 'createStyleSheet',
	    value: function createStyleSheet(styles) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var index = options.index;
	      if (typeof index !== 'number') {
	        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
	      }
	      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
	        jss: this,
	        generateClassName: options.generateClassName || this.generateClassName,
	        insertionPoint: this.options.insertionPoint,
	        Renderer: this.options.Renderer,
	        index: index
	      }));
	      this.plugins.onProcessSheet(sheet);

	      return sheet;
	    }

	    /**
	     * Detach the Style Sheet and remove it from the registry.
	     */

	  }, {
	    key: 'removeStyleSheet',
	    value: function removeStyleSheet(sheet) {
	      sheet.detach();
	      _sheets2['default'].remove(sheet);
	      return this;
	    }

	    /**
	     * Create a rule without a Style Sheet.
	     */

	  }, {
	    key: 'createRule',
	    value: function createRule(name) {
	      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      // Enable rule without name for inline styles.
	      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	        options = style;
	        style = name;
	        name = undefined;
	      }

	      // Cast from RuleFactoryOptions to RuleOptions
	      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
	      var ruleOptions = options;

	      ruleOptions.jss = this;
	      ruleOptions.Renderer = this.options.Renderer;
	      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
	      if (!ruleOptions.classes) ruleOptions.classes = {};
	      var rule = (0, _createRule3['default'])(name, style, ruleOptions);

	      if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
	        rule.selector = '.' + ruleOptions.generateClassName(rule);
	      }

	      this.plugins.onProcessRule(rule);

	      return rule;
	    }

	    /**
	     * Register plugin. Passed function will be invoked with a rule instance.
	     */

	  }, {
	    key: 'use',
	    value: function use() {
	      var _this = this;

	      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
	        plugins[_key] = arguments[_key];
	      }

	      plugins.forEach(function (plugin) {
	        // Avoids applying same plugin twice, at least based on ref.
	        if (_this.options.plugins.indexOf(plugin) === -1) {
	          _this.options.plugins.push(plugin);
	          _this.plugins.use(plugin);
	        }
	      });

	      return this;
	    }
	  }]);

	  return Jss;
	}();

	exports['default'] = Jss;
	});

	unwrapExports(Jss_1);

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;



	Object.defineProperty(exports, 'getDynamicStyles', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(getDynamicStyles_1)['default'];
	  }
	});



	Object.defineProperty(exports, 'toCssValue', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(toCssValue_1)['default'];
	  }
	});



	Object.defineProperty(exports, 'SheetsRegistry', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(SheetsRegistry_1)['default'];
	  }
	});



	Object.defineProperty(exports, 'SheetsManager', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(SheetsManager_1)['default'];
	  }
	});



	Object.defineProperty(exports, 'RuleList', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(RuleList_1)['default'];
	  }
	});



	Object.defineProperty(exports, 'sheets', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(sheets)['default'];
	  }
	});



	Object.defineProperty(exports, 'createGenerateClassName', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(createGenerateClassName)['default'];
	  }
	});



	var _Jss2 = _interopRequireDefault(Jss_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a new instance of Jss.
	 */
	var create = exports.create = function create(options) {
	  return new _Jss2['default'](options);
	};

	/**
	 * A global Jss instance.
	 */
	exports['default'] = create();
	});

	unwrapExports(lib);
	var lib_1 = lib.create;
	var lib_2 = lib.createGenerateClassName;
	var lib_3 = lib.sheets;
	var lib_4 = lib.RuleList;
	var lib_5 = lib.SheetsManager;
	var lib_6 = lib.SheetsRegistry;
	var lib_7 = lib.toCssValue;
	var lib_8 = lib.getDynamicStyles;

	var lib$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports['default'] = jssGlobal;



	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var propKey = '@global';
	var prefixKey = '@global ';

	var GlobalContainerRule = function () {
	  function GlobalContainerRule(key, styles, options) {
	    _classCallCheck(this, GlobalContainerRule);

	    this.type = 'global';

	    this.key = key;
	    this.options = options;
	    this.rules = new lib.RuleList(_extends({}, options, {
	      parent: this
	    }));

	    for (var selector in styles) {
	      this.rules.add(selector, styles[selector], { selector: selector });
	    }

	    this.rules.process();
	  }

	  /**
	   * Get a rule.
	   */


	  _createClass(GlobalContainerRule, [{
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules.get(name);
	    }

	    /**
	     * Create and register rule, run plugins.
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, style, options) {
	      var rule = this.rules.add(name, style, options);
	      this.options.jss.plugins.onProcessRule(rule);
	      return rule;
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.rules.indexOf(rule);
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.rules.toString();
	    }
	  }]);

	  return GlobalContainerRule;
	}();

	var GlobalPrefixedRule = function () {
	  function GlobalPrefixedRule(name, style, options) {
	    _classCallCheck(this, GlobalPrefixedRule);

	    this.name = name;
	    this.options = options;
	    var selector = name.substr(prefixKey.length);
	    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
	      parent: this,
	      selector: selector
	    }));
	  }

	  _createClass(GlobalPrefixedRule, [{
	    key: 'toString',
	    value: function toString(options) {
	      return this.rule.toString(options);
	    }
	  }]);

	  return GlobalPrefixedRule;
	}();

	var separatorRegExp = /\s*,\s*/g;

	function addScope(selector, scope) {
	  var parts = selector.split(separatorRegExp);
	  var scoped = '';
	  for (var i = 0; i < parts.length; i++) {
	    scoped += scope + ' ' + parts[i].trim();
	    if (parts[i + 1]) scoped += ', ';
	  }
	  return scoped;
	}

	function handleNestedGlobalContainerRule(rule) {
	  var options = rule.options,
	      style = rule.style;

	  var rules = style[propKey];

	  if (!rules) return;

	  for (var name in rules) {
	    options.sheet.addRule(name, rules[name], _extends({}, options, {
	      selector: addScope(name, rule.selector)
	    }));
	  }

	  delete style[propKey];
	}

	function handlePrefixedGlobalRule(rule) {
	  var options = rule.options,
	      style = rule.style;

	  for (var prop in style) {
	    if (prop.substr(0, propKey.length) !== propKey) continue;

	    var selector = addScope(prop.substr(propKey.length), rule.selector);
	    options.sheet.addRule(selector, style[prop], _extends({}, options, {
	      selector: selector
	    }));
	    delete style[prop];
	  }
	}

	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssGlobal() {
	  function onCreateRule(name, styles, options) {
	    if (name === propKey) {
	      return new GlobalContainerRule(name, styles, options);
	    }

	    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
	      return new GlobalPrefixedRule(name, styles, options);
	    }

	    var parent = options.parent;


	    if (parent) {
	      if (parent.type === 'global' || parent.options.parent.type === 'global') {
	        options.global = true;
	      }
	    }

	    if (options.global) options.selector = name;

	    return null;
	  }

	  function onProcessRule(rule) {
	    if (rule.type !== 'style') return;

	    handleNestedGlobalContainerRule(rule);
	    handlePrefixedGlobalRule(rule);
	  }

	  return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
	}
	});

	unwrapExports(lib$1);

	var lib$2 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = jssNested;



	var _warning2 = _interopRequireDefault(warning_1$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var separatorRegExp = /\s*,\s*/g;
	var parentRegExp = /&/g;
	var refRegExp = /\$([\w-]+)/g;

	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssNested() {
	  // Get a function to be used for $ref replacement.
	  function getReplaceRef(container) {
	    return function (match, key) {
	      var rule = container.getRule(key);
	      if (rule) return rule.selector;
	      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
	      return key;
	    };
	  }

	  var hasAnd = function hasAnd(str) {
	    return str.indexOf('&') !== -1;
	  };

	  function replaceParentRefs(nestedProp, parentProp) {
	    var parentSelectors = parentProp.split(separatorRegExp);
	    var nestedSelectors = nestedProp.split(separatorRegExp);

	    var result = '';

	    for (var i = 0; i < parentSelectors.length; i++) {
	      var parent = parentSelectors[i];

	      for (var j = 0; j < nestedSelectors.length; j++) {
	        var nested = nestedSelectors[j];
	        if (result) result += ', ';
	        // Replace all & by the parent or prefix & with the parent.
	        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
	      }
	    }

	    return result;
	  }

	  function getOptions(rule, container, options) {
	    // Options has been already created, now we only increase index.
	    if (options) return _extends({}, options, { index: options.index + 1 });

	    var nestingLevel = rule.options.nestingLevel;

	    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

	    return _extends({}, rule.options, {
	      nestingLevel: nestingLevel,
	      index: container.indexOf(rule) + 1
	    });
	  }

	  function onProcessStyle(style, rule) {
	    if (rule.type !== 'style') return style;
	    var container = rule.options.parent;
	    var options = void 0;
	    var replaceRef = void 0;
	    for (var prop in style) {
	      var isNested = hasAnd(prop);
	      var isNestedConditional = prop[0] === '@';

	      if (!isNested && !isNestedConditional) continue;

	      options = getOptions(rule, container, options);

	      if (isNested) {
	        var selector = replaceParentRefs(prop, rule.selector
	        // Lazily create the ref replacer function just once for
	        // all nested rules within the sheet.
	        );if (!replaceRef) replaceRef = getReplaceRef(container
	        // Replace all $refs.
	        );selector = selector.replace(refRegExp, replaceRef);

	        container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
	      } else if (isNestedConditional) {
	        container
	        // Place conditional right after the parent rule to ensure right ordering.
	        .addRule(prop, null, options).addRule(rule.key, style[prop], { selector: rule.selector });
	      }

	      delete style[prop];
	    }

	    return style;
	  }

	  return { onProcessStyle: onProcessStyle };
	}
	});

	unwrapExports(lib$2);

	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};

	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}

	var hyphenateStyleName_1 = hyphenateStyleName;

	var lib$3 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = camelCase;



	var _hyphenateStyleName2 = _interopRequireDefault(hyphenateStyleName_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Convert camel cased property names to dash separated.
	 *
	 * @param {Object} style
	 * @return {Object}
	 */
	function convertCase(style) {
	  var converted = {};

	  for (var prop in style) {
	    converted[(0, _hyphenateStyleName2['default'])(prop)] = style[prop];
	  }

	  if (style.fallbacks) {
	    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
	  }

	  return converted;
	}

	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 *
	 * @param {Rule} rule
	 */
	function camelCase() {
	  function onProcessStyle(style) {
	    if (Array.isArray(style)) {
	      // Handle rules like @font-face, which can have multiple styles in an array
	      for (var index = 0; index < style.length; index++) {
	        style[index] = convertCase(style[index]);
	      }
	      return style;
	    }

	    return convertCase(style);
	  }

	  function onChangeValue(value, prop, rule) {
	    var hyphenatedProp = (0, _hyphenateStyleName2['default'])(prop);

	    // There was no camel case in place
	    if (prop === hyphenatedProp) return value;

	    rule.prop(hyphenatedProp, value);

	    // Core will ignore that property value we set the proper one above.
	    return null;
	  }

	  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
	}
	});

	unwrapExports(lib$3);

	var defaultUnits = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Generated jss-default-unit CSS property units
	 *
	 * @type object
	 */
	exports['default'] = {
	  'animation-delay': 'ms',
	  'animation-duration': 'ms',
	  'background-position': 'px',
	  'background-position-x': 'px',
	  'background-position-y': 'px',
	  'background-size': 'px',
	  border: 'px',
	  'border-bottom': 'px',
	  'border-bottom-left-radius': 'px',
	  'border-bottom-right-radius': 'px',
	  'border-bottom-width': 'px',
	  'border-left': 'px',
	  'border-left-width': 'px',
	  'border-radius': 'px',
	  'border-right': 'px',
	  'border-right-width': 'px',
	  'border-spacing': 'px',
	  'border-top': 'px',
	  'border-top-left-radius': 'px',
	  'border-top-right-radius': 'px',
	  'border-top-width': 'px',
	  'border-width': 'px',
	  'border-after-width': 'px',
	  'border-before-width': 'px',
	  'border-end-width': 'px',
	  'border-horizontal-spacing': 'px',
	  'border-start-width': 'px',
	  'border-vertical-spacing': 'px',
	  bottom: 'px',
	  'box-shadow': 'px',
	  'column-gap': 'px',
	  'column-rule': 'px',
	  'column-rule-width': 'px',
	  'column-width': 'px',
	  'flex-basis': 'px',
	  'font-size': 'px',
	  'font-size-delta': 'px',
	  height: 'px',
	  left: 'px',
	  'letter-spacing': 'px',
	  'logical-height': 'px',
	  'logical-width': 'px',
	  margin: 'px',
	  'margin-after': 'px',
	  'margin-before': 'px',
	  'margin-bottom': 'px',
	  'margin-left': 'px',
	  'margin-right': 'px',
	  'margin-top': 'px',
	  'max-height': 'px',
	  'max-width': 'px',
	  'margin-end': 'px',
	  'margin-start': 'px',
	  'mask-position-x': 'px',
	  'mask-position-y': 'px',
	  'mask-size': 'px',
	  'max-logical-height': 'px',
	  'max-logical-width': 'px',
	  'min-height': 'px',
	  'min-width': 'px',
	  'min-logical-height': 'px',
	  'min-logical-width': 'px',
	  motion: 'px',
	  'motion-offset': 'px',
	  outline: 'px',
	  'outline-offset': 'px',
	  'outline-width': 'px',
	  padding: 'px',
	  'padding-bottom': 'px',
	  'padding-left': 'px',
	  'padding-right': 'px',
	  'padding-top': 'px',
	  'padding-after': 'px',
	  'padding-before': 'px',
	  'padding-end': 'px',
	  'padding-start': 'px',
	  'perspective-origin-x': '%',
	  'perspective-origin-y': '%',
	  perspective: 'px',
	  right: 'px',
	  'shape-margin': 'px',
	  size: 'px',
	  'text-indent': 'px',
	  'text-stroke': 'px',
	  'text-stroke-width': 'px',
	  top: 'px',
	  'transform-origin': '%',
	  'transform-origin-x': '%',
	  'transform-origin-y': '%',
	  'transform-origin-z': '%',
	  'transition-delay': 'ms',
	  'transition-duration': 'ms',
	  'vertical-align': 'px',
	  width: 'px',
	  'word-spacing': 'px',
	  // Not existing properties.
	  // Used to avoid issues with jss-expand intergration.
	  'box-shadow-x': 'px',
	  'box-shadow-y': 'px',
	  'box-shadow-blur': 'px',
	  'box-shadow-spread': 'px',
	  'font-line-height': 'px',
	  'text-shadow-x': 'px',
	  'text-shadow-y': 'px',
	  'text-shadow-blur': 'px'
	};
	});

	unwrapExports(defaultUnits);

	var lib$4 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports['default'] = defaultUnit;



	var _defaultUnits2 = _interopRequireDefault(defaultUnits);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Clones the object and adds a camel cased property version.
	 */
	function addCamelCasedVersion(obj) {
	  var regExp = /(-[a-z])/g;
	  var replace = function replace(str) {
	    return str[1].toUpperCase();
	  };
	  var newObj = {};
	  for (var key in obj) {
	    newObj[key] = obj[key];
	    newObj[key.replace(regExp, replace)] = obj[key];
	  }
	  return newObj;
	}

	var units = addCamelCasedVersion(_defaultUnits2['default']);

	/**
	 * Recursive deep style passing function
	 *
	 * @param {String} current property
	 * @param {(Object|Array|Number|String)} property value
	 * @param {Object} options
	 * @return {(Object|Array|Number|String)} resulting value
	 */
	function iterate(prop, value, options) {
	  if (!value) return value;

	  var convertedValue = value;

	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type === 'object' && Array.isArray(value)) type = 'array';

	  switch (type) {
	    case 'object':
	      if (prop === 'fallbacks') {
	        for (var innerProp in value) {
	          value[innerProp] = iterate(innerProp, value[innerProp], options);
	        }
	        break;
	      }
	      for (var _innerProp in value) {
	        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
	      }
	      break;
	    case 'array':
	      for (var i = 0; i < value.length; i++) {
	        value[i] = iterate(prop, value[i], options);
	      }
	      break;
	    case 'number':
	      if (value !== 0) {
	        convertedValue = value + (options[prop] || units[prop] || '');
	      }
	      break;
	    default:
	      break;
	  }

	  return convertedValue;
	}

	/**
	 * Add unit to numeric values.
	 */
	function defaultUnit() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var camelCasedOptions = addCamelCasedVersion(options);

	  function onProcessStyle(style, rule) {
	    if (rule.type !== 'style') return style;

	    for (var prop in style) {
	      style[prop] = iterate(prop, style[prop], camelCasedOptions);
	    }

	    return style;
	  }

	  function onChangeValue(value, prop) {
	    return iterate(prop, value, camelCasedOptions);
	  }

	  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
	}
	});

	unwrapExports(lib$4);

	var prefix = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var js = ''; /**
	              * Export javascript style and css style vendor prefixes.
	              * Based on "transform" support test.
	              */

	var css = '';

	// We should not do anything if required serverside.
	if (_isInBrowser2['default']) {
	  // Order matters. We need to check Webkit the last one because
	  // other vendors use to add Webkit prefixes to some properties
	  var jsCssMap = {
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-',
	    Webkit: '-webkit-'
	  };
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';

	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      js = key;
	      css = jsCssMap[key];
	      break;
	    }
	  }
	}

	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String}}
	 * @api public
	 */
	exports['default'] = { js: js, css: css };
	});

	unwrapExports(prefix);

	var camelize_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = camelize;
	var regExp = /[-\s]+(.)?/g;

	/**
	 * Convert dash separated strings to camel cased.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function camelize(str) {
	  return str.replace(regExp, toUpper);
	}

	function toUpper(match, c) {
	  return c ? c.toUpperCase() : '';
	}
	});

	unwrapExports(camelize_1);

	var supportedProperty_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = supportedProperty;



	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



	var _prefix2 = _interopRequireDefault(prefix);



	var _camelize2 = _interopRequireDefault(camelize_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var el = void 0;
	var cache = {};

	if (_isInBrowser2['default']) {
	  el = document.createElement('p');

	  /**
	   * We test every property on vendor prefix requirement.
	   * Once tested, result is cached. It gives us up to 70% perf boost.
	   * http://jsperf.com/element-style-object-access-vs-plain-object
	   *
	   * Prefill cache with known css properties to reduce amount of
	   * properties we need to feature test at runtime.
	   * http://davidwalsh.name/vendor-prefix
	   */
	  var computed = window.getComputedStyle(document.documentElement, '');
	  for (var key in computed) {
	    if (!isNaN(key)) cache[computed[key]] = computed[key];
	  }
	}

	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedProperty(prop) {
	  // For server-side rendering.
	  if (!el) return prop;

	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];

	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if ((0, _camelize2['default'])(prop) in el.style) {
	    cache[prop] = prop;
	  }
	  // Test if property is supported with vendor prefix.
	  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
	      cache[prop] = _prefix2['default'].css + prop;
	    } else {
	      cache[prop] = false;
	    }

	  return cache[prop];
	}
	});

	unwrapExports(supportedProperty_1);

	var supportedValue_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = supportedValue;



	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



	var _prefix2 = _interopRequireDefault(prefix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var cache = {};
	var el = void 0;

	if (_isInBrowser2['default']) el = document.createElement('p');

	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedValue(property, value) {
	  // For server-side rendering.
	  if (!el) return value;

	  // It is a string or a number as a string like '1'.
	  // We want only prefixable values here.
	  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

	  var cacheKey = property + value;

	  if (cache[cacheKey] != null) return cache[cacheKey];

	  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
	  try {
	    // Test value as it is.
	    el.style[property] = value;
	  } catch (err) {
	    cache[cacheKey] = false;
	    return false;
	  }

	  // Value is supported as it is.
	  if (el.style[property] !== '') {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2['default'].css + value;

	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';

	    el.style[property] = value;

	    // Value is supported with vendor prefix.
	    if (el.style[property] !== '') cache[cacheKey] = value;
	  }

	  if (!cache[cacheKey]) cache[cacheKey] = false;

	  // Reset style value.
	  el.style[property] = '';

	  return cache[cacheKey];
	}
	});

	unwrapExports(supportedValue_1);

	var lib$5 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;



	var _prefix2 = _interopRequireDefault(prefix);



	var _supportedProperty2 = _interopRequireDefault(supportedProperty_1);



	var _supportedValue2 = _interopRequireDefault(supportedValue_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = {
	  prefix: _prefix2['default'],
	  supportedProperty: _supportedProperty2['default'],
	  supportedValue: _supportedValue2['default']
	}; /**
	    * CSS Vendor prefix detection and property feature testing.
	    *
	    * @copyright Oleg Slobodskoi 2015
	    * @website https://github.com/jsstyles/css-vendor
	    * @license MIT
	    */

	exports.prefix = _prefix2['default'];
	exports.supportedProperty = _supportedProperty2['default'];
	exports.supportedValue = _supportedValue2['default'];
	});

	unwrapExports(lib$5);
	var lib_1$1 = lib$5.supportedValue;
	var lib_2$1 = lib$5.supportedProperty;
	var lib_3$1 = lib$5.prefix;

	var lib$6 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = jssVendorPrefixer;



	var vendor = _interopRequireWildcard(lib$5);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssVendorPrefixer() {
	  function onProcessRule(rule) {
	    if (rule.type === 'keyframes') {
	      rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
	    }
	  }

	  function onProcessStyle(style, rule) {
	    if (rule.type !== 'style') return style;

	    for (var prop in style) {
	      var value = style[prop];

	      var changeProp = false;
	      var supportedProp = vendor.supportedProperty(prop);
	      if (supportedProp && supportedProp !== prop) changeProp = true;

	      var changeValue = false;
	      var supportedValue = vendor.supportedValue(supportedProp, value);
	      if (supportedValue && supportedValue !== value) changeValue = true;

	      if (changeProp || changeValue) {
	        if (changeProp) delete style[prop];
	        style[supportedProp || prop] = supportedValue || value;
	      }
	    }

	    return style;
	  }

	  function onChangeValue(value, prop) {
	    return vendor.supportedValue(prop, value);
	  }

	  return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
	}
	});

	unwrapExports(lib$6);

	var lib$7 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = jssPropsSort;
	/**
	 * Sort props by length.
	 */
	function jssPropsSort() {
	  function sort(prop0, prop1) {
	    return prop0.length - prop1.length;
	  }

	  function onProcessStyle(style, rule) {
	    if (rule.type !== 'style') return style;

	    var newStyle = {};
	    var props = Object.keys(style).sort(sort);
	    for (var prop in props) {
	      newStyle[props[prop]] = style[props[prop]];
	    }
	    return newStyle;
	  }

	  return { onProcessStyle: onProcessStyle };
	}
	});

	unwrapExports(lib$7);

	var jssPreset_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _jssGlobal = interopRequireDefault(lib$1);

	var _jssNested = interopRequireDefault(lib$2);

	var _jssCamelCase = interopRequireDefault(lib$3);

	var _jssDefaultUnit = interopRequireDefault(lib$4);

	var _jssVendorPrefixer = interopRequireDefault(lib$6);

	var _jssPropsSort = interopRequireDefault(lib$7);

	// Subset of jss-preset-default with only the plugins the Material-UI
	// components are using.
	function jssPreset() {
	  return {
	    plugins: [(0, _jssGlobal.default)(), (0, _jssNested.default)(), (0, _jssCamelCase.default)(), (0, _jssDefaultUnit.default)(), (0, _jssVendorPrefixer.default)(), (0, _jssPropsSort.default)()]
	  };
	}

	var _default = jssPreset;
	exports.default = _default;
	});

	unwrapExports(jssPreset_1);

	var umd = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
		module.exports = factory();
	}(commonjsGlobal, (function () {
	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			Object.keys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		Object.keys(source).forEach(function(key) {
			if (!options.isMergeableObject(source[key]) || !target[key]) {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			} else {
				destination[key] = deepmerge(target[key], source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	return deepmerge_1;

	})));
	});

	var createTypography_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTypography;

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _deepmerge = interopRequireDefault(umd);

	// < 1kb payload overhead when lodash/merge is > 3kb.
	function round(value) {
	  return Math.round(value * 1e5) / 1e5;
	}

	function createTypography(palette, typography) {
	  var _ref = typeof typography === 'function' ? typography(palette) : typography,
	      _ref$fontFamily = _ref.fontFamily,
	      fontFamily = _ref$fontFamily === void 0 ? '"Roboto", "Helvetica", "Arial", sans-serif' : _ref$fontFamily,
	      _ref$fontSize = _ref.fontSize,
	      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
	      _ref$fontWeightLight = _ref.fontWeightLight,
	      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
	      _ref$fontWeightRegula = _ref.fontWeightRegular,
	      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
	      _ref$fontWeightMedium = _ref.fontWeightMedium,
	      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
	      _ref$htmlFontSize = _ref.htmlFontSize,
	      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
	      other = (0, _objectWithoutProperties2.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "htmlFontSize"]);

	  var coef = fontSize / 14;

	  function pxToRem(value) {
	    return "".concat(value / htmlFontSize * coef, "rem");
	  }

	  return (0, _deepmerge.default)({
	    pxToRem: pxToRem,
	    round: round,
	    fontFamily: fontFamily,
	    fontSize: fontSize,
	    fontWeightLight: fontWeightLight,
	    fontWeightRegular: fontWeightRegular,
	    fontWeightMedium: fontWeightMedium,
	    display4: {
	      fontSize: pxToRem(112),
	      fontWeight: fontWeightLight,
	      fontFamily: fontFamily,
	      letterSpacing: '-.04em',
	      lineHeight: "".concat(round(128 / 112), "em"),
	      marginLeft: '-.04em',
	      color: palette.text.secondary
	    },
	    display3: {
	      fontSize: pxToRem(56),
	      fontWeight: fontWeightRegular,
	      fontFamily: fontFamily,
	      letterSpacing: '-.02em',
	      lineHeight: "".concat(round(73 / 56), "em"),
	      marginLeft: '-.02em',
	      color: palette.text.secondary
	    },
	    display2: {
	      fontSize: pxToRem(45),
	      fontWeight: fontWeightRegular,
	      fontFamily: fontFamily,
	      lineHeight: "".concat(round(48 / 45), "em"),
	      marginLeft: '-.02em',
	      color: palette.text.secondary
	    },
	    display1: {
	      fontSize: pxToRem(34),
	      fontWeight: fontWeightRegular,
	      fontFamily: fontFamily,
	      lineHeight: "".concat(round(41 / 34), "em"),
	      color: palette.text.secondary
	    },
	    headline: {
	      fontSize: pxToRem(24),
	      fontWeight: fontWeightRegular,
	      fontFamily: fontFamily,
	      lineHeight: "".concat(round(32.5 / 24), "em"),
	      color: palette.text.primary
	    },
	    title: {
	      fontSize: pxToRem(21),
	      fontWeight: fontWeightMedium,
	      fontFamily: fontFamily,
	      lineHeight: "".concat(round(24.5 / 21), "em"),
	      color: palette.text.primary
	    },
	    subheading: {
	      fontSize: pxToRem(16),
	      fontWeight: fontWeightRegular,
	      fontFamily: fontFamily,
	      lineHeight: "".concat(round(24 / 16), "em"),
	      color: palette.text.primary
	    },
	    body2: {
	      fontSize: pxToRem(14),
	      fontWeight: fontWeightMedium,
	      fontFamily: fontFamily,
	      lineHeight: "".concat(round(24 / 14), "em"),
	      color: palette.text.primary
	    },
	    body1: {
	      fontSize: pxToRem(14),
	      fontWeight: fontWeightRegular,
	      fontFamily: fontFamily,
	      lineHeight: "".concat(round(20.5 / 14), "em"),
	      color: palette.text.primary
	    },
	    caption: {
	      fontSize: pxToRem(12),
	      fontWeight: fontWeightRegular,
	      fontFamily: fontFamily,
	      lineHeight: "".concat(round(16.5 / 12), "em"),
	      color: palette.text.secondary
	    },
	    button: {
	      fontSize: pxToRem(14),
	      textTransform: 'uppercase',
	      fontWeight: fontWeightMedium,
	      fontFamily: fontFamily,
	      color: palette.text.primary
	    }
	  }, other, {
	    clone: false // No need to clone deep

	  });
	}
	});

	unwrapExports(createTypography_1);

	var createBreakpoints_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createBreakpoints;
	exports.keys = void 0;

	var _objectSpread2 = interopRequireDefault(objectSpread);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	// Sorted ASC by size. That's important.
	// It can't be configured as it's used statically for propTypes.
	var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

	exports.keys = keys;

	function createBreakpoints(breakpoints) {
	  var _breakpoints$values = breakpoints.values,
	      values = _breakpoints$values === void 0 ? {
	    xs: 0,
	    sm: 600,
	    md: 960,
	    lg: 1280,
	    xl: 1920
	  } : _breakpoints$values,
	      _breakpoints$unit = breakpoints.unit,
	      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
	      _breakpoints$step = breakpoints.step,
	      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
	      other = (0, _objectWithoutProperties2.default)(breakpoints, ["values", "unit", "step"]);

	  function up(key) {
	    var value = typeof values[key] === 'number' ? values[key] : key;
	    return "@media (min-width:".concat(value).concat(unit, ")");
	  }

	  function down(key) {
	    var endIndex = keys.indexOf(key) + 1;
	    var upperbound = values[keys[endIndex]];

	    if (endIndex === keys.length) {
	      // xl down applies to all sizes
	      return up('xs');
	    }

	    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
	    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
	  }

	  function between(start, end) {
	    var endIndex = keys.indexOf(end) + 1;

	    if (endIndex === keys.length) {
	      return up(start);
	    }

	    return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
	  }

	  function only(key) {
	    return between(key, key);
	  }

	  function width(key) {
	    return values[key];
	  }

	  return (0, _objectSpread2.default)({
	    keys: keys,
	    values: values,
	    up: up,
	    down: down,
	    between: between,
	    only: only,
	    width: width
	  }, other);
	}
	});

	unwrapExports(createBreakpoints_1);
	var createBreakpoints_2 = createBreakpoints_1.keys;

	var indigo_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	var indigo = {
	  50: '#e8eaf6',
	  100: '#c5cae9',
	  200: '#9fa8da',
	  300: '#7986cb',
	  400: '#5c6bc0',
	  500: '#3f51b5',
	  600: '#3949ab',
	  700: '#303f9f',
	  800: '#283593',
	  900: '#1a237e',
	  A100: '#8c9eff',
	  A200: '#536dfe',
	  A400: '#3d5afe',
	  A700: '#304ffe'
	};
	var _default = indigo;
	exports.default = _default;
	});

	unwrapExports(indigo_1);

	var pink_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	var pink = {
	  50: '#fce4ec',
	  100: '#f8bbd0',
	  200: '#f48fb1',
	  300: '#f06292',
	  400: '#ec407a',
	  500: '#e91e63',
	  600: '#d81b60',
	  700: '#c2185b',
	  800: '#ad1457',
	  900: '#880e4f',
	  A100: '#ff80ab',
	  A200: '#ff4081',
	  A400: '#f50057',
	  A700: '#c51162'
	};
	var _default = pink;
	exports.default = _default;
	});

	unwrapExports(pink_1);

	var grey_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	var grey = {
	  50: '#fafafa',
	  100: '#f5f5f5',
	  200: '#eeeeee',
	  300: '#e0e0e0',
	  400: '#bdbdbd',
	  500: '#9e9e9e',
	  600: '#757575',
	  700: '#616161',
	  800: '#424242',
	  900: '#212121',
	  A100: '#d5d5d5',
	  A200: '#aaaaaa',
	  A400: '#303030',
	  A700: '#616161'
	};
	var _default = grey;
	exports.default = _default;
	});

	unwrapExports(grey_1);

	var red_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	var red = {
	  50: '#ffebee',
	  100: '#ffcdd2',
	  200: '#ef9a9a',
	  300: '#e57373',
	  400: '#ef5350',
	  500: '#f44336',
	  600: '#e53935',
	  700: '#d32f2f',
	  800: '#c62828',
	  900: '#b71c1c',
	  A100: '#ff8a80',
	  A200: '#ff5252',
	  A400: '#ff1744',
	  A700: '#d50000'
	};
	var _default = red;
	exports.default = _default;
	});

	unwrapExports(red_1);

	var common_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	var common = {
	  black: '#000',
	  white: '#fff'
	};
	var _default = common;
	exports.default = _default;
	});

	unwrapExports(common_1);

	var colorManipulator = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertHexToRGB = convertHexToRGB;
	exports.decomposeColor = decomposeColor;
	exports.recomposeColor = recomposeColor;
	exports.getContrastRatio = getContrastRatio;
	exports.getLuminance = getLuminance;
	exports.emphasize = emphasize;
	exports.fade = fade;
	exports.darken = darken;
	exports.lighten = lighten;

	var _warning = interopRequireDefault(warning_1$1);

	//  weak

	/* eslint-disable no-use-before-define */

	/**
	 * Returns a number whose value is limited to the given range.
	 *
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */
	function clamp(value) {
	  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	  process.env.NODE_ENV !== "production" ? (0, _warning.default)(value >= min && value <= max, "Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "].")) : void 0;

	  if (value < min) {
	    return min;
	  }

	  if (value > max) {
	    return max;
	  }

	  return value;
	}
	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 *
	 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 * @returns {string} A CSS rgb color string
	 */


	function convertHexToRGB(color) {
	  color = color.substr(1);
	  var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
	  var colors = color.match(re);

	  if (colors && colors[0].length === 1) {
	    colors = colors.map(function (n) {
	      return n + n;
	    });
	  }

	  return colors ? "rgb(".concat(colors.map(function (n) {
	    return parseInt(n, 16);
	  }).join(', '), ")") : '';
	}
	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {object} - A MUI color object: {type: string, values: number[]}
	 */


	function decomposeColor(color) {
	  if (color.charAt(0) === '#') {
	    return decomposeColor(convertHexToRGB(color));
	  }

	  var marker = color.indexOf('(');
	  var type = color.substring(0, marker);
	  var values = color.substring(marker + 1, color.length - 1).split(',');
	  values = values.map(function (value) {
	    return parseFloat(value);
	  });

	  if (process.env.NODE_ENV !== 'production') {
	    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
	      throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
	    }
	  }

	  return {
	    type: type,
	    values: values
	  };
	}
	/**
	 * Converts a color object with type and values to a string.
	 *
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */


	function recomposeColor(color) {
	  var type = color.type;
	  var values = color.values;

	  if (type.indexOf('rgb') !== -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    values = values.map(function (n, i) {
	      return i < 3 ? parseInt(n, 10) : n;
	    });
	  }

	  if (type.indexOf('hsl') !== -1) {
	    values[1] = "".concat(values[1], "%");
	    values[2] = "".concat(values[2], "%");
	  }

	  return "".concat(color.type, "(").concat(values.join(', '), ")");
	}
	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 *
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21.
	 */


	function getContrastRatio(foreground, background) {
	  var lumA = getLuminance(foreground);
	  var lumB = getLuminance(background);
	  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
	}
	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */


	function getLuminance(color) {
	  var decomposedColor = decomposeColor(color);

	  if (decomposedColor.type.indexOf('rgb') !== -1) {
	    var rgb = decomposedColor.values.map(function (val) {
	      val /= 255; // normalized

	      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	    }); // Truncate at 3 digits

	    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
	  } // else if (decomposedColor.type.indexOf('hsl') !== -1)


	  return decomposedColor.values[2] / 100;
	}
	/**
	 * Darken or lighten a colour, depending on its luminance.
	 * Light colors are darkened, dark colors are lightened.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */


	function emphasize(color) {
	  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
	  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
	}
	/**
	 * Set the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} value - value to set the alpha channel to in the range 0 -1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */


	function fade(color, value) {
	  process.env.NODE_ENV !== "production" ? (0, _warning.default)(color, "Material-UI: missing color argument in fade(".concat(color, ", ").concat(value, ").")) : void 0;
	  if (!color) return color;
	  color = decomposeColor(color);
	  value = clamp(value);

	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }

	  color.values[3] = value;
	  return recomposeColor(color);
	}
	/**
	 * Darkens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */


	function darken(color, coefficient) {
	  process.env.NODE_ENV !== "production" ? (0, _warning.default)(color, "Material-UI: missing color argument in darken(".concat(color, ", ").concat(coefficient, ").")) : void 0;
	  if (!color) return color;
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') !== -1) {
	    for (var i = 0; i < 3; i += 1) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }

	  return recomposeColor(color);
	}
	/**
	 * Lightens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */


	function lighten(color, coefficient) {
	  process.env.NODE_ENV !== "production" ? (0, _warning.default)(color, "Material-UI: missing color argument in lighten(".concat(color, ", ").concat(coefficient, ").")) : void 0;
	  if (!color) return color;
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') !== -1) {
	    for (var i = 0; i < 3; i += 1) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  }

	  return recomposeColor(color);
	}
	});

	unwrapExports(colorManipulator);
	var colorManipulator_1 = colorManipulator.convertHexToRGB;
	var colorManipulator_2 = colorManipulator.decomposeColor;
	var colorManipulator_3 = colorManipulator.recomposeColor;
	var colorManipulator_4 = colorManipulator.getContrastRatio;
	var colorManipulator_5 = colorManipulator.getLuminance;
	var colorManipulator_6 = colorManipulator.emphasize;
	var colorManipulator_7 = colorManipulator.fade;
	var colorManipulator_8 = colorManipulator.darken;
	var colorManipulator_9 = colorManipulator.lighten;

	var createPalette_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPalette;
	exports.dark = exports.light = void 0;

	var _objectSpread2 = interopRequireDefault(objectSpread);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _warning = interopRequireDefault(warning_1$1);

	var _deepmerge = interopRequireDefault(umd);

	var _indigo = interopRequireDefault(indigo_1);

	var _pink = interopRequireDefault(pink_1);

	var _grey = interopRequireDefault(grey_1);

	var _red = interopRequireDefault(red_1);

	var _common = interopRequireDefault(common_1);



	// < 1kb payload overhead when lodash/merge is > 3kb.
	var light = {
	  // The colors used to style the text.
	  text: {
	    // The most important text.
	    primary: 'rgba(0, 0, 0, 0.87)',
	    // Secondary text.
	    secondary: 'rgba(0, 0, 0, 0.54)',
	    // Disabled text have even lower visual prominence.
	    disabled: 'rgba(0, 0, 0, 0.38)',
	    // Text hints.
	    hint: 'rgba(0, 0, 0, 0.38)'
	  },
	  // The color used to divide different elements.
	  divider: 'rgba(0, 0, 0, 0.12)',
	  // The background colors used to style the surfaces.
	  // Consistency between these values is important.
	  background: {
	    paper: _common.default.white,
	    default: _grey.default[50]
	  },
	  // The colors used to style the action elements.
	  action: {
	    // The color of an active action like an icon button.
	    active: 'rgba(0, 0, 0, 0.54)',
	    // The color of an hovered action.
	    hover: 'rgba(0, 0, 0, 0.08)',
	    hoverOpacity: 0.08,
	    // The color of a selected action.
	    selected: 'rgba(0, 0, 0, 0.14)',
	    // The color of a disabled action.
	    disabled: 'rgba(0, 0, 0, 0.26)',
	    // The background color of a disabled action.
	    disabledBackground: 'rgba(0, 0, 0, 0.12)'
	  }
	};
	exports.light = light;
	var dark = {
	  text: {
	    primary: _common.default.white,
	    secondary: 'rgba(255, 255, 255, 0.7)',
	    disabled: 'rgba(255, 255, 255, 0.5)',
	    hint: 'rgba(255, 255, 255, 0.5)',
	    icon: 'rgba(255, 255, 255, 0.5)'
	  },
	  divider: 'rgba(255, 255, 255, 0.12)',
	  background: {
	    paper: _grey.default[800],
	    default: '#303030'
	  },
	  action: {
	    active: _common.default.white,
	    hover: 'rgba(255, 255, 255, 0.1)',
	    hoverOpacity: 0.1,
	    selected: 'rgba(255, 255, 255, 0.2)',
	    disabled: 'rgba(255, 255, 255, 0.3)',
	    disabledBackground: 'rgba(255, 255, 255, 0.12)'
	  }
	};
	exports.dark = dark;

	function addLightOrDark(intent, direction, shade, tonalOffset) {
	  if (!intent[direction]) {
	    if (intent.hasOwnProperty(shade)) {
	      intent[direction] = intent[shade];
	    } else if (direction === 'light') {
	      intent.light = (0, colorManipulator.lighten)(intent.main, tonalOffset);
	    } else if (direction === 'dark') {
	      intent.dark = (0, colorManipulator.darken)(intent.main, tonalOffset * 1.5);
	    }
	  }
	}

	function createPalette(palette) {
	  var _palette$primary = palette.primary,
	      primary = _palette$primary === void 0 ? {
	    light: _indigo.default[300],
	    main: _indigo.default[500],
	    dark: _indigo.default[700]
	  } : _palette$primary,
	      _palette$secondary = palette.secondary,
	      secondary = _palette$secondary === void 0 ? {
	    light: _pink.default.A200,
	    main: _pink.default.A400,
	    dark: _pink.default.A700
	  } : _palette$secondary,
	      _palette$error = palette.error,
	      error = _palette$error === void 0 ? {
	    light: _red.default[300],
	    main: _red.default[500],
	    dark: _red.default[700]
	  } : _palette$error,
	      _palette$type = palette.type,
	      type = _palette$type === void 0 ? 'light' : _palette$type,
	      _palette$contrastThre = palette.contrastThreshold,
	      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
	      _palette$tonalOffset = palette.tonalOffset,
	      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
	      other = (0, _objectWithoutProperties2.default)(palette, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]);

	  function getContrastText(background) {
	    // Use the same logic as
	    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
	    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
	    var contrastText = (0, colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

	    if (process.env.NODE_ENV !== 'production') {
	      var contrast = (0, colorManipulator.getContrastRatio)(background, contrastText);
	      process.env.NODE_ENV !== "production" ? (0, _warning.default)(contrast >= 3, ["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WACG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n')) : void 0;
	    }

	    return contrastText;
	  }

	  function augmentColor(color, mainShade, lightShade, darkShade) {
	    if (!color.main && color[mainShade]) {
	      color.main = color[mainShade];
	    }

	    addLightOrDark(color, 'light', lightShade, tonalOffset);
	    addLightOrDark(color, 'dark', darkShade, tonalOffset);

	    if (!color.contrastText) {
	      color.contrastText = getContrastText(color.main);
	    }
	  }

	  augmentColor(primary, 500, 300, 700);
	  augmentColor(secondary, 'A400', 'A200', 'A700');
	  augmentColor(error, 500, 300, 700);
	  var types = {
	    dark: dark,
	    light: light
	  };
	  process.env.NODE_ENV !== "production" ? (0, _warning.default)(types[type], "Material-UI: the palette type `".concat(type, "` is not supported.")) : void 0;
	  var paletteOutput = (0, _deepmerge.default)((0, _objectSpread2.default)({
	    // A collection of common colors.
	    common: _common.default,
	    // The palette type, can be light or dark.
	    type: type,
	    // The colors used to represent primary interface elements for a user.
	    primary: primary,
	    // The colors used to represent secondary interface elements for a user.
	    secondary: secondary,
	    // The colors used to represent interface elements that the user should be made aware of.
	    error: error,
	    // The grey colors.
	    grey: _grey.default,
	    // Used by `getContrastText()` to maximize the contrast between the background and
	    // the text.
	    contrastThreshold: contrastThreshold,
	    // Take a background color and return the color of the text to maximize the contrast.
	    getContrastText: getContrastText,
	    // Generate a rich color object.
	    augmentColor: augmentColor,
	    // Used by the functions below to shift a color's luminance by approximately
	    // two indexes within its tonal palette.
	    // E.g., shift from Red 500 to Red 300 or Red 700.
	    tonalOffset: tonalOffset
	  }, types[type]), other, {
	    clone: false // No need to clone deep

	  });
	  return paletteOutput;
	}
	});

	unwrapExports(createPalette_1);
	var createPalette_2 = createPalette_1.dark;
	var createPalette_3 = createPalette_1.light;

	var createMixins_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createMixins;

	var _defineProperty2 = interopRequireDefault(defineProperty);

	var _objectSpread3 = interopRequireDefault(objectSpread);

	function createMixins(breakpoints, spacing, mixins) {
	  var _toolbar;

	  return (0, _objectSpread3.default)({
	    gutters: function gutters() {
	      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      return (0, _objectSpread3.default)({
	        paddingLeft: spacing.unit * 2,
	        paddingRight: spacing.unit * 2
	      }, styles, (0, _defineProperty2.default)({}, breakpoints.up('sm'), (0, _objectSpread3.default)({
	        paddingLeft: spacing.unit * 3,
	        paddingRight: spacing.unit * 3
	      }, styles[breakpoints.up('sm')])));
	    },
	    toolbar: (_toolbar = {
	      minHeight: 56
	    }, (0, _defineProperty2.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
	      minHeight: 48
	    }), (0, _defineProperty2.default)(_toolbar, breakpoints.up('sm'), {
	      minHeight: 64
	    }), _toolbar)
	  }, mixins);
	}
	});

	unwrapExports(createMixins_1);

	var shadows_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	var shadowKeyUmbraOpacity = 0.2;
	var shadowKeyPenumbraOpacity = 0.14;
	var shadowAmbientShadowOpacity = 0.12;

	function createShadow() {
	  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0, 0, 0, ").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0, 0, 0, ").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0, 0, 0, ").concat(shadowAmbientShadowOpacity, ")")].join(',');
	}

	var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
	var _default = shadows;
	exports.default = _default;
	});

	unwrapExports(shadows_1);

	var transitions = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.isNumber = exports.isString = exports.formatMs = exports.duration = exports.easing = void 0;

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _warning = interopRequireDefault(warning_1$1);

	/* eslint-disable no-param-reassign */
	// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
	// to learn the context in which each easing should be used.
	var easing = {
	  // This is the most common easing curve.
	  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	  // Objects enter the screen at full velocity from off-screen and
	  // slowly decelerate to a resting point.
	  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
	  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
	  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
	  // The sharp curve is used by objects that may return to the screen at any time.
	  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
	}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
	// to learn when use what timing

	exports.easing = easing;
	var duration = {
	  shortest: 150,
	  shorter: 200,
	  short: 250,
	  // most basic recommended timing
	  standard: 300,
	  // this is to be used in complex animations
	  complex: 375,
	  // recommended when something is entering screen
	  enteringScreen: 225,
	  // recommended when something is leaving screen
	  leavingScreen: 195
	};
	exports.duration = duration;

	var formatMs = function formatMs(milliseconds) {
	  return "".concat(Math.round(milliseconds), "ms");
	};

	exports.formatMs = formatMs;

	var isString = function isString(value) {
	  return typeof value === 'string';
	};

	exports.isString = isString;

	var isNumber = function isNumber(value) {
	  return !Number.isNaN(parseFloat(value));
	};
	/**
	 * @param {string|Array} props
	 * @param {object} param
	 * @param {string} param.prop
	 * @param {number} param.duration
	 * @param {string} param.easing
	 * @param {number} param.delay
	 */


	exports.isNumber = isNumber;
	var _default = {
	  easing: easing,
	  duration: duration,
	  create: function create() {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return function () {
	      var _options$duration = options.duration,
	          durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
	          _options$easing = options.easing,
	          easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
	          _options$delay = options.delay,
	          delay = _options$delay === void 0 ? 0 : _options$delay,
	          other = (0, _objectWithoutProperties2.default)(options, ["duration", "easing", "delay"]);
	      process.env.NODE_ENV !== "production" ? (0, _warning.default)(isString(props) || Array.isArray(props), 'Material-UI: argument "props" must be a string or Array.') : void 0;
	      process.env.NODE_ENV !== "production" ? (0, _warning.default)(isNumber(durationOption) || isString(durationOption), "Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, ".")) : void 0;
	      process.env.NODE_ENV !== "production" ? (0, _warning.default)(isString(easingOption), 'Material-UI: argument "easing" must be a string.') : void 0;
	      process.env.NODE_ENV !== "production" ? (0, _warning.default)(isNumber(delay) || isString(delay), 'Material-UI: argument "delay" must be a number or a string.') : void 0;
	      process.env.NODE_ENV !== "production" ? (0, _warning.default)(Object.keys(other).length === 0, "Material-UI: unrecognized argument(s) [".concat(Object.keys(other).join(','), "]")) : void 0;
	      return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
	        return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
	      }).join(',');
	    }();
	  },
	  getAutoHeightDuration: function getAutoHeightDuration(height) {
	    if (!height) {
	      return 0;
	    }

	    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

	    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
	  }
	};
	exports.default = _default;
	});

	unwrapExports(transitions);
	var transitions_1 = transitions.isNumber;
	var transitions_2 = transitions.isString;
	var transitions_3 = transitions.formatMs;
	var transitions_4 = transitions.duration;
	var transitions_5 = transitions.easing;

	var zIndex_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	// We need to centralize the zIndex definitions as they work
	// like global values in the browser.
	var zIndex = {
	  mobileStepper: 1000,
	  appBar: 1100,
	  drawer: 1200,
	  modal: 1300,
	  snackbar: 1400,
	  tooltip: 1500
	};
	var _default = zIndex;
	exports.default = _default;
	});

	unwrapExports(zIndex_1);

	var spacing = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	var _default = {
	  // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
	  // https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-baseline-grids
	  unit: 8
	};
	exports.default = _default;
	});

	unwrapExports(spacing);

	var createMuiTheme_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _objectSpread2 = interopRequireDefault(objectSpread);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _deepmerge = interopRequireDefault(umd);

	var _warning = interopRequireDefault(warning_1$1);

	var _createTypography = interopRequireDefault(createTypography_1);

	var _createBreakpoints = interopRequireDefault(createBreakpoints_1);

	var _createPalette = interopRequireDefault(createPalette_1);

	var _createMixins = interopRequireDefault(createMixins_1);

	var _shadows = interopRequireDefault(shadows_1);

	var _transitions = interopRequireDefault(transitions);

	var _zIndex = interopRequireDefault(zIndex_1);

	var _spacing = interopRequireDefault(spacing);

	// < 1kb payload overhead when lodash/merge is > 3kb.
	function createMuiTheme() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _options$palette = options.palette,
	      paletteInput = _options$palette === void 0 ? {} : _options$palette,
	      _options$breakpoints = options.breakpoints,
	      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
	      _options$mixins = options.mixins,
	      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
	      _options$typography = options.typography,
	      typographyInput = _options$typography === void 0 ? {} : _options$typography,
	      shadowsInput = options.shadows,
	      other = (0, _objectWithoutProperties2.default)(options, ["palette", "breakpoints", "mixins", "typography", "shadows"]);
	  var palette = (0, _createPalette.default)(paletteInput);
	  var breakpoints = (0, _createBreakpoints.default)(breakpointsInput);
	  var muiTheme = (0, _objectSpread2.default)({
	    breakpoints: breakpoints,
	    direction: 'ltr',
	    mixins: (0, _createMixins.default)(breakpoints, _spacing.default, mixinsInput),
	    overrides: {},
	    // Inject custom styles
	    palette: palette,
	    props: {},
	    // Inject custom properties
	    shadows: shadowsInput || _shadows.default,
	    typography: (0, _createTypography.default)(palette, typographyInput)
	  }, (0, _deepmerge.default)({
	    transitions: _transitions.default,
	    spacing: _spacing.default,
	    zIndex: _zIndex.default
	  }, other));
	  process.env.NODE_ENV !== "production" ? (0, _warning.default)(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.') : void 0;
	  return muiTheme;
	}

	var _default = createMuiTheme;
	exports.default = _default;
	});

	unwrapExports(createMuiTheme_1);

	var themeListener_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.CHANNEL = void 0;

	var _defineProperty2 = interopRequireDefault(defineProperty);

	var _propTypes = interopRequireDefault(propTypes);

	// Same value used by react-jss
	var CHANNEL = '__THEMING__';
	exports.CHANNEL = CHANNEL;
	var themeListener = {
	  contextTypes: (0, _defineProperty2.default)({}, CHANNEL, _propTypes.default.object),
	  initial: function initial(context) {
	    if (!context[CHANNEL]) {
	      return null;
	    }

	    return context[CHANNEL].getState();
	  },
	  subscribe: function subscribe(context, cb) {
	    if (!context[CHANNEL]) {
	      return null;
	    }

	    return context[CHANNEL].subscribe(cb);
	  },
	  unsubscribe: function unsubscribe(context, subscriptionId) {
	    if (context[CHANNEL]) {
	      context[CHANNEL].unsubscribe(subscriptionId);
	    }
	  }
	};
	var _default = themeListener;
	exports.default = _default;
	});

	unwrapExports(themeListener_1);
	var themeListener_2 = themeListener_1.CHANNEL;

	var createGenerateClassName_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createGenerateClassName;

	var _warning = interopRequireDefault(warning_1$1);

	var generatorCounter = 0; // Returns a function which generates unique class names based on counters.
	// When new generator function is created, rule counter is reset.
	// We need to reset the rule counter for SSR for each request.
	//
	// It's inspired by
	// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

	function createGenerateClassName() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
	      dangerouslyUseGlobalCSS = _options$dangerouslyU === void 0 ? false : _options$dangerouslyU,
	      _options$productionPr = options.productionPrefix,
	      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr;
	  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
	  var ruleCounter = 0; // - HMR can lead to many class name generators being instantiated,
	  // so the warning is only triggered in production.
	  // - We expect a class name generator to be instantiated per new request on the server,
	  // so the warning is only triggered client side.
	  // - You can get away with having multiple class name generators
	  // by modifying the `productionPrefix`.

	  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && productionPrefix === 'jss') {
	    generatorCounter += 1;

	    if (generatorCounter > 2) {
	      // eslint-disable-next-line no-console
	      console.error(['Material-UI: we have detected more than needed creation of the class name generator.', 'You should only use one class name generator on the client side.', 'If you do otherwise, you take the risk to have conflicting class names in production.'].join('\n'));
	    }
	  }

	  return function (rule, styleSheet) {
	    ruleCounter += 1;
	    process.env.NODE_ENV !== "production" ? (0, _warning.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')) : void 0; // Code branch the whole block at the expense of more code.

	    if (dangerouslyUseGlobalCSS) {
	      if (styleSheet && styleSheet.options.classNamePrefix) {
	        var prefix = styleSheet.options.classNamePrefix; // Sanitize the string as will be used to prefix the generated class name.

	        prefix = prefix.replace(escapeRegex, '-');

	        if (prefix.match(/^Mui/)) {
	          return "".concat(prefix, "-").concat(rule.key);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          return "".concat(prefix, "-").concat(rule.key, "-").concat(ruleCounter);
	        }
	      }

	      if (process.env.NODE_ENV === 'production') {
	        return "".concat(productionPrefix).concat(ruleCounter);
	      }

	      return "".concat(rule.key, "-").concat(ruleCounter);
	    }

	    if (process.env.NODE_ENV === 'production') {
	      return "".concat(productionPrefix).concat(ruleCounter);
	    }

	    if (styleSheet && styleSheet.options.classNamePrefix) {
	      var _prefix = styleSheet.options.classNamePrefix; // Sanitize the string as will be used to prefix the generated class name.

	      _prefix = _prefix.replace(escapeRegex, '-');
	      return "".concat(_prefix, "-").concat(rule.key, "-").concat(ruleCounter);
	    }

	    return "".concat(rule.key, "-").concat(ruleCounter);
	  };
	}
	});

	unwrapExports(createGenerateClassName_1);

	var getStylesCreator_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _objectSpread2 = interopRequireDefault(objectSpread);

	var _warning = interopRequireDefault(warning_1$1);

	var _deepmerge = interopRequireDefault(umd);

	// < 1kb payload overhead when lodash/merge is > 3kb.
	// Support for the jss-expand plugin.
	function arrayMerge(destination, source) {
	  return source;
	}

	function getStylesCreator(stylesOrCreator) {
	  var themingEnabled = typeof stylesOrCreator === 'function';

	  function create(theme, name) {
	    var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

	    if (!name || !theme.overrides || !theme.overrides[name]) {
	      return styles;
	    }

	    var overrides = theme.overrides[name];
	    var stylesWithOverrides = (0, _objectSpread2.default)({}, styles);
	    Object.keys(overrides).forEach(function (key) {
	      process.env.NODE_ENV !== "production" ? (0, _warning.default)(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n')) : void 0;
	      stylesWithOverrides[key] = (0, _deepmerge.default)(stylesWithOverrides[key], overrides[key], {
	        arrayMerge: arrayMerge
	      });
	    });
	    return stylesWithOverrides;
	  }

	  return {
	    create: create,
	    options: {},
	    themingEnabled: themingEnabled
	  };
	}

	var _default = getStylesCreator;
	exports.default = _default;
	});

	unwrapExports(getStylesCreator_1);

	var getThemeProps_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	function getThemeProps(params) {
	  var theme = params.theme,
	      name = params.name;

	  if (!name || !theme.props || !theme.props[name]) {
	    return {};
	  }

	  return theme.props[name];
	}

	var _default = getThemeProps;
	exports.default = _default;
	});

	unwrapExports(getThemeProps_1);

	var withStyles_1 = createCommonjsModule(function (module, exports) {





	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.sheetsManager = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _objectSpread2 = interopRequireDefault(objectSpread);

	var _classCallCheck2 = interopRequireDefault(classCallCheck);

	var _createClass2 = interopRequireDefault(createClass);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

	var _inherits2 = interopRequireDefault(inherits);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _react$$1 = interopRequireDefault(_react__default);

	var _propTypes = interopRequireDefault(propTypes);

	var _warning = interopRequireDefault(warning_1$1);

	var _hoistNonReactStatics = interopRequireDefault(hoistNonReactStatics);

	var _getDisplayName = interopRequireDefault(getDisplayName_1);

	var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

	var _contextTypes = interopRequireDefault(contextTypes);



	var ns$$1 = interopRequireWildcard(ns);

	var _jssPreset = interopRequireDefault(jssPreset_1);

	var _createMuiTheme = interopRequireDefault(createMuiTheme_1);

	var _themeListener = interopRequireDefault(themeListener_1);

	var _createGenerateClassName = interopRequireDefault(createGenerateClassName_1);

	var _getStylesCreator = interopRequireDefault(getStylesCreator_1);

	var _getThemeProps = interopRequireDefault(getThemeProps_1);

	// Default JSS instance.
	var jss = (0, lib.create)((0, _jssPreset.default)()); // Use a singleton or the provided one by the context.

	var generateClassName = (0, _createGenerateClassName.default)(); // Global index counter to preserve source order.
	// We create the style sheet during at the creation of the component,
	// children are handled after the parents, so the order of style elements would be parent->child.
	// It is a problem though when a parent passes a className
	// which needs to override any childs styles.
	// StyleSheet of the child has a higher specificity, because of the source order.
	// So our solution is to render sheets them in the reverse order child->sheet, so
	// that parent has a higher specificity.

	var indexCounter = -10e10; // Exported for test purposes

	var sheetsManager = new Map(); // We use the same empty object to ref count the styles that don't need a theme object.

	exports.sheetsManager = sheetsManager;
	var noopTheme = {}; // In order to have self-supporting components, we rely on default theme when not provided.

	var defaultTheme;

	function getDefaultTheme() {
	  if (defaultTheme) {
	    return defaultTheme;
	  }

	  defaultTheme = (0, _createMuiTheme.default)();
	  return defaultTheme;
	} // Link a style sheet with a component.
	// It does not modify the component passed to it;
	// instead, it returns a new component, with a `classes` property.


	var withStyles = function withStyles(stylesOrCreator) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return function (Component) {
	    var _options$withTheme = options.withTheme,
	        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
	        _options$flip = options.flip,
	        flip = _options$flip === void 0 ? null : _options$flip,
	        name = options.name,
	        styleSheetOptions = (0, _objectWithoutProperties2.default)(options, ["withTheme", "flip", "name"]);
	    var stylesCreator = (0, _getStylesCreator.default)(stylesOrCreator);
	    var listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';
	    indexCounter += 1;
	    stylesCreator.options.index = indexCounter;
	    process.env.NODE_ENV !== "production" ? (0, _warning.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' ')) : void 0;

	    var WithStyles =
	    /*#__PURE__*/
	    function (_React$Component) {
	      (0, _inherits2.default)(WithStyles, _React$Component);

	      function WithStyles(props, context) {
	        var _this;

	        (0, _classCallCheck2.default)(this, WithStyles);
	        _this = (0, _possibleConstructorReturn2.default)(this, (WithStyles.__proto__ || Object.getPrototypeOf(WithStyles)).call(this, props, context));
	        _this.state = {};
	        _this.disableStylesGeneration = false;
	        _this.jss = null;
	        _this.sheetOptions = null;
	        _this.sheetsManager = sheetsManager;
	        _this.stylesCreatorSaved = null;
	        _this.theme = null;
	        _this.unsubscribeId = null;
	        _this.jss = _this.context[ns$$1.jss] || jss;
	        var muiThemeProviderOptions = _this.context.muiThemeProviderOptions;

	        if (muiThemeProviderOptions) {
	          if (muiThemeProviderOptions.sheetsManager) {
	            _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
	          }

	          _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
	        } // Attach the stylesCreator to the instance of the component as in the context
	        // of react-hot-loader the hooks can be executed in a different closure context:
	        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107


	        _this.stylesCreatorSaved = stylesCreator;
	        _this.sheetOptions = (0, _objectSpread2.default)({
	          generateClassName: generateClassName
	        }, _this.context[ns$$1.sheetOptions]); // We use || as the function call is lazy evaluated.

	        _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;

	        _this.attach(_this.theme);

	        _this.cacheClasses = {
	          // Cache for the finalized classes value.
	          value: null,
	          // Cache for the last used classes prop pointer.
	          lastProp: null,
	          // Cache for the last used rendered classes pointer.
	          lastJSS: {}
	        };
	        return _this;
	      }

	      (0, _createClass2.default)(WithStyles, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	          var _this2 = this;

	          if (!listenToTheme) {
	            return;
	          }

	          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
	            var oldTheme = _this2.theme;
	            _this2.theme = theme;

	            _this2.attach(_this2.theme); // Rerender the component so the underlying component gets the theme update.
	            // By theme update we mean receiving and applying the new class names.


	            _this2.setState({}, function () {
	              _this2.detach(oldTheme);
	            });
	          });
	        }
	      }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	          // react-hot-loader specific logic
	          if (this.stylesCreatorSaved === stylesCreator || process.env.NODE_ENV === 'production') {
	            return;
	          }

	          this.detach(this.theme);
	          this.stylesCreatorSaved = stylesCreator;
	          this.attach(this.theme);
	          this.forceUpdate();
	        }
	      }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	          this.detach(this.theme);

	          if (this.unsubscribeId !== null) {
	            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
	          }
	        }
	      }, {
	        key: "getClasses",
	        value: function getClasses() {
	          var _this3 = this;

	          // Tracks if either the rendered classes or classes prop has changed,
	          // requiring the generation of a new finalized classes object.
	          var generate = false;

	          if (!this.disableStylesGeneration) {
	            var sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
	            var sheetsManagerTheme = sheetManager.get(this.theme);

	            if (sheetsManagerTheme.sheet.classes !== this.cacheClasses.lastJSS) {
	              this.cacheClasses.lastJSS = sheetsManagerTheme.sheet.classes;
	              generate = true;
	            }
	          }

	          if (this.props.classes !== this.cacheClasses.lastProp) {
	            this.cacheClasses.lastProp = this.props.classes;
	            generate = true;
	          }

	          if (generate) {
	            if (this.props.classes) {
	              this.cacheClasses.value = (0, _objectSpread2.default)({}, this.cacheClasses.lastJSS, Object.keys(this.props.classes).reduce(function (accumulator, key) {
	                process.env.NODE_ENV !== "production" ? (0, _warning.default)(_this3.cacheClasses.lastJSS[key] || _this3.disableStylesGeneration, ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not implemented in ".concat((0, _getDisplayName.default)(Component), "."), "You can only override one of the following: ".concat(Object.keys(_this3.cacheClasses.lastJSS).join(','))].join('\n')) : void 0;
	                process.env.NODE_ENV !== "production" ? (0, _warning.default)(!_this3.props.classes[key] || typeof _this3.props.classes[key] === 'string', ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not valid for ".concat((0, _getDisplayName.default)(Component), "."), "You need to provide a non empty string instead of: ".concat(_this3.props.classes[key], ".")].join('\n')) : void 0;

	                if (_this3.props.classes[key]) {
	                  accumulator[key] = "".concat(_this3.cacheClasses.lastJSS[key], " ").concat(_this3.props.classes[key]);
	                }

	                return accumulator;
	              }, {}));
	            } else {
	              this.cacheClasses.value = this.cacheClasses.lastJSS;
	            }
	          }

	          return this.cacheClasses.value;
	        }
	      }, {
	        key: "attach",
	        value: function attach(theme) {
	          if (this.disableStylesGeneration) {
	            return;
	          }

	          var stylesCreatorSaved = this.stylesCreatorSaved;
	          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);

	          if (!sheetManager) {
	            sheetManager = new Map();
	            this.sheetsManager.set(stylesCreatorSaved, sheetManager);
	          }

	          var sheetManagerTheme = sheetManager.get(theme);

	          if (!sheetManagerTheme) {
	            sheetManagerTheme = {
	              refs: 0,
	              sheet: null
	            };
	            sheetManager.set(theme, sheetManagerTheme);
	          }

	          if (sheetManagerTheme.refs === 0) {
	            var styles = stylesCreatorSaved.create(theme, name);
	            var meta = name;

	            if (process.env.NODE_ENV !== 'production' && !meta) {
	              meta = (0, _getDisplayName.default)(Component);
	            }

	            var sheet = this.jss.createStyleSheet(styles, (0, _objectSpread2.default)({
	              meta: meta,
	              classNamePrefix: meta,
	              flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
	              link: false
	            }, this.sheetOptions, stylesCreatorSaved.options, {
	              name: name
	            }, styleSheetOptions));
	            sheetManagerTheme.sheet = sheet;
	            sheet.attach();
	            var sheetsRegistry = this.context[ns$$1.sheetsRegistry];

	            if (sheetsRegistry) {
	              sheetsRegistry.add(sheet);
	            }
	          }

	          sheetManagerTheme.refs += 1;
	        }
	      }, {
	        key: "detach",
	        value: function detach(theme) {
	          if (this.disableStylesGeneration) {
	            return;
	          }

	          var stylesCreatorSaved = this.stylesCreatorSaved;
	          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);
	          var sheetManagerTheme = sheetManager.get(theme);
	          sheetManagerTheme.refs -= 1;

	          if (sheetManagerTheme.refs === 0) {
	            sheetManager.delete(theme);
	            this.jss.removeStyleSheet(sheetManagerTheme.sheet);
	            var sheetsRegistry = this.context[ns$$1.sheetsRegistry];

	            if (sheetsRegistry) {
	              sheetsRegistry.remove(sheetManagerTheme.sheet);
	            }
	          }
	        }
	      }, {
	        key: "render",
	        value: function render() {
	          var _props = this.props,
	              classes = _props.classes,
	              innerRef = _props.innerRef,
	              other = (0, _objectWithoutProperties2.default)(_props, ["classes", "innerRef"]);
	          var more = (0, _getThemeProps.default)({
	            theme: this.theme,
	            name: name
	          }); // Provide the theme to the wrapped component.
	          // So we don't have to use the `withTheme()` Higher-order Component.

	          if (withTheme) {
	            more.theme = this.theme;
	          }

	          return _react$$1.default.createElement(Component, (0, _extends2.default)({}, more, {
	            classes: this.getClasses(),
	            ref: innerRef
	          }, other));
	        }
	      }]);
	      return WithStyles;
	    }(_react$$1.default.Component);

	    WithStyles.propTypes = process.env.NODE_ENV !== "production" ? {
	      /**
	       * Override or extend the styles applied to the component.
	       */
	      classes: _propTypes.default.object,

	      /**
	       * Use that property to pass a ref callback to the decorated component.
	       */
	      innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
	    } : {};
	    WithStyles.contextTypes = (0, _objectSpread2.default)({
	      muiThemeProviderOptions: _propTypes.default.object
	    }, _contextTypes.default, listenToTheme ? _themeListener.default.contextTypes : {});

	    if (process.env.NODE_ENV !== 'production') {
	      WithStyles.displayName = (0, _wrapDisplayName.default)(Component, 'WithStyles');
	    }

	    (0, _hoistNonReactStatics.default)(WithStyles, Component);

	    if (process.env.NODE_ENV !== 'production') {
	      // Exposed for test purposes.
	      WithStyles.Naked = Component;
	      WithStyles.options = options;
	    }

	    return WithStyles;
	  };
	};

	var _default = withStyles;
	exports.default = _default;
	});

	unwrapExports(withStyles_1);
	var withStyles_2 = withStyles_1.sheetsManager;

	var List_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.styles = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _defineProperty2 = interopRequireDefault(defineProperty);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _classCallCheck2 = interopRequireDefault(classCallCheck);

	var _createClass2 = interopRequireDefault(createClass);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

	var _inherits2 = interopRequireDefault(inherits);

	var _react$$1 = interopRequireDefault(_react__default);

	var _propTypes = interopRequireDefault(propTypes);

	var _classnames = interopRequireDefault(classnames);

	var _withStyles = interopRequireDefault(withStyles_1);

	var styles = function styles(theme) {
	  return {
	    root: {
	      listStyle: 'none',
	      margin: 0,
	      padding: 0,
	      position: 'relative'
	    },
	    padding: {
	      paddingTop: theme.spacing.unit,
	      paddingBottom: theme.spacing.unit
	    },
	    dense: {
	      paddingTop: theme.spacing.unit / 2,
	      paddingBottom: theme.spacing.unit / 2
	    },
	    subheader: {
	      paddingTop: 0
	    }
	  };
	};

	exports.styles = styles;

	var List =
	/*#__PURE__*/
	function (_React$Component) {
	  (0, _inherits2.default)(List, _React$Component);

	  function List() {
	    (0, _classCallCheck2.default)(this, List);
	    return (0, _possibleConstructorReturn2.default)(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
	  }

	  (0, _createClass2.default)(List, [{
	    key: "getChildContext",
	    value: function getChildContext() {
	      return {
	        dense: this.props.dense
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _classNames;

	      var _props = this.props,
	          children = _props.children,
	          classes = _props.classes,
	          classNameProp = _props.className,
	          Component = _props.component,
	          dense = _props.dense,
	          disablePadding = _props.disablePadding,
	          subheader = _props.subheader,
	          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);
	      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.dense, dense && !disablePadding), (0, _defineProperty2.default)(_classNames, classes.padding, !disablePadding), (0, _defineProperty2.default)(_classNames, classes.subheader, subheader), _classNames), classNameProp);
	      return _react$$1.default.createElement(Component, (0, _extends2.default)({
	        className: className
	      }, other), subheader, children);
	    }
	  }]);
	  return List;
	}(_react$$1.default.Component);

	List.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * The content of the component.
	   */
	  children: _propTypes.default.node,

	  /**
	   * Override or extend the styles applied to the component.
	   * See [CSS API](#css-api) below for more details.
	   */
	  classes: _propTypes.default.object.isRequired,

	  /**
	   * @ignore
	   */
	  className: _propTypes.default.string,

	  /**
	   * The component used for the root node.
	   * Either a string to use a DOM element or a component.
	   */
	  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

	  /**
	   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
	   * the list and list items. The property is available to descendant components as the
	   * `dense` context.
	   */
	  dense: _propTypes.default.bool,

	  /**
	   * If `true`, vertical padding will be removed from the list.
	   */
	  disablePadding: _propTypes.default.bool,

	  /**
	   * The content of the subheader, normally `ListSubheader`.
	   */
	  subheader: _propTypes.default.node
	} : {};
	List.defaultProps = {
	  component: 'ul',
	  dense: false,
	  disablePadding: false
	};
	List.childContextTypes = {
	  dense: _propTypes.default.bool
	};

	var _default = (0, _withStyles.default)(styles, {
	  name: 'MuiList'
	})(List);

	exports.default = _default;
	});

	unwrapExports(List_1);
	var List_2 = List_1.styles;

	var List$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _List.default;
	  }
	});

	var _List = interopRequireDefault(List_1);
	});

	var List$2 = unwrapExports(List$1);

	var keycode = createCommonjsModule(function (module, exports) {
	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */

	function keyCode(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
	    if (hasKeyCode) searchInput = hasKeyCode;
	  }

	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]

	  // Everything else (cast to string)
	  var search = String(searchInput);

	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()];
	  if (foundNamedKey) return foundNamedKey

	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()];
	  if (foundNamedKey) return foundNamedKey

	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)

	  return undefined
	}

	/**
	 * Compares a keyboard event with a given keyCode or keyName.
	 *
	 * @param {Event} event Keyboard event that should be tested
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Boolean}
	 * @api public
	 */
	keyCode.isEventKey = function isEventKey(event, nameOrCode) {
	  if (event && 'object' === typeof event) {
	    var keyCode = event.which || event.keyCode || event.charCode;
	    if (keyCode === null || keyCode === undefined) { return false; }
	    if (typeof nameOrCode === 'string') {
	      // check codes
	      var foundNamedKey = codes[nameOrCode.toLowerCase()];
	      if (foundNamedKey) { return foundNamedKey === keyCode; }
	    
	      // check aliases
	      var foundNamedKey = aliases[nameOrCode.toLowerCase()];
	      if (foundNamedKey) { return foundNamedKey === keyCode; }
	    } else if (typeof nameOrCode === 'number') {
	      return nameOrCode === keyCode;
	    }
	    return false;
	  }
	};

	exports = module.exports = keyCode;

	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */

	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	};

	// Helper aliases

	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'spacebar': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	};

	/*!
	 * Programatically add the following
	 */

	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i;

	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */

	var names = exports.names = exports.title = {}; // title for backward compat

	// Create reverse mapping
	for (i in codes) names[codes[i]] = i;

	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias];
	}
	});
	var keycode_1 = keycode.code;
	var keycode_2 = keycode.codes;
	var keycode_3 = keycode.aliases;
	var keycode_4 = keycode.names;
	var keycode_5 = keycode.title;

	var ownerDocument_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ownerDocument;
	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}
	module.exports = exports["default"];
	});

	unwrapExports(ownerDocument_1);

	var ownerWindow_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _ownerDocument = interopRequireDefault(ownerDocument_1);

	var ownerWindow = function ownerWindow(node) {
	  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
	  var doc = (0, _ownerDocument.default)(node);
	  return doc.defaultView || doc.parentView || fallback;
	};

	var _default = ownerWindow;
	exports.default = _default;
	});

	unwrapExports(ownerWindow_1);

	var inDOM = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];
	});

	unwrapExports(inDOM);

	var contains = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _inDOM2 = _interopRequireDefault(inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  // HTML DOM and SVG DOM may have different support levels,
	  // so we need to check on context instead of a document root element.
	  return _inDOM2.default ? function (context, node) {
	    if (context.contains) {
	      return context.contains(node);
	    } else if (context.compareDocumentPosition) {
	      return context === node || !!(context.compareDocumentPosition(node) & 16);
	    } else {
	      return fallback(context, node);
	    }
	  } : fallback;
	}();

	function fallback(context, node) {
	  if (node) do {
	    if (node === context) return true;
	  } while (node = node.parentNode);

	  return false;
	}
	module.exports = exports['default'];
	});

	unwrapExports(contains);

	var focusVisible = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.detectFocusVisible = detectFocusVisible;
	exports.listenForFocusKeys = listenForFocusKeys;

	var _keycode = interopRequireDefault(keycode);

	var _warning = interopRequireDefault(warning_1$1);

	var _contains = interopRequireDefault(contains);

	var _ownerDocument = interopRequireDefault(ownerDocument_1);

	//  weak
	var internal = {
	  focusKeyPressed: false,
	  keyUpEventTimeout: -1
	};

	function detectFocusVisible(instance, element, callback) {
	  var attempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	  process.env.NODE_ENV !== "production" ? (0, _warning.default)(instance.focusVisibleCheckTime, 'Material-UI: missing instance.focusVisibleCheckTime.') : void 0;
	  process.env.NODE_ENV !== "production" ? (0, _warning.default)(instance.focusVisibleMaxCheckTimes, 'Material-UI: missing instance.focusVisibleMaxCheckTimes.') : void 0;
	  instance.focusVisibleTimeout = setTimeout(function () {
	    var doc = (0, _ownerDocument.default)(element);

	    if (internal.focusKeyPressed && (doc.activeElement === element || (0, _contains.default)(element, doc.activeElement))) {
	      callback();
	    } else if (attempt < instance.focusVisibleMaxCheckTimes) {
	      detectFocusVisible(instance, element, callback, attempt + 1);
	    }
	  }, instance.focusVisibleCheckTime);
	}

	var FOCUS_KEYS = ['tab', 'enter', 'space', 'esc', 'up', 'down', 'left', 'right'];

	function isFocusKey(event) {
	  return FOCUS_KEYS.indexOf((0, _keycode.default)(event)) > -1;
	}

	var handleKeyUpEvent = function handleKeyUpEvent(event) {
	  if (isFocusKey(event)) {
	    internal.focusKeyPressed = true; // Let's consider that the user is using a keyboard during a window frame of 1s.

	    clearTimeout(internal.keyUpEventTimeout);
	    internal.keyUpEventTimeout = setTimeout(function () {
	      internal.focusKeyPressed = false;
	    }, 1e3);
	  }
	};

	function listenForFocusKeys(win) {
	  // The event listener will only be added once per window.
	  // Duplicate event listeners will be ignored by addEventListener.
	  // Also, this logic is client side only, we don't need a teardown.
	  win.addEventListener('keyup', handleKeyUpEvent);
	}
	});

	unwrapExports(focusVisible);
	var focusVisible_1 = focusVisible.detectFocusVisible;
	var focusVisible_2 = focusVisible.listenForFocusKeys;

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray = _toConsumableArray;

	var ChildMapping = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.getChildMapping = getChildMapping;
	exports.mergeChildMappings = mergeChildMappings;



	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */
	function getChildMapping(children, mapFn) {
	  var mapper = function mapper(child) {
	    return mapFn && (0, _react__default.isValidElement)(child) ? mapFn(child) : child;
	  };

	  var result = Object.create(null);
	  if (children) _react__default.Children.map(children, function (c) {
	    return c;
	  }).forEach(function (child) {
	    // run the map function here instead so that the key is the computed one
	    result[child.key] = mapper(child);
	  });
	  return result;
	}

	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */
	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};

	  function getValueForKey(key) {
	    return key in next ? next[key] : prev[key];
	  }

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextKeysPending = Object.create(null);

	  var pendingKeys = [];
	  for (var prevKey in prev) {
	    if (prevKey in next) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }

	  var i = void 0;
	  var childMapping = {};
	  for (var nextKey in next) {
	    if (nextKeysPending[nextKey]) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }
	    childMapping[nextKey] = getValueForKey(nextKey);
	  }

	  // Finally, add the keys which didn't appear before any key in `next`
	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }

	  return childMapping;
	}
	});

	unwrapExports(ChildMapping);
	var ChildMapping_1 = ChildMapping.getChildMapping;
	var ChildMapping_2 = ChildMapping.mergeChildMappings;

	var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _react2 = _interopRequireDefault(_react__default);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var values = Object.values || function (obj) {
	  return Object.keys(obj).map(function (k) {
	    return obj[k];
	  });
	};

	var propTypes$$1 = {
	  /**
	   * `<TransitionGroup>` renders a `<div>` by default. You can change this
	   * behavior by providing a `component` prop.
	   * If you use React v16+ and would like to avoid a wrapping `<div>` element
	   * you can pass in `component={null}`. This is useful if the wrapping div
	   * borks your css styles.
	   */
	  component: _propTypes2.default.any,
	  /**
	   * A set of `<Transition>` components, that are toggled `in` and out as they
	   * leave. the `<TransitionGroup>` will inject specific transition props, so
	   * remember to spread them through if you are wrapping the `<Transition>` as
	   * with our `<Fade>` example.
	   */
	  children: _propTypes2.default.node,

	  /**
	   * A convenience prop that enables or disables appear animations
	   * for all children. Note that specifying this will override any defaults set
	   * on individual children Transitions.
	   */
	  appear: _propTypes2.default.bool,
	  /**
	   * A convenience prop that enables or disables enter animations
	   * for all children. Note that specifying this will override any defaults set
	   * on individual children Transitions.
	   */
	  enter: _propTypes2.default.bool,
	  /**
	    * A convenience prop that enables or disables exit animations
	    * for all children. Note that specifying this will override any defaults set
	    * on individual children Transitions.
	    */
	  exit: _propTypes2.default.bool,

	  /**
	   * You may need to apply reactive updates to a child as it is exiting.
	   * This is generally done by using `cloneElement` however in the case of an exiting
	   * child the element has already been removed and not accessible to the consumer.
	   *
	   * If you do need to update a child as it leaves you can provide a `childFactory`
	   * to wrap every child, even the ones that are leaving.
	   *
	   * @type Function(child: ReactElement) -> ReactElement
	   */
	  childFactory: _propTypes2.default.func
	};

	var defaultProps = {
	  component: 'div',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};

	/**
	 * The `<TransitionGroup>` component manages a set of `<Transition>` components
	 * in a list. Like with the `<Transition>` component, `<TransitionGroup>`, is a
	 * state machine for managing the mounting and unmounting of components over
	 * time.
	 *
	 * Consider the example below using the `Fade` CSS transition from before.
	 * As items are removed or added to the TodoList the `in` prop is toggled
	 * automatically by the `<TransitionGroup>`. You can use _any_ `<Transition>`
	 * component in a `<TransitionGroup>`, not just css.
	 *
	 * ## Example
	 *
	 * <iframe src="https://codesandbox.io/embed/00rqyo26kn?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
	 *
	 * Note that `<TransitionGroup>`  does not define any animation behavior!
	 * Exactly _how_ a list item animates is up to the individual `<Transition>`
	 * components. This means you can mix and match animations across different
	 * list items.
	 */

	var TransitionGroup = function (_React$Component) {
	  _inherits(TransitionGroup, _React$Component);

	  function TransitionGroup(props, context) {
	    _classCallCheck(this, TransitionGroup);

	    // Initial children should all be entering, dependent on appear
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.state = {
	      children: (0, ChildMapping.getChildMapping)(props.children, function (child) {
	        return (0, _react__default.cloneElement)(child, {
	          onExited: _this.handleExited.bind(_this, child),
	          in: true,
	          appear: _this.getProp(child, 'appear'),
	          enter: _this.getProp(child, 'enter'),
	          exit: _this.getProp(child, 'exit')
	        });
	      })
	    };
	    return _this;
	  }

	  TransitionGroup.prototype.getChildContext = function getChildContext() {
	    return {
	      transitionGroup: { isMounting: !this.appeared }
	    };
	  };
	  // use child config unless explictly set by the Group


	  TransitionGroup.prototype.getProp = function getProp(child, prop) {
	    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;

	    return props[prop] != null ? props[prop] : child.props[prop];
	  };

	  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    this.appeared = true;
	  };

	  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    var prevChildMapping = this.state.children;
	    var nextChildMapping = (0, ChildMapping.getChildMapping)(nextProps.children);

	    var children = (0, ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping);

	    Object.keys(children).forEach(function (key) {
	      var child = children[key];

	      if (!(0, _react__default.isValidElement)(child)) return;

	      var hasPrev = key in prevChildMapping;
	      var hasNext = key in nextChildMapping;

	      var prevChild = prevChildMapping[key];
	      var isLeaving = (0, _react__default.isValidElement)(prevChild) && !prevChild.props.in;

	      // item is new (entering)
	      if (hasNext && (!hasPrev || isLeaving)) {
	        // console.log('entering', key)
	        children[key] = (0, _react__default.cloneElement)(child, {
	          onExited: _this2.handleExited.bind(_this2, child),
	          in: true,
	          exit: _this2.getProp(child, 'exit', nextProps),
	          enter: _this2.getProp(child, 'enter', nextProps)
	        });
	      }
	      // item is old (exiting)
	      else if (!hasNext && hasPrev && !isLeaving) {
	          // console.log('leaving', key)
	          children[key] = (0, _react__default.cloneElement)(child, { in: false });
	        }
	        // item hasn't changed transition states
	        // copy over the last transition props;
	        else if (hasNext && hasPrev && (0, _react__default.isValidElement)(prevChild)) {
	            // console.log('unchanged', key)
	            children[key] = (0, _react__default.cloneElement)(child, {
	              onExited: _this2.handleExited.bind(_this2, child),
	              in: prevChild.props.in,
	              exit: _this2.getProp(child, 'exit', nextProps),
	              enter: _this2.getProp(child, 'enter', nextProps)
	            });
	          }
	    });

	    this.setState({ children: children });
	  };

	  TransitionGroup.prototype.handleExited = function handleExited(child, node) {
	    var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);

	    if (child.key in currentChildMapping) return;

	    if (child.props.onExited) {
	      child.props.onExited(node);
	    }

	    this.setState(function (state) {
	      var children = _extends({}, state.children);

	      delete children[child.key];
	      return { children: children };
	    });
	  };

	  TransitionGroup.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.component,
	        childFactory = _props.childFactory,
	        props = _objectWithoutProperties(_props, ['component', 'childFactory']);

	    var children = values(this.state.children).map(childFactory);

	    delete props.appear;
	    delete props.enter;
	    delete props.exit;

	    if (Component === null) {
	      return children;
	    }
	    return _react2.default.createElement(
	      Component,
	      props,
	      children
	    );
	  };

	  return TransitionGroup;
	}(_react2.default.Component);

	TransitionGroup.childContextTypes = {
	  transitionGroup: _propTypes2.default.object.isRequired
	};


	TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes$$1 : {};
	TransitionGroup.defaultProps = defaultProps;

	exports.default = TransitionGroup;
	module.exports = exports['default'];
	});

	unwrapExports(TransitionGroup_1);

	var PropTypes = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.classNamesShape = exports.timeoutsShape = undefined;
	exports.transitionTimeout = transitionTimeout;



	var _propTypes2 = _interopRequireDefault(propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function transitionTimeout(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	      }
	    }

	    return null;
	  };
	}

	var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
	  enter: _propTypes2.default.number,
	  exit: _propTypes2.default.number
	}).isRequired]);

	var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	  enter: _propTypes2.default.string,
	  exit: _propTypes2.default.string,
	  active: _propTypes2.default.string
	}), _propTypes2.default.shape({
	  enter: _propTypes2.default.string,
	  enterDone: _propTypes2.default.string,
	  enterActive: _propTypes2.default.string,
	  exit: _propTypes2.default.string,
	  exitDone: _propTypes2.default.string,
	  exitActive: _propTypes2.default.string
	})]);
	});

	unwrapExports(PropTypes);
	var PropTypes_1 = PropTypes.classNamesShape;
	var PropTypes_2 = PropTypes.timeoutsShape;
	var PropTypes_3 = PropTypes.transitionTimeout;

	var Transition_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;



	var PropTypes$$1 = _interopRequireWildcard(propTypes);



	var _react2 = _interopRequireDefault(_react__default);



	var _reactDom2 = _interopRequireDefault(reactDom);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
	var EXITED = exports.EXITED = 'exited';
	var ENTERING = exports.ENTERING = 'entering';
	var ENTERED = exports.ENTERED = 'entered';
	var EXITING = exports.EXITING = 'exiting';

	/**
	 * The Transition component lets you describe a transition from one component
	 * state to another _over time_ with a simple declarative API. Most commonly
	 * it's used to animate the mounting and unmounting of a component, but can also
	 * be used to describe in-place transition states as well.
	 *
	 * By default the `Transition` component does not alter the behavior of the
	 * component it renders, it only tracks "enter" and "exit" states for the components.
	 * It's up to you to give meaning and effect to those states. For example we can
	 * add styles to a component when it enters or exits:
	 *
	 * ```jsx
	 * import Transition from 'react-transition-group/Transition';
	 *
	 * const duration = 300;
	 *
	 * const defaultStyle = {
	 *   transition: `opacity ${duration}ms ease-in-out`,
	 *   opacity: 0,
	 * }
	 *
	 * const transitionStyles = {
	 *   entering: { opacity: 0 },
	 *   entered:  { opacity: 1 },
	 * };
	 *
	 * const Fade = ({ in: inProp }) => (
	 *   <Transition in={inProp} timeout={duration}>
	 *     {(state) => (
	 *       <div style={{
	 *         ...defaultStyle,
	 *         ...transitionStyles[state]
	 *       }}>
	 *         I'm a fade Transition!
	 *       </div>
	 *     )}
	 *   </Transition>
	 * );
	 * ```
	 *
	 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
	 * What it does do is track transition states over time so you can update the
	 * component (such as by adding styles or classes) when it changes states.
	 *
	 * There are 4 main states a Transition can be in:
	 *  - `'entering'`
	 *  - `'entered'`
	 *  - `'exiting'`
	 *  - `'exited'`
	 *
	 * Transition state is toggled via the `in` prop. When `true` the component begins the
	 * "Enter" stage. During this stage, the component will shift from its current transition state,
	 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
	 * it's complete. Let's take the following example:
	 *
	 * ```jsx
	 * state = { in: false };
	 *
	 * toggleEnterState = () => {
	 *   this.setState({ in: true });
	 * }
	 *
	 * render() {
	 *   return (
	 *     <div>
	 *       <Transition in={this.state.in} timeout={500} />
	 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the button is clicked the component will shift to the `'entering'` state and
	 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
	 *
	 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
	 *
	 * ## Timing
	 *
	 * Timing is often the trickiest part of animation, mistakes can result in slight delays
	 * that are hard to pin down. A common example is when you want to add an exit transition,
	 * you should set the desired final styles when the state is `'exiting'`. That's when the
	 * transition to those styles will start and, if you matched the `timeout` prop with the
	 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
	 *
	 * > **Note**: For simpler transitions the `Transition` component might be enough, but
	 * > take into account that it's platform-agnostic, while the `CSSTransition` component
	 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	 * > in order to make more complex transitions more predictable. For example, even though
	 * > classes `example-enter` and `example-enter-active` are applied immediately one after
	 * > another, you can still transition from one to the other because of the forced reflow
	 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
	 * > for more info). Take this into account when choosing between `Transition` and
	 * > `CSSTransition`.
	 *
	 * ## Example
	 *
	 * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
	 *
	 */

	var Transition = function (_React$Component) {
	  _inherits(Transition, _React$Component);

	  function Transition(props, context) {
	    _classCallCheck(this, Transition);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    var parentGroup = context.transitionGroup;
	    // In the context of a TransitionGroup all enters are really appears
	    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

	    var initialStatus = void 0;
	    _this.nextStatus = null;

	    if (props.in) {
	      if (appear) {
	        initialStatus = EXITED;
	        _this.nextStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }

	    _this.state = { status: initialStatus };

	    _this.nextCallback = null;
	    return _this;
	  }

	  Transition.prototype.getChildContext = function getChildContext() {
	    return { transitionGroup: null }; // allows for nested Transitions
	  };

	  Transition.prototype.componentDidMount = function componentDidMount() {
	    this.updateStatus(true);
	  };

	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _ref = this.pendingState || this.state,
	        status = _ref.status;

	    if (nextProps.in) {
	      if (status === UNMOUNTED) {
	        this.setState({ status: EXITED });
	      }
	      if (status !== ENTERING && status !== ENTERED) {
	        this.nextStatus = ENTERING;
	      }
	    } else {
	      if (status === ENTERING || status === ENTERED) {
	        this.nextStatus = EXITING;
	      }
	    }
	  };

	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.updateStatus();
	  };

	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  Transition.prototype.getTimeouts = function getTimeouts() {
	    var timeout = this.props.timeout;

	    var exit = void 0,
	        enter = void 0,
	        appear = void 0;

	    exit = enter = appear = timeout;

	    if (timeout != null && typeof timeout !== 'number') {
	      exit = timeout.exit;
	      enter = timeout.enter;
	      appear = timeout.appear;
	    }
	    return { exit: exit, enter: enter, appear: appear };
	  };

	  Transition.prototype.updateStatus = function updateStatus() {
	    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var nextStatus = this.nextStatus;

	    if (nextStatus !== null) {
	      this.nextStatus = null;
	      // nextStatus will always be ENTERING or EXITING.
	      this.cancelNextCallback();
	      var node = _reactDom2.default.findDOMNode(this);

	      if (nextStatus === ENTERING) {
	        this.performEnter(node, mounting);
	      } else {
	        this.performExit(node);
	      }
	    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	      this.setState({ status: UNMOUNTED });
	    }
	  };

	  Transition.prototype.performEnter = function performEnter(node, mounting) {
	    var _this2 = this;

	    var enter = this.props.enter;

	    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

	    var timeouts = this.getTimeouts();

	    // no enter animation skip right to ENTERED
	    // if we are mounting and running this it means appear _must_ be set
	    if (!mounting && !enter) {
	      this.safeSetState({ status: ENTERED }, function () {
	        _this2.props.onEntered(node);
	      });
	      return;
	    }

	    this.props.onEnter(node, appearing);

	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node, appearing);

	      // FIXME: appear timeout?
	      _this2.onTransitionEnd(node, timeouts.enter, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node, appearing);
	        });
	      });
	    });
	  };

	  Transition.prototype.performExit = function performExit(node) {
	    var _this3 = this;

	    var exit = this.props.exit;

	    var timeouts = this.getTimeouts();

	    // no exit animation skip right to EXITED
	    if (!exit) {
	      this.safeSetState({ status: EXITED }, function () {
	        _this3.props.onExited(node);
	      });
	      return;
	    }
	    this.props.onExit(node);

	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);

	      _this3.onTransitionEnd(node, timeouts.exit, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    var _this4 = this;

	    // We need to track pending updates for instances where a cWRP fires quickly
	    // after cDM and before the state flushes, which would double trigger a
	    // transition
	    this.pendingState = nextState;

	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    callback = this.setNextCallback(callback);
	    this.setState(nextState, function () {
	      _this4.pendingState = null;
	      callback();
	    });
	  };

	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this5 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this5.nextCallback = null;

	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
	    this.setNextCallback(handler);

	    if (node) {
	      if (this.props.addEndListener) {
	        this.props.addEndListener(node, this.nextCallback);
	      }
	      if (timeout != null) {
	        setTimeout(this.nextCallback, timeout);
	      }
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };

	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _props = this.props,
	        children = _props.children,
	        childProps = _objectWithoutProperties(_props, ['children']);
	    // filter props for Transtition


	    delete childProps.in;
	    delete childProps.mountOnEnter;
	    delete childProps.unmountOnExit;
	    delete childProps.appear;
	    delete childProps.enter;
	    delete childProps.exit;
	    delete childProps.timeout;
	    delete childProps.addEndListener;
	    delete childProps.onEnter;
	    delete childProps.onEntering;
	    delete childProps.onEntered;
	    delete childProps.onExit;
	    delete childProps.onExiting;
	    delete childProps.onExited;

	    if (typeof children === 'function') {
	      return children(status, childProps);
	    }

	    var child = _react2.default.Children.only(children);
	    return _react2.default.cloneElement(child, childProps);
	  };

	  return Transition;
	}(_react2.default.Component);

	Transition.contextTypes = {
	  transitionGroup: PropTypes$$1.object
	};
	Transition.childContextTypes = {
	  transitionGroup: function transitionGroup() {}
	};


	Transition.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * A `function` child can be used instead of a React element.
	   * This function is called with the current transition status
	   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
	   * to apply context specific props to a component.
	   *
	   * ```jsx
	   * <Transition timeout={150}>
	   *   {(status) => (
	   *     <MyComponent className={`fade fade-${status}`} />
	   *   )}
	   * </Transition>
	   * ```
	   */
	  children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

	  /**
	   * Show the component; triggers the enter or exit states
	   */
	  in: PropTypes$$1.bool,

	  /**
	   * By default the child component is mounted immediately along with
	   * the parent `Transition` component. If you want to "lazy mount" the component on the
	   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
	   * mounted, even on "exited", unless you also specify `unmountOnExit`.
	   */
	  mountOnEnter: PropTypes$$1.bool,

	  /**
	   * By default the child component stays mounted after it reaches the `'exited'` state.
	   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
	   */
	  unmountOnExit: PropTypes$$1.bool,

	  /**
	   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
	   * If you want to transition on the first mount set `appear` to `true`, and the
	   * component will transition in as soon as the `<Transition>` mounts.
	   *
	   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
	   */
	  appear: PropTypes$$1.bool,

	  /**
	   * Enable or disable enter transitions.
	   */
	  enter: PropTypes$$1.bool,

	  /**
	   * Enable or disable exit transitions.
	   */
	  exit: PropTypes$$1.bool,

	  /**
	   * The duration of the transition, in milliseconds.
	   * Required unless `addEndListener` is provided
	   *
	   * You may specify a single timeout for all transitions like: `timeout={500}`,
	   * or individually like:
	   *
	   * ```jsx
	   * timeout={{
	   *  enter: 300,
	   *  exit: 500,
	   * }}
	   * ```
	   *
	   * @type {number | { enter?: number, exit?: number }}
	   */
	  timeout: function timeout(props) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var pt = PropTypes.timeoutsShape;
	    if (!props.addEndListener) pt = pt.isRequired;
	    return pt.apply(undefined, [props].concat(args));
	  },

	  /**
	   * Add a custom transition end trigger. Called with the transitioning
	   * DOM node and a `done` callback. Allows for more fine grained transition end
	   * logic. **Note:** Timeouts are still used as a fallback if provided.
	   *
	   * ```jsx
	   * addEndListener={(node, done) => {
	   *   // use the css transitionend event to mark the finish of a transition
	   *   node.addEventListener('transitionend', done, false);
	   * }}
	   * ```
	   */
	  addEndListener: PropTypes$$1.func,

	  /**
	   * Callback fired before the "entering" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool) -> void
	   */
	  onEnter: PropTypes$$1.func,

	  /**
	   * Callback fired after the "entering" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEntering: PropTypes$$1.func,

	  /**
	   * Callback fired after the "entered" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool) -> void
	   */
	  onEntered: PropTypes$$1.func,

	  /**
	   * Callback fired before the "exiting" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExit: PropTypes$$1.func,

	  /**
	   * Callback fired after the "exiting" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExiting: PropTypes$$1.func,

	  /**
	   * Callback fired after the "exited" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExited: PropTypes$$1.func
	} : {};

	// Name the function so it is clearer in the documentation
	function noop() {}

	Transition.defaultProps = {
	  in: false,
	  mountOnEnter: false,
	  unmountOnExit: false,
	  appear: false,
	  enter: true,
	  exit: true,

	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,

	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};

	Transition.UNMOUNTED = 0;
	Transition.EXITED = 1;
	Transition.ENTERING = 2;
	Transition.ENTERED = 3;
	Transition.EXITING = 4;

	exports.default = Transition;
	});

	unwrapExports(Transition_1);
	var Transition_2 = Transition_1.EXITING;
	var Transition_3 = Transition_1.ENTERED;
	var Transition_4 = Transition_1.ENTERING;
	var Transition_5 = Transition_1.EXITED;
	var Transition_6 = Transition_1.UNMOUNTED;

	var Ripple_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _defineProperty2 = interopRequireDefault(defineProperty);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _classCallCheck2 = interopRequireDefault(classCallCheck);

	var _createClass2 = interopRequireDefault(createClass);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

	var _inherits2 = interopRequireDefault(inherits);

	var _react$$1 = interopRequireDefault(_react__default);

	var _propTypes = interopRequireDefault(propTypes);

	var _classnames = interopRequireDefault(classnames);

	var _Transition = interopRequireDefault(Transition_1);

	/**
	 * @ignore - internal component.
	 */
	var Ripple =
	/*#__PURE__*/
	function (_React$Component) {
	  (0, _inherits2.default)(Ripple, _React$Component);

	  function Ripple() {
	    var _ref;

	    var _temp, _this;

	    (0, _classCallCheck2.default)(this, Ripple);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call.apply(_ref, [this].concat(args))), _this.state = {
	      visible: false,
	      leaving: false
	    }, _this.handleEnter = function () {
	      _this.setState({
	        visible: true
	      });
	    }, _this.handleExit = function () {
	      _this.setState({
	        leaving: true
	      });
	    }, _temp));
	  }

	  (0, _createClass2.default)(Ripple, [{
	    key: "render",
	    value: function render() {
	      var _classNames, _classNames2;

	      var _props = this.props,
	          classes = _props.classes,
	          classNameProp = _props.className,
	          pulsate = _props.pulsate,
	          rippleX = _props.rippleX,
	          rippleY = _props.rippleY,
	          rippleSize = _props.rippleSize,
	          other = (0, _objectWithoutProperties2.default)(_props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);
	      var _state = this.state,
	          visible = _state.visible,
	          leaving = _state.leaving;
	      var rippleClassName = (0, _classnames.default)(classes.ripple, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.rippleVisible, visible), (0, _defineProperty2.default)(_classNames, classes.ripplePulsate, pulsate), _classNames), classNameProp);
	      var rippleStyles = {
	        width: rippleSize,
	        height: rippleSize,
	        top: -(rippleSize / 2) + rippleY,
	        left: -(rippleSize / 2) + rippleX
	      };
	      var childClassName = (0, _classnames.default)(classes.child, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.childLeaving, leaving), (0, _defineProperty2.default)(_classNames2, classes.childPulsate, pulsate), _classNames2));
	      return _react$$1.default.createElement(_Transition.default, (0, _extends2.default)({
	        onEnter: this.handleEnter,
	        onExit: this.handleExit
	      }, other), _react$$1.default.createElement("span", {
	        className: rippleClassName,
	        style: rippleStyles
	      }, _react$$1.default.createElement("span", {
	        className: childClassName
	      })));
	    }
	  }]);
	  return Ripple;
	}(_react$$1.default.Component);

	Ripple.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Override or extend the styles applied to the component.
	   * See [CSS API](#css-api) below for more details.
	   */
	  classes: _propTypes.default.object.isRequired,

	  /**
	   * @ignore
	   */
	  className: _propTypes.default.string,

	  /**
	   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
	   */
	  pulsate: _propTypes.default.bool,

	  /**
	   * Diameter of the ripple.
	   */
	  rippleSize: _propTypes.default.number,

	  /**
	   * Horizontal position of the ripple center.
	   */
	  rippleX: _propTypes.default.number,

	  /**
	   * Vertical position of the ripple center.
	   */
	  rippleY: _propTypes.default.number
	} : {};
	Ripple.defaultProps = {
	  pulsate: false
	};
	var _default = Ripple;
	exports.default = _default;
	});

	unwrapExports(Ripple_1);

	var TouchRipple_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.styles = exports.DELAY_RIPPLE = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

	var _classCallCheck2 = interopRequireDefault(classCallCheck);

	var _createClass2 = interopRequireDefault(createClass);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

	var _inherits2 = interopRequireDefault(inherits);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

	var _react$$1 = interopRequireDefault(_react__default);

	var _propTypes = interopRequireDefault(propTypes);

	var _reactDom = interopRequireDefault(reactDom);

	var _TransitionGroup = interopRequireDefault(TransitionGroup_1);

	var _classnames = interopRequireDefault(classnames);

	var _withStyles = interopRequireDefault(withStyles_1);

	var _Ripple = interopRequireDefault(Ripple_1);

	var DURATION = 550;
	var DELAY_RIPPLE = 80;
	exports.DELAY_RIPPLE = DELAY_RIPPLE;

	var styles = function styles(theme) {
	  return {
	    root: {
	      display: 'block',
	      position: 'absolute',
	      overflow: 'hidden',
	      borderRadius: 'inherit',
	      width: '100%',
	      height: '100%',
	      left: 0,
	      top: 0,
	      pointerEvents: 'none',
	      zIndex: 0
	    },
	    ripple: {
	      width: 50,
	      height: 50,
	      left: 0,
	      top: 0,
	      opacity: 0,
	      position: 'absolute'
	    },
	    rippleVisible: {
	      opacity: 0.3,
	      transform: 'scale(1)',
	      animation: "mui-ripple-enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
	    },
	    ripplePulsate: {
	      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
	    },
	    child: {
	      opacity: 1,
	      display: 'block',
	      width: '100%',
	      height: '100%',
	      borderRadius: '50%',
	      backgroundColor: 'currentColor'
	    },
	    childLeaving: {
	      opacity: 0,
	      animation: "mui-ripple-exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
	    },
	    childPulsate: {
	      position: 'absolute',
	      left: 0,
	      top: 0,
	      animation: "mui-ripple-pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
	    },
	    '@keyframes mui-ripple-enter': {
	      '0%': {
	        transform: 'scale(0)',
	        opacity: 0.1
	      },
	      '100%': {
	        transform: 'scale(1)',
	        opacity: 0.3
	      }
	    },
	    '@keyframes mui-ripple-exit': {
	      '0%': {
	        opacity: 1
	      },
	      '100%': {
	        opacity: 0
	      }
	    },
	    '@keyframes mui-ripple-pulsate': {
	      '0%': {
	        transform: 'scale(1)'
	      },
	      '50%': {
	        transform: 'scale(0.92)'
	      },
	      '100%': {
	        transform: 'scale(1)'
	      }
	    }
	  };
	};

	exports.styles = styles;

	var TouchRipple =
	/*#__PURE__*/
	function (_React$PureComponent) {
	  (0, _inherits2.default)(TouchRipple, _React$PureComponent);

	  function TouchRipple() {
	    var _ref;

	    var _temp, _this;

	    (0, _classCallCheck2.default)(this, TouchRipple);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = TouchRipple.__proto__ || Object.getPrototypeOf(TouchRipple)).call.apply(_ref, [this].concat(args))), _this.state = {
	      nextKey: 0,
	      ripples: []
	    }, _this.ignoringMouseDown = false, _this.startTimer = null, _this.startTimerCommit = null, _this.pulsate = function () {
	      _this.start({}, {
	        pulsate: true
	      });
	    }, _this.start = function () {
	      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var cb = arguments.length > 2 ? arguments[2] : undefined;
	      var _options$pulsate = options.pulsate,
	          pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
	          _options$center = options.center,
	          center = _options$center === void 0 ? _this.props.center || options.pulsate : _options$center,
	          _options$fakeElement = options.fakeElement,
	          fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

	      if (event.type === 'mousedown' && _this.ignoringMouseDown) {
	        _this.ignoringMouseDown = false;
	        return;
	      }

	      if (event.type === 'touchstart') {
	        _this.ignoringMouseDown = true;
	      }

	      var element = fakeElement ? null : _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)(_this));
	      var rect = element ? element.getBoundingClientRect() : {
	        width: 0,
	        height: 0,
	        left: 0,
	        top: 0
	      }; // Get the size of the ripple

	      var rippleX;
	      var rippleY;
	      var rippleSize;

	      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
	        rippleX = Math.round(rect.width / 2);
	        rippleY = Math.round(rect.height / 2);
	      } else {
	        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
	        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
	        rippleX = Math.round(clientX - rect.left);
	        rippleY = Math.round(clientY - rect.top);
	      }

	      if (center) {
	        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

	        if (rippleSize % 2 === 0) {
	          rippleSize += 1;
	        }
	      } else {
	        var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
	        var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
	        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
	      } // Touche devices


	      if (event.touches) {
	        // Prepare the ripple effect.
	        _this.startTimerCommit = function () {
	          _this.startCommit({
	            pulsate: pulsate,
	            rippleX: rippleX,
	            rippleY: rippleY,
	            rippleSize: rippleSize,
	            cb: cb
	          });
	        }; // Deplay the execution of the ripple effect.


	        _this.startTimer = setTimeout(function () {
	          _this.startTimerCommit();

	          _this.startTimerCommit = null;
	        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
	      } else {
	        _this.startCommit({
	          pulsate: pulsate,
	          rippleX: rippleX,
	          rippleY: rippleY,
	          rippleSize: rippleSize,
	          cb: cb
	        });
	      }
	    }, _this.startCommit = function (params) {
	      var pulsate = params.pulsate,
	          rippleX = params.rippleX,
	          rippleY = params.rippleY,
	          rippleSize = params.rippleSize,
	          cb = params.cb;
	      var ripples = _this.state.ripples; // Add a ripple to the ripples array.

	      ripples = (0, _toConsumableArray2.default)(ripples).concat([_react$$1.default.createElement(_Ripple.default, {
	        key: _this.state.nextKey,
	        classes: _this.props.classes,
	        timeout: {
	          exit: DURATION,
	          enter: DURATION
	        },
	        pulsate: pulsate,
	        rippleX: rippleX,
	        rippleY: rippleY,
	        rippleSize: rippleSize
	      })]);

	      _this.setState({
	        nextKey: _this.state.nextKey + 1,
	        ripples: ripples
	      }, cb);
	    }, _this.stop = function (event, cb) {
	      clearTimeout(_this.startTimer);
	      var ripples = _this.state.ripples; // The touch interaction occures to quickly.
	      // We still want to show ripple effect.

	      if (event.type === 'touchend' && _this.startTimerCommit) {
	        event.persist();

	        _this.startTimerCommit();

	        _this.startTimerCommit = null;
	        _this.startTimer = setTimeout(function () {
	          _this.stop(event, cb);
	        }, 0);
	        return;
	      }

	      _this.startTimerCommit = null;

	      if (ripples && ripples.length) {
	        _this.setState({
	          ripples: ripples.slice(1)
	        }, cb);
	      }
	    }, _temp));
	  }

	  (0, _createClass2.default)(TouchRipple, [{
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      clearTimeout(this.startTimer);
	    } // Used to filter out mouse emulated events on mobile.

	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          center = _props.center,
	          classes = _props.classes,
	          className = _props.className,
	          other = (0, _objectWithoutProperties2.default)(_props, ["center", "classes", "className"]);
	      return _react$$1.default.createElement(_TransitionGroup.default, (0, _extends2.default)({
	        component: "span",
	        enter: true,
	        exit: true,
	        className: (0, _classnames.default)(classes.root, className)
	      }, other), this.state.ripples);
	    }
	  }]);
	  return TouchRipple;
	}(_react$$1.default.PureComponent);

	TouchRipple.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * If `true`, the ripple starts at the center of the component
	   * rather than at the point of interaction.
	   */
	  center: _propTypes.default.bool,

	  /**
	   * Override or extend the styles applied to the component.
	   * See [CSS API](#css-api) below for more details.
	   */
	  classes: _propTypes.default.object.isRequired,

	  /**
	   * @ignore
	   */
	  className: _propTypes.default.string
	} : {};
	TouchRipple.defaultProps = {
	  center: false
	};

	var _default = (0, _withStyles.default)(styles, {
	  flip: false,
	  name: 'MuiTouchRipple'
	})(TouchRipple);

	exports.default = _default;
	});

	unwrapExports(TouchRipple_1);
	var TouchRipple_2 = TouchRipple_1.styles;
	var TouchRipple_3 = TouchRipple_1.DELAY_RIPPLE;

	var createRippleHandler_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	function createRippleHandler(instance, eventName, action, cb) {
	  return function handleEvent(event) {
	    if (cb) {
	      cb.call(instance, event);
	    }

	    if (event.defaultPrevented) {
	      return false;
	    }

	    if (instance.ripple) {
	      instance.ripple[action](event);
	    }

	    if (instance.props && typeof instance.props["on".concat(eventName)] === 'function') {
	      instance.props["on".concat(eventName)](event);
	    }

	    return true;
	  };
	}

	var _default = createRippleHandler;
	exports.default = _default;
	});

	unwrapExports(createRippleHandler_1);

	var ButtonBase_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.styles = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _defineProperty2 = interopRequireDefault(defineProperty);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _classCallCheck2 = interopRequireDefault(classCallCheck);

	var _createClass2 = interopRequireDefault(createClass);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

	var _inherits2 = interopRequireDefault(inherits);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

	var _react$$1 = interopRequireDefault(_react__default);

	var _propTypes = interopRequireDefault(propTypes);

	var _reactDom = interopRequireDefault(reactDom);

	var _classnames = interopRequireDefault(classnames);

	var _keycode = interopRequireDefault(keycode);

	var _ownerWindow = interopRequireDefault(ownerWindow_1);

	var _withStyles = interopRequireDefault(withStyles_1);



	var _TouchRipple = interopRequireDefault(TouchRipple_1);

	var _createRippleHandler = interopRequireDefault(createRippleHandler_1);

	var styles = {
	  root: {
	    display: 'inline-flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	    position: 'relative',
	    // Remove grey highlight
	    WebkitTapHighlightColor: 'transparent',
	    backgroundColor: 'transparent',
	    // Reset default value
	    // We disable the focus ring for mouse, touch and keyboard users.
	    outline: 'none',
	    border: 0,
	    margin: 0,
	    // Remove the margin in Safari
	    borderRadius: 0,
	    padding: 0,
	    // Remove the padding in Firefox
	    cursor: 'pointer',
	    userSelect: 'none',
	    verticalAlign: 'middle',
	    '-moz-appearance': 'none',
	    // Reset
	    '-webkit-appearance': 'none',
	    // Reset
	    textDecoration: 'none',
	    // So we take precedent over the style of a native <a /> element.
	    color: 'inherit',
	    '&::-moz-focus-inner': {
	      borderStyle: 'none' // Remove Firefox dotted outline.

	    },
	    '&$disabled': {
	      pointerEvents: 'none',
	      // Disable link interactions
	      cursor: 'default'
	    }
	  },
	  disabled: {},
	  focusVisible: {}
	};
	/**
	 * `ButtonBase` contains as few styles as possible.
	 * It aims to be a simple building block for creating a button.
	 * It contains a load of style reset and some focus/ripple logic.
	 */

	exports.styles = styles;

	var ButtonBase =
	/*#__PURE__*/
	function (_React$Component) {
	  (0, _inherits2.default)(ButtonBase, _React$Component);

	  function ButtonBase() {
	    var _ref;

	    var _temp, _this;

	    (0, _classCallCheck2.default)(this, ButtonBase);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = ButtonBase.__proto__ || Object.getPrototypeOf(ButtonBase)).call.apply(_ref, [this].concat(args))), _this.state = {}, _this.onFocusVisibleHandler = function (event) {
	      _this.keyDown = false;

	      _this.setState({
	        focusVisible: true
	      });

	      if (_this.props.onFocusVisible) {
	        _this.props.onFocusVisible(event);
	      }
	    }, _this.onRippleRef = function (node) {
	      _this.ripple = node;
	    }, _this.ripple = null, _this.keyDown = false, _this.button = null, _this.focusVisibleTimeout = null, _this.focusVisibleCheckTime = 50, _this.focusVisibleMaxCheckTimes = 5, _this.handleKeyDown = function (event) {
	      var _this$props = _this.props,
	          component = _this$props.component,
	          focusRipple = _this$props.focusRipple,
	          onKeyDown = _this$props.onKeyDown,
	          onClick = _this$props.onClick;
	      var key = (0, _keycode.default)(event); // Check if key is already down to avoid repeats being counted as multiple activations

	      if (focusRipple && !_this.keyDown && _this.state.focusVisible && _this.ripple && key === 'space') {
	        _this.keyDown = true;
	        event.persist();

	        _this.ripple.stop(event, function () {
	          _this.ripple.start(event);
	        });
	      }

	      if (onKeyDown) {
	        onKeyDown(event);
	      } // Keyboard accessibility for non interactive elements


	      if (event.target === event.currentTarget && component && component !== 'button' && (key === 'space' || key === 'enter') && !(_this.button.tagName === 'A' && _this.button.href)) {
	        event.preventDefault();

	        if (onClick) {
	          onClick(event);
	        }
	      }
	    }, _this.handleKeyUp = function (event) {
	      if (_this.props.focusRipple && (0, _keycode.default)(event) === 'space' && _this.ripple && _this.state.focusVisible) {
	        _this.keyDown = false;
	        event.persist();

	        _this.ripple.stop(event, function () {
	          _this.ripple.pulsate(event);
	        });
	      }

	      if (_this.props.onKeyUp) {
	        _this.props.onKeyUp(event);
	      }
	    }, _this.handleMouseDown = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseDown', 'start', function () {
	      clearTimeout(_this.focusVisibleTimeout);

	      if (_this.state.focusVisible) {
	        _this.setState({
	          focusVisible: false
	        });
	      }
	    }), _this.handleMouseUp = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseUp', 'stop'), _this.handleMouseLeave = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseLeave', 'stop', function (event) {
	      if (_this.state.focusVisible) {
	        event.preventDefault();
	      }
	    }), _this.handleTouchStart = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchStart', 'start'), _this.handleTouchEnd = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchEnd', 'stop'), _this.handleTouchMove = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchMove', 'stop'), _this.handleBlur = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'Blur', 'stop', function () {
	      clearTimeout(_this.focusVisibleTimeout);

	      if (_this.state.focusVisible) {
	        _this.setState({
	          focusVisible: false
	        });
	      }
	    }), _this.handleFocus = function (event) {
	      if (_this.props.disabled) {
	        return;
	      } // Fix for https://github.com/facebook/react/issues/7769


	      if (!_this.button) {
	        _this.button = event.currentTarget;
	      }

	      event.persist();
	      (0, focusVisible.detectFocusVisible)((0, _assertThisInitialized2.default)(_this), _this.button, function () {
	        _this.onFocusVisibleHandler(event);
	      });

	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _temp));
	  }

	  (0, _createClass2.default)(ButtonBase, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.button = _reactDom.default.findDOMNode(this);
	      (0, focusVisible.listenForFocusKeys)((0, _ownerWindow.default)(this.button));

	      if (this.props.action) {
	        this.props.action({
	          focusVisible: function focusVisible$$1() {
	            _this2.setState({
	              focusVisible: true
	            });

	            _this2.button.focus();
	          }
	        });
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.props.focusRipple && !this.props.disableRipple && !prevState.focusVisible && this.state.focusVisible) {
	        this.ripple.pulsate();
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.button = null;
	      clearTimeout(this.focusVisibleTimeout);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _classNames;

	      var _props = this.props,
	          action = _props.action,
	          buttonRef = _props.buttonRef,
	          centerRipple = _props.centerRipple,
	          children = _props.children,
	          classes = _props.classes,
	          classNameProp = _props.className,
	          component = _props.component,
	          disabled = _props.disabled,
	          disableRipple = _props.disableRipple,
	          focusRipple = _props.focusRipple,
	          focusVisibleClassName = _props.focusVisibleClassName,
	          onBlur = _props.onBlur,
	          onFocus = _props.onFocus,
	          onFocusVisible = _props.onFocusVisible,
	          onKeyDown = _props.onKeyDown,
	          onKeyUp = _props.onKeyUp,
	          onMouseDown = _props.onMouseDown,
	          onMouseLeave = _props.onMouseLeave,
	          onMouseUp = _props.onMouseUp,
	          onTouchEnd = _props.onTouchEnd,
	          onTouchMove = _props.onTouchMove,
	          onTouchStart = _props.onTouchStart,
	          tabIndex = _props.tabIndex,
	          TouchRippleProps = _props.TouchRippleProps,
	          type = _props.type,
	          other = (0, _objectWithoutProperties2.default)(_props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"]);
	      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.focusVisible, this.state.focusVisible), (0, _defineProperty2.default)(_classNames, focusVisibleClassName, this.state.focusVisible), _classNames), classNameProp);
	      var buttonProps = {};
	      var ComponentProp = component;

	      if (ComponentProp === 'button' && other.href) {
	        ComponentProp = 'a';
	      }

	      if (ComponentProp === 'button') {
	        buttonProps.type = type || 'button';
	        buttonProps.disabled = disabled;
	      } else {
	        buttonProps.role = 'button';
	      }

	      return _react$$1.default.createElement(ComponentProp, (0, _extends2.default)({
	        onBlur: this.handleBlur,
	        onFocus: this.handleFocus,
	        onKeyDown: this.handleKeyDown,
	        onKeyUp: this.handleKeyUp,
	        onMouseDown: this.handleMouseDown,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseUp: this.handleMouseUp,
	        onTouchEnd: this.handleTouchEnd,
	        onTouchMove: this.handleTouchMove,
	        onTouchStart: this.handleTouchStart,
	        tabIndex: disabled ? '-1' : tabIndex,
	        className: className,
	        ref: buttonRef
	      }, buttonProps, other), children, !disableRipple && !disabled ? _react$$1.default.createElement(_TouchRipple.default, (0, _extends2.default)({
	        innerRef: this.onRippleRef,
	        center: centerRipple
	      }, TouchRippleProps)) : null);
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      if (typeof prevState.focusVisible === 'undefined') {
	        return {
	          focusVisible: false,
	          lastDisabled: nextProps.disabled
	        };
	      } // The blur won't fire when the disabled state is set on a focused input.
	      // We need to book keep the focused state manually.


	      if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
	        return {
	          focusVisible: false,
	          lastDisabled: nextProps.disabled
	        };
	      }

	      return {
	        lastDisabled: nextProps.disabled
	      };
	    }
	  }]);
	  return ButtonBase;
	}(_react$$1.default.Component);

	ButtonBase.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Callback fired when the component mounts.
	   * This is useful when you want to trigger an action programmatically.
	   * It currently only supports `focusVisible()` action.
	   *
	   * @param {object} actions This object contains all possible actions
	   * that can be triggered programmatically.
	   */
	  action: _propTypes.default.func,

	  /**
	   * Use that property to pass a ref callback to the native button component.
	   */
	  buttonRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

	  /**
	   * If `true`, the ripples will be centered.
	   * They won't start at the cursor interaction position.
	   */
	  centerRipple: _propTypes.default.bool,

	  /**
	   * The content of the component.
	   */
	  children: _propTypes.default.node,

	  /**
	   * Override or extend the styles applied to the component.
	   * See [CSS API](#css-api) below for more details.
	   */
	  classes: _propTypes.default.object.isRequired,

	  /**
	   * @ignore
	   */
	  className: _propTypes.default.string,

	  /**
	   * The component used for the root node.
	   * Either a string to use a DOM element or a component.
	   */
	  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

	  /**
	   * If `true`, the base button will be disabled.
	   */
	  disabled: _propTypes.default.bool,

	  /**
	   * If `true`, the ripple effect will be disabled.
	   */
	  disableRipple: _propTypes.default.bool,

	  /**
	   * If `true`, the base button will have a keyboard focus ripple.
	   * `disableRipple` must also be `false`.
	   */
	  focusRipple: _propTypes.default.bool,

	  /**
	   * This property can help a person know which element has the keyboard focus.
	   * The class name will be applied when the element gain the focus throught a keyboard interaction.
	   * It's a polyfill for the [CSS :focus-visible feature](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
	   * The rational for using this feature [is explain here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
	   */
	  focusVisibleClassName: _propTypes.default.string,

	  /**
	   * @ignore
	   */
	  onBlur: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onClick: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onFocus: _propTypes.default.func,

	  /**
	   * Callback fired when the component is focused with a keyboard.
	   * We trigger a `onFocus` callback too.
	   */
	  onFocusVisible: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onKeyDown: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onKeyUp: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onMouseDown: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onMouseLeave: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onMouseUp: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onTouchEnd: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onTouchMove: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  onTouchStart: _propTypes.default.func,

	  /**
	   * @ignore
	   */
	  role: _propTypes.default.string,

	  /**
	   * @ignore
	   */
	  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

	  /**
	   * Properties applied to the `TouchRipple` element.
	   */
	  TouchRippleProps: _propTypes.default.object,

	  /**
	   * @ignore
	   */
	  type: _propTypes.default.string
	} : {};
	ButtonBase.defaultProps = {
	  centerRipple: false,
	  component: 'button',
	  disableRipple: false,
	  focusRipple: false,
	  tabIndex: '0',
	  type: 'button'
	};

	var _default = (0, _withStyles.default)(styles, {
	  name: 'MuiButtonBase'
	})(ButtonBase);

	exports.default = _default;
	});

	unwrapExports(ButtonBase_1);
	var ButtonBase_2 = ButtonBase_1.styles;

	var ButtonBase$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _ButtonBase.default;
	  }
	});

	var _ButtonBase = interopRequireDefault(ButtonBase_1);
	});

	unwrapExports(ButtonBase$1);

	var reactHelpers = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cloneElementWithClassName = cloneElementWithClassName;
	exports.cloneChildrenWithClassName = cloneChildrenWithClassName;
	exports.isMuiElement = isMuiElement;
	exports.isMuiComponent = isMuiComponent;

	var _react$$1 = interopRequireDefault(_react__default);

	var _classnames = interopRequireDefault(classnames);

	/* eslint-disable import/prefer-default-export */
	function cloneElementWithClassName(child, className) {
	  return _react$$1.default.cloneElement(child, {
	    className: (0, _classnames.default)(child.props.className, className)
	  });
	}

	function cloneChildrenWithClassName(children, className) {
	  return _react$$1.default.Children.map(children, function (child) {
	    return _react$$1.default.isValidElement(child) && cloneElementWithClassName(child, className);
	  });
	}

	function isMuiElement(element, muiNames) {
	  return _react$$1.default.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
	}

	function isMuiComponent(element, muiNames) {
	  return muiNames.indexOf(element.muiName) !== -1;
	}
	});

	unwrapExports(reactHelpers);
	var reactHelpers_1 = reactHelpers.cloneElementWithClassName;
	var reactHelpers_2 = reactHelpers.cloneChildrenWithClassName;
	var reactHelpers_3 = reactHelpers.isMuiElement;
	var reactHelpers_4 = reactHelpers.isMuiComponent;

	var ListItem_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.styles = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _objectSpread2 = interopRequireDefault(objectSpread);

	var _defineProperty2 = interopRequireDefault(defineProperty);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _classCallCheck2 = interopRequireDefault(classCallCheck);

	var _createClass2 = interopRequireDefault(createClass);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

	var _inherits2 = interopRequireDefault(inherits);

	var _react$$1 = interopRequireDefault(_react__default);

	var _propTypes = interopRequireDefault(propTypes);

	var _classnames = interopRequireDefault(classnames);

	var _withStyles = interopRequireDefault(withStyles_1);

	var _ButtonBase = interopRequireDefault(ButtonBase$1);



	var styles = function styles(theme) {
	  return {
	    root: {
	      display: 'flex',
	      justifyContent: 'flex-start',
	      alignItems: 'center',
	      position: 'relative',
	      textDecoration: 'none',
	      width: '100%',
	      boxSizing: 'border-box',
	      textAlign: 'left'
	    },
	    container: {
	      position: 'relative'
	    },
	    focusVisible: {
	      backgroundColor: theme.palette.action.hover
	    },
	    default: {
	      paddingTop: 12,
	      paddingBottom: 12
	    },
	    dense: {
	      paddingTop: theme.spacing.unit,
	      paddingBottom: theme.spacing.unit
	    },
	    disabled: {
	      opacity: 0.5
	    },
	    divider: {
	      borderBottom: "1px solid ".concat(theme.palette.divider),
	      backgroundClip: 'padding-box'
	    },
	    gutters: theme.mixins.gutters(),
	    button: {
	      transition: theme.transitions.create('background-color', {
	        duration: theme.transitions.duration.shortest
	      }),
	      '&:hover': {
	        textDecoration: 'none',
	        backgroundColor: theme.palette.action.hover,
	        // Reset on touch devices, it doesn't add specificity
	        '@media (hover: none)': {
	          backgroundColor: 'transparent'
	        }
	      }
	    },
	    secondaryAction: {
	      // Add some space to avoid collision as `ListItemSecondaryAction`
	      // is absolutely positionned.
	      paddingRight: theme.spacing.unit * 4
	    }
	  };
	};

	exports.styles = styles;

	var ListItem =
	/*#__PURE__*/
	function (_React$Component) {
	  (0, _inherits2.default)(ListItem, _React$Component);

	  function ListItem() {
	    (0, _classCallCheck2.default)(this, ListItem);
	    return (0, _possibleConstructorReturn2.default)(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
	  }

	  (0, _createClass2.default)(ListItem, [{
	    key: "getChildContext",
	    value: function getChildContext() {
	      return {
	        dense: this.props.dense || this.context.dense || false
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _classNames;

	      var _props = this.props,
	          button = _props.button,
	          childrenProp = _props.children,
	          classes = _props.classes,
	          classNameProp = _props.className,
	          componentProp = _props.component,
	          ContainerComponent = _props.ContainerComponent,
	          _props$ContainerProps = _props.ContainerProps;
	      _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;
	      var ContainerClassName = _props$ContainerProps.className,
	          ContainerProps = (0, _objectWithoutProperties2.default)(_props$ContainerProps, ["className"]),
	          dense = _props.dense,
	          disabled = _props.disabled,
	          disableGutters = _props.disableGutters,
	          divider = _props.divider,
	          focusVisibleClassName = _props.focusVisibleClassName,
	          other = (0, _objectWithoutProperties2.default)(_props, ["button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName"]);
	      var isDense = dense || this.context.dense || false;

	      var children = _react$$1.default.Children.toArray(childrenProp);

	      var hasAvatar = children.some(function (value) {
	        return (0, reactHelpers.isMuiElement)(value, ['ListItemAvatar']);
	      });
	      var hasSecondaryAction = children.length && (0, reactHelpers.isMuiElement)(children[children.length - 1], ['ListItemSecondaryAction']);
	      var className = (0, _classnames.default)(classes.root, isDense || hasAvatar ? classes.dense : classes.default, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.gutters, !disableGutters), (0, _defineProperty2.default)(_classNames, classes.divider, divider), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.button, button), (0, _defineProperty2.default)(_classNames, classes.secondaryAction, hasSecondaryAction), _classNames), classNameProp);
	      var componentProps = (0, _objectSpread2.default)({
	        className: className,
	        disabled: disabled
	      }, other);
	      var Component = componentProp || 'li';

	      if (button) {
	        componentProps.component = componentProp || 'div';
	        componentProps.focusVisibleClassName = (0, _classnames.default)(classes.focusVisible, focusVisibleClassName);
	        Component = _ButtonBase.default;
	      }

	      if (hasSecondaryAction) {
	        // Use div by default.
	        Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

	        if (ContainerComponent === 'li') {
	          if (Component === 'li') {
	            Component = 'div';
	          } else if (componentProps.component === 'li') {
	            componentProps.component = 'div';
	          }
	        }

	        return _react$$1.default.createElement(ContainerComponent, (0, _extends2.default)({
	          className: (0, _classnames.default)(classes.container, ContainerClassName)
	        }, ContainerProps), _react$$1.default.createElement(Component, componentProps, children), children.pop());
	      }

	      return _react$$1.default.createElement(Component, componentProps, children);
	    }
	  }]);
	  return ListItem;
	}(_react$$1.default.Component);

	ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * If `true`, the list item will be a button (using `ButtonBase`).
	   */
	  button: _propTypes.default.bool,

	  /**
	   * The content of the component.
	   */
	  children: _propTypes.default.node,

	  /**
	   * Override or extend the styles applied to the component.
	   * See [CSS API](#css-api) below for more details.
	   */
	  classes: _propTypes.default.object.isRequired,

	  /**
	   * @ignore
	   */
	  className: _propTypes.default.string,

	  /**
	   * The component used for the root node.
	   * Either a string to use a DOM element or a component.
	   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
	   */
	  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

	  /**
	   * The container component used when a `ListItemSecondaryAction` is rendered.
	   */
	  ContainerComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

	  /**
	   * Properties applied to the container element when the component
	   * is used to display a `ListItemSecondaryAction`.
	   */
	  ContainerProps: _propTypes.default.object,

	  /**
	   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
	   */
	  dense: _propTypes.default.bool,

	  /**
	   * @ignore
	   */
	  disabled: _propTypes.default.bool,

	  /**
	   * If `true`, the left and right padding is removed.
	   */
	  disableGutters: _propTypes.default.bool,

	  /**
	   * If `true`, a 1px light border is added to the bottom of the list item.
	   */
	  divider: _propTypes.default.bool,

	  /**
	   * @ignore
	   */
	  focusVisibleClassName: _propTypes.default.string
	} : {};
	ListItem.defaultProps = {
	  button: false,
	  ContainerComponent: 'li',
	  dense: false,
	  disabled: false,
	  disableGutters: false,
	  divider: false
	};
	ListItem.contextTypes = {
	  dense: _propTypes.default.bool
	};
	ListItem.childContextTypes = {
	  dense: _propTypes.default.bool
	};

	var _default = (0, _withStyles.default)(styles, {
	  name: 'MuiListItem'
	})(ListItem);

	exports.default = _default;
	});

	unwrapExports(ListItem_1);
	var ListItem_2 = ListItem_1.styles;

	var ListItem$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _ListItem.default;
	  }
	});

	var _ListItem = interopRequireDefault(ListItem_1);
	});

	var ListItem$2 = unwrapExports(ListItem$1);

	var helpers = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.capitalize = capitalize;
	exports.contains = contains;
	exports.findIndex = findIndex;
	exports.find = find;
	exports.createChainedFunction = createChainedFunction;

	var _typeof2 = interopRequireDefault(_typeof_1);

	var _warning = interopRequireDefault(warning_1$1);

	//  weak
	function capitalize(string) {
	  if (process.env.NODE_ENV !== 'production' && typeof string !== 'string') {
	    throw new Error('Material-UI: capitalize(string) expects a string argument.');
	  }

	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function contains(obj, pred) {
	  return Object.keys(pred).every(function (key) {
	    return obj.hasOwnProperty(key) && obj[key] === pred[key];
	  });
	}

	function findIndex(arr, pred) {
	  var predType = (0, _typeof2.default)(pred);

	  for (var i = 0; i < arr.length; i += 1) {
	    if (predType === 'function' && !!pred(arr[i], i, arr) === true) {
	      return i;
	    }

	    if (predType === 'object' && contains(arr[i], pred)) {
	      return i;
	    }

	    if (['string', 'number', 'boolean'].indexOf(predType) !== -1) {
	      return arr.indexOf(pred);
	    }
	  }

	  return -1;
	}

	function find(arr, pred) {
	  var index = findIndex(arr, pred);
	  return index > -1 ? arr[index] : undefined;
	}
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */


	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return funcs.filter(function (func) {
	    return func != null;
	  }).reduce(function (acc, func) {
	    process.env.NODE_ENV !== "production" ? (0, _warning.default)(typeof func === 'function', 'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.') : void 0;
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      acc.apply(this, args);
	      func.apply(this, args);
	    };
	  }, function () {});
	}
	});

	unwrapExports(helpers);
	var helpers_1 = helpers.capitalize;
	var helpers_2 = helpers.contains;
	var helpers_3 = helpers.findIndex;
	var helpers_4 = helpers.find;
	var helpers_5 = helpers.createChainedFunction;

	var Typography_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.styles = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _defineProperty2 = interopRequireDefault(defineProperty);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _react$$1 = interopRequireDefault(_react__default);

	var _propTypes = interopRequireDefault(propTypes);

	var _classnames = interopRequireDefault(classnames);

	var _withStyles = interopRequireDefault(withStyles_1);



	var styles = function styles(theme) {
	  return {
	    root: {
	      display: 'block',
	      margin: 0
	    },
	    display4: theme.typography.display4,
	    display3: theme.typography.display3,
	    display2: theme.typography.display2,
	    display1: theme.typography.display1,
	    headline: theme.typography.headline,
	    title: theme.typography.title,
	    subheading: theme.typography.subheading,
	    body2: theme.typography.body2,
	    body1: theme.typography.body1,
	    caption: theme.typography.caption,
	    button: theme.typography.button,
	    alignLeft: {
	      textAlign: 'left'
	    },
	    alignCenter: {
	      textAlign: 'center'
	    },
	    alignRight: {
	      textAlign: 'right'
	    },
	    alignJustify: {
	      textAlign: 'justify'
	    },
	    noWrap: {
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      whiteSpace: 'nowrap'
	    },
	    gutterBottom: {
	      marginBottom: '0.35em'
	    },
	    paragraph: {
	      marginBottom: theme.spacing.unit * 2
	    },
	    colorInherit: {
	      color: 'inherit'
	    },
	    colorPrimary: {
	      color: theme.palette.primary.main
	    },
	    colorSecondary: {
	      color: theme.palette.secondary.main
	    },
	    colorTextSecondary: {
	      color: theme.palette.text.secondary
	    },
	    colorError: {
	      color: theme.palette.error.main
	    }
	  };
	};

	exports.styles = styles;

	function Typography(props) {
	  var _classNames;

	  var align = props.align,
	      classes = props.classes,
	      classNameProp = props.className,
	      componentProp = props.component,
	      color = props.color,
	      gutterBottom = props.gutterBottom,
	      headlineMapping = props.headlineMapping,
	      noWrap = props.noWrap,
	      paragraph = props.paragraph,
	      variant = props.variant,
	      other = (0, _objectWithoutProperties2.default)(props, ["align", "classes", "className", "component", "color", "gutterBottom", "headlineMapping", "noWrap", "paragraph", "variant"]);
	  var className = (0, _classnames.default)(classes.root, classes[variant], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty2.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty2.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty2.default)(_classNames, classes["align".concat((0, helpers.capitalize)(align))], align !== 'inherit'), _classNames), classNameProp);
	  var Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';
	  return _react$$1.default.createElement(Component, (0, _extends2.default)({
	    className: className
	  }, other));
	}

	Typography.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Set the text-align on the component.
	   */
	  align: _propTypes.default.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

	  /**
	   * The content of the component.
	   */
	  children: _propTypes.default.node,

	  /**
	   * Override or extend the styles applied to the component.
	   * See [CSS API](#css-api) below for more details.
	   */
	  classes: _propTypes.default.object.isRequired,

	  /**
	   * @ignore
	   */
	  className: _propTypes.default.string,

	  /**
	   * The color of the component. It supports those theme colors that make sense for this component.
	   */
	  color: _propTypes.default.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default']),

	  /**
	   * The component used for the root node.
	   * Either a string to use a DOM element or a component.
	   * By default, it maps the variant to a good default headline component.
	   */
	  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

	  /**
	   * If `true`, the text will have a bottom margin.
	   */
	  gutterBottom: _propTypes.default.bool,

	  /**
	   * We are empirically mapping the variant property to a range of different DOM element types.
	   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
	   * Alternatively, you can use the `component` property.
	   */
	  headlineMapping: _propTypes.default.object,

	  /**
	   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
	   */
	  noWrap: _propTypes.default.bool,

	  /**
	   * If `true`, the text will have a bottom margin.
	   */
	  paragraph: _propTypes.default.bool,

	  /**
	   * Applies the theme typography styles.
	   */
	  variant: _propTypes.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
	} : {};
	Typography.defaultProps = {
	  align: 'inherit',
	  color: 'default',
	  gutterBottom: false,
	  headlineMapping: {
	    display4: 'h1',
	    display3: 'h1',
	    display2: 'h1',
	    display1: 'h1',
	    headline: 'h1',
	    title: 'h2',
	    subheading: 'h3',
	    body2: 'aside',
	    body1: 'p'
	  },
	  noWrap: false,
	  paragraph: false,
	  variant: 'body1'
	};

	var _default = (0, _withStyles.default)(styles, {
	  name: 'MuiTypography'
	})(Typography);

	exports.default = _default;
	});

	unwrapExports(Typography_1);
	var Typography_2 = Typography_1.styles;

	var Typography$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _Typography.default;
	  }
	});

	var _Typography = interopRequireDefault(Typography_1);
	});

	unwrapExports(Typography$1);

	var ListItemText_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.styles = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _defineProperty2 = interopRequireDefault(defineProperty);

	var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

	var _react$$1 = interopRequireDefault(_react__default);

	var _propTypes = interopRequireDefault(propTypes);

	var _classnames = interopRequireDefault(classnames);

	var _withStyles = interopRequireDefault(withStyles_1);

	var _Typography = interopRequireDefault(Typography$1);

	var styles = function styles(theme) {
	  return {
	    root: {
	      flex: '1 1 auto',
	      minWidth: 0,
	      padding: "0 ".concat(theme.spacing.unit * 2, "px"),
	      '&:first-child': {
	        paddingLeft: 0
	      }
	    },
	    inset: {
	      '&:first-child': {
	        paddingLeft: theme.spacing.unit * 7
	      }
	    },
	    dense: {
	      fontSize: theme.typography.pxToRem(13)
	    },
	    primary: {
	      '&$textDense': {
	        fontSize: 'inherit'
	      }
	    },
	    secondary: {
	      '&$textDense': {
	        fontSize: 'inherit'
	      }
	    },
	    textDense: {}
	  };
	};

	exports.styles = styles;

	function ListItemText(props, context) {
	  var _classNames3;

	  var children = props.children,
	      classes = props.classes,
	      classNameProp = props.className,
	      disableTypography = props.disableTypography,
	      inset = props.inset,
	      primaryProp = props.primary,
	      secondaryProp = props.secondary,
	      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "secondary"]);
	  var dense = context.dense;
	  var primary = primaryProp || children;

	  if (primary && !disableTypography) {
	    primary = _react$$1.default.createElement(_Typography.default, {
	      variant: "subheading",
	      className: (0, _classnames.default)(classes.primary, (0, _defineProperty2.default)({}, classes.textDense, dense)),
	      component: "span"
	    }, primary);
	  }

	  var secondary = secondaryProp;

	  if (secondary && !disableTypography) {
	    secondary = _react$$1.default.createElement(_Typography.default, {
	      variant: "body1",
	      className: (0, _classnames.default)(classes.secondary, (0, _defineProperty2.default)({}, classes.textDense, dense)),
	      color: "textSecondary"
	    }, secondary);
	  }

	  return _react$$1.default.createElement("div", (0, _extends2.default)({
	    className: (0, _classnames.default)(classes.root, (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, classes.dense, dense), (0, _defineProperty2.default)(_classNames3, classes.inset, inset), _classNames3), classNameProp)
	  }, other), primary, secondary);
	}

	ListItemText.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Alias for the `primary` property.
	   */
	  children: _propTypes.default.node,

	  /**
	   * Override or extend the styles applied to the component.
	   * See [CSS API](#css-api) below for more details.
	   */
	  classes: _propTypes.default.object.isRequired,

	  /**
	   * @ignore
	   */
	  className: _propTypes.default.string,

	  /**
	   * If `true`, the children won't be wrapped by a Typography component.
	   * This can be useful to render an alternative Typography variant by wrapping
	   * the `children` (or `primary`) text, and optional `secondary` text
	   * with the Typography component.
	   */
	  disableTypography: _propTypes.default.bool,

	  /**
	   * If `true`, the children will be indented.
	   * This should be used if there is no left avatar or left icon.
	   */
	  inset: _propTypes.default.bool,

	  /**
	   * The main content element.
	   */
	  primary: _propTypes.default.node,

	  /**
	   * The secondary content element.
	   */
	  secondary: _propTypes.default.node
	} : {};
	ListItemText.defaultProps = {
	  disableTypography: false,
	  inset: false
	};
	ListItemText.contextTypes = {
	  dense: _propTypes.default.bool
	};

	var _default = (0, _withStyles.default)(styles, {
	  name: 'MuiListItemText'
	})(ListItemText);

	exports.default = _default;
	});

	unwrapExports(ListItemText_1);
	var ListItemText_2 = ListItemText_1.styles;

	var ListItemText$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _ListItemText.default;
	  }
	});

	var _ListItemText = interopRequireDefault(ListItemText_1);
	});

	var ListItemText$2 = unwrapExports(ListItemText$1);

	var DummyComponent = function (_a) {
	    var items = _a.items;
	    return (_react.createElement(List$2, null, items.map(function (item) { return (_react.createElement(ListItem$2, null,
	        _react.createElement(ListItemText$2, { primary: item }))); })));
	};

	return DummyComponent;

})));
//# sourceMappingURL=demo-double-bundle-withstyles.umd.js.map
