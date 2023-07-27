const text = document.querySelector('#text');
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
        },2000);
})