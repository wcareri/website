document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header class="fixed-header">
            <nav class="header-nav">
                <div>
                    <a href="https://www.wcareri.com" rel="home">HOME</a>
                    <a href="https://www.wcareri.com/about" rel="about">ABOUT</a>
                    <img src="https://www.wcareri.com/assets/images/index/logo.png" alt="A Serif W and C typographic logo" class="header-logo">
                    <a href="https://www.wcareri.com/portfolio" rel="Portfolio">PORTFOLIO</a>
                    <a href="https://www.wcareri.com/blog" rel="blog">BLOG</a>
                </div>
            </nav>
        </header>
    `;

    // Find a specific element where you want to insert the header
    // For example, you could have a div with id="header-placeholder" in your HTML
    const headerPlaceholder = document.getElementById('header-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    } else {
        // As a fallback, you could prepend it to the body
        // This is less ideal as it might affect layout, but works if no placeholder
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
});