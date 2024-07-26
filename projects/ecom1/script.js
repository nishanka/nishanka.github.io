const nav = document.getElementById('Nav');
const hamburger = document.getElementById('Hamburger');
const navClose = document.getElementById('NavClose');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

var productItem = document.getElementsByClassName('product__item');

if (productItem) {
  for (let i = 0; i < productItem.length; i++) {
    productItem[i].onclick = function () {
      window.location.href = 'product.html';
    };
  }
}