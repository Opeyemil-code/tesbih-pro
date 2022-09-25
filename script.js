'use strict';

const toggleBtn = document.querySelector('.toggler')
const mobileMenu = document.querySelector('.mobilemenu')
const submenu = document.querySelector('.submenu')
const closeMenu  = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openIcon');
const firstSection = document.querySelector('.firstSection');
const nightModeBtn = document.querySelector('.nightBtn')
const changeColorbtn = document.querySelector('.colorBtn')
const body = document.querySelector('body')
const topNav = document.querySelector('.sdhikr')
const circle = document.querySelector('.bigcircle')
const counter = document.querySelector('.counter')
const number= document.querySelector('.calcnumber')
const controlTab = document.querySelector('.tab')

//THIS IS FOR THE MENU
function toggleMenu(params) {
    mobileMenu.classList.toggle('hidden');
    submenu.classList.toggle('hidden');
    firstSection.classList.toggle('hidden')
}

toggleBtn.addEventListener('click', toggleMenu) 


//THIS IS FOR THE NIGHT MODE BUTTON
nightModeBtn.addEventListener(
    'click', function (params) {
      body.classList.toggle('dark')
        topNav.classList.toggle('dark')
        circle.classList.toggle('dark')
        counter.classList.toggle('dark')
        number.classList.toggle('dark')
    }
)