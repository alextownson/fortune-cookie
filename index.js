const main = document.querySelector("main");

window.addEventListener('load', () => {
    main.style.height = window.innerHeight + 'px';
})

window.addEventListener('resize', () => {
    main.style.height = window.innerHeight + 'px';
})

addEventListener('deviceorientation', () => {
    main.style.height = window.innerHeight + 'px';
});