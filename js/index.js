// Toggle the navigation menu when the hamburger is clicked
const hamburgerMenu = document.getElementById('hamburgerMenu');
const nav = document.getElementById('nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('show'); // Add or remove the 'show' class to toggle visibility
});