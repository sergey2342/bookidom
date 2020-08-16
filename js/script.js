window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';



    // const modalBtn    = document.querySelector('.button-in'),
    //       modalBg     = document.querySelector('.modal-bg'),
    //       modal       = document.querySelector('.modal-in'),
    //       modalTitle  = document.querySelector('.card-header'),
    //       modalClose  = document.querySelector('.modal-close'),
    //       modalForm   = document.querySelector('.form-in'),
    //       langName    = document.querySelector('.lang-name'),
    //       langSelect  = document.querySelector('.lang-select'),
    //       mainLang    = document.querySelector('.main-lang'),
    //       langRu      = document.querySelector('#ru'),
    //       langEn      = document.querySelector('#en');
 
 
    // modal.style.display = 'block';


    // document.querySelectorAll('.nav-link')[0].addEventListener('click', ()=> {
    //     modalBtn.classList.add('button-turist');
    //     modalBtn.classList.remove('button-hotel');
    // });
    // document.querySelectorAll('.nav-link')[2].addEventListener('click', ()=> {
    //     modalBtn.classList.add('button-hotel');
    //     modalBtn.classList.remove('button-turist');
        
    // });

    
    // modalBtn.addEventListener('click', ()=> {
    //     if (modalBtn.classList.contains('button-turist')) {
    //         if(mainLang.lang == 'ru') {
    //             modalTitle.textContent = 'Вход для туристов';
    //         } else {
    //             modalTitle.textContent = 'Log In for turist';
    //         }
    //     } else if (modalBtn.classList.contains('button-hotel')) {
    //         if(mainLang.lang == 'ru') {
    //             modalTitle.textContent = 'Вход для отелей';
    //         } else {
    //             modalTitle.textContent = 'Log In for hotel';
    //         }
    //     }
    //     modal.style.display = 'block';
    //     modalForm.style.animation = 'showModal 1s ease-in-out forwards';
    //     modalBg.style.animation = 'showModalBg 0.3s linear forwards';
    //     // document.body.style.overflow = 'hidden';
        
    // });

    // modalClose.addEventListener('click', ()=> {
    //     modalForm.style.animation = 'hideModal 1s ease-out forwards';
    //     modalBg.style.animation = 'hideModalBg 0.3s linear forwards';
    //     // document.body.style.overflow = 'auto';
    //     setTimeout(()=> modal.style.display = 'none', 1000);
    // });


    // langName.addEventListener('mouseenter', () => {
    //     langSelect.style.cssText = 'display: flex !important;';
    //     mainLang.style.pointerEvents = 'none';
    // });

    // langName.addEventListener('mouseleave', () => {
    //     langSelect.style.cssText = 'display: none !important;';
    //     mainLang.style.pointerEvents = '';
    // });

    // langEn.addEventListener('click', () => {
    //     langSelect.style.cssText = 'display: none !important;';
    //     mainLang.src = 'img/flags/united-kingdom.svg';
    //     mainLang.alt = 'en';
    //     mainLang.lang = 'en';

    //     modalTitle.textContent = 'Log In for turists';
    //     document.querySelector('.main-label-descr').textContent = 'Direct booking';
    //     document.querySelector('.nav-link-label-descr').textContent = 'Direct booking';
    //     modalBtn.innerHTML = `Log In <i class=" ml-2 fas fa-sign-in-alt"></i>`;
    //     document.querySelectorAll('.nav-link span')[0].textContent = 'Turists';
    //     document.querySelector('.nav-link-last span').textContent = 'Hotels';

    //     document.querySelector('#txpr_l').textContent = 'Share';
    //     document.querySelector('#sppr_l').innerHTML = `<a target="_blank"  class="btn btn-outline-primary" id="pr_l" href="https://bookidom.com">https://bookidom.com</a><br>Copied`;
    //     document.querySelector('.footer-agreement').textContent = 'Agreement';
    //     document.querySelector('.footer-help').textContent = 'Help';
    // });


    // langRu.addEventListener('click', () => {
    //     langSelect.style.cssText = 'display: none !important;';
    //     mainLang.src = 'img/flags/russia.svg';
    //     mainLang.alt = 'ru';
    //     mainLang.lang = 'ru';

    //     modalTitle.textContent = 'Вход для туристов';
    //     document.querySelector('.main-label-descr').textContent = 'Прямое бронирование';
    //     document.querySelector('.nav-link-label-descr').textContent = 'Прямое бронирование';
    //     modalBtn.innerHTML = `Войти <i class=" ml-2 fas fa-sign-in-alt"></i>`;
    //     document.querySelectorAll('.nav-link span')[0].textContent = 'Туристам';
    //     document.querySelector('.nav-link-last span').textContent = 'Отелям';

    //     document.querySelector('#txpr_l').textContent = 'Поделиться';
    //     document.querySelector('#sppr_l').innerHTML = `<a target="_blank"  class="btn btn-outline-primary" id="pr_l" href="https://bookidom.com">https://bookidom.com</a><br>Скопировано`;
    //     document.querySelector('.footer-agreement').textContent = 'Соглашение';
    //     document.querySelector('.footer-help').textContent = 'Помощь';
    // });


});