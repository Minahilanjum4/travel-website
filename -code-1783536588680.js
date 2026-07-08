document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggles the drop-down navigation window smoothly on mobile/tablet widths
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Dynamic accessibilty switch 
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
});