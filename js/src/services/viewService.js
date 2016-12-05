import Constants from '../common/const';
import ComponentFactory from '../factories/componentFactory';


const getBackEl = function(callback) {
    let back = document.createElement("div");
    back.setAttribute("class", "back-btn");
    back.innerHTML = "Back";
    back.addEventListener("click", callback, false);
    return back;
}

let instance = null;

// service for converting JSON objects to HTML themes and articles objects
export default class ViewService {
    constructor() {
        this.componentFactory = new ComponentFactory();
    }

    static getInstance() {
        if (!instance) {
            instance = new ViewService();
        }
        // return singltone
        return instance;
    }

    getThemesView(sourceObjs, callback) {

        // get themes view components
        let viewElements = sourceObjs.map((el) => this.componentFactory.createViewComponent(el, Constants.THEME, callback).getView());

        let container = document.createElement("div");

        viewElements.forEach((el) => {
            container.appendChild(el);
        });

        return container;
    }

    getArticlesView(sourceObjs, callback) {

        // get articles view components
        let viewElements = sourceObjs.map((el) => this.componentFactory.createViewComponent(el, Constants.ARTICLE).getView());

        let container = document.createElement("div");

        //create back-btn element
        let back = getBackEl(callback);
        container.appendChild(back);

        viewElements.forEach((el) => {
            container.appendChild(el);
        });

        return container;
    }
}
