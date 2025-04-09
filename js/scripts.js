// Hamburger menu toggle
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.links');

hamburgerIcon.addEventListener('click', function () {
    navLinks.classList.toggle('show'); 
});

