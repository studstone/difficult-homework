const select = document.querySelector('select');
const divBlock = document.querySelector('div');


const findCarInfo = (array, brand) => array.find(item => item.brand === brand);

const addInnerHtml = (div, obj) => {
    if (obj) {
        div.innerHTML = `<p> Тачка: ${obj.model} </p> <p> Цена: ${obj.price} $ </p>`;
    } else {
        div.innerHTML = '<p>Выбери тачку </p>';
    }

};

const fetchCarInfo = (brand, div) => fetch('./cars.json', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(data => findCarInfo(data.cars, brand))
    .then(data => addInnerHtml(div, data))
    .catch(error => console.log(error));


addInnerHtml(divBlock);

select.addEventListener('change', e => {
    const brand = e.target.options[e.target.selectedIndex].text;
    fetchCarInfo(brand, divBlock);
});


