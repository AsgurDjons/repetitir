window.addEventListener('DOMContentLoaded', () => {

function showHeader() {
    let header = document.querySelector('.header');
    setTimeout(() => {
        header.innerHTML = `Вам нужен репетитор? <br> Тогда вы зашли именно туда!!`;
    }, 3000);
}
showHeader();

});