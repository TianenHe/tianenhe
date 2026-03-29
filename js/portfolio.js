// portfolio.js — category filtering

const tabs = document.querySelectorAll('.tab-btn');
const items = document.querySelectorAll('.portfolio-item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('hidden');
        // re-trigger fade
        item.classList.remove('visible');
        setTimeout(() => item.classList.add('visible'), 50);
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// Lightbox (basic — for real images)
items.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const title = item.querySelector('.portfolio-item__title')?.textContent || '';
    const tag = item.querySelector('.pill, .pill--gold')?.textContent || '';

    if (!img) return; // Skip for placeholder divs

    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.querySelector('.lightbox__img').src = img.src;
    lb.querySelector('.lightbox__title').textContent = title;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

// Close lightbox
document.addEventListener('click', e => {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  if (e.target === lb || e.target.closest('.lightbox__close')) {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const lb = document.getElementById('lightbox');
    if (lb) { lb.classList.remove('open'); document.body.style.overflow = ''; }
  }
});
