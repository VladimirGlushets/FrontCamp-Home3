'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// When I use modules feature it will be a private function (I think)
var createThemes = function createThemes(themaJson, controller) {
  return '\n    <div class="article-container">\n      <div class="body">\n        <div class="image">\n          <div class=\'floater\'>\n            <a href="#" onclick = "controller.fillArticles(\'' + themaJson.id + '\');" >\n              <img src="' + themaJson.urlsToLogos.small + '">\n              </a>\n          </div>\n        </div>\n\n        <div class="title">\n            <a href="#" onclick = "controller.fillArticles(\'' + themaJson.id + '\');">\n                ' + themaJson.name + '\n              </a>\n        </div>\n        <div class="description">' + themaJson.description + '</div>\n      </div>\n    </div>';
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