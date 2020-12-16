//api url
const baseUrl = 'https://picsum.photos/v2/list?page=09&limit=100';

//html elements
const section = document.querySelector('div');
const button = document.querySelector('.btn');

//fetching from the api
async function getRandomPhoto() {
    section.innerHTML = '';

    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            console.log("Response:", response);
            const json = await response.json();
            console.log('JSON:', json);
            return displayResults(json);
        }
    } catch(e) {
        console.log('This is an error.');
        console.log(e);
    }
};

//printing results to page
function displayResults(json) {
    let randomNum = Math.floor(Math.random() * (json.length - 0 ) + 0);
    let photo = json[randomNum];

    section.classList.add('container'); //for bootstrap styling

    let image = document.createElement('img');
    image.classList.add('photo');
    image.src = photo.download_url;
    image.alt = photo.download_url;
    section.appendChild(image);

    let author = document.createElement('p');
    author.classList.add('author-name');
    author.textContent = photo.author;
    section.appendChild(author);
}

button.addEventListener('click', getRandomPhoto);