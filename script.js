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
const bgchange = document.querySelectorAll('.bgchange')
const bgLightChange = document.querySelectorAll('.light')
const numCount = document.querySelector('.numcount')
const counterBtn = document.querySelector('.presscount')
const deact = document.querySelector('.deactivate')
const reverseBtn = document.querySelector('.reverseBtn')


//THIS IS FOR THE MENU
function toggleMenu(params) {
    mobileMenu.classList.toggle('hidden');
    submenu.classList.toggle('hidden');
    firstSection.classList.toggle('hidden')
}

toggleBtn.addEventListener('click', toggleMenu) 



/***********************************************
 * *********************************************
 */

//THIS IS FOR THE NIGHT MODE BUTTON
function night(params) {
    body.classList.toggle('dark')
}
for (let i = 0; i < nightModeBtn.length; i++) {
    nightModeBtn[i].addEventListener(
        'click', night
    )
    
}








//THIS IS FOR CHANGING DIFFERENT BACKGROUND COLOR

/***********************************************
 * *********************************************
 */

//array for the sub colors
const lightColors =[
    '#770000','#ffe5e5','#7b7bff', '#ff85ff', '#7dff7d'
];

//array for colors needed
const diffColors = [
    '#470000','#ffbfbf','#4d4dff', 'purple','green'
];


//Sub colors LOOP


let numCounter = 0
function secondaryChange(params) {
    for (let i = 0; i < bgLightChange.length; i++) {
        bgLightChange[i].style.backgroundColor = lightColors[numCounter]   
    }

    for (let i = 0; i < bgchange.length; i++) {
        bgchange[i].style.backgroundColor = diffColors[numCounter]
        
    }
}


//ELEMENT TO BE CHANGED


function setter(params) {
    document.querySelector('.subbody').style.backgroundColor = diffColors[numCounter]
    document.querySelector('.bigcircle').style.backgroundColor  = diffColors[numCounter];
     document.querySelector('.tab').style.backgroundColor  = diffColors[numCounter];
     document.querySelector('.sdhikr').style.backgroundColor  = diffColors[numCounter];
     document.querySelector('.counter').style.backgroundColor  = diffColors[numCounter];
     document.querySelector('.calcnumber').style.backgroundColor  = 'white';
     document.querySelector('.saved').style.backgroundColor = diffColors[numCounter]
     
     secondaryChange()
}


//LOOP FOR ELEMENT TO BE CHANGED
function backGroundChange() {
    if (numCounter < diffColors.length-1) {
        numCounter++
        console.log(numCounter)
        setter()
       
        
    } 
    else{
        
        numCounter = 0
        setter()
        
    }
}  

//CLICK EVENT TO MAKE THEM HAPPEN
for (let i = 0; i < changeColorbtn.length; i++) {
    changeColorbtn[i].addEventListener(
        'click', backGroundChange
    )
    
}









 



















//FUNCTIONALITY FOR THE COUNTER BUTTON

/***********************************************
 * *********************************************
 */
let count = 0;

function handler(params) {
    count++
    document.querySelector('.numcount').textContent = count; 
}

counterBtn.addEventListener(
    'click', handler
)



function reset(params) {
     count= 0;
    document.querySelector('.numcount').textContent = count; 
}

deact.addEventListener(
    'click', reset
    
)


//FUNCTIONALITY FOR THE REVERSE BUTTON;

function reverse(params) {
    count--
    document.querySelector('.numcount').textContent = count
    
 }


reverseBtn.addEventListener(
    'click', reverse
)








    
