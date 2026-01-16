let slides = document.querySelectorAll('.slide');
let nextBtn = document.getElementById('nextBtn');
let previousBtn = document.getElementById('previousBtn');
let index = 0;
let slideTime = 10000; // 2 seconds per slide

function showSlide(i) {
    slides.forEach(s => s.style.opacity = 0);
    slides[i].style.opacity = 1;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function previousSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

nextBtn.addEventListener('click', () => {
    // Optional: Add any actions after slide transition
    nextSlide();
});

previousBtn.addEventListener('click', () => {
    // Optional: Add any actions after slide transition
    previousSlide();
});

showSlide(index);
setInterval(nextSlide, slideTime);
