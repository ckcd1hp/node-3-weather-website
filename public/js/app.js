console.log('Client side javascript file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = '';
    messageTwo.textContent = 'Loading...';
    const location = search.value;

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = 'Error: ' + data.error;
                messageTwo.textContent = '';
            } else {
                messageOne.textContent = 'Location: ' + data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
})