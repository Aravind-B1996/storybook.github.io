(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{293:function(module,exports,__webpack_require__){__webpack_require__(294),__webpack_require__(444),module.exports=__webpack_require__(445)},360:function(module,exports){},445:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(291);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(623)],module)}.call(this,__webpack_require__(446)(module))},623:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":624,"./1-Button.stories.js":631,"./index.stories.js":644};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=623},624:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(292),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(66);__webpack_exports__.default={title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome};var ToStorybook=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})};ToStorybook.displayName="ToStorybook",ToStorybook.story={name:"to Storybook"},ToStorybook.__docgenInfo={description:"",methods:[],displayName:"ToStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\0-Welcome.stories.js"]={name:"ToStorybook",docgenInfo:ToStorybook.__docgenInfo,path:"stories\\0-Welcome.stories.js"})},631:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(182),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(66);__webpack_exports__.default={title:"Button",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button};var Text=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")};Text.displayName="Text";var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),Emoji=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},_ref)};Emoji.displayName="Emoji",Text.__docgenInfo={description:"",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\1-Button.stories.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"stories\\1-Button.stories.js"}),Emoji.__docgenInfo={description:"",methods:[],displayName:"Emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\1-Button.stories.js"]={name:"Emoji",docgenInfo:Emoji.__docgenInfo,path:"stories\\1-Button.stories.js"})},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"withAButton",(function(){return withAButton})),__webpack_require__.d(__webpack_exports__,"asDynamicVariables",(function(){return asDynamicVariables}));__webpack_require__(15);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(74);__webpack_exports__.default={title:"Storybook Knobs",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs]};var withAButton=function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1)},Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Label","Hello Storybook"))};withAButton.displayName="withAButton";var asDynamicVariables=function(){var name=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Name","James"),age=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Age",35),content="I am ".concat(name," and I'm ").concat(age," years old.");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,content)};asDynamicVariables.displayName="asDynamicVariables",withAButton.__docgenInfo={description:"",methods:[],displayName:"withAButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\index.stories.js"]={name:"withAButton",docgenInfo:withAButton.__docgenInfo,path:"stories\\index.stories.js"}),asDynamicVariables.__docgenInfo={description:"",methods:[],displayName:"asDynamicVariables"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\index.stories.js"]={name:"asDynamicVariables",docgenInfo:asDynamicVariables.__docgenInfo,path:"stories\\index.stories.js"})}},[[293,1,2]]]);
//# sourceMappingURL=main.37b85111b2b92ce3d2a0.bundle.js.map