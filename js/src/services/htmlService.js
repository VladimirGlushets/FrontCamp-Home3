// When I use modules feature it will be a private function (I think)
const createThemes = function(themaJson, controller) {
    return `
    <div class="article-container">
      <div class="body">
        <div class="image">
          <div class='floater'>
            <a href="#" onclick = "app.controller.fillArticles('${themaJson.id}');" >
              <img src="${themaJson.urlsToLogos.small}">
              </a>
          </div>
        </div>

        <div class="title">
            <a href="#" onclick = "app.controller.fillArticles('${themaJson.id}');">
                ${themaJson.name}
              </a>
        </div>
        <div class="description">${themaJson.description}</div>
      </div>
    </div>`;
}

const createArticle = function(articleJson) {
    return `
    <div class="article-container">
      <div class="body">
        <div class="image">
          <div class='floater'>
            <a href="${articleJson.url}" alt="Full article" target="_blank">
              <img src="${articleJson.urlToImage}">
            </a>
          </div>
        </div>

            <div class="title">
              <a href="${articleJson.url}" alt="Full article" target="_blank">
                ${articleJson.title}
              </a>
            </div>
            <div class="author">${articleJson.author ? 'by ' + articleJson.author : ' '}</div>
            <div class="description">${articleJson.description}</div>
            <div class="publish-at">${articleJson.publishedAt ? articleJson.publishedAt : ' '}</div>
          </div>
  </div>`;
}

// service for converting JSON objects to HTML themes and articles objects
export default class HtmlService {

    getThemesHtml(themes, callback) {
        return themes.map((el) => createThemes(el, callback));
    }

    getArticlesHtml(articles) {
        return articles.map((el) => createArticle(el));
    }
}
