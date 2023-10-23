// ==UserScript==
// @name         LMS-PDF
// @version      0.1
// @description  Open PDF viewer directly without downloading the PDF file.
// @author       yi
// @match        https://lms.keio.jp/*
// @icon         https://pbs.twimg.com/profile_images/1247229237699829765/pEMr46Cp_400x400.jpg
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    setTimeout(main, 1000);
})();

function main() {
let c = document.querySelector("#doc_preview");
    if (typeof c !== undefined) {
        location.href = c.firstChild.src;
    }
}
