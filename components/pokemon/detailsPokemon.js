import { textDetailsPokemon } from "./textDetailsPokemon.js";

const detailsPokemon = function(pokemon){
    const divElement = document.createElement('div');
    divElement.id = 'pokemonDetail'
    divElement.append(textDetailsPokemon(pokemon));
    return divElement;
}

export {detailsPokemon};