const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

// Проверяем наличие закэшированных данных в локальном хранилище
if (localStorage.getItem('currencyData')) {
    // Если данные есть в локальном хранилище, выводим их на страницу
    const cachedData = JSON.parse(localStorage.getItem('currencyData'));
    displayData(cachedData);
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE && xhr.status == 200) {
        loader.classList.remove('loader_active');
        const responseData = xhr.response;
        const valute = responseData.response.Valute;
        const itemsArray = [];

        for (let key in valute) {
            const charCode = valute[key].CharCode;
            const value = valute[key].Value;
            itemsArray.push({ CharCode: charCode, Value: value });
        }

        // Сохраняем полученные данные в локальном хранилище
        localStorage.setItem('currencyData', JSON.stringify(itemsArray));

       // Выводим данные на страницу
        displayData(itemsArray);
    }
});

function displayData(data) {
    items.innerHTML = '';

    data.forEach((item) => {
        items.insertAdjacentHTML('beforeEnd', 
        `<div class="item">
            <div class="item__code"> ${item.CharCode} </div>
            <div class="item__value"> ${item.Value} </div>
            <div class="item__currency"> руб. </div>
        </div>`
        );
    });
}