document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#filters button');
    const portfolioItems = document.querySelectorAll('#gallery li');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            filterButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            portfolioItems.forEach(item => {
                const itemCategories = item.getAttribute('data-category').split(' ');

                if (category === 'all' || itemCategories.includes(category)) {
                    item.style.display = 'grid';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});