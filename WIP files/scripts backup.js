let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Charmander',
            height: 7,
            type: ['Fire']
        },
        {
            name: 'Bulbasaur',
            height: 4,
            type: ['Poison', 'Grass']
        },
        {
            name: 'Squirtle',
            height: 2,
            type: ['Water']
        }
    ]
    
    function getAll() {
        return pokemonList;
    }
    function add(pokemon) {
        let keys = Object.keys(pokemon);
        if (keys.length === 3 && keys.includes('name') && keys.includes('height') && keys.includes('type')) {
            if (typeof (pokemon.name) === 'string' && typeof (pokemon.height) === 'number' && Array.isArray(pokemon.type)) {
                pokemonList.push(pokemon);
            }
        }
    }
    function getPokemonByName(name) {
        if (typeof (name) === 'string') {
            return pokemonList.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
        }
    }

    function addListItem(pokemon) {
        let container = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button')
    //to enable loop to return each name of the pokemon characters do not put the pokemon.name in quotation marks
        button.innerText = pokemon.name;
        button.classList.add('button');
        listItem.appendChild(button);
        container.appendChild(listItem);
        button.addEventListener('click', function(event){ //step 2-1 add event listener for each button 
            showDetails(pokemon); //step 2-2 add showDetails pokemon
        });
    };
//console log each button press with pokemon details in console
            function showDetails(pokemon) {
                console.log(pokemon);
     }

    return {
        getAll: getAll,
        add: add,
        getPokemonByName: getPokemonByName,
        addListItem : addListItem,
        showDetails : showDetails
    };

})();

// console.log(pokemonRepository.getAll());
// pokemonRepository.add({ name: 'Totodile', height: 4, type: ['Water'] });


let pokemonList = pokemonRepository.getAll();
pokemonList.forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
});

// document.write('<p> Filtered Pokemon List by Name: Squirtle </p>');
// let foundPokemon = pokemonRepository.getPokemonByName('squirtle')[0];
// document.write('<p>' + foundPokemon.name + ' height: ' + foundPokemon.height + ' ' + 'Type:' + ' ' + foundPokemon.type + '</p>');

