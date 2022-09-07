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
//functions call actions without repasting code over and over again
//Parameters go inside of functions parentheses when declared
//Arguments go inside of functions parentheses when called
 
for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height < 7 && pokemonList[i].height > 2){
        console.log(pokemonList[i].name + " is a medium sized pokemon");
    }else if (pokemonList[i].height < 4){
        console.log(pokemonList[i].name + " is a small pokemon");
    }else if (pokemonList[i].height > 4){
        console.log(pokemonList[i].name + " is a really big pokemon!");
    }if (pokemonList[i].height > 6){
        document.write("<li>" + pokemonList[i].name + "- Wow, that's big!" + "</li>") 
    }

}

// For loop that specifies pokemon size based on parameters

    
function division(dividend, divisor){
    if(divisor === 0){
        return "You're trying to divide by zero."
    }else{
        let result = dividend / divisor;
        return result;
    }
}

console.log(division(10, 8));
console.log(division(2, 11));
console.log(division(14, 0));
console.log(division(110, 8));


