import './initIcons.js';
import './modal.js';

// Function to add 'current' class to the active link
function setActiveNavLink() {
  const currentPageUrl = window.location.pathname;

  const navLinks = document.querySelectorAll('.header-link');

  navLinks.forEach(link => {
    const linkUrl = link.getAttribute('href');

    if (linkUrl === currentPageUrl) {
      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });
};

(function() {
// Fetch header
fetch('header.html').then(response => response.text()).then(html => {
  document.getElementById('headerContainer').innerHTML = html;
  setActiveNavLink();
});

// Fetch footer
fetch('footer.html').then(response => response.text()).then(html => {
  document.getElementById('footerContainer').innerHTML = html;
})
}());