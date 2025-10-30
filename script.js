// Back to top button
window.addEventListener('scroll', function() {
    var backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu when clicking a link
        if (window.innerWidth < 992) {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset form
    this.reset();
});

// Scroll Reveal Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 200,
        reset: false,
        easing: 'ease-out'
    });

    // Configure animations for different sections
    sr.reveal('.section-title', {
        origin: 'top',
        interval: 100
    });

    sr.reveal('.profile-img, .hero-content', {
        origin: 'left',
        interval: 150
    });

    sr.reveal('.skill-category', {
        origin: 'bottom',
        interval: 100,
        delay: 200
    });

    // Staggered animation for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        sr.reveal(tag, {
            origin: 'bottom',
            delay: 300 + (index * 50),
            distance: '20px',
            easing: 'ease-out',
            // Ensure elements stay visible after animation
            afterReveal: function(el) {
                el.style.opacity = 1;
                el.style.transform = 'none';
                el.style.visibility = 'visible';
            }
        });
    });

    // Other section animations...
    sr.reveal('.timeline-item', { 
        origin: 'right',
        interval: 200
    });

    sr.reveal('.project-card', {
        origin: 'bottom',
        interval: 200,
        delay: 200
    });
});
