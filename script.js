window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('about');
    var aboutPosition = aboutSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; // Adjust as needed

    if (aboutPosition < screenPosition) {
        document.getElementById('aboutText').classList.add('animated-text');
    }
});
        // Function to scroll to the about section
        // Function to scroll to the "About" section
function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth'});
}

function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}
document.getElementById('navbarToggleBtn').addEventListener('click', function() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
});

        /* Add this JavaScript to your existing script tag or script file */
window.addEventListener('scroll', function() {
    var menuSection = document.getElementById('menu');
    var menuPosition = menuSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; // Adjust as needed

    if (menuPosition < screenPosition) {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function(card, index) {
            card.style.transitionDelay = index * 0.1 + 's'; // Add delay to each card for staggered animation
            card.classList.add('animate__animated', 'animate__fadeInUp'); // Use animate.css for fade in animation
        });
    }
});
// Add this JavaScript to your existing script tag or script file
window.addEventListener('load', function() {
    var carousel = document.getElementById('menuCarousel');
    var carouselPrev = carousel.querySelector('.carousel-control-prev');
    var carouselNext = carousel.querySelector('.carousel-control-next');
    
    // Function to check and toggle visibility of carousel control buttons
    function toggleCarouselButtons() {
        var activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active'));
        
        if (activeIndex === 0) {
            carouselPrev.style.display = 'none'; // Hide the previous button on the first slide
        } else {
            carouselPrev.style.display = ''; // Show the previous button if not on the first slide
        }
        
        if (activeIndex === carousel.querySelectorAll('.carousel-item').length - 1) {
            carouselNext.style.display = 'none'; // Hide the next button on the last slide
        } else {
            carouselNext.style.display = ''; // Show the next button if not on the last slide
        }
    }
    
    // Initially check button visibility
    toggleCarouselButtons();
    
    // Listen for carousel slide event and update button visibility
    carousel.addEventListener('slid.bs.carousel', function() {
        toggleCarouselButtons();
    });
});


// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Add JavaScript for form submission or any other functionality here
document.getElementById('book-table-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add form submission logic here
    console.log('Form submitted!');
});
flatpickr("#date", {
    dateFormat: "Y-m-d", // Format of the selected date
    minDate: "today" // Minimum selectable date (optional)
});
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggle-btn');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
    });
});

// Add JavaScript to trigger animation when the "Book a Table" section is scrolled into view
window.addEventListener('scroll', function() {
    var bookTableSection = document.getElementById('book-table');
    var bookTableForm = document.querySelector('.book-table-form');
    if (isInViewport(bookTableSection)) {
        bookTableForm.classList.add('animated-text');
    } else {
        bookTableForm.classList.remove('animated-text');
    }
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        // Show/hide the button based on scroll position
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
// Function to scroll to the "Book a Table" section
function scrollToBookTable() {
    const bookTableSection = document.getElementById('book-table');
    bookTableSection.scrollIntoView({ behavior: 'smooth'});
}
// Function to scroll to the footer (contact section)
function scrollToContact() {
    const footerSection =document.getElementById('Contact');
    footerSection.scrollIntoView({ behavior: 'smooth' });
}
// Function to scroll to the "Book a Table" section
function scrollToBook() {
    const bookSection = document.getElementById('book-table');
    bookSection.scrollIntoView({ behavior: 'smooth' });
}



    
