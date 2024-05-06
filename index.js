import '@/scss/index.scss';

const header = document.querySelector('.header');
const body = document.body;
let headerHeight = header.offsetHeight;

window.addEventListener('resize', () => {
  headerHeight = header.offsetHeight;
});

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;

  if (scrollDistance > 200) {
    header.classList.add('header_fixed');
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove('header_fixed');
    body.style.paddingTop = '0';
  }
});

const adjustElementPosition = (element, count = 0) => {
  const rect = element.getBoundingClientRect();
  const viewPortWidth = window.innerWidth;

  if (rect.left < 0) {
    element.style.left = '0';
    element.style.right = 'auto';
    element.style.transform = 'translateX(0)';
  } else if (rect.right > viewPortWidth) {
    element.style.left = 'auto';
    element.style.right = '0';
    element.style.transform = 'translateX(0)';
  } else {
    element.style.left = '50%';
    element.style.right = 'auto';
    element.style.transform = 'translateX(-50%)';
  }

  const postRect = element.getBoundingClientRect();
  if ((postRect.left < 0 || postRect.right > viewPortWidth) && count < 3) {
    count++;
    adjustElementPosition(element, count);
  }
};

const choices = document.querySelectorAll('.choices');

choices.forEach((choice) => {
  const btn = choice.querySelector('.choices__btn');
  const box = choice.querySelector('.choices__box');

  btn.addEventListener('click', () => {
    box.classList.toggle('choices__box_open');

    choices.forEach((item) => {
      if (item !== choice) {
        item
          .querySelector('.choices__box')
          .classList.remove('choices__box_open');
      }
    });

    adjustElementPosition(box);
  });

  window.addEventListener('resize', () => {
    adjustElementPosition(box);
  });
});

const cart = document.querySelector('.cart');
const headerCartButton = document.querySelector('.header__cart-button');
const cartClose = document.querySelector('.cart__close');

headerCartButton.addEventListener('click', () => {
  cart.classList.toggle('cart_open');
});

cartClose.addEventListener('click', () => {
  cart.classList.remove('cart_open');
});
