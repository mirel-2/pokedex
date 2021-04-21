const URL = 'https://pokeapi.co/api/v2/pokemon/';
const URL_IMG = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/versions/generation-v/black-white/animated/';
const URL_IMG_ENDING = '.gif?raw=true';

var id = document.getElementById('input-id');
var button = document.getElementById('submit-button');

function loadPokemon() {
    var pokemonName = document.getElementById('pokemon-name');

    var opts = {
        method: 'GET', // POST PUT DELETE OPTIONS PATCH
        headers: {} // JWT-Token, Authentifizierung
        // body:{}
    };

    fetch(URL + id.value, opts)
    .then(function (response) {
        return response.json();
    }).then(function (body) {
        
        pokemonName.innerHTML = body.name;
    });
}
button.addEventListener('click', loadPokemon, true);


function loadPokeImage() {
    console.log("abcc");
    var pokeImg = document.getElementById('pokemon-image');
    pokeImg.setAttribute("src", URL_IMG + id.value + URL_IMG_ENDING);
}