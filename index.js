const btnsFavorite = document.querySelectorAll('.favorite');
const products = document.querySelectorAll('.card-product');
const counterFavorites = document.querySelector('.counter-favorite');

const containerListFavorites = document.querySelector(
	'.container-list-favorites'
);
const listFavorites = document.querySelector('.list-favorites');

let favorites = [];

const updateFavoritesInLocalStorage = () => {
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = () => {
	const storedFavorites = localStorage.getItem('favorites');

	if (storedFavorites) {
		favorites = JSON.parse(storedFavorites);
		showHTML();
	}
};

const toggleFavorite = product => {
	const index = favorites.findIndex(
		element => element.id === product.id
	);

	if (index > -1) {
		favorites.splice(index, 1);
		updateFavoritesInLocalStorage();
	} else {
		favorites.push(product);
		updateFavoritesInLocalStorage();
	}
};

const updateFavoriteMenu = () => {
	listFavorites.innerHTML = '';

	favorites.forEach(fav => {
		// Crear un nuevo elemento 'div' para el producto favorito
		const favoriteCard = document.createElement('div');
		favoriteCard.classList.add('card-favorite');

		// Crear y añadir el título del producto
		const titleElement = document.createElement('p');
		titleElement.classList.add('title');
		titleElement.textContent = fav.title;
		favoriteCard.appendChild(titleElement);

		// Crear y añadir el precio del producto
		const priceElement = document.createElement('p');
		priceElement.textContent = fav.price;
		favoriteCard.appendChild(priceElement);

		// Añadir el producto favorito a la lista
		listFavorites.appendChild(favoriteCard);
	});
};