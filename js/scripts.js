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
        } else {
            console.log("pokemon is not correct");
        }
    }


    function getAll() {
        return pokemonList;
    };

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#modal-container');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });

    };

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    };

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    };

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    };

    function showModal(item) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
      
        modalTitle.empty();
        modalBody.empty();
      
        let nameElement = $('<h1>' + item.name + '</h1>');
        let imageElement = $('<img class="modal-img">');
        imageElement.attr('src', item.imageUrl);
        let heightElement = $('<p>' + 'Height: ' + item.height + '</p>');
        let typesElement = $('<p>' + 'Types: ' + item.types + '</p>');
      
        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalBody.append(typesElement);
      }


    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
    };

})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

