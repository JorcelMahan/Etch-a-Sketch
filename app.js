const btnReset = document.querySelector('#reset');
const btnGrid = document.querySelector('#grid');

function createDivs() {
    const div = document.createElement('div');
    div.classList.add('box');
    div.addEventListener("mouseover", e => {
        div.style.backgroundColor = colorRGB();
    });
    document.querySelector('.container').appendChild(div);
}

const colorRGB = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
const randomNumber = () => Math.floor(Math.random() * 255) + 1;
btnGrid.addEventListener('click', e => {
    let n = Number(prompt('Introduce the size of the square'));
    document.querySelector('.container').remove();
    const div = document.createElement('div');
    div.classList.add('container');
    document.documentElement.style.setProperty('--n', String(n));
    document.querySelector('body').appendChild(div);
    printScreen(n);
});
btnReset.addEventListener('click', e => {
    document.querySelectorAll('.box').forEach(el => el.style.backgroundColor = '#3C3B3F')
});

function printScreen(n) {
    for (let i = 0; i < n * n; i++) createDivs();
}

printScreen(16);



