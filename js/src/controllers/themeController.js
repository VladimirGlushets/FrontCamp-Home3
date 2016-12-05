import '../../../css/article.css';

import DataServiceProxy from '../services/dataServiceProxy';
import ViewService from '../services/viewService';
import Observeble from '../common/observeble';
import Constants from '../common/const';

// controller get requests, generate nesessary html and put it in DOM
export default class ThemeController {
    constructor() {
        this.dataServiceProxy = DataServiceProxy.getInstance();
        this.viewService = ViewService.getInstance();
    }

    fillThemes() {
        // get source data
        this.dataServiceProxy.getAllThemes().then((data) => {

            // after getting data I converted it to DOM elements
            let themesView = this.viewService.getThemesView(data, this.fillArticles.bind(this));

            // render view
            this.renderView(themesView);

        }).catch((err) => {
            console.log(err);
        });
    }

    fillArticles(theme) {
        //get source data
        this.dataServiceProxy.getArticlesForThema(theme).then((data) => {

            // after getting data I converted it to DOM elements
            let articlesView = this.viewService.getArticlesView(data, this.fillThemes.bind(this));

            // render view
            this.renderView(articlesView);

        }).catch((err) => {
            console.log(err);
        });
    }

    renderView(view) {
        let container = document.getElementById('content');
        if (container) {
            container.innerHTML = '';
            container.appendChild(view);
        }
    }

    // init start page
    init() {
        Observeble.getInstance().subscribe(Constants.CHANGE_THEME, this.fillArticles.bind(this));
        this.fillThemes();
    }
}
