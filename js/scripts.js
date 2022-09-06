let pokemonList = [
    {
        name: 'Charmander',
        height:7,
        type: ['fire']},
    {
        name:'Bulbasaur',
        height: 4,
        type: ['poison', 'grass']},
    {
        name:'Squirtle',
        height: 2,
        type: ['water']
    }
];

//array of pokemon with names, heights types

 
for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height < 7 && pokemonList[i].height > 2){
        document.write("<li>" + pokemonList[i].name + " is a medium sized pokemon" + "</li>");
    }else if (pokemonList[i].height < 4){
        document.write("<li>" + pokemonList[i].name + " is a small pokemon") + "</li>";
    }else if (pokemonList[i].height > 4){
        document.write("<li>" + pokemonList[i].name + " is a really big pokemon!" + "</li>")
    }
}



// for loop that iterates over items in pokemonList



//create a for loop that iterates over each item in pokemonList:
// Use document.write() inside the loop’s code to write the Pokémon name on your website’s DOM.
// Use what you’ve learned about adding strings in JavaScript to write the Pokémon’s height next
// to its name, for example, “Bulbasaur (height: 7)”.