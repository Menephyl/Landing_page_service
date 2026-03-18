document.addEventListener('DOMContentLoaded', () => {

    /* Navbar Scroll Effect */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* FAQ Accordion Logic */
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.maxHeight = null;
                h.nextElementSibling.classList.remove('active');
            });
            
            // Open clicked if it wasn't active
            if (!isActive) {
                header.classList.add('active');
                body.classList.add('active');
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });

    /* Scroll Animation (Fade Up) */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-up to all section titles and cards
    const animatedElements = document.querySelectorAll('.section-header, .card, .about-content, .faq-text, .accordion-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

});
