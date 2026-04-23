const filterButtons = document.querySelectorAll('.dv-filter__button');
const cards = document.querySelectorAll('.card, .card-wide, .card-tall');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        filterButtons.forEach(function(btn) {
            btn.classList.remove('is-active');
        });
        button.classList.add('is-active');

        const activeFilter = button.dataset.filter;

        const toShow = [];
        const toHide = [];

        cards.forEach(function(card) {
            const cardTags = card.dataset.tags;
            if (activeFilter === 'all' || cardTags.includes(activeFilter)) {
                toShow.push(card);
            } else {
                toHide.push(card);
            }
        });

        
        toHide.forEach(function(card) {
            card.style.transition = 'opacity 0.2s ease';
            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
        });

        toShow.forEach(function(card) {
            card.style.transition = 'opacity 0.2s ease';
            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
        });

        setTimeout(function() {
            
            toHide.forEach(function(card) {
                card.classList.add('is-hidden');
                card.style.transition = 'none';
                card.style.opacity = '';
                card.style.pointerEvents = '';
            });

            toShow.forEach(function(card) {
                card.classList.remove('is-hidden');
            });

            
            requestAnimationFrame(function() {
                toShow.forEach(function(card) {
                    card.style.transition = 'opacity 0.25s ease';
                    card.style.opacity = '1';
                    card.style.pointerEvents = '';
                });
            });

        }, 210);
    });
});