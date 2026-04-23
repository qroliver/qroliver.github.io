const filterButtons = document.querySelectorAll('.dv-filter__button');
const cards = document.querySelectorAll('.card, .card-wide, .card-tall');


filterButtons.forEach(function(button) {

    button.addEventListener('click', function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove('is-active')
        });

        button.classList.add('is-active');

        const activeFilter = button.dataset.filter;

        let visibleCount = 0;

        cards.forEach(function(card) {

            const cardTags = card.dataset.tags;

            if (activeFilter === 'all' || cardTags.includes(activeFilter)) {
                card.classList.remove('is-hidden');
                visibleCount++;
            } else {
                card.classList.add('is-hidden');
            }
        });
    });
});