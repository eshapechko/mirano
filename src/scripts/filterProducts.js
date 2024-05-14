import { fetchProducts } from './API';
import { debounce } from './debounce';
import { callbackWithPreload } from './preload';

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  const goodsTitle = document.querySelector('.goods__title');
  const goodsSection = document.querySelector('.goods');

  const applyFilters = () => {
    const formData = new FormData(filterForm);
    const type = formData.get('type');
    const minPrice = formData.get('minPrice');
    const maxPrice = formData.get('maxPrice');
    const params = {};

    if (type) params.type = type;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    callbackWithPreload(goodsSection, fetchProducts, params);
  };

  applyFilters();

  const applyPriceFilter = debounce(applyFilters, 600);

  filterForm.addEventListener('input', (e) => {
    const target = e.target;

    if (target.name === 'type') {
      goodsTitle.textContent = target.labels[0].textContent;
      filterForm.maxPrice.value = '';
      filterForm.minPrice.value = '';
      applyFilters();
      return;
    }

    if (target.name === 'minPrice' || target.name === 'maxPrice') {
      applyPriceFilter();
    }
  });
};
