var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true,
});
swiper.sliderMove = function (s, e) {
    console.log(s);
};
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li"))
        i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add(
        "activeLink"
    );
    swiper.slideTo(indx, 1000, true);
}


// Select all education cards
const educationCards = document.querySelectorAll('.education');

educationCards.forEach(card => {
    card.style.cursor = "pointer"; // make it look clickable

    card.addEventListener('click', () => {
        const url = card.dataset.link; // read the data-link attribute
        if (url) window.open(url, "_blank");
    });
});

// Select social icons
const socialIcons = document.querySelectorAll('.SocialLinks i');

socialIcons.forEach(icon => {
    icon.style.cursor = "pointer"; // make it look clickable

    icon.addEventListener('click', () => {
        const url = icon.dataset.link; // read data-link attribute
        if (url) window.open(url, "_blank"); // open in new tab
    });
});