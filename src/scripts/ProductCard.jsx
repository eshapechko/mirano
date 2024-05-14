import { API_URL } from './API';

export const ProductCard = (product) => (
  <li class='goods__item'>
    <article class='goods__card card'>
      <img
        class='card__image'
        src={`${API_URL}${product.photoUrl}`}
        alt={product.name}
      />

      <div class='card__content'>
        <h3 class='card__title'>{product.name}</h3>

        <div class='card__footer'>
          <p class='card__date-delivery'>сегодня в 14:00</p>

          <button
            onMouseEnter={(e) => {
              e.target.textContent = 'В корзину';
            }}
            onMouseLeave={(e) => {
              e.target.innerHTML = `${product.price}&nbsp;₽`;
            }}
            class='card__button'>
            {product.price}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  </li>
);

{
  /* <span class='card__price'>{product.price}&nbsp;₽</span>
<span class='card__button-text'>в корзину</span> */
}
