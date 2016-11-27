'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// controller get requests, generate nesessary html and put it in DOM
var ThemeController = function () {
    function ThemeController() {
        _classCallCheck(this, ThemeController);

        this.dataService = new DataService();
        this.htmlService = new HtmlService();
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