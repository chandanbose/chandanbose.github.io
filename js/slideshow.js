let slides = document.querySelectorAll('.slide');
let index = 0;
let slideTime = 3000; // 2 seconds per slide

function showSlide(i) {
    slides.forEach(s => s.style.opacity = 0);
    slides[i].style.opacity = 1;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

showSlide(index);
setInterval(nextSlide, slideTime);
