function expandImage(img) {
    var container = document.getElementById("full-screen-image-container");
    var fullscreenImg = document.getElementById("full-screen-image");

    fullscreenImg.src = img.src;

    container.style.transition = "none";
    container.style.opacity = "0";
    container.style.display = "flex";

    container.getBoundingClientRect();

    container.style.transition = "opacity 0.25s ease";
    container.style.opacity = "1";

    fullscreenImg.style.transition = "none";
    fullscreenImg.style.transform = "scale(0.6)";

    fullscreenImg.getBoundingClientRect();

    fullscreenImg.style.transition = "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)";
    fullscreenImg.style.transform = "scale(1)";
}

function closeExpandedImage() {
    var container = document.getElementById("full-screen-image-container");
    var fullscreenImg = document.getElementById("full-screen-image");

    fullscreenImg.style.transition = "transform 0.2s ease-in";
    fullscreenImg.style.transform = "scale(0.6)";
    container.style.transition = "opacity 0.2s ease";
    container.style.opacity = "0";

    setTimeout(function () {
        container.style.display = "none";
        fullscreenImg.style.transform = "scale(1)";
    }, 200);
}

function openPopUp(id) {
    var el = document.getElementById(id);
    var inner = el.querySelector(".pop-up-content");

    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.display = "flex";

    el.getBoundingClientRect();

    el.style.transition = "opacity 0.25s ease";
    el.style.opacity = "1";

    if (inner) {
        inner.style.transition = "none";
        inner.style.transform = "scale(0.85) translateY(12px)";
        inner.getBoundingClientRect();
        inner.style.transition = "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)";
        inner.style.transform = "scale(1) translateY(0)";
    }
}

function closePopUp(id) {
    var el = document.getElementById(id);
    var inner = el.querySelector(".pop-up-content");

    if (inner) {
        inner.style.transition = "transform 0.18s ease-in";
        inner.style.transform = "scale(0.9) translateY(8px)";
    }
    el.style.transition = "opacity 0.2s ease";
    el.style.opacity = "0";

    setTimeout(function () {
        el.style.display = "none";
        if (inner) inner.style.transform = "scale(1) translateY(0)";
    }, 200);
}