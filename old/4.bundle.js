(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/cancelAjax.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cancelAjax.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ajax: ''
    };
  },
  created: function created() {
    this.test();
  },
  methods: {
    queryAjax: function queryAjax() {
      this.$axios({
        methods: 'get',
        uri: '/json/newslist/news',
        successCallback: function successCallback(res) {
          console.log(res);
        }
      });
    },
    cancel: function cancel() {
      this.$router.push('/keepalive');
    },
    test: function test() {
      this.$axios({
        methods: 'get',
        uri: 'http://161.117.187.9:8282/api',
        successCallback: function successCallback(res) {
          console.log(res);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/cancelAjax.vue?vue&type=template&id=6db768ca&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cancelAjax.vue?vue&type=template&id=6db768ca& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-button",
        {
          attrs: { type: "primary", size: "small" },
          on: { click: _vm.queryAjax }
        },
        [_vm._v("发送请求")]
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { type: "warning", size: "small" },
          on: { click: _vm.cancel }
        },
        [_vm._v("中断ajax")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/cancelAjax.vue":
/*!***************************************!*\
  !*** ./src/components/cancelAjax.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cancelAjax_vue_vue_type_template_id_6db768ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancelAjax.vue?vue&type=template&id=6db768ca& */ "./src/components/cancelAjax.vue?vue&type=template&id=6db768ca&");
/* harmony import */ var _cancelAjax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancelAjax.vue?vue&type=script&lang=js& */ "./src/components/cancelAjax.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cancelAjax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cancelAjax_vue_vue_type_template_id_6db768ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cancelAjax_vue_vue_type_template_id_6db768ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/cancelAjax.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/cancelAjax.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/cancelAjax.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelAjax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4!../../node_modules/vue-loader/lib??vue-loader-options!./cancelAjax.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/cancelAjax.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelAjax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/cancelAjax.vue?vue&type=template&id=6db768ca&":
/*!**********************************************************************!*\
  !*** ./src/components/cancelAjax.vue?vue&type=template&id=6db768ca& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelAjax_vue_vue_type_template_id_6db768ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./cancelAjax.vue?vue&type=template&id=6db768ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/cancelAjax.vue?vue&type=template&id=6db768ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelAjax_vue_vue_type_template_id_6db768ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelAjax_vue_vue_type_template_id_6db768ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);