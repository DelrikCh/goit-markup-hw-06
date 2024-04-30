import './initIcons.js';

// Fetch header
fetch('header.html').then(response => response.text()).then(html => {
  document.getElementById('headerContainer').innerHTML = html;
});

// Fetch footer
fetch('footer.html').then(response => response.text()).then(html => {
  document.getElementById('footerContainer').innerHTML = html;
});