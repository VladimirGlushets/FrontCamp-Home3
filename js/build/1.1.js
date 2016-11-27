webpackJsonp_name_([1,2],[,function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),c=t(2),l=i(c),o=t(4),u=i(o),s=function(){function e(){r(this,e),this.dataService=new l.default,this.htmlService=new u.default}return a(e,[{key:"fillThemes",value:function(){var e=this;this.dataService.getAllThemes().then(function(n){var t=e.htmlService.getThemesHtml(n,e),i=document.getElementById("content");i&&(i.innerHTML=t.join(" "))}).catch(function(e){console.log(e)})}},{key:"fillArticles",value:function(e){var n=this;this.dataService.getArticlesForThema(e).then(function(e){var t=document.createElement("div");t.setAttribute("class","back-btn"),t.innerHTML="Back",t.addEventListener("click",n.fillThemes.bind(n),!1);var i=document.createElement("div");i.setAttribute("class","articles"),i.innerHTML=n.htmlService.getArticlesHtml(e).join(" ");var r=document.getElementById("content");r.innerHTML="",r.appendChild(t),r.appendChild(i)}).catch(function(e){console.log(e)})}},{key:"init",value:function(){this.fillThemes()}}]),e}();e.exports=s},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),c=t(3),l=i(c),o=function(){function e(){r(this,e),this.urlService=new l.default}return a(e,[{key:"getAllThemes",value:function(){return axios.get(this.urlService.getThemesUrl()).then(function(e){return 200==e.status?e.data.sources:void console.log(e)}).catch(function(e){console.log(e)})}},{key:"getArticlesForThema",value:function(e){return axios.get(this.urlService.getArticlesUrl(e)).then(function(e){return 200==e.status?e.data.articles:void console.log(e)}).catch(function(e){console.log(e)})}}]),e}();n.default=o},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),r="https://newsapi.org/v1/sources",a="05d1310787a94c24a707f1c3c8d2584c",c=function(){function e(){t(this,e)}return i(e,[{key:"getThemesUrl",value:function(){return r}},{key:"getArticlesUrl",value:function(e){return"https://newsapi.org/v1/articles?source="+e+"&apiKey="+a}}]),e}();n.default=c},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),r=function(e,n){return'\n    <div class="article-container">\n      <div class="body">\n        <div class="image">\n          <div class=\'floater\'>\n            <a href="#" onclick = "app.controller.fillArticles(\''+e.id+'\');" >\n              <img src="'+e.urlsToLogos.small+'">\n              </a>\n          </div>\n        </div>\n\n        <div class="title">\n            <a href="#" onclick = "app.controller.fillArticles(\''+e.id+"');\">\n                "+e.name+'\n              </a>\n        </div>\n        <div class="description">'+e.description+"</div>\n      </div>\n    </div>"},a=function(e){return'\n    <div class="article-container">\n      <div class="body">\n        <div class="image">\n          <div class=\'floater\'>\n            <a href="'+e.url+'" alt="Full article" target="_blank">\n              <img src="'+e.urlToImage+'">\n            </a>\n          </div>\n        </div>\n\n            <div class="title">\n              <a href="'+e.url+'" alt="Full article" target="_blank">\n                '+e.title+'\n              </a>\n            </div>\n            <div class="author">'+(e.author?"by "+e.author:" ")+'</div>\n            <div class="description">'+e.description+'</div>\n            <div class="publish-at">'+(e.publishedAt?e.publishedAt:" ")+"</div>\n          </div>\n  </div>"},c=function(){function e(){t(this,e)}return i(e,[{key:"getThemesHtml",value:function(e,n){return e.map(function(e){return r(e,n)})}},{key:"getArticlesHtml",value:function(e){return e.map(function(e){return a(e)})}}]),e}();n.default=c}]);
//# sourceMappingURL=1.1.js.map