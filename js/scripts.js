let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=950';    

    
    function add(pokemon) {
       if (
        typeof pokemon === "object" &&
        "name" in pokemon 
        &&
        "detailsUrl" in pokemon
    ) { 
        pokemonList.push(pokemon);
    }else {
        console.log("pokemon is not correct");       
        }
    }

    function getAll() {
        return pokemonList;
    }

    function getPokemonByName(name) {
        if (typeof (name) === 'string') {
            return pokemonList.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
        }
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button')
    //to enable loop to return each name of the pokemon characters do not put the pokemon.name in quotation marks
        button.innerText = pokemon.name;
        button.classList.add('button');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function(event){ //step 2-1 add event listener for each button 
            showDetails(pokemon); //step 2-2 add showDetails pokemon
        });
        
    };

    function loadList(){
        return fetch(apiUrl).then(function (response){
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
            add(pokemon);
            });
        }).catch(function (e){
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function(details){
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e){
            console.error(e);
        });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function(){
            console.log(item);
        });
    }



//     function showDetails(pokemon) {
//         loadDetails(pokemon).then(function (){
//             console.log(pokemon);
//         });
//     }



// //console log each button press with pokemon details in console
//             function showDetails(pokemon) {
//                     console.log(pokemon);
              
//      }
//not currently functioning as intended

    return {
        getAll: getAll,
        add: add,
        addListItem : addListItem,
        showDetails : showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };

})();

// console.log(pokemonRepository.getAll());
// pokemonRepository.add({ name: 'Totodile', height: 4, type: ['Water'] });

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
});
});
// document.write('<p> Filtered Pokemon List by Name: Squirtle </p>');
// let foundPokemon = pokemonRepository.getPokemonByName('squirtle')[0];
// document.write('<p>' + foundPokemon.name + ' height: ' + foundPokemon.height + ' ' + 'Type:' + ' ' + foundPokemon.type + '</p>');

