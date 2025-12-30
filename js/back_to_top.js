window.addEventListener('scroll', function() {
    const button = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});