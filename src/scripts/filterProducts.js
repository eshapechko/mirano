import { fetchProducts } from './API';

const filterType = (type) => {
  fetchProducts({ type: type.value });
};

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  filterType(filterForm.type);

  filterForm.addEventListener('input', (e) => {
    const target = e.target;

    if (target.name === 'type') {
      filterType(filterForm.type);
    }
  });
};
