window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';



    const modalBtn    = document.querySelector('.nav-login'),
          modalBg     = document.querySelector('.modal-bg'),
          modal       = document.querySelector('.modal-in'),
          modalTitle  = document.querySelector('.card-header'),
          modalClose  = document.querySelector('.modal-close'),
          modalForm   = document.querySelector('.form-in'),
          langName    = document.querySelector('.nav-lang'),
          langSelect  = document.querySelector('.nav-lang-select'),
          mainLang    = document.querySelector('.nav-lang-img'),
          toogleBtn   = document.querySelector('.toggle-btn'),
          langRu      = document.querySelector('#ru'),
          langEn      = document.querySelector('#en'),
          arrowDown   = document.querySelector('.main-arrow'),
          iframeWrapper= document.querySelector('.iframe-wrapper');
 
 

    window.addEventListener("message", function(e){
        var this_frame = document.getElementById("s_frame");    
        if (this_frame.contentWindow === e.source) {
            this_frame.height = e.data.height + "px";
            this_frame.style.height = e.data.height + "px";
        }
    });
    
    window.addEventListener("message", function(e){
        var this_frame = document.getElementById("t_frame");    
        if (this_frame.contentWindow === e.source) {
            this_frame.height = e.data.height + "px";
            this_frame.style.height = e.data.height + "px";
        }
    });

    //  modal.style.display = 'block';
    //  document.body.style.overflow = 'hidden';


    arrowDown.addEventListener('click', () => {
        iframeWrapper.scrollIntoView({behavior: "smooth"});
    });

    toogleBtn.addEventListener('click', () => {
        if(toogleBtn.classList.contains('button-turist')) {
            if(mainLang.lang == 'ru') {
                toogleBtn.textContent = 'Для туристов';
                document.querySelector('.main-title').textContent = 'для отелей';
            } else {
                toogleBtn.textContent = 'For turists';
                document.querySelector('.main-title').textContent = 'for hotels';
            }

            if(window.innerWidth > 1099) {
                document.querySelector('.main-label').style.cssText = 'animation-name: showTitleSecond';
                document.querySelector('.main-title').style.cssText = 'animation-name: showTitleSecond';
                document.querySelector('.main-descr').style.cssText = 'animation-name: showTitleSecond';
            } else {
                document.querySelector('.main-label').style.cssText = 'animation-name: showTitleMinSecond';
                document.querySelector('.main-title').style.cssText = 'animation-name: showTitleMinSecond';
                document.querySelector('.main-descr').style.cssText = 'animation-name: showTitleMinSecond';
            }


            document.querySelector('#t_frame').src = 'https://stuzon.com/pom_link1.php?idn=199&short=1';
            document.querySelector('#t_frame').style.display = 'block';
            document.querySelector('#s_frame').style.display = 'none';
            toogleBtn.classList.add('button-hotel');
            toogleBtn.classList.remove('button-turist');
        } else {
            if(mainLang.lang == 'ru') {
                toogleBtn.textContent = 'Для отелей';
                document.querySelector('.main-title').textContent = 'для туристов';
            } else {
                toogleBtn.textContent = 'For hotels';
                document.querySelector('.main-title').textContent = 'for turists';
            }
            
            if(window.innerWidth > 1099) {
                document.querySelector('.main-label').style.cssText = 'animation-name: showTitle';
                document.querySelector('.main-title').style.cssText = 'animation-name: showTitle';
                document.querySelector('.main-descr').style.cssText = 'animation-name: showTitle';
            } else {
                document.querySelector('.main-label').style.cssText = 'animation-name: showTitleMin';
                document.querySelector('.main-title').style.cssText = 'animation-name: showTitleMin';
                document.querySelector('.main-descr').style.cssText = 'animation-name: showTitleMin';
            }

            document.querySelector('#t_frame').style.display = 'none';
            document.querySelector('#s_frame').style.display = 'block';
            toogleBtn.classList.remove('button-hotel');
            toogleBtn.classList.add('button-turist');
        }
    });
    
    modalBtn.addEventListener('click', ()=> {
        if (toogleBtn.classList.contains('button-turist')) {
            if(mainLang.lang == 'ru') {
                modalTitle.textContent = 'Вход для туристов';
            } else {
                modalTitle.textContent = 'Log In for turist';
            }
        } else if (toogleBtn.classList.contains('button-hotel')) {
            if(mainLang.lang == 'ru') {
                modalTitle.textContent = 'Вход для отелей';
            } else {
                modalTitle.textContent = 'Log In for hotel';
            }
        }
        modal.style.display = 'block';
        modalForm.style.animation = 'showModal 0.5s ease-in-out forwards';
        modalBg.style.animation = 'showModalBg 0.3s linear forwards';
        document.body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', ()=> {
        modalForm.style.animation = 'hideModal 1s ease-out forwards';
        modalBg.style.animation = 'hideModal 0.3s linear forwards';
        document.body.style.overflow = 'auto';
        setTimeout(()=> modal.style.display = 'none', 900);
    });

    modal.addEventListener('click', (e) => {
        let target = e.target;
        if(target == modalBg) {
            modalForm.style.animation = 'hideModal 1s ease-out forwards';
            modalBg.style.animation = 'hideModal 0.3s linear forwards';
            document.body.style.overflow = 'auto';
            setTimeout(()=> modal.style.display = 'none', 900);
        }
    });


    langName.addEventListener('mouseenter', () => {
        langSelect.classList.add('nav-lang-select-active');
    });

    langName.addEventListener('mouseleave', () => {
        langSelect.classList.remove('nav-lang-select-active');
    });

    langEn.addEventListener('click', () => {
        langSelect.classList.remove('nav-lang-select-active');
        mainLang.src = 'img/united-kingdom.svg';
        mainLang.alt = 'en';
        mainLang.lang = 'en';

        modalTitle.textContent = 'Log In for turists';
        document.querySelector('.main-descr').textContent = 'Direct booking';
        modalBtn.innerHTML = `Sign In<i style="margin-left: 2px;" class="fas fa-sign-in-alt"></i>`;
        modalBtn.style.cssText = 'letter-spacing: 1px;';
        document.querySelector('.main-title').textContent = 'for turists';
        toogleBtn.textContent = 'For hotels';
        if (toogleBtn.classList.contains('button-turist')) {
            toogleBtn.textContent = 'For hotels';
            document.querySelector('.main-title').textContent = 'for turists';
        } else if (toogleBtn.classList.contains('button-hotel')) {
            toogleBtn.textContent = 'For turists';
            document.querySelector('.main-title').textContent = 'for hotels';
        }

        document.querySelector('#txpr_l').textContent = 'Share';
        document.querySelector('#sppr_l').innerHTML = `<a target="_blank"  class="btn btn-outline-primary" id="pr_l" href="https://bookidom.com">https://bookidom.com</a><br>Copied`;
        document.querySelector('.footer-agreement').textContent = 'Agreement';
        document.querySelector('.footer-help').textContent = 'Help';
    });


    langRu.addEventListener('click', () => {
        langSelect.classList.remove('nav-lang-select-active');
        mainLang.src = 'img/russia.svg';
        mainLang.alt = 'ru';
        mainLang.lang = 'ru';

        modalTitle.textContent = 'Вход для туристов';
        document.querySelector('.main-descr').textContent = 'Прямое бронирование';
        modalBtn.innerHTML = `Войти<i class="fas fa-sign-in-alt"></i>`;
        modalBtn.style.cssText = 'letter-spacing: 1.5px;';
        if (toogleBtn.classList.contains('button-turist')) {
            toogleBtn.textContent = 'Для отелей';
            document.querySelector('.main-title').textContent = 'для туристов';
        } else if (toogleBtn.classList.contains('button-hotel')) {
            toogleBtn.textContent = 'Для туристов';
            document.querySelector('.main-title').textContent = 'для отелей';
        }

        document.querySelector('#txpr_l').textContent = 'Поделиться';
        document.querySelector('#sppr_l').innerHTML = `<a target="_blank"  class="btn btn-outline-primary" id="pr_l" href="https://bookidom.com">https://bookidom.com</a><br>Скопировано`;
        document.querySelector('.footer-agreement').textContent = 'Соглашение';
        document.querySelector('.footer-help').textContent = 'Помощь';
    });


});



