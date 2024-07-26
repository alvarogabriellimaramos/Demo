const header = document.querySelector('header');

const open__menu = document.getElementById('open-menu');
const close__menu = document.getElementById("close-menu");
const menu_no_action = document.querySelector('.menu-no-action');
const nav__menu = document.querySelector('.nav__header__index');

const shadow = document.querySelector('.shadow');


function ActionMenu() {
    open__menu.addEventListener('click',function() {
        nav__menu.style.display = 'block';
        shadow.style.display = 'block';
        
        close__menu.style.display = 'block';
        open__menu.style.display = 'none';
        menu_no_action.style.display='block';
    });
    close__menu.addEventListener('click',function() {
        close__menu.style.display = 'none';
        open__menu.style.display = 'block'
        nav__menu.style.display = 'none';
        shadow.style.display = 'none';
        menu_no_action.style.display='none';
    });
};

window.addEventListener("resize",function() {
    if (window.innerWidth < 700) {
        open__menu.style.display = 'block';
        menu_no_action.style.display='none';
        nav__menu.style.display = 'none';
        return ActionMenu();
    };
    open__menu.style.display = 'none';
    shadow.style.display='none';
    close__menu.style.display='none';
    menu_no_action.style.display='none';
    nav__menu.style.display = 'block';
});

window.addEventListener('load',function() {
    if (window.innerWidth < 700) {
        open__menu.style.display = 'block';
        menu_no_action.style.display='none';
        return ActionMenu();
    };
});