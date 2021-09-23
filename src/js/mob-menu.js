(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById('mob-menu');
    const menuClose = document.getElementById('mob-menu-close');
    const menuOpen = document.getElementById('mob-menu-open');
    const contextArea = document.querySelector('.mob-menu__context-background');

    if (menuOpen) {
      menuOpen.addEventListener('click', () => {
        if (menu) {
          menu.setAttribute('data-open', '');
        }
      });
    }
    if (menuClose) {
      menuClose.addEventListener('click', () => {
        if (menu) {
          menu.removeAttribute('data-open');
        }
      });
    }
    if (contextArea) {
      contextArea.addEventListener('click', (e) => {
        if (menu) {
          e.stopPropagation();
          menu.removeAttribute('data-open');
        }
      });
    }
  })
})();
