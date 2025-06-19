// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', function() {
            navbar.classList.toggle('active');
            // Toggle aria-expanded for accessibility
            const isExpanded = navbar.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
}

// Dynamic heading functionality
function setupDynamicHeading() {
    const mobileHeadingWrapper = document.querySelector('.mobile-heading-wrapper');
    if (!mobileHeadingWrapper) return;

    function updateMobileHeading() {
        if (window.innerWidth <= 991) {
            const currentHeading = document.querySelector('section .heading');
            if (currentHeading) {
                // Check if we already cloned it to avoid duplicates
                if (!mobileHeadingWrapper.querySelector('.mobile-heading')) {
                    mobileHeadingWrapper.innerHTML = '';
                    const clonedHeading = currentHeading.cloneNode(true);
                    clonedHeading.classList.add('mobile-heading');
                    mobileHeadingWrapper.appendChild(clonedHeading);
                }
            }
        } else {
            mobileHeadingWrapper.innerHTML = '';
        }
    }

    function scrollToSection() {
        const section = document.querySelector('section');
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    }

    // Initialize
    updateMobileHeading();
    
    // Debounced resize handler
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateMobileHeading, 250);
    });

    mobileHeadingWrapper.addEventListener('click', scrollToSection);
}

// Document ready handler
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    setupDynamicHeading();
});
