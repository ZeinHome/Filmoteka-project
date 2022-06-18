import Swiper, { Navigation, Autoplay } from 'swiper';
import openModal from "../components/modal/modal-open";

const sliderContainer = document.querySelector('.mySwiper');

openModal(sliderContainer);

const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Autoplay],
    spaceBetween: 5,
    breakpointsBase: 'container',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        210: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 8,
        },
    },
    });