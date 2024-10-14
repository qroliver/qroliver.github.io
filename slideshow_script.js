var slideIndex = 0;
var autoSlideInterval;

carousel();

function carousel() {
    showSlides(slideIndex);
    autoSlideInterval = setInterval(function() {
        slideIndex++;
    }, 2000);
}

function plusDivs(n) {
    clearInterval(autoSlideInterval);
    slideIndex += n;
    showSlides(slideIndex);
    autoSlideInterval = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 2000);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow-pic");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


function expandImage(img) {
    var fullscreenContainer = document.getElementById("full-screen-image-container");
    var fullscreenImg = document.getElementById("full-screen-image");

    fullscreenImg.src = img.src;
    fullscreenContainer.style.display = "flex";
}

function closeExpandedImage() {
    var fullscreenContainer = document.getElementById("full-screen-image-container");
    fullscreenContainer.style.display = "none";
}