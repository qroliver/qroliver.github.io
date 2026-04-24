// DataViz
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


// Blog index
const blogFilterBtns = document.querySelectorAll('.filter__button');
const blogArticles   = document.querySelectorAll('article');

blogFilterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {

        blogFilterBtns.forEach(function(b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        const activeFilter = btn.dataset.filter;
        const toShow = [];
        const toHide = [];

        blogArticles.forEach(function(article) {
            const articleTags = article.dataset.tags;
            if (activeFilter === 'all' || articleTags.includes(activeFilter)) {
                toShow.push(article);
            } else {
                toHide.push(article);
            }
        });

        // Fade out everything first
        toHide.forEach(function(article) {
            article.style.transition = 'opacity 0.2s ease';
            article.style.opacity = '0';
            article.style.pointerEvents = 'none';
        });
        toShow.forEach(function(article) {
            article.style.transition = 'opacity 0.2s ease';
            article.style.opacity = '0';
            article.style.pointerEvents = 'none';
        });

        // After fade-out completes, hide/show and fade back in
        setTimeout(function() {
            toHide.forEach(function(article) {
                article.classList.add('is-hidden');
                article.style.transition = 'none';
                article.style.opacity = '';
                article.style.pointerEvents = '';
            });
            toShow.forEach(function(article) {
                article.classList.remove('is-hidden');
            });
            requestAnimationFrame(function() {
                toShow.forEach(function(article) {
                    article.style.transition = 'opacity 0.25s ease';
                    article.style.opacity = '1';
                    article.style.pointerEvents = '';
                });
            });
        }, 210);
    });
});