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

    function showPhoto () {
        let img = document.querySelector('.my-photo');
        if (window.pageYOffset >= 600)  {
            img.classList.add('show_photo');
        }
    }

    window.addEventListener('scroll', () => {
        showPhoto ();
    });

    console.log(window.pageYOffset);

});