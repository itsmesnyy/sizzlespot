window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('about');
    var aboutPosition = aboutSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; 

    if (aboutPosition < screenPosition) {
        document.getElementById('aboutText').classList.add('animated-text');
    }
});

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

window.addEventListener('scroll', function() {
    var menuSection = document.getElementById('menu');
    var menuPosition = menuSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; 

    if (menuPosition < screenPosition) {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function(card, index) {
            card.style.transitionDelay = index * 0.1 + 's'; 
            card.classList.add('animate__animated', 'animate__fadeInUp'); 
        });
    }
});

window.addEventListener('load', function() {
    var carousel = document.getElementById('menuCarousel');
    var carouselPrev = carousel.querySelector('.carousel-control-prev');
    var carouselNext = carousel.querySelector('.carousel-control-next');
    
    function toggleCarouselButtons() {
        var activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active'));
        
        if (activeIndex === 0) {
            carouselPrev.style.display = 'none'; 
        } else {
            carouselPrev.style.display = '';
        }
        
        if (activeIndex === carousel.querySelectorAll('.carousel-item').length - 1) {
            carouselNext.style.display = 'none'; 
        } else {
            carouselNext.style.display = '';
        }
    }

    toggleCarouselButtons();

    carousel.addEventListener('slid.bs.carousel', function() {
        toggleCarouselButtons();
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.getElementById('book-table-form').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Form submitted!');
});
flatpickr("#date", {
    dateFormat: "Y-m-d",
    minDate: "today"
});

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
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
function scrollToBookTable() {
    const bookTableSection = document.getElementById('book-table');
    bookTableSection.scrollIntoView({ behavior: 'smooth'});
}
function scrollToContact() {
    const footerSection =document.getElementById('Contact');
    footerSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToBook() {
    const bookSection = document.getElementById('book-table');
    bookSection.scrollIntoView({ behavior: 'smooth' });
}



    
