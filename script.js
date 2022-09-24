'use strict';

const toggleBtn = document.querySelector('.toggler')
const mobileMenu = document.querySelector('.mobilemenu')
const submenu = document.querySelector('.submenu')
const closeMenu  = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openIcon')

function toggleMenu(params) {
    mobileMenu.classList.toggle('hidden');
    submenu.classList.toggle('hidden');
}

toggleBtn.addEventListener('click', toggleMenu) 