{/* <style type="text/css">.col_right_pom_ttl {
    display: none;
  }
  .curs.material-content .col_left_pom {
padding: 10px 0; background: #e5ffff; font-size: 17px;
}
</style>
<div style="color: #454545; position: relative;">
<div style="padding: 10px 15px; text-align: justify;">
<p style="padding-left: 10px; font-weight: bold; color: #0078ff; z-index: 2; font-size: 17px;">Первый раздел</p>

<p>test</p>

<p>test</p>

<p>test &nbsp;</p>
</div>

<p style="background: url(http://bd.zzjj.ru/img/turists-bg.jpg) center center/cover no-repeat; width: 100%; height: 300px;">&nbsp;</p>
</div> */}


{/* <style type="text/css">.col_right_pom_ttl {
    display: none;
  }
  .curs.material-content .col_left_pom {
padding: 10px 0; background: #e5ffff; font-size: 17px;
}
</style>
<div style="color: #454545; position: relative;">
<div style="padding: 10px 15px; text-align: justify;">
<p style="padding-left: 10px; font-weight: bold; color: #0078ff; z-index: 2; font-size: 17px;">Первый раздел</p>

<p>Мы приглашаем компании для участия в системе кросс-маркетинга, которые заинтересованы в:<br />
- расширении клиентской базы;<br />
- поддержке лояльности клиентской базы;<br />
- развитии инструментария кросс-маркетинга.</p>

<p>Online-Club предлагает участникам системы кросс-маркетинга 4 инструмента.<br />
Любой участник системы может воспользоваться любым подмножеством инструментов из этого набора.<br />
Для каждого инструмента у участника системы кросс-маркетинга могут быть отдельные белый и черный списки других участников системы (&quot;дружим&quot; - &quot;не дружим&quot;).<br />
Настройка всех черных и белых списков, а также параметров инструментов, производится в ЛК участника в Online-Club.</p>

<p>1. Обмен приложениями участников системы.&nbsp;<br />
2. Партнерские E-mail рассылки.<br />
3. Мультикарты.<br />
4. Компенсация чека.</p>

<p>Все партнеры могут участвовать в развитии новых инструментов.</p>
</div>

<p style="background: url(http://bd.zzjj.ru/img/hotels-bg.jpg) center center/cover no-repeat; width: 100%; height: 250px;">&nbsp;</p>
</div> */}