import Pokedex from "../../models/pokedex.js";

export const findById = (id) => {
  let res;
  Pokedex.find(pokemon => {
    if (pokemon.id === id){
      res = pokemon;
    }
  })
  if (!res) {
    return `No Pokemon with id ${id}`
  }
  return res;
}

export const findByName = (name) => {
  let res;
  Pokedex.find(pokemon => {
    if (pokemon.name === name){
      res = pokemon;
    }
  })
  if (!res) {
    return `No Pokemon with name ${name}`
  }
  return res;
}

export const findByAbility = (ability) => {
  const res = Pokedex.filter(pokemon => {
    return pokemon.abilities.normal.includes(ability) || pokemon.abilities.hidden === ability;
  })
  if (res.length === 0) {
    return `No Pokemon with Ability ${ability}`
  }
  return res;
}

