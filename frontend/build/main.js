/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend/./src/App.css?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend/./src/index.css?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Class */ \"./src/components/Class.tsx\");\n/* harmony import */ var _components_Voca__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Voca */ \"./src/components/Voca.tsx\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Login */ \"./src/components/Login.tsx\");\n/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Signup */ \"./src/components/Signup.tsx\");\n/* harmony import */ var _components_DateFns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/DateFns */ \"./src/components/DateFns.tsx\");\n\n\n\n\n// import InactivityTimer from './components/InactivityTimer';\n\n\n\n\n\n// Dev\nvar API_URL = \"http://localhost:8080\";\n// Prod\n// export const API_URL = \"https://dev-objectives-proof.vercel.app\"\nvar App = function () {\n    var user;\n    var getState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return state.user; });\n    if (getState._id.length > 0) {\n        user = getState;\n    }\n    // startInactivityTimer();\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"App bg-dark\", id: 'App' }, user ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { id: 'username' }, user.username) :\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Class__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { message: \"This is the message from the Class Component\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Voca__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DateFns__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Login__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Signup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack://frontend/./src/App.tsx?");

/***/ }),

/***/ "./src/components/Class.tsx":
/*!**********************************!*\
  !*** ./src/components/Class.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n;\nvar Class = /** @class */ (function (_super) {\n    __extends(Class, _super);\n    function Class() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Class.prototype.render = function () {\n        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: 'text-muted' }, this.props.message));\n    };\n    return Class;\n}((react__WEBPACK_IMPORTED_MODULE_0___default().Component)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Class);\n\n\n//# sourceURL=webpack://frontend/./src/components/Class.tsx?");

/***/ }),

/***/ "./src/components/DateFns.tsx":
/*!************************************!*\
  !*** ./src/components/DateFns.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/add */ \"date-fns/add\");\n/* harmony import */ var date_fns_add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_add__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar DateFns = function () {\n    var todayIs = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(), \"'Today is a' eeee\");\n    var todaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(), 'MM/dd/yyyy');\n    var thirtyDaysFromToday = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date_fns_add__WEBPACK_IMPORTED_MODULE_2___default()(new Date(), { days: 30 }), 'MM/dd/yyyy');\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", { className: 'text-light' }, todayIs),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", { className: 'text-light' },\n            \"Todays Date - \",\n            todaysDate),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", { className: 'text-light' },\n            \"30 days from now - \",\n            thirtyDaysFromToday)));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateFns);\n\n\n//# sourceURL=webpack://frontend/./src/components/DateFns.tsx?");

/***/ }),

/***/ "./src/components/Login.tsx":
/*!**********************************!*\
  !*** ./src/components/Login.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styledComponents_FormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledComponents/FormContainer */ \"./src/styledComponents/FormContainer.ts\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions */ \"./src/redux/actions.ts\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ajv */ \"ajv\");\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_10__);\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\n\n\n\n\n\nvar ajv = new (ajv__WEBPACK_IMPORTED_MODULE_10___default())();\nvar loginDataSchema = {\n    type: \"object\",\n    properties: {\n        email: { type: \"string\" },\n        password: { type: \"string\" }\n    },\n    required: [\"email\", \"password\"],\n    additionalProperties: false\n};\nvar RightFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_styledComponents_FormContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\njustify-content: right;\\npadding-right:3rem\\n\"], [\"\\njustify-content: right;\\npadding-right:3rem\\n\"])));\nvar Login = function () {\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    var login = function (loginData) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(_App__WEBPACK_IMPORTED_MODULE_9__.API_URL, \"/api/user/login\"), loginData)];\n                case 1:\n                    response = _a.sent();\n                    if (response.data) {\n                        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.setUser)(response.data));\n                        // localStorage.setItem('user', JSON.stringify(response.data))\n                    }\n                    return [2 /*return*/, response.data];\n            }\n        });\n    }); };\n    var handleLogin = function (event) {\n        event.preventDefault();\n        var loginData = {\n            email: event.target.email.value,\n            password: event.target.password.value\n        };\n        var validLoginData = ajv.validate(loginDataSchema, loginData);\n        if (validLoginData) {\n            login(loginData);\n        }\n        else {\n            console.error(ajv.errors);\n        }\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RightFormContainer, { className: 'Login' },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Form, { onSubmit: handleLogin, className: \"p-3 my-2 text-muted bg-light\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", { id: \"login\", className: 'py-2' }, \"Login\"),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, { floating: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, { id: \"loginEmail\", name: \"email\", placeholder: \"Email\", type: \"email\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, { for: \"loginEmail\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEnvelope }),\n                    \"\\u00A0Email\")),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, { floating: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, { id: \"loginPassword\", name: \"password\", placeholder: \"Password\", type: \"password\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, { for: \"loginPassword\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faLock }),\n                    \"\\u00A0Password\")),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, { className: 'login-submit bg-success' }, \"Submit\"))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar templateObject_1;\n\n\n//# sourceURL=webpack://frontend/./src/components/Login.tsx?");

