const icono = document.querySelector('#icon');
const menu = document.querySelector('#nav__menu');

icono.addEventListener('click', ()=>{
    menu.classList.toggle('disable');
})