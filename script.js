// 1 start
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// 2 toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// 3 show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// 4 hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// 5 hide modal on outside click
window.addEventListener('click', e =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);
