const removeElems = function(){
    const pokemondTextFindOrNot = document.querySelector('.pokemonFound');
    pokemondTextFindOrNot && pokemondTextFindOrNot.remove();
    const elem = document.querySelector('#pokemonDetail');
    elem && elem.remove();
}

export {removeElems}