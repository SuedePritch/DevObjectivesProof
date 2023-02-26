/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 769: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var mongoose = __webpack_require__(185);
      __webpack_require__(142).config();
      var colors = __webpack_require__(357);
      //Connect to Database
      mongoose.set("strictQuery", true);
      mongoose.connect(
        "mongodb+srv://SuedePritch:JMR40dr7vNzz2DYd@development.fluvx1g.mongodb.net/devObjectives",
        function (err) {
          if (err) {
            console.log("ERROR" + err);
          } else {
            console.log("--------------------------------".bgBlue);
            console.log("-----Connected To MongoDB-------".bgBlue);
          }
        }
      );

      // Export connection
      module.exports = mongoose.connection;

      /***/
    },

    /***/ 940: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var router = __webpack_require__(860).Router();
      var routes = __webpack_require__(127);
      //main router all routes
      router.use("/api/", routes);
      // router.use((req, res) => res.send("Wrong route!"));

      module.exports = router;

      /***/
    },

    /***/ 261: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function _regeneratorRuntime() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
          function _regeneratorRuntime() {
            return exports;
          };
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            },
          $Symbol = "function" == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || "@@iterator",
          asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
          toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
          return (
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            obj[key]
          );
        }
        try {
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value);
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return (
            defineProperty(generator, "_invoke", {
              value: makeInvokeMethod(innerFn, self, context),
            }),
            generator
          );
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
          (IteratorPrototype = NativeIteratorPrototype);
        var Gp =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(IteratorPrototype));
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
              var result = record.arg,
                value = result.value;
              return value &&
                "object" == _typeof(value) &&
                hasOwn.call(value, "__await")
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      (result.value = unwrapped), resolve(result);
                    },
                    function (error) {
                      return invoke("throw", error, resolve, reject);
                    }
                  );
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = previousPromise
                ? previousPromise.then(
                    callInvokeWithMethodAndArg,
                    callInvokeWithMethodAndArg
                  )
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = "suspendedStart";
          return function (method, arg) {
            if ("executing" === state)
              throw new Error("Generator is already running");
            if ("completed" === state) {
              if ("throw" === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method)
                context.sent = context._sent = context.arg;
              else if ("throw" === context.method) {
                if ("suspendedStart" === state)
                  throw ((state = "completed"), context.arg);
                context.dispatchException(context.arg);
              } else
                "return" === context.method &&
                  context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self, context);
              if ("normal" === record.type) {
                if (
                  ((state = context.done ? "completed" : "suspendedYield"),
                  record.arg === ContinueSentinel)
                )
                  continue;
                return { value: record.arg, done: context.done };
              }
              "throw" === record.type &&
                ((state = "completed"),
                (context.method = "throw"),
                (context.arg = record.arg));
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName];
          if (undefined === method)
            return (
              (context.delegate = null),
              ("throw" === methodName &&
                delegate.iterator["return"] &&
                ((context.method = "return"),
                (context.arg = undefined),
                maybeInvokeDelegate(delegate, context),
                "throw" === context.method)) ||
                ("return" !== methodName &&
                  ((context.method = "throw"),
                  (context.arg = new TypeError(
                    "The iterator does not provide a '" +
                      methodName +
                      "' method"
                  )))),
              ContinueSentinel
            );
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type)
            return (
              (context.method = "throw"),
              (context.arg = record.arg),
              (context.delegate = null),
              ContinueSentinel
            );
          var info = record.arg;
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                "return" !== context.method &&
                  ((context.method = "next"), (context.arg = undefined)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = "throw"),
              (context.arg = new TypeError("iterator result is not an object")),
              (context.delegate = null),
              ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          1 in locs && (entry.catchLoc = locs[1]),
            2 in locs &&
              ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          (record.type = "normal"),
            delete record.arg,
            (entry.completion = record);
        }
        function Context(tryLocsList) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            tryLocsList.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = undefined), (next.done = !0), next;
                };
              return (next.next = next);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: undefined, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          defineProperty(Gp, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          defineProperty(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            "GeneratorFunction"
          )),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return (
              !!ctor &&
              (ctor === GeneratorFunction ||
                "GeneratorFunction" === (ctor.displayName || ctor.name))
            );
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype),
                  define(genFun, toStringTagSymbol, "GeneratorFunction")),
              (genFun.prototype = Object.create(Gp)),
              genFun
            );
          }),
          (exports.awrap = function (arg) {
            return { __await: arg };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, "Generator"),
          define(Gp, iteratorSymbol, function () {
            return this;
          }),
          define(Gp, "toString", function () {
            return "[object Generator]";
          }),
          (exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop();
                  if (key in object)
                    return (next.value = key), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = undefined),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = undefined),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this)
                  "t" === name.charAt(0) &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1)) &&
                    (this[name] = undefined);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return (
                  (record.type = "throw"),
                  (record.arg = exception),
                  (context.next = loc),
                  caught &&
                    ((context.method = "next"), (context.arg = undefined)),
                  !!caught
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry &&
                ("break" === type || "continue" === type) &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc &&
                (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return (
                (record.type = type),
                (record.arg = arg),
                finallyEntry
                  ? ((this.method = "next"),
                    (this.next = finallyEntry.finallyLoc),
                    ContinueSentinel)
                  : this.complete(record)
              );
            },
            complete: function complete(record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return (
                "break" === record.type || "continue" === record.type
                  ? (this.next = record.arg)
                  : "return" === record.type
                  ? ((this.rval = this.arg = record.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === record.type &&
                    afterLoc &&
                    (this.next = afterLoc),
                ContinueSentinel
              );
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc)
                  return (
                    this.complete(entry.completion, entry.afterLoc),
                    resetTryEntry(entry),
                    ContinueSentinel
                  );
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(
              iterable,
              resultName,
              nextLoc
            ) {
              return (
                (this.delegate = {
                  iterator: values(iterable),
                  resultName: resultName,
                  nextLoc: nextLoc,
                }),
                "next" === this.method && (this.arg = undefined),
                ContinueSentinel
              );
            },
          }),
          exports
        );
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }
      var asyncHandler = __webpack_require__(776);
      var Leadsquared = __webpack_require__(361);
      var createLeadsquared = asyncHandler(
        /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(
              req,
              res
            ) {
              var _req$body, companyName, accessKey, secretKey, leadsquared;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      (_req$body = req.body),
                        (companyName = _req$body.companyName),
                        (accessKey = _req$body.accessKey),
                        (secretKey = _req$body.secretKey);
                      _context.next = 3;
                      return Leadsquared.create({
                        companyName: companyName,
                        accessKey: accessKey,
                        secretKey: secretKey,
                      });
                    case 3:
                      leadsquared = _context.sent;
                      res.status(201).json(leadsquared);
                    case 5:
                    case "end":
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()
      );
      module.exports = {
        createLeadsquared: createLeadsquared,
      };

      /***/
    },

    /***/ 363: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function _regeneratorRuntime() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
          function _regeneratorRuntime() {
            return exports;
          };
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            },
          $Symbol = "function" == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || "@@iterator",
          asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
          toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
          return (
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            obj[key]
          );
        }
        try {
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value);
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return (
            defineProperty(generator, "_invoke", {
              value: makeInvokeMethod(innerFn, self, context),
            }),
            generator
          );
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
          (IteratorPrototype = NativeIteratorPrototype);
        var Gp =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(IteratorPrototype));
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
              var result = record.arg,
                value = result.value;
              return value &&
                "object" == _typeof(value) &&
                hasOwn.call(value, "__await")
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      (result.value = unwrapped), resolve(result);
                    },
                    function (error) {
                      return invoke("throw", error, resolve, reject);
                    }
                  );
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = previousPromise
                ? previousPromise.then(
                    callInvokeWithMethodAndArg,
                    callInvokeWithMethodAndArg
                  )
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = "suspendedStart";
          return function (method, arg) {
            if ("executing" === state)
              throw new Error("Generator is already running");
            if ("completed" === state) {
              if ("throw" === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method)
                context.sent = context._sent = context.arg;
              else if ("throw" === context.method) {
                if ("suspendedStart" === state)
                  throw ((state = "completed"), context.arg);
                context.dispatchException(context.arg);
              } else
                "return" === context.method &&
                  context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self, context);
              if ("normal" === record.type) {
                if (
                  ((state = context.done ? "completed" : "suspendedYield"),
                  record.arg === ContinueSentinel)
                )
                  continue;
                return { value: record.arg, done: context.done };
              }
              "throw" === record.type &&
                ((state = "completed"),
                (context.method = "throw"),
                (context.arg = record.arg));
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName];
          if (undefined === method)
            return (
              (context.delegate = null),
              ("throw" === methodName &&
                delegate.iterator["return"] &&
                ((context.method = "return"),
                (context.arg = undefined),
                maybeInvokeDelegate(delegate, context),
                "throw" === context.method)) ||
                ("return" !== methodName &&
                  ((context.method = "throw"),
                  (context.arg = new TypeError(
                    "The iterator does not provide a '" +
                      methodName +
                      "' method"
                  )))),
              ContinueSentinel
            );
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type)
            return (
              (context.method = "throw"),
              (context.arg = record.arg),
              (context.delegate = null),
              ContinueSentinel
            );
          var info = record.arg;
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                "return" !== context.method &&
                  ((context.method = "next"), (context.arg = undefined)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = "throw"),
              (context.arg = new TypeError("iterator result is not an object")),
              (context.delegate = null),
              ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          1 in locs && (entry.catchLoc = locs[1]),
            2 in locs &&
              ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          (record.type = "normal"),
            delete record.arg,
            (entry.completion = record);
        }
        function Context(tryLocsList) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            tryLocsList.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = undefined), (next.done = !0), next;
                };
              return (next.next = next);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: undefined, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          defineProperty(Gp, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          defineProperty(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            "GeneratorFunction"
          )),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return (
              !!ctor &&
              (ctor === GeneratorFunction ||
                "GeneratorFunction" === (ctor.displayName || ctor.name))
            );
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype),
                  define(genFun, toStringTagSymbol, "GeneratorFunction")),
              (genFun.prototype = Object.create(Gp)),
              genFun
            );
          }),
          (exports.awrap = function (arg) {
            return { __await: arg };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, "Generator"),
          define(Gp, iteratorSymbol, function () {
            return this;
          }),
          define(Gp, "toString", function () {
            return "[object Generator]";
          }),
          (exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop();
                  if (key in object)
                    return (next.value = key), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = undefined),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = undefined),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this)
                  "t" === name.charAt(0) &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1)) &&
                    (this[name] = undefined);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return (
                  (record.type = "throw"),
                  (record.arg = exception),
                  (context.next = loc),
                  caught &&
                    ((context.method = "next"), (context.arg = undefined)),
                  !!caught
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry &&
                ("break" === type || "continue" === type) &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc &&
                (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return (
                (record.type = type),
                (record.arg = arg),
                finallyEntry
                  ? ((this.method = "next"),
                    (this.next = finallyEntry.finallyLoc),
                    ContinueSentinel)
                  : this.complete(record)
              );
            },
            complete: function complete(record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return (
                "break" === record.type || "continue" === record.type
                  ? (this.next = record.arg)
                  : "return" === record.type
                  ? ((this.rval = this.arg = record.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === record.type &&
                    afterLoc &&
                    (this.next = afterLoc),
                ContinueSentinel
              );
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc)
                  return (
                    this.complete(entry.completion, entry.afterLoc),
                    resetTryEntry(entry),
                    ContinueSentinel
                  );
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(
              iterable,
              resultName,
              nextLoc
            ) {
              return (
                (this.delegate = {
                  iterator: values(iterable),
                  resultName: resultName,
                  nextLoc: nextLoc,
                }),
                "next" === this.method && (this.arg = undefined),
                ContinueSentinel
              );
            },
          }),
          exports
        );
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }
      var jwt = __webpack_require__(344);
      var bcrypt = __webpack_require__(432);
      var asyncHandler = __webpack_require__(776);
      var User = __webpack_require__(524);

      //POST /users
      //ACCESS PUBLIC
      var signupUser = asyncHandler(
        /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(
              req,
              res,
              next
            ) {
              var _req$body,
                username,
                email,
                password,
                userExists,
                salt,
                hashedPassword,
                user,
                token;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  while (1)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.prev = 0;
                        (_req$body = req.body),
                          (username = _req$body.username),
                          (email = _req$body.email),
                          (password = _req$body.password);
                        if (!(!username || !email || !password)) {
                          _context.next = 5;
                          break;
                        }
                        res.status(400);
                        throw new Error("Please add all fields");
                      case 5:
                        _context.next = 7;
                        return User.findOne({
                          email: email,
                        });
                      case 7:
                        userExists = _context.sent;
                        if (!userExists) {
                          _context.next = 11;
                          break;
                        }
                        res.status(400);
                        throw new Error("User already exists");
                      case 11:
                        _context.next = 13;
                        return bcrypt.genSalt(10);
                      case 13:
                        salt = _context.sent;
                        _context.next = 16;
                        return bcrypt.hash(password, salt);
                      case 16:
                        hashedPassword = _context.sent;
                        _context.next = 19;
                        return User.create({
                          username: username,
                          email: email,
                          password: hashedPassword,
                        });
                      case 19:
                        user = _context.sent;
                        if (user) {
                          token = generateToken(user._id);
                          res.status(201).json({
                            _id: user.id,
                            username: user.username,
                            email: user.email,
                            token: token,
                          });
                          res.end();
                        }
                        _context.next = 26;
                        break;
                      case 23:
                        _context.prev = 23;
                        _context.t0 = _context["catch"](0);
                        next(_context.t0);
                      case 26:
                      case "end":
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[0, 23]]
              );
            })
          );
          return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
          };
        })()
      );

      //POST /user/login
      //ACCESS PUBLIC
      var loginUser = asyncHandler(
        /*#__PURE__*/ (function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(
              req,
              res,
              next
            ) {
              var _req$body2, email, password, user;
              return _regeneratorRuntime().wrap(
                function _callee2$(_context2) {
                  while (1)
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        _context2.prev = 0;
                        (_req$body2 = req.body),
                          (email = _req$body2.email),
                          (password = _req$body2.password);
                        _context2.next = 4;
                        return User.findOne({
                          email: email,
                        });
                      case 4:
                        user = _context2.sent;
                        _context2.t0 = user;
                        if (!_context2.t0) {
                          _context2.next = 10;
                          break;
                        }
                        _context2.next = 9;
                        return bcrypt.compare(password, user.password);
                      case 9:
                        _context2.t0 = _context2.sent;
                      case 10:
                        if (!_context2.t0) {
                          _context2.next = 12;
                          break;
                        }
                        res.json({
                          _id: user.id,
                          username: user.username,
                          email: user.email,
                          token: generateToken(user),
                        });
                      case 12:
                        res.end();
                        _context2.next = 18;
                        break;
                      case 15:
                        _context2.prev = 15;
                        _context2.t1 = _context2["catch"](0);
                        next(_context2.t1);
                      case 18:
                      case "end":
                        return _context2.stop();
                    }
                },
                _callee2,
                null,
                [[0, 15]]
              );
            })
          );
          return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
          };
        })()
      );

      //Generate JWT
      var generateToken = function generateToken(_ref3) {
        var email = _ref3.email,
          id = _ref3.id;
        var payload = {
          email: email,
          id: id,
        };
        return jwt.sign(
          {
            data: payload,
          },
          "SETEC_ASTRONOMY",
          {
            expiresIn: "30d",
          }
        );
      };

      //GET /users/me
      //ACCESS PRIVATE
      var getMyUser = asyncHandler(
        /*#__PURE__*/ (function () {
          var _ref4 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(
              req,
              res,
              next
            ) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      try {
                        res.status(200).json(req.user);
                        res.end();
                      } catch (err) {
                        next(err);
                      }
                    case 1:
                    case "end":
                      return _context3.stop();
                  }
              }, _callee3);
            })
          );
          return function (_x7, _x8, _x9) {
            return _ref4.apply(this, arguments);
          };
        })()
      );
      var updateMyUser = asyncHandler(
        /*#__PURE__*/ (function () {
          var _ref5 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(
              req,
              res,
              next
            ) {
              var email, user;
              return _regeneratorRuntime().wrap(
                function _callee4$(_context4) {
                  while (1)
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        _context4.prev = 0;
                        email = req.body.email;
                        _context4.next = 4;
                        return User.findOne({
                          email: email,
                        });
                      case 4:
                        user = _context4.sent;
                        user.username = req.body.username || user.username;
                        user.email = req.body.email || user.email;
                        user.password = req.body.password || user.password;
                        _context4.next = 10;
                        return user.save();
                      case 10:
                        res.status(200).json(user);
                        res.end();
                        _context4.next = 17;
                        break;
                      case 14:
                        _context4.prev = 14;
                        _context4.t0 = _context4["catch"](0);
                        next(_context4.t0);
                      case 17:
                      case "end":
                        return _context4.stop();
                    }
                },
                _callee4,
                null,
                [[0, 14]]
              );
            })
          );
          return function (_x10, _x11, _x12) {
            return _ref5.apply(this, arguments);
          };
        })()
      );
      var deleteMyUser = asyncHandler(
        /*#__PURE__*/ (function () {
          var _ref6 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(
              req,
              res,
              next
            ) {
              var email, user;
              return _regeneratorRuntime().wrap(
                function _callee5$(_context5) {
                  while (1)
                    switch ((_context5.prev = _context5.next)) {
                      case 0:
                        _context5.prev = 0;
                        email = req.body.email;
                        _context5.next = 4;
                        return User.findOneAndDelete({
                          email: email,
                        });
                      case 4:
                        user = _context5.sent;
                        res.status(200).json("Deleted User", user);
                        res.end();
                        _context5.next = 12;
                        break;
                      case 9:
                        _context5.prev = 9;
                        _context5.t0 = _context5["catch"](0);
                        next(_context5.t0);
                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                },
                _callee5,
                null,
                [[0, 9]]
              );
            })
          );
          return function (_x13, _x14, _x15) {
            return _ref6.apply(this, arguments);
          };
        })()
      );
      module.exports = {
        signupUser: signupUser,
        loginUser: loginUser,
        getMyUser: getMyUser,
        updateMyUser: updateMyUser,
        deleteMyUser: deleteMyUser,
      };

      /***/
    },

    /***/ 361: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var _require = __webpack_require__(185),
        Schema = _require.Schema,
        model = _require.model;
      var LeadsquaredSchema = new Schema({
        companyName: {
          type: String,
        },
        accessKey: {
          type: String,
        },
        secretKey: {
          type: String,
        },
      });
      var Leadsquared = model("Leadsquared", LeadsquaredSchema);
      module.exports = Leadsquared;

      /***/
    },

    /***/ 524: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var _require = __webpack_require__(185),
        Schema = _require.Schema,
        model = _require.model;
      var bcrypt = __webpack_require__(96);

      //User schema
      //username of the user needs to be unique
      //email needs to be unique and valid email structure(should send confirmation email to confirm)

      var UserSchema = new Schema({
        username: {
          type: String,
          required: true,
          unique: true,
          trimmed: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          validate: {
            validator: function validator(v) {
              return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            },
            message: "Please enter a valid email",
          },
        },
        password: {
          type: String,
          required: true,
          minLength: 8,
        },
      });
      var User = model("User", UserSchema);
      var handleError = function handleError(err) {
        return console.error(err);
      };

      //Seed a single user
      User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
          User.create(
            {
              username: "james",
              email: "james@gmail.com",
              password: "password",
            },
            function (err) {
              return err
                ? handleError(err)
                : console.log("Created new document");
            }
          );
        }
      });
      module.exports = User;

      /***/
    },

    /***/ 127: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var router = __webpack_require__(860).Router();
      var userRoutes = __webpack_require__(116);
      var leadsquaredRoutes = __webpack_require__(595);
      router.use("/user", userRoutes);
      router.use("/lsq", leadsquaredRoutes);
      module.exports = router;

      /***/
    },

    /***/ 595: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var express = __webpack_require__(860);
      var router = express.Router();
      var _require = __webpack_require__(261),
        createLeadsquared = _require.createLeadsquared;
      router.post("/create", createLeadsquared);
      module.exports = router;

      /***/
    },

    /***/ 116: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var express = __webpack_require__(860);
      var router = express.Router();
      var _require = __webpack_require__(363),
        signupUser = _require.signupUser,
        loginUser = _require.loginUser,
        getMyUser = _require.getMyUser,
        updateMyUser = _require.updateMyUser,
        deleteMyUser = _require.deleteMyUser;
      var _require2 = __webpack_require__(553),
        protect = _require2.protect;
      router.post("/signup", signupUser);
      router.post("/login", loginUser);
      router.get("/me", protect, getMyUser);
      router.post("/update", protect, updateMyUser);
      router.post("/delete", protect, deleteMyUser);
      module.exports = router;

      /***/
    },

    /***/ 850: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      /* eslint-disable*/
      var express = __webpack_require__(860);
      var path = __webpack_require__(423);
      __webpack_require__(142).config();
      var db = __webpack_require__(769);
      var colors = __webpack_require__(357);
      var PORT = "8080" || 0;
      var _require = __webpack_require__(947),
        ErrorHandler = _require.ErrorHandler;
      // const { authMiddleware } = require("./utils/auth");
      /*eslint-enable*/
      var url;
      if (false) {
      } else {
        url = "http://localhost:3000";
      }
      var app = express();
      app.use(
        express.urlencoded({
          extended: false,
        })
      );
      app.use(express.json());
      app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", url);
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
      });
      db.once("open", function () {
        app.listen(PORT, function () {
          console.log(
            colors.bgBlue("--API Running on PORT "),
            colors.green(PORT),
            colors.bgBlue("----")
          );
          console.log(colors.bgBlue("--------------------------------"));
        });
      });
      app.use(__webpack_require__(940));
      app.use(express["static"](path.join(__dirname, "../frontend/build")));
      app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
      });
      app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
      });
      app.use(ErrorHandler);
      module.exports = app;

      /***/
    },

    /***/ 553: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function _regeneratorRuntime() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
          function _regeneratorRuntime() {
            return exports;
          };
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            },
          $Symbol = "function" == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || "@@iterator",
          asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
          toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
          return (
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            obj[key]
          );
        }
        try {
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value);
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return (
            defineProperty(generator, "_invoke", {
              value: makeInvokeMethod(innerFn, self, context),
            }),
            generator
          );
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
          (IteratorPrototype = NativeIteratorPrototype);
        var Gp =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(IteratorPrototype));
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
              var result = record.arg,
                value = result.value;
              return value &&
                "object" == _typeof(value) &&
                hasOwn.call(value, "__await")
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      (result.value = unwrapped), resolve(result);
                    },
                    function (error) {
                      return invoke("throw", error, resolve, reject);
                    }
                  );
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = previousPromise
                ? previousPromise.then(
                    callInvokeWithMethodAndArg,
                    callInvokeWithMethodAndArg
                  )
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = "suspendedStart";
          return function (method, arg) {
            if ("executing" === state)
              throw new Error("Generator is already running");
            if ("completed" === state) {
              if ("throw" === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method)
                context.sent = context._sent = context.arg;
              else if ("throw" === context.method) {
                if ("suspendedStart" === state)
                  throw ((state = "completed"), context.arg);
                context.dispatchException(context.arg);
              } else
                "return" === context.method &&
                  context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self, context);
              if ("normal" === record.type) {
                if (
                  ((state = context.done ? "completed" : "suspendedYield"),
                  record.arg === ContinueSentinel)
                )
                  continue;
                return { value: record.arg, done: context.done };
              }
              "throw" === record.type &&
                ((state = "completed"),
                (context.method = "throw"),
                (context.arg = record.arg));
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName];
          if (undefined === method)
            return (
              (context.delegate = null),
              ("throw" === methodName &&
                delegate.iterator["return"] &&
                ((context.method = "return"),
                (context.arg = undefined),
                maybeInvokeDelegate(delegate, context),
                "throw" === context.method)) ||
                ("return" !== methodName &&
                  ((context.method = "throw"),
                  (context.arg = new TypeError(
                    "The iterator does not provide a '" +
                      methodName +
                      "' method"
                  )))),
              ContinueSentinel
            );
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type)
            return (
              (context.method = "throw"),
              (context.arg = record.arg),
              (context.delegate = null),
              ContinueSentinel
            );
          var info = record.arg;
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                "return" !== context.method &&
                  ((context.method = "next"), (context.arg = undefined)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = "throw"),
              (context.arg = new TypeError("iterator result is not an object")),
              (context.delegate = null),
              ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          1 in locs && (entry.catchLoc = locs[1]),
            2 in locs &&
              ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          (record.type = "normal"),
            delete record.arg,
            (entry.completion = record);
        }
        function Context(tryLocsList) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            tryLocsList.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = undefined), (next.done = !0), next;
                };
              return (next.next = next);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: undefined, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          defineProperty(Gp, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          defineProperty(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            "GeneratorFunction"
          )),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return (
              !!ctor &&
              (ctor === GeneratorFunction ||
                "GeneratorFunction" === (ctor.displayName || ctor.name))
            );
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype),
                  define(genFun, toStringTagSymbol, "GeneratorFunction")),
              (genFun.prototype = Object.create(Gp)),
              genFun
            );
          }),
          (exports.awrap = function (arg) {
            return { __await: arg };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, "Generator"),
          define(Gp, iteratorSymbol, function () {
            return this;
          }),
          define(Gp, "toString", function () {
            return "[object Generator]";
          }),
          (exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop();
                  if (key in object)
                    return (next.value = key), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = undefined),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = undefined),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this)
                  "t" === name.charAt(0) &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1)) &&
                    (this[name] = undefined);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return (
                  (record.type = "throw"),
                  (record.arg = exception),
                  (context.next = loc),
                  caught &&
                    ((context.method = "next"), (context.arg = undefined)),
                  !!caught
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry &&
                ("break" === type || "continue" === type) &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc &&
                (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return (
                (record.type = type),
                (record.arg = arg),
                finallyEntry
                  ? ((this.method = "next"),
                    (this.next = finallyEntry.finallyLoc),
                    ContinueSentinel)
                  : this.complete(record)
              );
            },
            complete: function complete(record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return (
                "break" === record.type || "continue" === record.type
                  ? (this.next = record.arg)
                  : "return" === record.type
                  ? ((this.rval = this.arg = record.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === record.type &&
                    afterLoc &&
                    (this.next = afterLoc),
                ContinueSentinel
              );
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc)
                  return (
                    this.complete(entry.completion, entry.afterLoc),
                    resetTryEntry(entry),
                    ContinueSentinel
                  );
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(
              iterable,
              resultName,
              nextLoc
            ) {
              return (
                (this.delegate = {
                  iterator: values(iterable),
                  resultName: resultName,
                  nextLoc: nextLoc,
                }),
                "next" === this.method && (this.arg = undefined),
                ContinueSentinel
              );
            },
          }),
          exports
        );
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }
      var jwt = __webpack_require__(344);
      var asyncHandler = __webpack_require__(776);
      var User = __webpack_require__(524);
      var protect = asyncHandler(
        /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(
              req,
              res,
              next
            ) {
              var token, decoded;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  while (1)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (
                          !(
                            req.headers.authorization &&
                            req.headers.authorization.startsWith("Bearer")
                          )
                        ) {
                          _context.next = 15;
                          break;
                        }
                        _context.prev = 1;
                        //Get token from header
                        token = req.headers.authorization.split(" ")[1];

                        //Verify token
                        decoded = jwt.verify(token, "SETEC_ASTRONOMY"); //Get user from the token
                        _context.next = 6;
                        return User.findById(decoded.id).select("-password");
                      case 6:
                        req.user = _context.sent;
                        next();
                        _context.next = 15;
                        break;
                      case 10:
                        _context.prev = 10;
                        _context.t0 = _context["catch"](1);
                        console.log(error);
                        res.status(401);
                        throw new Error("Not Authorized");
                      case 15:
                        if (token) {
                          _context.next = 18;
                          break;
                        }
                        res.status(401);
                        throw new Error("Not Authorized - No Token");
                      case 18:
                      case "end":
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[1, 10]]
              );
            })
          );
          return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
          };
        })()
      );
      module.exports = {
        protect: protect,
      };

      /***/
    },

    /***/ 947: /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      /* provided dependency */ var process = __webpack_require__(882);
      var ErrorHandler = function ErrorHandler(err, req, res, next) {
        console.log("Handling Error");
        var errStatus = err.statusCode || 500;
        var errMsg = err.message || "Something went wrong";
        res.status(errStatus).json({
          success: false,
          status: errStatus,
          message: errMsg,
          stack: process.env.ENVIROMENT === "development" ? err.stack : {},
        });
      };
      module.exports = {
        ErrorHandler: ErrorHandler,
      };

      /***/
    },

    /***/ 96: /***/ (module) => {
      "use strict";
      module.exports = require("bcrypt");

      /***/
    },

    /***/ 432: /***/ (module) => {
      "use strict";
      module.exports = require("bcryptjs");

      /***/
    },

    /***/ 357: /***/ (module) => {
      "use strict";
      module.exports = require("colors");

      /***/
    },

    /***/ 142: /***/ (module) => {
      "use strict";
      module.exports = require("dotenv");

      /***/
    },

    /***/ 860: /***/ (module) => {
      "use strict";
      module.exports = require("express");

      /***/
    },

    /***/ 776: /***/ (module) => {
      "use strict";
      module.exports = require("express-async-handler");

      /***/
    },

    /***/ 344: /***/ (module) => {
      "use strict";
      module.exports = require("jsonwebtoken");

      /***/
    },

    /***/ 185: /***/ (module) => {
      "use strict";
      module.exports = require("mongoose");

      /***/
    },

    /***/ 423: /***/ (module) => {
      "use strict";
      module.exports = require("path");

      /***/
    },

    /***/ 882: /***/ (module) => {
      "use strict";
      module.exports = require("process/browser");

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__(850);
  /******/
  /******/
})();
