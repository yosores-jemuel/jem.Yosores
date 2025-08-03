// Toggle navigation menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('uil-times'); // Change icon to "X"
};

// Close navbar when clicking a nav link (for mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('uil-times');
  };
});

// Remove navbar on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('uil-times');
};

// ScrollReveal animation
ScrollReveal({
  reset: false, // Play animation only once
  distance: '60px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
