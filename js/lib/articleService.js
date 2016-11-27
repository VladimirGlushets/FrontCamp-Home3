"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// When I use modules feature it will be a private function (I think)
var createArticle = function createArticle(articleJson) {
  return "\n  <div class=\"article-container\">\n      <div class=\"body\">\n      <span class=\"image\">\n        <a href=\"" + articleJson.url + "\" alt=\"Full article\" target=\"_blank\">\n          <img src=\"" + articleJson.urlToImage + "\">\n        </a>\n      </span>\n\n          <div class=\"title\">\n            <a href=\"" + articleJson.url + "\" alt=\"Full article\" target=\"_blank\">\n              " + articleJson.title + "\n            </a>\n          </div>\n          <div class=\"author\">by " + articleJson.author + "</div>\n          <div class=\"description\">" + articleJson.description + "</div>\n          <div class=\"publish-at\">" + articleJson.publishedAt + "</div>\n      </div>\n  </div>";
};

// service for converting JSON objects to HTML articles objects

var ArticleService = function () {
  function ArticleService() {
    _classCallCheck(this, ArticleService);
  }

  _createClass(ArticleService, [{
    key: "getArticlesHtml",
    value: function getArticlesHtml(articles) {
      return articles.map(function (el) {
        return createArticle(el);
      });
    }
  }]);

  return ArticleService;
}();