'use strict';
window.addEventListener('DOMContentLoaded', ()=>{
    const humburgerBtn = document.querySelector('.humburger'),
        menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item');

        humburgerBtn.addEventListener('click', (e)=> {
            // if(humburgerBtn.classList.contains('humburger_active')){
            //     humburgerBtn.classList.remove('humburger_active');
            //     menu.classList.remove('menu_active');
            // } else {
            //     humburgerBtn.classList.add('humburger_active');
            //     menu.classList.add('menu_active');
            // }
            humburgerBtn.classList.toggle('humburger_active');
            menu.classList.toggle('menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', ()=> {
                // if(humburgerBtn.classList.contains('humburger_active')){
                //     humburgerBtn.classList.remove('humburger_active');
                //     menu.classList.remove('menu_active');
                // }
                humburgerBtn.classList.toggle('humburger_active');
                menu.classList.toggle('menu_active');
            });
        });
});