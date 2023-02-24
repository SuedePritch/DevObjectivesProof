/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/client"
const client_namespaceObject = require("react-dom/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: external "bootstrap/dist/css/bootstrap.min.css"
const bootstrap_min_css_namespaceObject = require("bootstrap/dist/css/bootstrap.min.css");
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./src/components/Class.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

;
var Class = /** @class */ (function (_super) {
    __extends(Class, _super);
    function Class() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Class.prototype.render = function () {
        return (external_react_default().createElement("div", { className: 'text-muted' }, this.props.message));
    };
    return Class;
}((external_react_default()).Component));
/* harmony default export */ const components_Class = (Class);

;// CONCATENATED MODULE: external "voca"
const external_voca_namespaceObject = require("voca");
var external_voca_default = /*#__PURE__*/__webpack_require__.n(external_voca_namespaceObject);
;// CONCATENATED MODULE: external "reactstrap"
const external_reactstrap_namespaceObject = require("reactstrap");
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
;// CONCATENATED MODULE: ./src/styledComponents/FormContainer.ts
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var FormContainer = external_styled_components_default().div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\njustify-content: center;\n"], ["\ndisplay: flex;\njustify-content: center;\n"])));
/* harmony default export */ const styledComponents_FormContainer = (FormContainer);
var templateObject_1;

;// CONCATENATED MODULE: ./src/components/Voca.tsx




var v = (external_voca_default());
var Voca = function () {
    var _a = (0,external_react_namespaceObject.useState)(""), slug = _a[0], setSlug = _a[1];
    var slugify = function (event) {
        event.preventDefault();
        var initialString = event.target.textToSlug.value;
        var slugifiedString = v.kebabCase(initialString);
        setSlug(slugifiedString);
    };
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement(styledComponents_FormContainer, null,
            external_react_default().createElement(external_reactstrap_namespaceObject.Form, { onSubmit: slugify, className: "p-3 my-2 text-muted bg-light" },
                external_react_default().createElement("h2", { id: "slugify", className: 'py-2' }, "Slugify"),
                external_react_default().createElement(external_reactstrap_namespaceObject.FormGroup, { floating: true },
                    external_react_default().createElement(external_reactstrap_namespaceObject.Input, { id: "textToSlug", name: "textToSlug", placeholder: "textToSlug", type: "text" }),
                    external_react_default().createElement(external_reactstrap_namespaceObject.Label, { for: "textToSlug" }, "text to slug")),
                external_react_default().createElement(external_reactstrap_namespaceObject.Button, { className: 'slugify-submit bg-success' }, "Slug It"),
                external_react_default().createElement("h2", null, slug)))));
};
/* harmony default export */ const components_Voca = (Voca);

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
;// CONCATENATED MODULE: ./src/types/User.types.ts
var SET_USER = 'SET_USER';

;// CONCATENATED MODULE: ./src/redux/actions.ts

function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    };
}

