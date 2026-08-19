const slider = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelectorAll(".prev");
const nextBtn = document.querySelectorAll(".next");

let currentSlide = 0;

function showSlide(index) {
    slides,forEach((slide) => {
        slide.clasList.remove("active");
    });
    dots.forEach((dot) => {
        dot.classList.remove("active");
    })
}