/***/ }),

/***/ "./src/components/Signup.tsx":
/*!***********************************!*\
  !*** ./src/components/Signup.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styledComponents_FormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledComponents/FormContainer */ \"./src/styledComponents/FormContainer.ts\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions */ \"./src/redux/actions.ts\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ajv */ \"ajv\");\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_10__);\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\n\n\n\n\n\nvar ajv = new (ajv__WEBPACK_IMPORTED_MODULE_10___default())();\nvar signupDataSchema = {\n    type: \"object\",\n    properties: {\n        username: { type: \"string\" },\n        email: { type: \"string\" },\n        password: { type: \"string\" }\n    },\n    required: [\"username\", \"email\", \"password\"],\n    additionalProperties: false\n};\nvar LeftFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_styledComponents_FormContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\njustify-content: left;\\npadding-left:3rem\\n\"], [\"\\njustify-content: left;\\npadding-left:3rem\\n\"])));\nvar Signup = function () {\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    var signup = function (signupData) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(_App__WEBPACK_IMPORTED_MODULE_9__.API_URL, \"/api/user/signup\"), signupData)];\n                case 1:\n                    response = _a.sent();\n                    if (response.data) {\n                        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.setUser)(response.data));\n                    }\n                    return [2 /*return*/, response.data];\n            }\n        });\n    }); };\n    var handleSignup = function (event) {\n        event.preventDefault();\n        var signupData = {\n            username: event.target.signupUsername.value,\n            email: event.target.signupEmail.value,\n            password: event.target.signupPassword.value\n        };\n        var validSignupData = ajv.validate(signupDataSchema, signupData);\n        if (validSignupData) {\n            signup(signupData);\n        }\n        else {\n            console.error(ajv.errors);\n        }\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LeftFormContainer, { className: 'Signup' },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Form, { onSubmit: handleSignup, className: \"p-3 my-2 text-muted bg-light\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", { className: 'py-2', id: 'signup' }, \"Sign up\"),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, { floating: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, { id: \"signupUsername\", name: \"signupUsername\", placeholder: \"username\", type: \"text\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, { for: \"signupUsername\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faUserTie }),\n                    \"\\u00A0Username\")),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, { floating: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, { id: \"signupEmail\", name: \"signupemail\", placeholder: \"Email\", type: \"email\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, { for: \"signupEmail\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEnvelope }),\n                    \"\\u00A0Email\")),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, { floating: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, { id: \"signupPassword\", name: \"signupPassword\", placeholder: \"Password\", type: \"password\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, { for: \"signupPassword\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faLock }),\n                    \"\\u00A0Password\")),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, { className: 'signup-submit bg-success' }, \"Submit\"))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar templateObject_1;\n\n\n//# sourceURL=webpack://frontend/./src/components/Signup.tsx?");

/***/ }),

