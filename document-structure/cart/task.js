// Получаем все кнопки "Добавить в корзину"
const addToCartButtons = document.querySelectorAll('.product__add');

// Перебираем все кнопки и добавляем обработчик события клика
addToCartButtons.forEach(button => {
	button.addEventListener('click', (event) => {
		const product = event.target.closest('.product');
		const productId = product.getAttribute('data-id');
		const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

		const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
		if (cartProduct) {
			// Если товар уже есть в корзине, увеличиваем его количество
			const currentQuantity = parseInt(cartProduct.querySelector('.cart__product-count').textContent);
			cartProduct.querySelector('.cart__product-count').textContent = currentQuantity + quantity;
		} else {
			// Если товара нет в корзине, создаем новый элемент для корзины
			const cartProducts = document.querySelector('.cart__products');
			const productImage = product.querySelector('.product__image').src;
			const cartProductTemplate = `
              <div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${quantity}</div>
              </div>
        `;

			cartProducts.insertAdjacentHTML('beforeend', cartProductTemplate);
		}
	});
});

// Добавляем обработчики событий для изменения количества товаров
const incButtons = document.querySelectorAll('.product__quantity-control_inc');
const decButtons = document.querySelectorAll('.product__quantity-control_dec');

incButtons.forEach(button => {
	button.addEventListener('click', (event) => {
		const quantityValue = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
		let quantity = parseInt(quantityValue.textContent);

		quantity++;
		quantityValue.textContent = quantity;
	});
});

decButtons.forEach(button => {
	button.addEventListener('click', (event) => {
		const quantityValue = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
		let quantity = parseInt(quantityValue.textContent);

		if (quantity > 1) {
			quantity--;
			quantityValue.textContent = quantity;
		}
	});
});