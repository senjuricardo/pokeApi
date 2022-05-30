import { removeElems } from "./removeElems.js";
import { searchPokemon } from "./searchPokemon.js";

const formSubmit = function(e){
    e.preventDefault();
    const [pokemonNameID] = e.target;
    pokemonNameID.value && searchPokemon(pokemonNameID.value) 
                        || 
    !pokemonNameID.value && removeElems();
}

export {formSubmit}