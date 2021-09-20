(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.querySelector('.toggler');
    const togglerInput = document.querySelector('.toggler__input');
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");
    const html = document.querySelector("html");

    const setTheme = () => {
      const stateIsDark = togglerInput.checked;
      html.setAttribute('data-mode', stateIsDark ? "dark" : "light");
    }

    if (toggler && togglerInput) {
      toggler.addEventListener("change", () => {
        togglerInput.toggleAttribute('checked');
        setTheme();
      })
    }

    if (sun) {
      sun.addEventListener("click", () => {
        togglerInput.checked = false;
        setTheme();
      })
    }

    if (moon) {
      moon.addEventListener("click", () => {
        togglerInput.checked = true;
        setTheme();
      })
    }
  })
})();

