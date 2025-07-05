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