;// CONCATENATED MODULE: external "ajv"
const external_ajv_namespaceObject = require("ajv");
var external_ajv_default = /*#__PURE__*/__webpack_require__.n(external_ajv_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Login.tsx
var Login_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var ajv = new (external_ajv_default())();
var loginDataSchema = {
    type: "object",
    properties: {
        email: { type: "string" },
        password: { type: "string" }
    },
    required: ["email", "password"],
    additionalProperties: false
};
var RightFormContainer = external_styled_components_default()(styledComponents_FormContainer)(Login_templateObject_1 || (Login_templateObject_1 = Login_makeTemplateObject(["\njustify-content: right;\npadding-right:3rem\n"], ["\njustify-content: right;\npadding-right:3rem\n"])));
var Login = function () {
    var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    var login = function (loginData) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, external_axios_default().post("".concat(API_URL, "/api/user/login"), loginData)];
                case 1:
                    response = _a.sent();
                    if (response.data) {
                        dispatch(setUser(response.data));
                        // localStorage.setItem('user', JSON.stringify(response.data))
                    }
                    return [2 /*return*/, response.data];
            }
        });
    }); };
    var handleLogin = function (event) {
        event.preventDefault();
        var loginData = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        var validLoginData = ajv.validate(loginDataSchema, loginData);
        if (validLoginData) {
            login(loginData);
        }
        else {
            console.error(ajv.errors);
        }
    };
    return (external_react_default().createElement(RightFormContainer, { className: 'Login' },
        external_react_default().createElement(external_reactstrap_namespaceObject.Form, { onSubmit: handleLogin, className: "p-3 my-2 text-muted bg-light" },
            external_react_default().createElement("h2", { id: "login", className: 'py-2' }, "Login"),
            external_react_default().createElement(external_reactstrap_namespaceObject.FormGroup, { floating: true },
                external_react_default().createElement(external_reactstrap_namespaceObject.Input, { id: "loginEmail", name: "email", placeholder: "Email", type: "email" }),
                external_react_default().createElement(external_reactstrap_namespaceObject.Label, { for: "loginEmail" },
                    external_react_default().createElement(react_fontawesome_namespaceObject.FontAwesomeIcon, { icon: free_solid_svg_icons_namespaceObject.faEnvelope }),
                    "\u00A0Email")),
            external_react_default().createElement(external_reactstrap_namespaceObject.FormGroup, { floating: true },
                external_react_default().createElement(external_reactstrap_namespaceObject.Input, { id: "loginPassword", name: "password", placeholder: "Password", type: "password" }),
                external_react_default().createElement(external_reactstrap_namespaceObject.Label, { for: "loginPassword" },
                    external_react_default().createElement(react_fontawesome_namespaceObject.FontAwesomeIcon, { icon: free_solid_svg_icons_namespaceObject.faLock }),
                    "\u00A0Password")),
            external_react_default().createElement(external_reactstrap_namespaceObject.Button, { className: 'login-submit bg-success' }, "Submit"))));
};
/* harmony default export */ const components_Login = (Login);
var Login_templateObject_1;

;// CONCATENATED MODULE: ./src/components/Signup.tsx
var Signup_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var Signup_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Signup_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var Signup_ajv = new (external_ajv_default())();
var signupDataSchema = {
    type: "object",
    properties: {
        username: { type: "string" },
        email: { type: "string" },
        password: { type: "string" }
    },
    required: ["username", "email", "password"],
    additionalProperties: false
};
var LeftFormContainer = external_styled_components_default()(styledComponents_FormContainer)(Signup_templateObject_1 || (Signup_templateObject_1 = Signup_makeTemplateObject(["\njustify-content: left;\npadding-left:3rem\n"], ["\njustify-content: left;\npadding-left:3rem\n"])));
var Signup = function () {
    var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    var signup = function (signupData) { return Signup_awaiter(void 0, void 0, void 0, function () {
        var response;
        return Signup_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, external_axios_default().post("".concat(API_URL, "/api/user/signup"), signupData)];
                case 1:
                    response = _a.sent();
                    if (response.data) {
                        dispatch(setUser(response.data));
                    }
                    return [2 /*return*/, response.data];
            }
        });
    }); };
    var handleSignup = function (event) {
        event.preventDefault();
        var signupData = {
            username: event.target.signupUsername.value,
            email: event.target.signupEmail.value,
            password: event.target.signupPassword.value
        };
        var validSignupData = Signup_ajv.validate(signupDataSchema, signupData);
        if (validSignupData) {
            signup(signupData);
        }
        else {
            console.error(Signup_ajv.errors);
        }
    };
    return (external_react_default().createElement(LeftFormContainer, { className: 'Signup' },
        external_react_default().createElement(external_reactstrap_namespaceObject.Form, { onSubmit: handleSignup, className: "p-3 my-2 text-muted bg-light" },
            external_react_default().createElement("h2", { className: 'py-2', id: 'signup' }, "Sign up"),
            external_react_default().createElement(external_reactstrap_namespaceObject.FormGroup, { floating: true },
                external_react_default().createElement(external_reactstrap_namespaceObject.Input, { id: "signupUsername", name: "signupUsername", placeholder: "username", type: "text" }),
                external_react_default().createElement(external_reactstrap_namespaceObject.Label, { for: "signupUsername" },
                    external_react_default().createElement(react_fontawesome_namespaceObject.FontAwesomeIcon, { icon: free_solid_svg_icons_namespaceObject.faUserTie }),
                    "\u00A0Username")),
            external_react_default().createElement(external_reactstrap_namespaceObject.FormGroup, { floating: true },
                external_react_default().createElement(external_reactstrap_namespaceObject.Input, { id: "signupEmail", name: "signupemail", placeholder: "Email", type: "email" }),
                external_react_default().createElement(external_reactstrap_namespaceObject.Label, { for: "signupEmail" },
                    external_react_default().createElement(react_fontawesome_namespaceObject.FontAwesomeIcon, { icon: free_solid_svg_icons_namespaceObject.faEnvelope }),
                    "\u00A0Email")),
            external_react_default().createElement(external_reactstrap_namespaceObject.FormGroup, { floating: true },
                external_react_default().createElement(external_reactstrap_namespaceObject.Input, { id: "signupPassword", name: "signupPassword", placeholder: "Password", type: "password" }),
                external_react_default().createElement(external_reactstrap_namespaceObject.Label, { for: "signupPassword" },
                    external_react_default().createElement(react_fontawesome_namespaceObject.FontAwesomeIcon, { icon: free_solid_svg_icons_namespaceObject.faLock }),
                    "\u00A0Password")),
            external_react_default().createElement(external_reactstrap_namespaceObject.Button, { className: 'signup-submit bg-success' }, "Submit"))));
};
/* harmony default export */ const components_Signup = (Signup);
var Signup_templateObject_1;

