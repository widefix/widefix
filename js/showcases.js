import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.clients-swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: true
});

const swiper2 = new Swiper('.case-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 39,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.addEventListener("DOMContentLoaded", function() {

    const accordionButtons = document.querySelectorAll('.accordion-action');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const accordion = button.closest('.accordion');
            accordion.classList.toggle('expanded');

            const isExpanded = accordion.classList.contains('expanded');
            button.setAttribute('aria-expanded', isExpanded);
        });
    });
});
