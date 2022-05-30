import { searchPokemonText } from "./pokemon/searchTextPokemon.js";
import { formSearch } from "./pokemon/formSearch.js";
import { foundOrNotPokemon } from "./pokemon/foundOrNotPokemon.js";
import { detailsPokemon } from "./pokemon/detailsPokemon.js";
import { removeElems } from "../events/removeElems.js";

const dashboard = function(){
    const divApp = document.querySelector('#app');

    divApp.append(searchPokemonText(), formSearch());

    document.addEventListener('PokemonData', (e)=>{
        const pokemonInfo = e.detail;
        pokemonInfo
            .then(
                data => {
                    removeElems();
                    divApp.append(foundOrNotPokemon(), detailsPokemon(data)) 
                }
            )
            .catch(() => {
                
                removeElems();
                divApp.append(foundOrNotPokemon(false));
            })
    });

    //* Após a primeira pesquisa foundOrNotPokemon()
}

export {dashboard}
