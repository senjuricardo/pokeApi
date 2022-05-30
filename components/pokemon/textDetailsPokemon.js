import { p } from "../widgets/p.js"
import { img } from "../widgets/img.js";

const textDetailsPokemon = function (pokemon) {
    const divDetails = document.createElement('div');
    const pName = p(`Name: ${pokemon.name}`)
    const pNumber = p(`Number: ${pokemon.id}`)
    const pType = p(`Type: ${pokemon.types.map(type => type.type.name).join(" / ")}`)

    const divStatImg = document.createElement('div');
    const divStat = document.createElement('div');
    const divImg = document.createElement('div');
    divStatImg.classList.add("divAll")
    divStat.classList.add("divStat")
    divImg.classList.add("divImg")

    const pBaseStatsTitle = p(`Base stats:`)
    pBaseStatsTitle.classList.add("titleStat")

    pokemon.stats.forEach(stat => divStat.append(p(`   ${stat.stat.name}: ${stat.base_stat} `)));

   
const {front_default, front_shiny} = pokemon.sprites
divImg.append(img(front_default),img(front_shiny))

    divStatImg.append(divStat)
    divStatImg.append(divImg)
    console.log(pokemon)
    divDetails.append(pName, pNumber, pType, pBaseStatsTitle, divStatImg);

    return divDetails;
    // const pT = p(`Number: ${pokemon.id}`)
}

export { textDetailsPokemon };