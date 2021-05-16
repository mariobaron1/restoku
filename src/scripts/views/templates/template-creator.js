import CONFIG from "../../globals/config";

const createRestoDetailTemplate = (resto) => `
  <h2 class="movie__title">${resto.restaurant.name}</h2>
  <img class="movie__poster" src="${
    CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId
  }" alt="${resto.restaurant.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${resto.restaurant.address}, ${resto.restaurant.city}</p>
    <h4>Kategori Menu</h4>
    ${resto.restaurant.categories
      .map(
        (categori) => `
    <span class="category-name">${categori.name}</span>
  `
      )
      .join("")}
    <h4>Menu Makanan</h4>
    ${resto.restaurant.menus.foods
      .map(
        (food) => `
    <span class="category-name">${food.name}</span>
  `
      )
      .join("")}
    <h4>Menu Minuman</h4>
    ${resto.restaurant.menus.drinks
      .map(
        (drink) => `
    <span class="category-name">${drink.name}</span>
  `
      )
      .join("")}
    <h4>Rating</h4>
    <p>${resto.restaurant.rating}</p>
    <h4>Customer Review</h4>
    ${resto.restaurant.customerReviews
      .map(
        (review) => `
    <div class="review-card">
      <p class="review-name">${review.name}</p>
      <p class="review-date">${review.date}</p>
      <p class="review-comment">${review.review}</p>
    </div>
  `
      )
      .join("")}
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${resto.restaurant.description}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster" alt="${resto.name}"
            src="${
              resto.pictureId
                ? CONFIG.BASE_IMAGE_URL + resto.pictureId
                : "https://picsum.photos/id/666/800/450?grayscale"
            }">
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${
              resto.rating
            }</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

export { createRestoItemTemplate, createRestoDetailTemplate };
