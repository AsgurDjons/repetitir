window.addEventListener('DOMContentLoaded', () => {
console.log('s');


function showHeader() {
    let header = document.querySelector('.header');
    header.textContent = 'Тогда вы зашли именно туда!!';
}
setTimeout(showHeader, 3000);






});