const burgerBtn = document.querySelector('.burger');
const popupHeader = document.querySelector('.header__right');
const closeBtn = document.querySelector('.close');

burgerBtn.addEventListener('click', () => {
    popupHeader.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popupHeader.style.display = 'none';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 670) {
        popupHeader.style.display = 'flex';
    } else {
        popupHeader.style.display = 'none';
    }
});


const firModule = document.querySelector('.tl-1')
const secModule = document.querySelector('.tl-2')
const thirdModule = document.querySelector('.tl-3')

const firModuleCon = document.querySelector('.cont-1')
const secModuleCon = document.querySelector('.cont-2')
const thirdModuleCon = document.querySelector('.cont-3')

function toggleModule(module, moduleCon) {
    if (moduleCon.style.display === 'flex') {
        moduleCon.style.display = 'none'; // якщо відображено, то приховати
    } else {
        moduleCon.style.display = 'flex'; // якщо приховано, то відобразити
    }
}

// Додаємо слухачі подій для кожного модулю
firModule.addEventListener('click', () => {
    toggleModule(firModule, firModuleCon);
});

secModule.addEventListener('click', () => {
    toggleModule(secModule, secModuleCon);
});

thirdModule.addEventListener('click', () => {
    toggleModule(thirdModule, thirdModuleCon);
});