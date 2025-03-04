function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}


function openModal() {
    document.getElementById("infoModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}


function openLiaModal() {
    document.getElementById("liaModal").style.display = "flex";
}

function closeLiaModal() {
    document.getElementById("liaModal").style.display = "none";
}

window.onclick = function(event) {
    let infoModal = document.getElementById("infoModal");
    let liaModal = document.getElementById("liaModal");

    if (event.target === infoModal) {
        infoModal.style.display = "none";
    }

    if (event.target === liaModal) {
        liaModal.style.display = "none";
    }
};

let index = 0;
const slides = document.querySelectorAll(".carousel img");
const totalSlides = slides.length;

function moveSlide(step) {
    index += step;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    document.querySelector(".carousel").style.transform = `translateX(-${index * 310}px)`;
}

function openLightbox(src) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    
    lightboxImg.src = src;

    
    lightbox.style.display = "flex";
    lightboxImg.style.width = "auto";
    lightboxImg.style.height = "auto";
    lightboxImg.style.maxWidth = "95vw";
    lightboxImg.style.maxHeight = "95vh";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".carousel img");
    const totalSlides = slides.length;

    function moveSlide(step) {
        index += step;
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        document.querySelector(".carousel").style.transform = `translateX(-${index * 310}px)`;
    }

    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
});
