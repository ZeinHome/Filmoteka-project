const el = document.querySelector('.follow-cursor');

const followCursor = () => {
  window.addEventListener('mousemove', e => {
    const target = e.target;
    if (!target) return;

    if (
      target.closest('a') ||
      target.closest('img') ||
      target.closest('li') ||
      target.closest('button') ||
      target.closest('label') ||
      target.closest('input')
    ) {
      el.classList.add('follow-cursor_active');
    } else {
      el.classList.remove('follow-cursor_active');
    }

    el.style.left = e.pageX + 'px';
    el.style.top = e.pageY + 'px';

    el.style.display = 'block';
  });
};

window.addEventListener('mouseout', () => {
  el.style.display = 'none';
});

followCursor();
