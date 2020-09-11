window.addEventListener('DOMContentLoaded', () => {

function showHeader() {
    let header = document.querySelector('.header');
    setTimeout(() => {
        header.innerHTML = `Вам нужен репетитор? <br> <span class="span-header">Тогда вы зашли именно туда!!</span>`;
    }, 2000);
}
showHeader();

});