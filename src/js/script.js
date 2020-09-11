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
    showHeader('.header', textHeader, 2000);
    showHeader('.wrapper', textSubscr, 3000);

});