// ==UserScript==
// @name         The Flow Comments
// @namespace    https://github.com/drushadrusha
// @version      1.0
// @description  Bring back comments on the-flow.ru
// @author       drushadrusha
// @match        https://the-flow.ru/*
// @grant        none
// ==/UserScript==

(function (window, undefined) {

    if (window.location.hostname == ("the-flow.ru")){
        var articleDiv = document.getElementsByClassName('article__text c_post_text');
        var div = document.createElement('div');
        // load disqus
        var d = document, s = d.createElement('script');
        s.src = 'https://the-flow2014.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        // create comments div
        div.innerHTML = '<div id="disqus_thread"></div>';
        articleDiv[0].appendChild(div);
        // remove last style tag on page
        var style = document.getElementsByTagName('style');
        style[style.length - 1].remove();
    }

})(window);