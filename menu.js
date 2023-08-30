'use strict';
const menuBtn = document.querySelector('.btn-menu');
const menuLine1 = document.querySelector('.btn-menu-line1');
const menuLine2 = document.querySelector('.btn-menu-line2');
const menuArea = document.querySelector('.nav-area');

menuBtn.addEventListener('click', () => {
    menuLine1.classList.toggle('open');
    menuLine2.classList.toggle('open');

    if (menuLine1.classList.contains('open')) menuArea.classList.toggle('unhideMenu');
    if (!menuLine1.classList.contains('open')) menuArea.classList.toggle('unhideMenu');
});