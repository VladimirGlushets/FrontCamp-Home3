const themesUrl = 'https://newsapi.org/v1/sources';
const apiKey = '05d1310787a94c24a707f1c3c8d2584c';

export default class UrlService {
    getThemesUrl() {
        return themesUrl;
    }

    // method generate and return url for current theme
    getArticlesUrl(theme) {
        return `https://newsapi.org/v1/articles?source=${theme}&apiKey=${apiKey}`;
    }
}
