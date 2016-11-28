import '../../../css/article.css';

import DataService from '../services/dataService';
import HtmlService from '../services/htmlService';

// controller get requests, generate nesessary html and put it in DOM
class ThemeController {
    constructor() {
        this.dataService = new DataService();
        this.htmlService = new HtmlService();
    }

    fillThemes() {
        this.dataService.getAllThemes().then((data) => {

            // after getting data I converted it into html text
            let themesHtml = this.htmlService.getThemesHtml(data, this);

            // found container for pushing html articles
            let container = document.getElementById('content');

            if (container) {
                // pushed articles into container
                container.innerHTML = themesHtml.join(' ');
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    fillArticles(theme) {
        this.dataService.getArticlesForThema(theme).then((data) => {

            //create back-btn element
            let back = document.createElement("div");
            back.setAttribute("class", "back-btn");
            back.innerHTML = "Back";
            back.addEventListener("click", this.fillThemes.bind(this), false);

            // create articles div and fill it by articles
            let articles = document.createElement("div");
            articles.setAttribute("class", "articles");
            articles.innerHTML = this.htmlService.getArticlesHtml(data).join(' ');

            // found 'content' container for pushing back-btn and articles html
            let articlesContainer = document.getElementById('content');
            articlesContainer.innerHTML = '';
            articlesContainer.appendChild(back);
            articlesContainer.appendChild(articles);

        }).catch((err) => {
            console.log(err);
        });
    }

    // init start page
    init() {
        this.fillThemes();
    }
}

module.exports = ThemeController;
