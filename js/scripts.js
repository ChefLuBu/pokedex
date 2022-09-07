// create a new variable pokemonRepository and assign the IIFE to it
// The IIFE should return an object with the following public functions assigned as keys: 
// getAll: return all items (pokemonRepository.getAll(); should return the pokemonList array)
// add: add a single item to the pokemonList array (calling pokemonRepository.add(item); 
// should add the Pokémon referred to with item to the pokemonList array)   

let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Charmander',
            height:7,
            type: ['Fire']},
        {
            name:'Bulbasaur',
            height: 4,
            type: ['Poison', 'Grass']},
        {
            name:'Squirtle',
            height: 2,
            type: ['Water']
        }
    ]

    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    
    return {
        getAll: getAll,
        add: add
    };

})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Totodile', height: 4, type: 'Water' });
//add function adds Totodile to the array along with parameters specified


//array of pokemon with names, heights types
//functions call actions without repasting code over and over again
//Parameters go inside of functions parentheses when declared
//Arguments go inside of functions parentheses when called
 
let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function(pokemon){
    console.log(pokemon.name + ' height: ' + pokemon.height + '' + pokemon.type);
    document.write('<p>' + pokemon.name + ' height: ' + pokemon.height + ' ' + 'Type:' + ' '  + pokemon.type + '</p>'); 
})


// for (let i = 0; i < pokemonList.length; i++ ) { to loop through each pokemon character
//   if  (pokemonList[i].height > 1.5) {
//     document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + ' -Wow, that\'s big!' + '</p>');
//   } else {
//       document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + '</p>');  the <br> tag added a line break while the <p> tag also adds a line break and puts each pokemon in a different paragraph
//   }
// }


// For loop that specifies pokemon size based on parameters

