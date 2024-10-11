function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        slidesPerGroup: 1,
        speed: 450,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
            },
        },

    });
});