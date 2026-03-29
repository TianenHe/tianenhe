// home.js — homepage interactions

// Pause grid animation on hover for a subtle effect
const gridBg = document.getElementById('gridBg');
if (gridBg) {
  gridBg.addEventListener('mouseenter', () => {
    gridBg.querySelectorAll('.grid-track').forEach(t => {
      t.style.animationPlayState = 'paused';
    });
  });
  gridBg.addEventListener('mouseleave', () => {
    gridBg.querySelectorAll('.grid-track').forEach(t => {
      t.style.animationPlayState = 'running';
    });
  });
}
