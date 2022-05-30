import { h2 } from "../widgets/h2.js";

const foundOrNotPokemon = (value = true) => h2(value ? 'Pokemon found!' : 'Pokemon not found!', ['pokemonFound'])

export {foundOrNotPokemon};