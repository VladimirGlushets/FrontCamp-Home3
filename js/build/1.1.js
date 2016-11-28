webpackJsonp_name_([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(6);
	
	var _dataService = __webpack_require__(8);
	
	var _dataService2 = _interopRequireDefault(_dataService);
	
	var _htmlService = __webpack_require__(10);
	
	var _htmlService2 = _interopRequireDefault(_htmlService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// controller get requests, generate nesessary html and put it in DOM
	var ThemeController = function () {
	    function ThemeController() {
	        _classCallCheck(this, ThemeController);
	
	        this.dataService = new _dataService2.default();
	        this.htmlService = new _htmlService2.default();
	    }
	
	    _createClass(ThemeController, [{
	        key: 'fillThemes',
	        value: function fillThemes() {
	            var _this = this;
	
	            this.dataService.getAllThemes().then(function (data) {
	
	                // after getting data I converted it into html text
	                var themesHtml = _this.htmlService.getThemesHtml(data, _this);
	
	                // found container for pushing html articles
	                var container = document.getElementById('content');
	
	                if (container) {
	                    // pushed articles into container
	                    container.innerHTML = themesHtml.join(' ');
	                }
	            }).catch(function (err) {
	                console.log(err);
	            });
	        }
	    }, {
	        key: 'fillArticles',
	        value: function fillArticles(theme) {
	            var _this2 = this;
	
	            this.dataService.getArticlesForThema(theme).then(function (data) {
	
	                //create back-btn element
	                var back = document.createElement("div");
	                back.setAttribute("class", "back-btn");
	                back.innerHTML = "Back";
	                back.addEventListener("click", _this2.fillThemes.bind(_this2), false);
	
	                // create articles div and fill it by articles
	                var articles = document.createElement("div");
	                articles.setAttribute("class", "articles");
	                articles.innerHTML = _this2.htmlService.getArticlesHtml(data).join(' ');
	
	                // found 'content' container for pushing back-btn and articles html
	                var articlesContainer = document.getElementById('content');
	                articlesContainer.innerHTML = '';
	                articlesContainer.appendChild(back);
	                articlesContainer.appendChild(articles);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        }
	
	        // init start page
	
	    }, {
	        key: 'init',
	        value: function init() {
	            this.fillThemes();
	        }
	    }]);
	
	    return ThemeController;
	}();
	
	module.exports = ThemeController;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./article.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./article.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".content-container .back-btn {\r\n    cursor: pointer;\r\n    border: solid 1px orange;\r\n    font-weight: bold;\r\n    padding: 8px;\r\n    text-align: center;\r\n    margin: 15px;\r\n    width: 70px;\r\n}\r\n\r\n.content-container .back-btn:hover {\r\n    background-color: #ffc183;\r\n}\r\n\r\n.article-container {\r\n    margin-top: 5px;\r\n    background-color: white;\r\n    padding: 15px;\r\n}\r\n\r\n.article-container:hover {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.article-container .body {\r\n    padding-right: 5px;\r\n    /*display: inline-block;*/\r\n    overflow: hidden;\r\n}\r\n\r\n.article-container .body .title {\r\n    margin-bottom: 15px;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n.article-container .body .title a {\r\n    color: red;\r\n    text-decoration: none;\r\n}\r\n\r\n.article-container .body .author {\r\n    color: green;\r\n    text-align: left;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.article-container .body .publish-at {\r\n    color: green;\r\n    text-align: left;\r\n    margin-top: 15px;\r\n}\r\n\r\n.article-container .image {\r\n    float: right;\r\n    margin-left: 15px;\r\n    display: table;\r\n}\r\n\r\n.article-container .image .floater {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 250px;\r\n    height: 150px;\r\n}\r\n\r\n.article-container .image img {\r\n    border: 0px;\r\n    float: right;\r\n    width: auto;\r\n    height: auto;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n/* Portrait tablet to landscape and desktop */\r\n\r\n@media all and (min-width: 768px) and (max-width: 979px) {\r\n    .content-container {\r\n        width: 100%;\r\n    }\r\n    .article-container {\r\n        padding: 15px;\r\n        /*display: flex;*/\r\n        justify-content: center;\r\n        flex-direction: row;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 551px) and (max-width: 768px) {\r\n    .content-container {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n\r\n/* Landscape phone to portrait tablet */\r\n\r\n@media all and (max-width: 550px) {\r\n    .content-container {\r\n        width: 100%;\r\n    }\r\n    .article-container .body {\r\n        width: 100%;\r\n        margin-right: 5px;\r\n        margin-left: 5px;\r\n    }\r\n    .article-container .image {\r\n        display: none;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _urlService = __webpack_require__(9);
	
	var _urlService2 = _interopRequireDefault(_urlService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// service for providing source data from API
	var DataService = function () {
	    function DataService() {
	        _classCallCheck(this, DataService);
	
	        this.urlService = new _urlService2.default();
	    }
	
	    _createClass(DataService, [{
	        key: 'getAllThemes',
	        value: function getAllThemes() {
	            return axios.get(this.urlService.getThemesUrl()).then(function (response) {
	                if (response.status != 200) {
	                    console.log(response);
	                } else {
	                    return response.data.sources;
	                }
	            }).catch(function (err) {
	                console.log(err);
	            });
	        }
	    }, {
	        key: 'getArticlesForThema',
	        value: function getArticlesForThema(thema) {
	            return axios.get(this.urlService.getArticlesUrl(thema)).then(function (response) {
	                if (response.status != 200) {
	                    console.log(response);
	                } else {
	                    return response.data.articles;
	                }
	            }).catch(function (err) {
	                console.log(err);
	            });
	        }
	    }]);
	
	    return DataService;
	}();
	
	exports.default = DataService;
	;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var themesUrl = 'https://newsapi.org/v1/sources';
	var apiKey = '05d1310787a94c24a707f1c3c8d2584c';
	
	var UrlService = function () {
	    function UrlService() {
	        _classCallCheck(this, UrlService);
	    }
	
	    _createClass(UrlService, [{
	        key: 'getThemesUrl',
	        value: function getThemesUrl() {
	            return themesUrl;
	        }
	
	        // method generate and return url for current theme
	
	    }, {
	        key: 'getArticlesUrl',
	        value: function getArticlesUrl(theme) {
	            return 'https://newsapi.org/v1/articles?source=' + theme + '&apiKey=' + apiKey;
	        }
	    }]);
	
	    return UrlService;
	}();
	
	exports.default = UrlService;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// When I use modules feature it will be a private function (I think)
	var createThemes = function createThemes(themaJson, controller) {
	  return '\n    <div class="article-container">\n      <div class="body">\n        <div class="image">\n          <div class=\'floater\'>\n            <a href="#" onclick = "app.controller.fillArticles(\'' + themaJson.id + '\');" >\n              <img src="' + themaJson.urlsToLogos.small + '">\n              </a>\n          </div>\n        </div>\n\n        <div class="title">\n            <a href="#" onclick = "app.controller.fillArticles(\'' + themaJson.id + '\');">\n                ' + themaJson.name + '\n              </a>\n        </div>\n        <div class="description">' + themaJson.description + '</div>\n      </div>\n    </div>';
	};
	
	var createArticle = function createArticle(articleJson) {
	  return '\n    <div class="article-container">\n      <div class="body">\n        <div class="image">\n          <div class=\'floater\'>\n            <a href="' + articleJson.url + '" alt="Full article" target="_blank">\n              <img src="' + articleJson.urlToImage + '">\n            </a>\n          </div>\n        </div>\n\n            <div class="title">\n              <a href="' + articleJson.url + '" alt="Full article" target="_blank">\n                ' + articleJson.title + '\n              </a>\n            </div>\n            <div class="author">' + (articleJson.author ? 'by ' + articleJson.author : ' ') + '</div>\n            <div class="description">' + articleJson.description + '</div>\n            <div class="publish-at">' + (articleJson.publishedAt ? articleJson.publishedAt : ' ') + '</div>\n          </div>\n  </div>';
	};
	
	// service for converting JSON objects to HTML themes and articles objects
	
	var HtmlService = function () {
	  function HtmlService() {
	    _classCallCheck(this, HtmlService);
	  }
	
	  _createClass(HtmlService, [{
	    key: 'getThemesHtml',
	    value: function getThemesHtml(themes, callback) {
	      return themes.map(function (el) {
	        return createThemes(el, callback);
	      });
	    }
	  }, {
	    key: 'getArticlesHtml',
	    value: function getArticlesHtml(articles) {
	      return articles.map(function (el) {
	        return createArticle(el);
	      });
	    }
	  }]);
	
	  return HtmlService;
	}();
	
	exports.default = HtmlService;

/***/ }
]);
//# sourceMappingURL=1.1.js.map