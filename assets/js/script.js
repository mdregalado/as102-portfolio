const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const navLinks = document.querySelectorAll('.nav-links a');

menuToggle?.addEventListener('click', () => sidebar.classList.toggle('show'));
navLinks.forEach(link => link.addEventListener('click', () => sidebar.classList.remove('show')));

const filterButtons = document.querySelectorAll('.filter-btn');
const activityItems = document.querySelectorAll('.activity-item');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    activityItems.forEach(item => {
      item.classList.toggle('hide', filter !== 'all' && item.dataset.category !== filter);
    });
  });
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});
