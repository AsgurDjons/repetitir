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
    setTimeout(()=> {
        const svg = document.querySelector('#more-arrows');
        svg.style.display = 'block';
    }, 2500);

    showHeader('.header', textHeader, 1000);
    showHeader('.wrapper', textSubscr, 2000);


// Scrol
    function showPhoto () {
        let img = document.querySelector('.my-photo');
        if (document.documentElement.clientWidth <= 500) {
            if (window.pageYOffset >= 250)  {
                img.classList.add('show_animation');
            }
        }else {
            if (window.pageYOffset >= 340)  {
                img.classList.add('show_animation');
            }
        }
    }

    window.addEventListener('scroll', () => {
        showPhoto ();
    });

});