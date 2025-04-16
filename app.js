'use strict';

const swicher = document.querySelector('.btn');

swicher.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');

  const isDark = document.body.classList.contains('dark-theme');
  this.textContent = isDark ? 'Light' : 'Dark';

  console.log('Classe atual:', document.body.className);
});