import {fortuneData} from './fortuneData.js'

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

const openCookie = gsap.timeline();
openCookie
    .to("#fortune", {duration: 0.5, width: 100}, "1")
    .to("#leftCookie", {duration: 0.5, rotation: 15, x: -30}, "1")
    .to("#rightCookie", {duration: 0.5, rotation: -15, x: 30, y: -5}, "<")
    .to("#fortune", {duration: 1.5, width: 420}, "2")
    .to("#leftCookie", {duration: 1.5, x: -200}, "<")
    .to("#rightCookie", {duration: 1.5, x: 218}, "<")

let rand = Math.floor(Math.random() * 82)

document.querySelector('#fortune').innerHTML = fortuneData[rand];