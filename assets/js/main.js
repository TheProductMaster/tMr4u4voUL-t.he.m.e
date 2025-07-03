// Initialize AOS library for animations
AOS.init();

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenuMobile = document.getElementById('navMenuMobile');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenuMobile.classList.toggle('hidden');
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
const themeIcon = document.getElementById('themeIcon');
const rootElement = document.documentElement;

function setTheme(dark) {
  if (dark) {
    rootElement.classList.add('dark');
    themeIcon.classList.add('text-yellow-400');
  } else {
    rootElement.classList.remove('dark');
    themeIcon.classList.remove('text-yellow-400');
  }
}

darkToggle.addEventListener('click', () => {
  const isDark = rootElement.classList.toggle('dark');
  setTheme(isDark);
});
