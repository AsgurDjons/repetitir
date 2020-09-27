window.addEventListener('DOMContentLoaded', () => {
    // fasad site
    const textHeader = `Вам нужен репетитор? <br> <span class="span-header">Тогда вы зашли именно туда!!</span>`,
          textSubscr = `<p class="subscr">Математика</p><p class="subscr">Русский</p>`;

    function showHeader(block, text, time) {
        let blocks = document.querySelector(block);
        setTimeout(() => {
            blocks.innerHTML = text;
        }, time);
    }
    showHeader('.header', textHeader, 1000);
    showHeader('.wrapper', textSubscr, 2000);
    if (document.documentElement.clientWidth <= 500) {

    }
    function showPhoto () {
        let img = document.querySelector('.my-photo');
        if (document.documentElement.clientWidth <= 500) {
            if (window.pageYOffset >= 400)  {
                img.classList.add('show_animation');
            }
        }else {
            if (window.pageYOffset >= 600)  {
                img.classList.add('show_animation');
            }
        }
    }

    window.addEventListener('scroll', () => {
        showPhoto ();
    });

});