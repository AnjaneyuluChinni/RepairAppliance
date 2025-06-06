// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (!this.checkValidity()) {
                event.stopPropagation();
            } else {
                // Here you would typically send the form data to your server
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }
            
            this.classList.add('was-validated');
        });
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = 'none';
    }
});

// Add animation classes on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, .contact-info');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate-fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Mobile Menu Toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove('show');
        }
    });
}

// Phone Number Formatting
const phoneInput = document.querySelector('input[type="tel"]');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}

// Sticky CTA Bar visibility on scroll
document.addEventListener('DOMContentLoaded', function() {
    const stickyCta = document.querySelector('.sticky-cta');
    const heroSection = document.querySelector('.hero-section');

    if (stickyCta && heroSection) {
        const heroHeight = heroSection.offsetHeight;

        window.addEventListener('scroll', function() {
            if (window.scrollY > heroHeight - 100) { // Show after scrolling past most of the hero section
                stickyCta.classList.add('show');
            } else {
                stickyCta.classList.remove('show');
            }
        });
    }
});

// Enable Bootstrap dropdowns on hover for desktop
document.addEventListener('DOMContentLoaded', function() {
    const $dropdowns = $('.dropdown');
    if ($dropdowns.length > 0 && $(window).width() >= 992) { // Apply only on desktop
        $dropdowns.on('mouseenter', function() {
            $(this).addClass('show').find('.dropdown-toggle').attr('aria-expanded', 'true');
            $(this).find('.dropdown-menu').addClass('show');
        }).on('mouseleave', function() {
            $(this).removeClass('show').find('.dropdown-toggle').attr('aria-expanded', 'false');
            $(this).find('.dropdown-menu').removeClass('show');
        });
    }
}); 