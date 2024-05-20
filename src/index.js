import '@/scss/index.scss';
import { initHeaderFixer } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderProducts } from '@/scripts/renderProducts';
import { initChoicesType } from '@/scripts/choicesType';
import { filterProducts } from '@/scripts/filterProducts';
import { initSearchProducts } from '@/scripts/searchProducts';
import { initOrder } from '@/scripts/orderController';

const init = () => {
  initHeaderFixer();
  initChoices();
  initChoicesType();
  initCart();
  renderProducts();
  filterProducts();
  initSearchProducts();
  initOrder();
};

document.addEventListener('DOMContentLoaded', init());
