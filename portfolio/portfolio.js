document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#filters button');
    const portfolioItems = document.querySelectorAll('ul.gallery li');

    const countProjects = (category) => {
        if (category === 'all') {
            return portfolioItems.length;
        }
        return Array.from(portfolioItems).filter(item => {
            const itemCategories = item.getAttribute('data-category').split(' ');
            return itemCategories.includes(category);
        }).length;
    };

    filterButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        const count = countProjects(category);
        const buttonText = button.textContent;
        button.innerHTML = `${buttonText}<sup>${count}</sup>`;
    });

    if (filterButtons.length > 0) {
        filterButtons[0].classList.add('active');
        
        const initialCategory = filterButtons[0].getAttribute('data-category');
        portfolioItems.forEach(item => {
            const itemCategories = item.getAttribute('data-category').split(' ');
            if (initialCategory === 'all' || itemCategories.includes(initialCategory)) {
                item.style.display = 'grid';
            } else {
                item.style.display = 'none';
            }
        });
    }

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