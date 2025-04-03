/* Shooting Star Effect */
function createShootingStar() {
  const star = document.createElement('div');
  star.classList.add('shooting-star');
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.left = '-100px';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 3000);
}
setInterval(createShootingStar, 5000);

/* Dark/Light Mode Toggle */
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

/* Back to Top Button */
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Section Reveal on Scroll */
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

/* Contact Form Submission */
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! This is a demo form.');
  contactForm.reset();
});
