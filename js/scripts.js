let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=950';

    let modalContainer = document.querySelector
        ('#modal-container');

    function capitalizeFirstLetter(someText) {
        return someText.charAt(0).toUpperCase() + someText.slice(1);
    }

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

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            showModal(item);
        });
    };

    //I'M ABOUT TO MODAL

    function showModal(pokemon) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);


        let titleElement = document.createElement('h1');        
        titleElement.innerText = capitalizeFirstLetter(pokemon.name);

        let contentElement = document.createElement('div');
        //contentElement.innerText = 'Height:' + pokemon.height + ', Type: ' + pokemon.types[0].type.name;
        
        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height: ' + pokemon.height;
        contentElement.appendChild(heightElement);

        let typeHeaderElement = document.createElement('p');
        typeHeaderElement.innerText = 'Types'
        contentElement.appendChild(typeHeaderElement);

        let typeListElement = document.createElement('ul');

        pokemon.types.forEach(function(type) {
            let typeElement = document.createElement('li');
            typeElement.innerText =  capitalizeFirstLetter(type.type.name);
            typeListElement.appendChild(typeElement);
        });

        contentElement.appendChild(typeListElement);

        let imageElement = document.createElement('img');
        imageElement.src = pokemon.imageUrl;
        imageElement.height = 250;
        imageElement.width = 250;

        contentElement.appendChild(imageElement);

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    };


    let dialogPromiseReject

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');

        if (dialogPromiseReject) {
            dialogPromiseReject();
            dialogPromiseReject = null;
        };
    };

    // function showDialog(title, text){
    //     showModal(title, text);


    //     let modal = modalContainer.querySelector('modal');
    //     let confirmButton = document.createElement('button');
    //     confirmButton.classList.add('modal-confirm');
    //     confirmButton.innerText = 'Confirm';

    //     let cancelButton = document.createElement('button');
    //     cancelButton.classList.add('modal-cancel');
    //     cancelButton.innerText = 'Cancel';

    //     modal.appendChild(confirmButton);
    //     modal.append(cancelButton);

    //     confirmButton.focus();
    //     return new Promise((resolve, reject) => {
    //         cancelButton.addEventListener('click', hideModal);
    //         confirmButton.addEventListener('click', () => {
    //             dialogPromiseReject = null;
    //             hideModal();
    //             resolve();
    //         });
    //         dialogPromiseReject = reject;
    //     });
    // }

    // document.querySelector('#show-dialog').addEventListener('click', ()=> {
    //     showDialog('Confirm action', 'Are you sure you want to do this?').then(function(){
    //         alert('confirmed!');
    //     }, () => {
    //         alert('not confirmed');
    //     });
    // });       


    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' &&
            modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });


    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

    // document.querySelector('#show-modal').addEventListener('click', () => {
    //     showModal('POKEDEX', 'Welcome to the Pokedex!');
    // });





    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };

})();


pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

