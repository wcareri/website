document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const startYear = 2015; // Your starting copyright year

    // Construct the year string
    let yearRange;
    if (startYear === currentYear) {
        yearRange = currentYear.toString();
    } else {
        yearRange = `${startYear} - ${currentYear}`;
    }

    const footerHTML = `
        <footer style="text-align: center;">
            <span class="footer">
                <div style="text-align: center;">
                    <p class="caption">© ${yearRange} | Designed by William Careri</p>
                </div>
                <p><span style="font-size: calc(var(--font-scale) * var(--font-size)); font-weight: 400; letter-spacing: 0em;"> </span></p>
            </span>
        </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});