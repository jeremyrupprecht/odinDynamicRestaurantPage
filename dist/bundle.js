/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Roboto, sans-serif;\r\n    color: rgb(206, 206, 206);\r\n}\r\n\r\nbody, html {\r\n    height: 100%;\r\n}\r\n\r\n/*  */\r\n\r\nbody {\r\n    background-color: rgb(10, 10, 10);\r\n    overflow-x: hidden;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    background-color: transparent;\r\n}\r\n\r\n.content {\r\n    position: relative;\r\n}\r\n\r\n.mainContainerLong {\r\n\r\n    height: 100vh;\r\n    width: 100vw;\r\n\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 2fr;\r\n}\r\n\r\n.mainLeft {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.homeMainCaption {\r\n    margin: 0px 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: start;\r\n    gap: 50px;\r\n}\r\n\r\n.mainLeft p {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.homeMainCaption > p {\r\n    color: gray;\r\n}\r\n\r\n.mainLeft h1 {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.mainLeft button {\r\n    background: rgb(255,60,0);\r\n    background: linear-gradient(90deg, rgba(255,60,0,1) 87%, rgba(255,149,0,1) 100%);\r\n    padding: 17px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.mainLeft button:hover {\r\n    background: rgb(255,60,0);\r\n    background: linear-gradient(90deg, rgba(255,60,0,1) 87%, rgb(255, 213, 154) 100%);\r\n}\r\n\r\n.mainRight {\r\n    overflow: hidden;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n    display: grid;\r\n    grid-template:  70px 1fr / 1fr;\r\n\r\n}\r\n\r\n.navbar {\r\n    background-color: rgba(0, 0, 0, 0.288);\r\n\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 20px 40px;\r\n\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    z-index: 1;\r\n}\r\n\r\n.navbar h2 {\r\n    color: rgb(235, 235, 235);\r\n}\r\n\r\n.mainRightImg {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: cover;\r\n\r\n    grid-area: 1 / 1 / 3 / 2;\r\n}\r\n\r\n/* Button Underline Animation */\r\n\r\n.underlineEffect {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n \r\n .underlineEffect:after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    transform: scaleX(0);\r\n    height: 3px;\r\n    bottom: -5px;\r\n    left: 0;\r\n    background-color: rgba(255, 60, 0, 0.788);\r\n    transform-origin: bottom right;\r\n    transition: transform 0.25s ease-out;\r\n }\r\n \r\n .underlineEffect:hover:after {\r\n    transform: scaleX(1);\r\n    transform-origin: bottom left;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n    .mainLeft {\r\n        grid-area: 1 / 1 / 2 / 3;\r\n    }\r\n\r\n    .mainRightImg {\r\n        display: none;\r\n    }\r\n\r\n    .mainRight {\r\n        grid-area: 1 / 1 / 2 / 3;\r\n    }\r\n\r\n    .homeMainCaption {\r\n        align-items: center;\r\n    }\r\n\r\n    .mainLeft h1 {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n/* Menu Page  */\r\n\r\n.makeContentFullScreenFlexbox {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n\r\n    /* height: 100vh; */\r\n    height: 100%;\r\n    width: 100vw;\r\n\r\n    gap: 30px;\r\n}\r\n\r\n.mainContainerShort {\r\n    height: auto;\r\n    width: 100vw;\r\n\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 2fr;\r\n}\r\n\r\n.navbarLeft {\r\n    position: absolute;\r\n    top: 0;\r\n    height: 70px;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.288);\r\n}\r\n\r\n.centerDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 25px;\r\n    margin-top: 35px;\r\n}\r\n\r\n.discoverHeader {\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.884);\r\n    padding: 3px;\r\n    font-size: 1.7rem;\r\n    color: rgb(255, 106, 56);\r\n}\r\n\r\n.foodMenuHeader {\r\n    font-size: 2.8rem;\r\n}\r\n\r\n.menuItemsGrid {\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    gap: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.menuCard {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.menuTitle {\r\n    font-size: 2.5rem;\r\n    color: rgb(255, 106, 56);\r\n}\r\n\r\n.itemTitle {\r\n    display: flex;\r\n    gap: 10px;\r\n\r\n}\r\n\r\n.itemTitle p {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.underline {\r\n    flex: 1;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.884);\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.ingredients {\r\n    color: rgb(161, 161, 161);\r\n    margin-top: 8px;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 750px) {\r\n\r\n    .menuItemsGrid {\r\n        grid-template: 1fr 1fr / 1fr;\r\n        margin-bottom: 50px;\r\n    }\r\n}\r\n\r\n/* Contact Page  */\r\n\r\n.contactBackground {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    position: fixed;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    object-fit: cover;\r\n    z-index: -1;\r\n    opacity: 0.8;\r\n\r\n}\r\n\r\n.form {\r\n    background-color: transparent;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.letsP {\r\n    color: rgb(255, 106, 56);\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.bookH1 {\r\n    color: white;\r\n}\r\n\r\n.inputsGrid {\r\n    display: grid;\r\n    grid-template: repeat(3, 2.7rem) 4rem / 1fr 1fr 1fr;\r\n    gap: 25px;\r\n}\r\nlabel {\r\n    align-self: end;\r\n    color: white;\r\n}\r\n\r\ninput, .inputsGrid button {\r\n    border-radius: 5px;\r\n}\r\n\r\ninput {\r\n    border: none;\r\n    background-color: transparent;\r\n    border: 1px solid black;\r\n    color: white;\r\n    padding-left: 10px;\r\n}\r\n\r\n.inputsGrid input[type=\"email\"] {\r\n    grid-column: 1 / 4;\r\n}\r\n\r\ninput[type=\"month\"], input[type=\"time\"] {\r\n    color-scheme: dark;\r\n}\r\n\r\n.inputsGrid button {\r\n    background-color: rgb(255, 81, 23);\r\n    grid-column: 1 / 3;\r\n    margin-top: 1rem;\r\n    color: white;\r\n}\r\n\r\n::placeholder {\r\n    color: white;\r\n}\r\n\r\n/* Contact Page Form Validation Styling */\r\n\r\n/* -------------------- */\r\n\r\ninput:focus:valid {\r\n    background-color: rgba(0, 128, 0, 0.479);\r\n}\r\n\r\ninput:focus:invalid {\r\n    background-color: rgba(255, 0, 0, 0.363);\r\n}\r\n\r\ninput:not(:focus):valid {\r\n    background-color: rgba(0, 128, 0, 0.479);\r\n}\r\n\r\n@media only screen and (max-width: 600px) { \r\n\r\n    .inputsGrid {\r\n        grid-template: repeat(3, 2.7rem) 4rem / 1fr;\r\n    }\r\n}\r\n\r\n/* -------------------- */\r\n\r\n.footerContainer {\r\n    width: 100%;\r\n    height: 350px;\r\n    background-color: rgba(0, 0, 0, 0.363);\r\n    margin-top: auto;\r\n    padding: 40px;\r\n}\r\n\r\n.footerContainer * {\r\n    color: rgb(199, 199, 199)\r\n}\r\n\r\n.orangeSpan, .footerItem > p:first-child {\r\n    color: rgb(255, 106, 56);\r\n}\r\n\r\n.footerAcross {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 30px;\r\n    gap: 20px;\r\n}\r\n\r\n.footerItem {\r\n   max-width: 450px;\r\n}\r\n\r\n.footerItem > p:first-child {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.aboutUs > p:nth-child(2), .footerItem input, .contactUsGrid {\r\n    margin-top: 20px;\r\n}\r\n\r\n.footerItem input {\r\n    height: 2.7rem;\r\n    width: 13.5rem;\r\n}\r\n\r\n.footerItem form {\r\n    position: relative;\r\n}\r\n\r\n.footerItem button {\r\n    position: absolute;\r\n    height: 2rem;\r\n    width: 2rem;\r\n    background-color: rgb(255, 81, 23);\r\n    border-radius: 10px;\r\n    top: 1.563rem;\r\n    right: 0.275rem;\r\n}\r\n\r\n.rightArrowImg {\r\n    height: 1.8rem;\r\n    width: 1.8rem;\r\n    padding-top: 4px;\r\n    padding-left: 1px;\r\n}\r\n\r\n.footerAcross > .footerItem:nth-child(2) {\r\n    white-space: nowrap;\r\n}\r\n\r\n.flexBox {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.contactUsGrid {\r\n    display: grid;\r\n    grid-template: repeat(8, 1rem) / 2fr;\r\n    gap: 7px;\r\n}\r\n\r\n.contactUsGrid > p {\r\n    white-space: nowrap;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n\r\n    .footerContainer {\r\n        height: auto;\r\n    }\r\n\r\n    .footerAcross {\r\n        flex-direction: column;\r\n        gap: 40px;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .footerItem button {\r\n        left: 11.275rem;\r\n    }\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateContactPage: () => (/* binding */ generateContactPage)\n/* harmony export */ });\n/* harmony import */ var _images_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contactBackground.jpg */ \"./src/images/contactBackground.jpg\");\n/* harmony import */ var _images_rightArrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/rightArrow.svg */ \"./src/images/rightArrow.svg\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _generateElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateElement */ \"./src/generateElement.js\");\n\r\n\r\n\r\n\r\n\r\nfunction generateContactPage() {\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_2__.generateNavBar)(true);\r\n    \r\n    const content = document.getElementById('content');\r\n\r\n    const menuBackgroundImg = new Image();\r\n    menuBackgroundImg.src = _images_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    menuBackgroundImg.classList.add('contactBackground');\r\n    content.appendChild(menuBackgroundImg);\r\n\r\n    const centerdiv = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'centerDiv', content, undefined);\r\n    const form = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('form', 'form', centerdiv, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', 'letsP', form, 'Lets');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('h1', 'bookH1', form, 'Book a table');\r\n\r\n    const inputsGrid = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'inputsGrid', form, undefined);\r\n    generateLabel('pickDate', undefined, inputsGrid, 'Date *');\r\n    generateLabel('pickTime', undefined, inputsGrid, 'Time *');\r\n    generateLabel('pickGuests', undefined, inputsGrid, 'Guests *');\r\n\r\n    generateInput('month', 'pickDate', true, inputsGrid, undefined, undefined, undefined);\r\n    generateInput('time', 'pickTime', true, inputsGrid, undefined, undefined, undefined);\r\n    generateInput('number', 'pickGuests', true, inputsGrid, '0', '0', '10');\r\n    generateInput('email', 'enterEmail', true, inputsGrid, 'Email *', undefined, undefined);\r\n    const submitButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('button', undefined, inputsGrid, 'Check Availability');\r\n    submitButton.setAttribute('type', 'submit');\r\n\r\n    // Footer section\r\n\r\n    const footerContainer = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerContainer', content, undefined);\r\n    const theRestaurantH1 = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('h1', undefined, footerContainer, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('span', 'orangeSpan', theRestaurantH1, 'The ');\r\n    theRestaurantH1.innerHTML += 'Restaurant';\r\n\r\n    const footerAcross = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerAcross', footerContainer, undefined);\r\n    \r\n    const footerItem1 = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerItem aboutUs', footerAcross, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, footerItem1, 'About Us');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, footerItem1, `Lorem ipsum dolor sit amet\r\n    consectetur adipisicing elit. Quos architecto ad deserunt id, nisi possimus animi impedit \r\n    perferendis.`); \r\n\r\n    const footerItem2 = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerItem aboutUs', footerAcross, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, footerItem2, 'Get News & Offers');\r\n    const emailInputForm = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('form', undefined, footerItem2, undefined);\r\n    generateInput('email', 'enterEmailNews&Offers', true, footerItem2,'Enter your email', undefined, undefined);\r\n    const submitEmailButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('button',  undefined, emailInputForm, undefined);\r\n    submitEmailButton.setAttribute('type', 'submit');\r\n\r\n    const rightArrowImgElement = new Image();\r\n    rightArrowImgElement.src = _images_rightArrow_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    rightArrowImgElement.classList.add('rightArrowImg');\r\n    submitEmailButton.appendChild(rightArrowImgElement);\r\n\r\n    const footerItem3 = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerItem', footerAcross, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, footerItem3, 'Contact Us');\r\n    const contactUsGrid = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'contactUsGrid', footerItem3, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, 'Call Us (403) 000-0000');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, '138 Lorem Ipsum Way NW');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, 'Ipsum, Lorem T1A 1A1');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, 'Lorem@Ipsum@gmail.com');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, 'Monday-Wednesday-Sunday');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, '8:00AM - 10:30PM');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, '8:00AM - 10:30PM');\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, '8:00AM - 10:30PM');\r\n}\r\n\r\nfunction generateLabel(forLinkName, className, parent, text) {\r\n    const element = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('label', className, parent, text);\r\n    element.setAttribute('for', forLinkName);\r\n    return element\r\n}\r\n\r\nfunction generateInput(type, idLinkName, required, parent, placeholder, min, max) {\r\n    const element = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('input', undefined, parent, undefined);\r\n    element.setAttribute('type', type);\r\n    element.setAttribute('id', idLinkName);\r\n\r\n    if (required) {\r\n        element.setAttribute('required', true);\r\n    }\r\n\r\n    if (min && max) {\r\n        element.setAttribute('min', min);\r\n        element.setAttribute('max', max);\r\n    }\r\n\r\n    if (placeholder) {\r\n        element.setAttribute('placeholder', placeholder);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/generateElement.js":
/*!********************************!*\
  !*** ./src/generateElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateElement: () => (/* binding */ generateElement)\n/* harmony export */ });\nfunction generateElement(type, className, parent, innerText) {\r\n    const element = document.createElement(type);\r\n    if (className) {\r\n        const classes = className.split(\" \");\r\n        for (let i = 0; i < classes.length; i++) {\r\n            element.classList.add(classes[i]);\r\n        }\r\n    }\r\n    if (innerText) {\r\n        element.innerHTML = innerText;\r\n    }\r\n    parent.appendChild(element);\r\n    return element\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/generateElement.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHomePage: () => (/* binding */ generateHomePage)\n/* harmony export */ });\n/* harmony import */ var _images_homeBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/homeBackground.jpg */ \"./src/images/homeBackground.jpg\");\n/* harmony import */ var _generateElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateElement.js */ \"./src/generateElement.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction generateHomePage() {\r\n\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_2__.generateNavBar)(false);\r\n\r\n    const mainLeft = document.querySelector(\".mainLeft\");\r\n    const homeMainCaption = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'homeMainCaption', mainLeft, undefined);\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', undefined, homeMainCaption, 'Discover your taste');\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('h1', undefined, homeMainCaption, 'Eat healthy and Natural Food');\r\n    const menuButtonMain = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('button', 'menu', homeMainCaption, undefined);\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', undefined, menuButtonMain, 'Discover Menu');\r\n    const mainRight = document.querySelector(\".mainRight\");\r\n\r\n    const homeBackgroundImg = new Image();\r\n    homeBackgroundImg.src = _images_homeBackground_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    homeBackgroundImg.classList.add('mainRightImg');\r\n    mainRight.appendChild(homeBackgroundImg);\r\n\r\n    menuButtonMain.addEventListener('click', () => {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.loadPage)('menu');\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n function loadPage(pageType) {\r\n    clearPage();\r\n    switch(pageType) {\r\n        case 'home':\r\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.generateHomePage)();\r\n            break;\r\n        case 'menu':\r\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.generateMenuPage)();\r\n            break;\r\n        case 'contact':\r\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.generateContactPage)();\r\n            break;\r\n    }\r\n    addListeners();\r\n}\r\n\r\nfunction clearPage() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n}\r\n\r\nfunction addListeners() {\r\n    const homeButton = document.querySelector('.navHome');\r\n    const menuButton = document.querySelector('.navMenu');\r\n    const contactButton = document.querySelector('.navContact');\r\n    homeButton.addEventListener('click', () => {\r\n        loadPage('home');\r\n    });\r\n\r\n    menuButton.addEventListener('click', () => {\r\n        loadPage('menu');\r\n    });\r\n\r\n    contactButton.addEventListener('click', () => {\r\n        loadPage('contact');\r\n    });\r\n}\r\n\r\nloadPage('home');\r\n\r\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenuPage: () => (/* binding */ generateMenuPage)\n/* harmony export */ });\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _generateElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateElement.js */ \"./src/generateElement.js\");\n\r\n\r\n\r\n\r\nfunction generateMenuPage() {\r\n    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.generateNavBar)(true);\r\n\r\n    const content = document.getElementById('content');\r\n    const centerDiv = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'centerDiv', content, undefined);\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'discoverHeader', centerDiv, 'Discover');\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'foodMenuHeader', centerDiv, 'Our Food Menu');\r\n\r\n    const menuItems = [\r\n        {title: 'Grilled Salmon',\r\n         price: '$25',\r\n         ingredients: 'Salmon + Glaze + Veggies + Potatoes'},\r\n        {title: 'Truffle Mushroom Risotto',\r\n        price: '$20',\r\n        ingredients: 'Truffles + Mushrooms + Arborio Rice'},\r\n\r\n        {title: 'Creamy Tomato Soup',\r\n        price: '$10',\r\n        ingredients: 'Tomatoes + Herbs + Cream'},\r\n        {title: 'Grilled Chicken Salad',\r\n        price: '$10',\r\n        ingredients: 'Chicken + Rice + Salad + Spinach'},\r\n\r\n        {title: 'Chocolate Delight',\r\n        price: '$15',\r\n        ingredients: 'Chocolate + Mousse + Chocolate Ganache'},\r\n        {title: 'Straberry Sponge Cake',\r\n        price: '$17',\r\n        ingredients: 'Strawberries + Sponge Cake + Caramel Glaze'},\r\n\r\n        {title: 'Minty Mojito',\r\n        price: '$5',\r\n        ingredients: 'Mint Leaves + Sparkling Water + Lime Juice'},\r\n        {title: 'Water',\r\n        price: '$0',\r\n        ingredients: 'Water'},\r\n    ];\r\n\r\n    const menuItemsGrid = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'menuItemsGrid', centerDiv, undefined);\r\n    generateMenuCard(menuItemsGrid, 'Main Course', menuItems.slice(0, 2));\r\n    generateMenuCard(menuItemsGrid, 'Soups & Salads', menuItems.slice(2, 4));\r\n    generateMenuCard(menuItemsGrid, 'Desserts', menuItems.slice(4, 6));\r\n    generateMenuCard(menuItemsGrid, 'Drinks', menuItems.slice(6, 8));\r\n}\r\n\r\nfunction generateMenuCard(parent, menuTitle, menuItems) {\r\n    const menuCard = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'menuCard', parent, undefined);\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'menuTitle', menuCard, menuTitle);\r\n    generateMenuItem(menuCard, menuItems[0].title, menuItems[0].price, menuItems[0].ingredients);\r\n    generateMenuItem(menuCard,  menuItems[1].title, menuItems[1].price, menuItems[1].ingredients);\r\n}\r\n\r\nfunction generateMenuItem(parent, foodTitle, price, ingredients) {\r\n    const menuItem = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'menuItem', parent, undefined);\r\n    const itemTitle = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'itemTitle', menuItem, undefined);\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', undefined, itemTitle, foodTitle);\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'underline', itemTitle, undefined);\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', undefined, itemTitle, price);\r\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', 'ingredients', menuItem, ingredients);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateNavBar: () => (/* binding */ generateNavBar)\n/* harmony export */ });\n/* harmony import */ var _generateElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateElement */ \"./src/generateElement.js\");\n\r\n\r\nfunction generateNavBar(makeMainContainerShort) {\r\n\r\n    const content = document.getElementById('content');\r\n\r\n    let containerClass = 'mainContainerLong';\r\n    if (makeMainContainerShort) {\r\n        containerClass = 'mainContainerShort';\r\n        content.classList.add('makeContentFullScreenFlexbox');\r\n    }\r\n\r\n    const mainContainer = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', containerClass, content, undefined);\r\n    const mainLeft = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'mainLeft', mainContainer, undefined);\r\n\r\n    // Fill in the left side of the navbar background\r\n    if (makeMainContainerShort) {\r\n        (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navbarLeft', mainLeft, undefined);\r\n    }\r\n\r\n    const mainRight = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'mainRight', mainContainer, undefined);\r\n    const navBar = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navbar', mainRight , undefined);\r\n\r\n    const navHome = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navHome underlineEffect', navBar, undefined);\r\n    const homeButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('button', undefined, navHome, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('h2', undefined, homeButton, 'Home');\r\n\r\n    const navMenu = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navMenu underlineEffect', navBar, undefined);\r\n    const menuButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('button', undefined, navMenu, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('h2', undefined, menuButton, 'Menu');\r\n\r\n    const navContact = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navContact underlineEffect', navBar, undefined);\r\n    const contactButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('button', undefined, navContact, undefined);\r\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('h2', undefined, contactButton, 'Contact');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/navbar.js?");

/***/ }),

/***/ "./src/images/contactBackground.jpg":
/*!******************************************!*\
  !*** ./src/images/contactBackground.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ca97d08409a608dab80.jpg\";\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/images/contactBackground.jpg?");

/***/ }),

/***/ "./src/images/homeBackground.jpg":
/*!***************************************!*\
  !*** ./src/images/homeBackground.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5d0cede0fa64d873ef1.jpg\";\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/images/homeBackground.jpg?");

/***/ }),

/***/ "./src/images/rightArrow.svg":
/*!***********************************!*\
  !*** ./src/images/rightArrow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2708b7c4998967d3ee6.svg\";\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/images/rightArrow.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;