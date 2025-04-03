document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.getElementById('home');
    homeSection.style.opacity = 0;
    setTimeout(() => {
        homeSection.style.transition = 'opacity 3s';
        homeSection.style.opacity = 1;
    }, 500);

    // Remove the old navigation code and replace with th unified version
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);

    // Smooth scroll and menu close for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Smooth scroll
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle responsive behavior
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = () => {
        if (!mediaQuery.matches) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    };
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange();

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Console message for pie cshart initialization
    console.log('Initializing chart...');
    console.log('Canvas element:', document.getElementById('skillsChart'));

    // Initialize tooltips and popovers if needed
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Smooth scrolling for navbar links
    document.querySelectorAll('.navbar .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close the mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Active link highlighting based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar .nav-link');
        
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Animate on scroll effect
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect();
            const isVisible = (elementPosition.top <= window.innerHeight * 0.8);
            
            if (isVisible && !element.classList.contains('animate__show')) {
                element.classList.add('animate__show');
            }
        });
        
        // Animate skill bars when they come into view
        const skillBars = document.querySelectorAll('.progress-bar');
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect();
            const isVisible = (barPosition.top <= window.innerHeight * 0.8);
            
            if (isVisible && !bar.classList.contains('animated')) {
                const targetWidth = bar.getAttribute('aria-valuenow') + '%';
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                    bar.classList.add('animated');
                }, 100);
            }
        });

        // Animate skill circles when they come into view
        const skillCircles = document.querySelectorAll('.skill-circle');
        skillCircles.forEach(circle => {
            const circlePosition = circle.getBoundingClientRect();
            const isVisible = (circlePosition.top <= window.innerHeight * 0.9);
            
            if (isVisible && !circle.classList.contains('animated')) {
                const percentage = circle.style.getPropertyValue('--percentage');
                circle.style.setProperty('--percentage', '0');
                setTimeout(() => {
                    circle.style.setProperty('--percentage', percentage);
                    circle.classList.add('animated');
                }, 100);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Form submission with original form design
    const form = document.getElementById('queryForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            // Visual feedback
            submitBtn.textContent = 'Sending...';
            submitBtn.style.opacity = 0.7;
            
            // Form is handled by Formspree, we just add visual feedback
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = '#16a085';
                
                // Reset form and button after delay
                setTimeout(() => {
                form.reset();
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.style.backgroundColor = '#1ABC9C';
                    submitBtn.style.opacity = 1;
                }, 3000);
            }, 1500);
        });
    }
});


//Color Code for pie chart

// backgroundColor: [
//     '#a8dadc',  // Light Blue
//     '#457b9d',  // Dark Blue
//     '#e63946',  // Red
//     '#f1faee',  // Off-White
//     '#6c5b7b',  // Purple
//     '#355c7d',  // Dark Blue
//     '#c06c84'   // Pink
// ],
// borderColor: '#fff',

// backgroundColor: [
//     '#3DDC84',  // Android Green
//     '#7F52FF',  // Kotlin Purple
//     '#f89820',  // Java Orange
//     '#FFCA28',  // Firebase Yellow
//     '#F05032',  // Git Red
//     '#4285F4',  // Google Blue
//     '#00BCD4'   // Cyan
// ],
// borderColor: '#131313',

// backgroundColor: [
//     '#f9c74f',  // Yellow
//     '#f9f871',
//     '#90be6d',  // Green
//     '#43aa8b',
//     '#4d908e',  // Blue-Green
//     '#277da1',
//     '#577590'   // Dark Blue
// ],
// borderColor: '#fff',
