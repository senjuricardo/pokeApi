import Pokemon from "../service/pokemon.js";

const searchPokemon = function(pokemonNameID){
    document.dispatchEvent(
        new CustomEvent('PokemonData', {
            detail: Pokemon.getPokemon(pokemonNameID)
            
        })
    );
   
}

export {searchPokemon};