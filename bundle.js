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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Roboto, sans-serif;\n    color: rgb(206, 206, 206);\n}\n\nbody, html {\n    height: 100%;\n}\n\n/*  */\n\nbody {\n    background-color: rgb(10, 10, 10);\n    overflow-x: hidden;\n}\n\nbutton {\n    border: none;\n    cursor: pointer;\n    font-size: 1.2rem;\n    background-color: transparent;\n}\n\n.content {\n    position: relative;\n}\n\n.mainContainerLong {\n\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template: 1fr / 1fr 2fr;\n}\n\n.mainLeft {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.homeMainCaption {\n    margin: 0px 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n    gap: 50px;\n}\n\n.mainLeft p {\n    font-size: 1.3rem;\n}\n\n.homeMainCaption > p {\n    color: gray;\n}\n\n.mainLeft h1 {\n    font-size: 2.5rem;\n}\n\n.mainLeft button {\n    background: rgb(255,60,0);\n    background: linear-gradient(90deg, rgba(255,60,0,1) 87%, rgba(255,149,0,1) 100%);\n    padding: 17px;\n    border-radius: 10px;\n}\n\n.mainLeft button:hover {\n    background: rgb(255,60,0);\n    background: linear-gradient(90deg, rgba(255,60,0,1) 87%, rgb(255, 213, 154) 100%);\n}\n\n.mainRight {\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n\n    display: grid;\n    grid-template:  70px 1fr / 1fr;\n\n}\n\n.navbar {\n    background-color: rgba(0, 0, 0, 0.288);\n\n    display: flex;\n    justify-content: space-around;\n    padding: 20px 40px;\n\n    grid-area: 1 / 1 / 2 / 2;\n    z-index: 1;\n}\n\n.navbar h2 {\n    color: rgb(235, 235, 235);\n}\n\n.mainRightImg {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n\n    grid-area: 1 / 1 / 3 / 2;\n}\n\n/* Button Underline Animation */\n\n.underlineEffect {\n    display: inline-block;\n    position: relative;\n}\n \n .underlineEffect:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 3px;\n    bottom: -5px;\n    left: 0;\n    background-color: rgba(255, 60, 0, 0.788);\n    transform-origin: bottom right;\n    transition: transform 0.25s ease-out;\n }\n \n .underlineEffect:hover:after {\n    transform: scaleX(1);\n    transform-origin: bottom left;\n}\n\n@media only screen and (max-width: 600px) {\n\n    .mainLeft {\n        grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .mainRightImg {\n        display: none;\n    }\n\n    .mainRight {\n        grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .homeMainCaption {\n        align-items: center;\n    }\n\n    .mainLeft h1 {\n        text-align: center;\n    }\n}\n\n/* Menu Page  */\n\n.makeContentFullScreenFlexbox {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n\n    /* height: 100vh; */\n    height: 100%;\n    width: 100vw;\n\n    gap: 30px;\n}\n\n.mainContainerShort {\n    height: auto;\n    width: 100vw;\n\n    display: grid;\n    grid-template: 1fr / 1fr 2fr;\n}\n\n.navbarLeft {\n    position: absolute;\n    top: 0;\n    height: 70px;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.288);\n}\n\n.centerDiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    margin-top: 35px;\n}\n\n.discoverHeader {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.884);\n    padding: 3px;\n    font-size: 1.7rem;\n    color: rgb(255, 106, 56);\n}\n\n.foodMenuHeader {\n    font-size: 2.8rem;\n}\n\n.menuItemsGrid {\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n    gap: 50px;\n    margin-bottom: 50px;\n}\n\n.menuCard {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menuTitle {\n    font-size: 2.5rem;\n    color: rgb(255, 106, 56);\n}\n\n.itemTitle {\n    display: flex;\n    gap: 10px;\n\n}\n\n.itemTitle p {\n    font-size: 1.3rem;\n}\n\n.underline {\n    flex: 1;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.884);\n    margin-bottom: 8px;\n}\n\n.ingredients {\n    color: rgb(161, 161, 161);\n    margin-top: 8px;\n}\n\n\n@media only screen and (max-width: 750px) {\n\n    .menuItemsGrid {\n        grid-template: 1fr 1fr / 1fr;\n        margin-bottom: 50px;\n    }\n}\n\n/* Contact Page  */\n\n.contactBackground {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: fixed;\n\n    width: 100%;\n    height: 100%;\n\n    object-fit: cover;\n    z-index: -1;\n    opacity: 0.8;\n\n}\n\n.form {\n    background-color: transparent;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.letsP {\n    color: rgb(255, 106, 56);\n    font-size: 1.5rem;\n}\n\n.bookH1 {\n    color: white;\n}\n\n.inputsGrid {\n    display: grid;\n    grid-template: repeat(3, 2.7rem) 4rem / 1fr 1fr 1fr;\n    gap: 25px;\n}\nlabel {\n    align-self: end;\n    color: white;\n}\n\ninput, .inputsGrid button {\n    border-radius: 5px;\n}\n\ninput {\n    border: none;\n    background-color: transparent;\n    border: 1px solid black;\n    color: white;\n    padding-left: 10px;\n}\n\n.inputsGrid input[type=\"email\"] {\n    grid-column: 1 / 4;\n}\n\ninput[type=\"month\"], input[type=\"time\"] {\n    color-scheme: dark;\n}\n\n.inputsGrid button {\n    background-color: rgb(255, 81, 23);\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    color: white;\n}\n\n::placeholder {\n    color: white;\n}\n\n/* Contact Page Form Validation Styling */\n\n/* -------------------- */\n\ninput:focus:valid {\n    background-color: rgba(0, 128, 0, 0.479);\n}\n\ninput:focus:invalid {\n    background-color: rgba(255, 0, 0, 0.363);\n}\n\ninput:not(:focus):valid {\n    background-color: rgba(0, 128, 0, 0.479);\n}\n\n@media only screen and (max-width: 600px) { \n\n    .inputsGrid {\n        grid-template: repeat(3, 2.7rem) 4rem / 1fr;\n    }\n}\n\n/* -------------------- */\n\n.footerContainer {\n    width: 100%;\n    height: 350px;\n    background-color: rgba(0, 0, 0, 0.363);\n    margin-top: auto;\n    padding: 40px;\n}\n\n.footerContainer * {\n    color: rgb(199, 199, 199)\n}\n\n.orangeSpan, .footerItem > p:first-child {\n    color: rgb(255, 106, 56);\n}\n\n.footerAcross {\n    display: flex;\n    justify-content: space-around;\n    margin-top: 30px;\n    gap: 20px;\n}\n\n.footerItem {\n   max-width: 450px;\n}\n\n.footerItem > p:first-child {\n    font-size: 1.5rem;\n}\n\n.aboutUs > p:nth-child(2), .footerItem input, .contactUsGrid {\n    margin-top: 20px;\n}\n\n.footerItem input {\n    height: 2.7rem;\n    width: 13.5rem;\n}\n\n.footerItem form {\n    position: relative;\n}\n\n.footerItem button {\n    position: absolute;\n    height: 2rem;\n    width: 2rem;\n    background-color: rgb(255, 81, 23);\n    border-radius: 10px;\n    top: 1.563rem;\n    right: 0.275rem;\n}\n\n.rightArrowImg {\n    height: 1.8rem;\n    width: 1.8rem;\n    padding-top: 4px;\n    padding-left: 1px;\n}\n\n.footerAcross > .footerItem:nth-child(2) {\n    white-space: nowrap;\n}\n\n.flexBox {\n    display: flex;\n    gap: 10px;\n}\n\n.contactUsGrid {\n    display: grid;\n    grid-template: repeat(8, 1rem) / 2fr;\n    gap: 7px;\n}\n\n.contactUsGrid > p {\n    white-space: nowrap;\n}\n\n@media only screen and (max-width: 600px) {\n\n\n    .footerContainer {\n        height: auto;\n    }\n\n    .footerAcross {\n        flex-direction: column;\n        gap: 40px;\n        padding-bottom: 40px;\n    }\n\n    .footerItem button {\n        left: 11.275rem;\n    }\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateContactPage: () => (/* binding */ generateContactPage)\n/* harmony export */ });\n/* harmony import */ var _images_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contactBackground.jpg */ \"./src/images/contactBackground.jpg\");\n/* harmony import */ var _images_rightArrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/rightArrow.svg */ \"./src/images/rightArrow.svg\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _generateElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateElement */ \"./src/generateElement.js\");\n\n\n\n\n\nfunction generateContactPage() {\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_2__.generateNavBar)(true);\n    \n    const content = document.getElementById('content');\n\n    const menuBackgroundImg = new Image();\n    menuBackgroundImg.src = _images_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    menuBackgroundImg.classList.add('contactBackground');\n    content.appendChild(menuBackgroundImg);\n\n    const centerdiv = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'centerDiv', content, undefined);\n    const form = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('form', 'form', centerdiv, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', 'letsP', form, 'Lets');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('h1', 'bookH1', form, 'Book a table');\n\n    const inputsGrid = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'inputsGrid', form, undefined);\n    generateLabel('pickDate', undefined, inputsGrid, 'Date *');\n    generateLabel('pickTime', undefined, inputsGrid, 'Time *');\n    generateLabel('pickGuests', undefined, inputsGrid, 'Guests *');\n\n    generateInput('month', 'pickDate', true, inputsGrid, undefined, undefined, undefined);\n    generateInput('time', 'pickTime', true, inputsGrid, undefined, undefined, undefined);\n    generateInput('number', 'pickGuests', true, inputsGrid, '0', '0', '10');\n    generateInput('email', 'enterEmail', true, inputsGrid, 'Email *', undefined, undefined);\n    const submitButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('button', undefined, inputsGrid, 'Check Availability');\n    submitButton.setAttribute('type', 'submit');\n\n    // Footer section\n\n    const footerContainer = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerContainer', content, undefined);\n    const theRestaurantH1 = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('h1', undefined, footerContainer, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('span', 'orangeSpan', theRestaurantH1, 'The ');\n    theRestaurantH1.innerHTML += 'Restaurant';\n\n    const footerAcross = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerAcross', footerContainer, undefined);\n    \n    const footerItem1 = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerItem aboutUs', footerAcross, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, footerItem1, 'About Us');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, footerItem1, `Lorem ipsum dolor sit amet\n    consectetur adipisicing elit. Quos architecto ad deserunt id, nisi possimus animi impedit \n    perferendis.`); \n\n    const footerItem2 = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerItem aboutUs', footerAcross, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, footerItem2, 'Get News & Offers');\n    const emailInputForm = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('form', undefined, footerItem2, undefined);\n    generateInput('email', 'enterEmailNews&Offers', true, footerItem2,'Enter your email', undefined, undefined);\n    const submitEmailButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('button',  undefined, emailInputForm, undefined);\n    submitEmailButton.setAttribute('type', 'submit');\n\n    const rightArrowImgElement = new Image();\n    rightArrowImgElement.src = _images_rightArrow_svg__WEBPACK_IMPORTED_MODULE_1__;\n    rightArrowImgElement.classList.add('rightArrowImg');\n    submitEmailButton.appendChild(rightArrowImgElement);\n\n    const footerItem3 = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'footerItem', footerAcross, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, footerItem3, 'Contact Us');\n    const contactUsGrid = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('div', 'contactUsGrid', footerItem3, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, 'Call Us (403) 000-0000');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, '138 Lorem Ipsum Way NW');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, 'Ipsum, Lorem T1A 1A1');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, 'Lorem@Ipsum@gmail.com');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, 'Monday-Wednesday-Sunday');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, '8:00AM - 10:30PM');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, '8:00AM - 10:30PM');\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('p', undefined, contactUsGrid, '8:00AM - 10:30PM');\n}\n\nfunction generateLabel(forLinkName, className, parent, text) {\n    const element = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('label', className, parent, text);\n    element.setAttribute('for', forLinkName);\n    return element\n}\n\nfunction generateInput(type, idLinkName, required, parent, placeholder, min, max) {\n    const element = (0,_generateElement__WEBPACK_IMPORTED_MODULE_3__.generateElement)('input', undefined, parent, undefined);\n    element.setAttribute('type', type);\n    element.setAttribute('id', idLinkName);\n\n    if (required) {\n        element.setAttribute('required', true);\n    }\n\n    if (min && max) {\n        element.setAttribute('min', min);\n        element.setAttribute('max', max);\n    }\n\n    if (placeholder) {\n        element.setAttribute('placeholder', placeholder);\n    }\n}\n\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/generateElement.js":
/*!********************************!*\
  !*** ./src/generateElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateElement: () => (/* binding */ generateElement)\n/* harmony export */ });\nfunction generateElement(type, className, parent, innerText) {\n    const element = document.createElement(type);\n    if (className) {\n        const classes = className.split(\" \");\n        for (let i = 0; i < classes.length; i++) {\n            element.classList.add(classes[i]);\n        }\n    }\n    if (innerText) {\n        element.innerHTML = innerText;\n    }\n    parent.appendChild(element);\n    return element\n}\n\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/generateElement.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHomePage: () => (/* binding */ generateHomePage)\n/* harmony export */ });\n/* harmony import */ var _images_homeBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/homeBackground.jpg */ \"./src/images/homeBackground.jpg\");\n/* harmony import */ var _generateElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateElement.js */ \"./src/generateElement.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\n\nfunction generateHomePage() {\n\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_2__.generateNavBar)(false);\n\n    const mainLeft = document.querySelector(\".mainLeft\");\n    const homeMainCaption = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'homeMainCaption', mainLeft, undefined);\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', undefined, homeMainCaption, 'Discover your taste');\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('h1', undefined, homeMainCaption, 'Eat healthy and Natural Food');\n    const menuButtonMain = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('button', 'menu', homeMainCaption, undefined);\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', undefined, menuButtonMain, 'Discover Menu');\n    const mainRight = document.querySelector(\".mainRight\");\n\n    const homeBackgroundImg = new Image();\n    homeBackgroundImg.src = _images_homeBackground_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    homeBackgroundImg.classList.add('mainRightImg');\n    mainRight.appendChild(homeBackgroundImg);\n\n    menuButtonMain.addEventListener('click', () => {\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.loadPage)('menu');\n    });\n}\n\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n function loadPage(pageType) {\n    clearPage();\n    switch(pageType) {\n        case 'home':\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.generateHomePage)();\n            break;\n        case 'menu':\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.generateMenuPage)();\n            break;\n        case 'contact':\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.generateContactPage)();\n            break;\n    }\n    addListeners();\n}\n\nfunction clearPage() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n}\n\nfunction addListeners() {\n    const homeButton = document.querySelector('.navHome');\n    const menuButton = document.querySelector('.navMenu');\n    const contactButton = document.querySelector('.navContact');\n    homeButton.addEventListener('click', () => {\n        loadPage('home');\n    });\n\n    menuButton.addEventListener('click', () => {\n        loadPage('menu');\n    });\n\n    contactButton.addEventListener('click', () => {\n        loadPage('contact');\n    });\n}\n\nloadPage('home');\n\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenuPage: () => (/* binding */ generateMenuPage)\n/* harmony export */ });\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _generateElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateElement.js */ \"./src/generateElement.js\");\n\n\n\n\nfunction generateMenuPage() {\n    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.generateNavBar)(true);\n\n    const content = document.getElementById('content');\n    const centerDiv = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'centerDiv', content, undefined);\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'discoverHeader', centerDiv, 'Discover');\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'foodMenuHeader', centerDiv, 'Our Food Menu');\n\n    const menuItems = [\n        {title: 'Grilled Salmon',\n         price: '$25',\n         ingredients: 'Salmon + Glaze + Veggies + Potatoes'},\n        {title: 'Truffle Mushroom Risotto',\n        price: '$20',\n        ingredients: 'Truffles + Mushrooms + Arborio Rice'},\n\n        {title: 'Creamy Tomato Soup',\n        price: '$10',\n        ingredients: 'Tomatoes + Herbs + Cream'},\n        {title: 'Grilled Chicken Salad',\n        price: '$10',\n        ingredients: 'Chicken + Rice + Salad + Spinach'},\n\n        {title: 'Chocolate Delight',\n        price: '$15',\n        ingredients: 'Chocolate + Mousse + Chocolate Ganache'},\n        {title: 'Straberry Sponge Cake',\n        price: '$17',\n        ingredients: 'Strawberries + Sponge Cake + Caramel Glaze'},\n\n        {title: 'Minty Mojito',\n        price: '$5',\n        ingredients: 'Mint Leaves + Sparkling Water + Lime Juice'},\n        {title: 'Water',\n        price: '$0',\n        ingredients: 'Water'},\n    ];\n\n    const menuItemsGrid = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'menuItemsGrid', centerDiv, undefined);\n    generateMenuCard(menuItemsGrid, 'Main Course', menuItems.slice(0, 2));\n    generateMenuCard(menuItemsGrid, 'Soups & Salads', menuItems.slice(2, 4));\n    generateMenuCard(menuItemsGrid, 'Desserts', menuItems.slice(4, 6));\n    generateMenuCard(menuItemsGrid, 'Drinks', menuItems.slice(6, 8));\n}\n\nfunction generateMenuCard(parent, menuTitle, menuItems) {\n    const menuCard = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'menuCard', parent, undefined);\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'menuTitle', menuCard, menuTitle);\n    generateMenuItem(menuCard, menuItems[0].title, menuItems[0].price, menuItems[0].ingredients);\n    generateMenuItem(menuCard,  menuItems[1].title, menuItems[1].price, menuItems[1].ingredients);\n}\n\nfunction generateMenuItem(parent, foodTitle, price, ingredients) {\n    const menuItem = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'menuItem', parent, undefined);\n    const itemTitle = (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'itemTitle', menuItem, undefined);\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', undefined, itemTitle, foodTitle);\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('div', 'underline', itemTitle, undefined);\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', undefined, itemTitle, price);\n    (0,_generateElement_js__WEBPACK_IMPORTED_MODULE_1__.generateElement)('p', 'ingredients', menuItem, ingredients);\n}\n\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateNavBar: () => (/* binding */ generateNavBar)\n/* harmony export */ });\n/* harmony import */ var _generateElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateElement */ \"./src/generateElement.js\");\n\n\nfunction generateNavBar(makeMainContainerShort) {\n\n    const content = document.getElementById('content');\n\n    let containerClass = 'mainContainerLong';\n    if (makeMainContainerShort) {\n        containerClass = 'mainContainerShort';\n        content.classList.add('makeContentFullScreenFlexbox');\n    }\n\n    const mainContainer = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', containerClass, content, undefined);\n    const mainLeft = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'mainLeft', mainContainer, undefined);\n\n    // Fill in the left side of the navbar background\n    if (makeMainContainerShort) {\n        (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navbarLeft', mainLeft, undefined);\n    }\n\n    const mainRight = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'mainRight', mainContainer, undefined);\n    const navBar = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navbar', mainRight , undefined);\n\n    const navHome = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navHome underlineEffect', navBar, undefined);\n    const homeButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('button', undefined, navHome, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('h2', undefined, homeButton, 'Home');\n\n    const navMenu = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navMenu underlineEffect', navBar, undefined);\n    const menuButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('button', undefined, navMenu, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('h2', undefined, menuButton, 'Menu');\n\n    const navContact = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('div', 'navContact underlineEffect', navBar, undefined);\n    const contactButton = (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('button', undefined, navContact, undefined);\n    (0,_generateElement__WEBPACK_IMPORTED_MODULE_0__.generateElement)('h2', undefined, contactButton, 'Contact');\n}\n\n\n\n//# sourceURL=webpack://odindynamicrestaurantpage/./src/navbar.js?");

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