/***/ "./src/components/Voca.tsx":
/*!*********************************!*\
  !*** ./src/components/Voca.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! voca */ \"voca\");\n/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styledComponents_FormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledComponents/FormContainer */ \"./src/styledComponents/FormContainer.ts\");\n\n\n\n\nvar v = (voca__WEBPACK_IMPORTED_MODULE_1___default());\nvar Voca = function () {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), slug = _a[0], setSlug = _a[1];\n    var slugify = function (event) {\n        event.preventDefault();\n        var initialString = event.target.textToSlug.value;\n        var slugifiedString = v.kebabCase(initialString);\n        setSlug(slugifiedString);\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styledComponents_FormContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Form, { onSubmit: slugify, className: \"p-3 my-2 text-muted bg-light\" },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", { id: \"slugify\", className: 'py-2' }, \"Slugify\"),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.FormGroup, { floating: true },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Input, { id: \"textToSlug\", name: \"textToSlug\", placeholder: \"textToSlug\", type: \"text\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Label, { for: \"textToSlug\" }, \"text to slug\")),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, { className: 'slugify-submit bg-success' }, \"Slug It\"),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, slug)))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voca);\n\n\n//# sourceURL=webpack://frontend/./src/components/Voca.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"react-dom/client\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/store */ \"./src/redux/store.ts\");\n\n\n\n\n\n\n\nvar root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(document.getElementById('root'));\nroot.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, { store: _redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"] },\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n\n\n//# sourceURL=webpack://frontend/./src/index.tsx?");

/***/ }),

/***/ "./src/redux/actions.ts":
/*!******************************!*\
  !*** ./src/redux/actions.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUser\": function() { return /* binding */ setUser; }\n/* harmony export */ });\n/* harmony import */ var _types_User_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/User.types */ \"./src/types/User.types.ts\");\n\nfunction setUser(user) {\n    return {\n        type: _types_User_types__WEBPACK_IMPORTED_MODULE_0__.SET_USER,\n        payload: user\n    };\n}\n\n\n//# sourceURL=webpack://frontend/./src/redux/actions.ts?");

/***/ }),

/***/ "./src/redux/reducers.ts":
/*!*******************************!*\
  !*** ./src/redux/reducers.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_User_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/User.types */ \"./src/types/User.types.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar initialState = {\n    user: {\n        _id: \"\",\n        username: \"Default Username\",\n        email: \"\",\n        token: \"\"\n    }\n};\nvar reducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case _types_User_types__WEBPACK_IMPORTED_MODULE_0__.SET_USER:\n            return __assign(__assign({}, state), { user: action.payload });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n//# sourceURL=webpack://frontend/./src/redux/reducers.ts?");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./src/redux/reducers.ts\");\n\n\nvar middleware = [];\nvar composeEnhancers = typeof window === 'object' &&\n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?\n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...\n    }) : redux__WEBPACK_IMPORTED_MODULE_0__.compose;\nvar enhancer = composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, middleware));\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.legacy_createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], enhancer);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n//# sourceURL=webpack://frontend/./src/redux/store.ts?");

/***/ }),

/***/ "./src/styledComponents/FormContainer.ts":
/*!***********************************************!*\
  !*** ./src/styledComponents/FormContainer.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\n\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\ndisplay: flex;\\njustify-content: center;\\n\"], [\"\\ndisplay: flex;\\njustify-content: center;\\n\"])));\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormContainer);\nvar templateObject_1;\n\n\n//# sourceURL=webpack://frontend/./src/styledComponents/FormContainer.ts?");

/***/ }),

/***/ "./src/types/User.types.ts":
/*!*********************************!*\
  !*** ./src/types/User.types.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_USER\": function() { return /* binding */ SET_USER; }\n/* harmony export */ });\nvar SET_USER = 'SET_USER';\n\n\n//# sourceURL=webpack://frontend/./src/types/User.types.ts?");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/***/ (function(module) {

module.exports = require("ajv");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

module.exports = require("axios");

/***/ }),

/***/ "bootstrap/dist/css/bootstrap.min.css":
/*!*******************************************************!*\
  !*** external "bootstrap/dist/css/bootstrap.min.css" ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns/add":
/*!*******************************!*\
  !*** external "date-fns/add" ***!
  \*******************************/
/***/ (function(module) {

module.exports = require("date-fns/add");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ (function(module) {

module.exports = require("react-dom/client");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

module.exports = require("styled-components");

/***/ }),

/***/ "voca":
/*!***********************!*\
  !*** external "voca" ***!
  \***********************/
/***/ (function(module) {

module.exports = require("voca");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;