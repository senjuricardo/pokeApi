class Pokemon {

    static async getPokemon(pokemonNameID){
        return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameID}`)
            .then(response => response.json())
    }
}

export default Pokemon;