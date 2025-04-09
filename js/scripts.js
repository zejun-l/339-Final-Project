// Hamburger menu toggle
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.querySelector('.links');

hamburgerIcon.addEventListener('click', function () {
  hamburgerIcon.classList.toggle('active');  
  mobileMenu.classList.toggle('show');  
});
