
const baseUrl = 'https://picsum.photos/1000/800';

//html elements
const section = document.querySelector('div');

//calling my function and handling potential errors
getRandomPhoto().catch(error => {
    console.log('This is an error.');
    console.log(error);
});

//fetching from the api
async function getRandomPhoto() {
    const response = await fetch(baseUrl);
    console.log("Response:", response);
    const blob = await response.blob();
    console.log('My Blob:', blob);
    return displayResults(blob);
};

//printing results to my page
function displayResults(blob) {
    let objectURL = URL.createObjectURL(blob);

    section.classList.add('container');

    let randomImage = document.createElement('img');
    randomImage.classList.add('photo'); //for css styling
    randomImage.src = objectURL;

    section.appendChild(randomImage);
}