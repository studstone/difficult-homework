// https://jsonplaceholder.typicode.com/posts
const personData = '{"user": "Vlad", "age": 33, "role": "developer"}';

const getData = user => {
    user = JSON.parse(personData);
    return user;
};


const sendData = (url, data) => fetch(url, {
    method: 'POST',
    body: data,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }

}).then(response => response.json());

sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(getData()))

    .then(data => console.log(data))
    .catch(error => console.log(error));
