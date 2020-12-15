//getting a random number for 'page' in url.
let pageNum = Math.floor(Math.random() * 15);

//api url
const baseUrl = `https://picsum.photos/v2/list?page=${pageNum}&limit=005`;
// const baseUrl = `https://picsum.photos/id/${randomNum}/info`;

//html elements
const section = document.querySelector('div');

//calling my function and handling potential errors
getRandomPhoto().catch(error => {
    console.log('This is an error.');
    console.log(error);
});

async function getRandomPhoto() {
    const response = await fetch(baseUrl);
    console.log("Response:", response);
    const json = await response.json();
    console.log('JSON:', json);
    return displayResults(json);
};

function displayResults(json) {
    json.forEach(photo => {
        section.classList.add('container');

        let image = document.createElement('img');
        image.classList.add('photo'); //for css styling
        image.src = photo.download_url;
        image.alt = photo.download_url
        section.appendChild(image);

        let author = document.createElement('p');
        author.classList.add('author-name'); // for css
        author.textContent = photo.author;
        section.appendChild(author);
    });
}