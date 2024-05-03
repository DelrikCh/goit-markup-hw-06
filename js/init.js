import './initIcons.js';

// Function to add 'current' class to the active link
function setActiveNavLink() {
  let currentPageUrl = window.location.pathname;
  currentPageUrl =
      currentPageUrl.substring(currentPageUrl.lastIndexOf('/') + 1);
  if (currentPageUrl === '') {
    currentPageUrl = 'index.html';
  }

  const navLinks = document.querySelectorAll('.header-link');

  navLinks.forEach(link => {
    let linkUrl = link.getAttribute('href');
    linkUrl = linkUrl.substring(linkUrl.lastIndexOf('/') + 1);

    if (linkUrl === currentPageUrl) {
      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });
}

(function() {
// Fetch header
fetch('header.html').then(response => response.text()).then(html => {
  document.getElementById('headerContainer').innerHTML = html;
  setActiveNavLink();
});

// Fetch footer
fetch('footer.html').then(response => response.text()).then(html => {
  document.getElementById('footerContainer').innerHTML = html;
});
})();
