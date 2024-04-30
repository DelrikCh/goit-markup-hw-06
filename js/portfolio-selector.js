document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-2');

  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      buttons.forEach((btn) => {
        btn.classList.remove('btn-2-active');
      });

      this.classList.add('btn-2-active');

      const selector = this.innerHTML;
      const cases = document.querySelectorAll('.grid-item');
      cases.forEach((item) => {
        if (selector === 'All' ||
            selector ===
                item.getElementsByClassName('grid-item-tag')[0].innerHTML) {
          item.classList.remove('visually-hidden');
        } else {
          item.classList.add('visually-hidden');
        }
      });
    });
  });
});
