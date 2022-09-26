'use strict';

const toggleBtn = document.querySelector('.toggler')
const mobileMenu = document.querySelector('.mobilemenu')
const submenu = document.querySelector('.submenu')
const closeMenu  = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openIcon');
const firstSection = document.querySelector('.firstSection');
const nightModeBtn = document.querySelectorAll('.nightBtn')
const changeColorbtn = document.querySelectorAll('.colorBtn')
const body = document.querySelector('body')
const topNav = document.querySelector('.sdhikr')
const circle = document.querySelector('.bigcircle')
const counter = document.querySelector('.counter')
const number= document.querySelector('.calcnumber')
const controlTab = document.querySelector('.tab')
const divBody = document.querySelector('.subbody')
const savedDhikr = document.querySelector('.saved')

//THIS IS FOR THE MENU
function toggleMenu(params) {
    mobileMenu.classList.toggle('hidden');
    submenu.classList.toggle('hidden');
    firstSection.classList.toggle('hidden')
}

toggleBtn.addEventListener('click', toggleMenu) 


//THIS IS FOR THE NIGHT MODE BUTTON
for (let i = 0; i < nightModeBtn.length; i++) {
    nightModeBtn[i].addEventListener(
        'click', function name(params) {
            body.classList.toggle('dark')
        }
    )
    
}



//This is for changing to different colors
const diffColors = [
    '#470000','#ffbfbf','#4d4dff', 'purple','green'
];







let numCounter = 0
for (let i = 0; i < changeColorbtn.length; i++) {
    changeColorbtn[i].addEventListener(
        'click', function () {
            if (numCounter <= diffColors.length+1) {
    
                
                document.querySelector('.subbody').style.backgroundColor = diffColors[numCounter];
                document.querySelector('.bigcircle').style.backgroundColor  = diffColors[numCounter];
                document.querySelector('.tab').style.backgroundColor  = diffColors[numCounter];
                document.querySelector('.sdhikr').style.backgroundColor  = diffColors[numCounter];
                document.querySelector('.counter').style.backgroundColor  = diffColors[numCounter];
                document.querySelector('.calcnumber').style.backgroundColor  = 'white';
                document.querySelector('.saved').style.backgroundColor = diffColors[numCounter]
    
            } 
    
            numCounter++
        }
    
    )
    
    }








    
