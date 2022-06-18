
import Swiper, { Navigation, Pagination } from 'swiper';

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import buildSlides from "../data/teamData.js";

const sliderTrack = document.querySelector(".image-slider__wrapper");

sliderTrack.innerHTML = buildSlides();


const swiper = new Swiper(".image-slider", {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
})


const modalOpenBtn = document.querySelector(".students-modal-btn");
const modalCloseBtn = document.querySelector(".modal-team__btn-close");
const studentsModal = document.querySelector(".backdrop-team");

function toggleTeamModal() {
    studentsModal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
}


modalOpenBtn.addEventListener("click", onOpenTeamModal);
modalCloseBtn.addEventListener("click", onCloseTeamModal);

function onOpenTeamModal() {
    toggleTeamModal()
    window.addEventListener('keydown', onEscPress);
}


function onCloseTeamModal() {
    toggleTeamModal()
    window.removeEventListener('keydown', onEscPress);
}

studentsModal.addEventListener("click", (e) => {
    if (e.target === studentsModal) {
        onCloseTeamModal();
    }
});


function onEscPress(event) {
    if (event.code === 'Escape') {
        onCloseTeamModal();
    }
}


