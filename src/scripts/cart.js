export const initCart = () => {
  const cart = document.querySelector('.cart');
  const headerCartButton = document.querySelector('.header__cart-button');
  const cartClose = document.querySelector('.cart__close');

  const toggleCart = () => {
    cart.classList.toggle('cart_open');

    if (cart.classList.contains('cart_open') && window.innerWidth > 1360) {
      cart.scrollIntoView({ behavior: 'smooth' });
    }
  };

  headerCartButton.addEventListener('click', toggleCart);

  cartClose.addEventListener('click', () => {
    cart.classList.remove('cart_open');
  });
};
