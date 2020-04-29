const header = document.querySelector('header');
const section = document.querySelector('section');
const video = document.querySelector('video');
// link van alle films
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
// GET Request
request.open('GET', requestURL);
// GET Response type JSON
request.responseType = 'json';
// Verstuur request
request.send();

// OP HET MOMENT DAT HIJ LAAD
request.onload = function() {
    // plaats de response in movie
    const movie = request.response;
    // Log wat er in de response zit
    console.log(movie);

    // Functie populateHeader gebruik om alles te tonen.
    populateHeader(movie);
}

function populateHeader(jsonObj) {
    // Creëert Header
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj[0].title;
    header.appendChild(myH1);

    // Creëert Img 
    const myImg = document.createElement('img');
    myImg.src = jsonObj[0].cover;
    header.appendChild(myImg);


    // Creëert paragraaf
    const myPara = document.createElement('p');
    myPara.textContent = 'Plot: ' + jsonObj[0].plot + ' // Release date: ' + jsonObj[0].release_date;
    header.appendChild(myPara);

    // Laat trailer zien
    const myTrailer = document.createElement('video');
    myTrailer.src = jsonObj[0].trailer('video');
    video.appendChild(myTrailer);




}