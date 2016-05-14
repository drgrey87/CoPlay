webpackHotUpdate(0,{

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(24), ReactMount = __webpack_require__(26), React = __webpack_require__(79); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(79);

	var _react2 = _interopRequireDefault(_react);

	var _raisedButton = __webpack_require__(495);

	var _raisedButton2 = _interopRequireDefault(_raisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page = function (_Component) {
	  _inherits(Page, _Component);

	  function Page() {
	    _classCallCheck(this, Page);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
	  }

	  _createClass(Page, [{
	    key: 'onPageBtnClick',
	    value: function onPageBtnClick() {
	      this.props.setPage(3334);
	    }
	  }, {
	    key: 'uploadData',
	    value: function uploadData() {
	      this.props.uploadPage();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var page = this.props.page;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: '1111', onClick: this.onPageBtnClick.bind(this) },
	          page,
	          ' - it\'s page mo'
	        ),
	        _react2.default.createElement(
	          'h1',
	          { onClick: this.uploadData.bind(this) },
	          page,
	          ' - hahaha'
	        ),
	        _react2.default.createElement(_raisedButton2.default, { label: 'Default' })
	      );
	    }
	  }]);

	  return Page;
	}(_react.Component);

	exports.default = Page;

	Page.propTypes = {
	  page: _react.PropTypes.number.isRequired,
	  setPage: _react.PropTypes.func.isRequired
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(491); if (makeExportsHot(module, __webpack_require__(79))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Page.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})