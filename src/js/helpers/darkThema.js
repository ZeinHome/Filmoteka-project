const checkbox = document.getElementById('checkbox');
let dark;

checkbox.addEventListener('change', () => {
  dark = document.body.classList.toggle('dark');
  if (dark) {
    localStorage.setItem('dark', 'true');
  }
  if (!dark) {
    localStorage.removeItem('dark');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('dark')) {
    document.body.classList.add('dark');
    checkbox.checked = true;
  }
});
