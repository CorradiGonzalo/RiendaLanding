const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navToggleIcon = document.getElementById('navToggleIcon');
const iconMenu = '<path d="M4 6h16M4 12h16M4 18h16" stroke="#202a19" stroke-width="2" stroke-linecap="round"/>';
const iconClose = '<path d="M6 6l12 12M18 6L6 18" stroke="#202a19" stroke-width="2" stroke-linecap="round"/>';

function closeNav(){
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggleIcon.innerHTML = iconMenu;
}
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggleIcon.innerHTML = isOpen ? iconClose : iconMenu;
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
