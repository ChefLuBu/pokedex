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

// For loop that specifies pokemon size based on parameters

    



