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

    // Create a pie chart for skills using Chart.js
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Android Development', 'Kotlin', 'OOPs', 'C, C++, Java', 'HTML5', 'CSS3', 'Python (basics)'],
            datasets: [{
                label: 'Skill Levels',
                data: [90, 40, 40, 35, 30, 35, 25],
                backgroundColor: [
                        '#3DDC84',  // Android Green
                        '#7F52FF',  // Kotlin Purple
                        '#f89820',  // Java Orange
                        '#FFCA28',  // Firebase Yellow
                        '#F05032',  // Git Red
                        '#4285F4',  // Google Blue
                        '#00BCD4'   // Cyan
                        ],
                            borderColor: '#fff',
                            borderColor: '#fff',
                            borderColor: '#131313',
                            borderColor: '#fff',
                            borderColor: '#fff',
                            borderColor: '#fff',
                            borderWidth: 1,
                            font: {
                                color: '#111111'
                            }
                        }]
                    },
            options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Skills Pie Chart'
                        }
                    }
                }
            });
    
    // Form submission handling
    const form = document.getElementById('queryForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Form will be handled by Formspree automatically
            // This can add loading states or success messages here
            setTimeout(() => {
                alert('Thank you for your message!');
                form.reset();
            }, 1000);
        });
    }

    // Add the new smooth scroll for .nav-link elements
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target ID without the #
            const targetElement = document.getElementById(targetId);

            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
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
