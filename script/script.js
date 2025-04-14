import {features} from './features.js';

await features();


const input = document.querySelector('.event-date');
const today = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD
input.value = today;
console.log(today);

/* insert custom scripts below */


    /*var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });*/

    
