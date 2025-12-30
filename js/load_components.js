// Load header and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('/components/header.html')
        .then(res => res.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('navigation-header');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
            }
        })
        .catch(err => console.error('Failed to load header:', err));

    // Load main-footer
    fetch('/components/main-footer.html')
        .then(res => res.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('main-footer');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;

                const yearSpan = document.getElementById('current-year');
                if (yearSpan) {
                    yearSpan.textContent = new Date().getFullYear();
                } else {
                    console.warn('Element #current-year not found after loading footer.');
                }
            }
        })
        .catch(err => console.error('Failed to load main-footer:', err));

    // Load cc-footer
    fetch('/components/cc-footer.html')
        .then(res => res.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('cc-footer');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;

                const yearSpan = document.getElementById('current-year');
                if (yearSpan) {
                    yearSpan.textContent = new Date().getFullYear();
                } else {
                    console.warn('Element #current-year not found after loading footer.');
                }
            }
        })
        .catch(err => console.error('Failed to load cc-footer:', err));
});