;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: external "date-fns/add"
const add_namespaceObject = require("date-fns/add");
var add_default = /*#__PURE__*/__webpack_require__.n(add_namespaceObject);
;// CONCATENATED MODULE: ./src/components/DateFns.tsx



var DateFns = function () {
    var todayIs = (0,external_date_fns_namespaceObject.format)(new Date(), "'Today is a' eeee");
    var todaysDate = (0,external_date_fns_namespaceObject.format)(new Date(), 'MM/dd/yyyy');
    var thirtyDaysFromToday = (0,external_date_fns_namespaceObject.format)(add_default()(new Date(), { days: 30 }), 'MM/dd/yyyy');
    return (external_react_default().createElement("div", null,
        external_react_default().createElement("h4", { className: 'text-light' }, todayIs),
        external_react_default().createElement("h4", { className: 'text-light' },
            "Todays Date - ",
            todaysDate),
        external_react_default().createElement("h4", { className: 'text-light' },
            "30 days from now - ",
            thirtyDaysFromToday)));
};
/* harmony default export */ const components_DateFns = (DateFns);

;// CONCATENATED MODULE: ./src/App.tsx




// import InactivityTimer from './components/InactivityTimer';





// Dev
var API_URL = "http://localhost:8080";
// Prod
// export const API_URL = "https://dev-objectives-proof.vercel.app"
var App = function () {
    var user;
    var getState = (0,external_react_redux_namespaceObject.useSelector)(function (state) { return state.user; });
    if (getState._id.length > 0) {
        user = getState;
    }
    // startInactivityTimer();
    return (external_react_default().createElement("div", { className: "App bg-dark", id: 'App' }, user ? external_react_default().createElement("p", { id: 'username' }, user.username) :
        external_react_default().createElement((external_react_default()).Fragment, null,
            external_react_default().createElement(components_Class, { message: "This is the message from the Class Component" }),
            external_react_default().createElement(components_Voca, null),
            external_react_default().createElement(components_DateFns, null),
            external_react_default().createElement(components_Login, null),
            external_react_default().createElement(components_Signup, null))));
};
/* harmony default export */ const src_App = (App);

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./src/redux/reducers.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initialState = {
    user: {
        _id: "",
        username: "Default Username",
        email: "",
        token: ""
    }
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SET_USER:
            return __assign(__assign({}, state), { user: action.payload });
        default:
            return state;
    }
};
/* harmony default export */ const reducers = (reducer);

;// CONCATENATED MODULE: ./src/redux/store.ts


var middleware = [];
var composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : external_redux_namespaceObject.compose;
var enhancer = composeEnhancers(external_redux_namespaceObject.applyMiddleware.apply(void 0, middleware));
var store = (0,external_redux_namespaceObject.legacy_createStore)(reducers, enhancer);
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./src/index.tsx







var root = client_default().createRoot(document.getElementById('root'));
root.render(external_react_default().createElement(external_react_redux_namespaceObject.Provider, { store: redux_store },
    external_react_default().createElement((external_react_default()).StrictMode, null,
        external_react_default().createElement(src_App, null))));

/******/ })()
;