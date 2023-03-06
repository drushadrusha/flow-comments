// ==UserScript==
// @name         Enable Disqus on The-Flow.ru
// @namespace    https://github.com/drushadrusha
// @version      1.1
// @description  ...
// @author       drushadrusha
// @match        https://the-flow.ru/*
// @grant        none
// ==/UserScript==

(function (window, undefined) {

    if (window.location.hostname == ("the-flow.ru")){
        var articleDiv = document.getElementsByClassName('article__text c_post_text');
        var div = document.createElement('div');
        // make div 100% width
        div.style.width = '100%';
        // make div 100% height
        div.style.height = '200px';
        div.innerHTML = '<h3>comments</h3><div id="disqus_thread"></div><script type="text/javascript" src="https://the-flow2014.disqus.com/count.js"></script>';
        articleDiv[0].appendChild(div);
        // remove last style tag on page
        var style = document.getElementsByTagName('style');
        style[style.length - 1].remove();
    }

})(window);