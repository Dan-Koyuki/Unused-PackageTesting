import Pokedex from "../../models/pokedex.js";
import { capitalize } from "./helper.js";

// findById => Find a specific Pokemon by its ID.
// @param id - 4-digit ID of the Pokemon (e.g., "0001" - "0898").
// @return Pokemon object with the matching ID, or null if not found.
export const findById = (id) => {
  const res = Pokedex.find(pokemon => pokemon.id === id);

  return res || null;
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
  const req = capitalize(ability);
  const res = Pokedex.filter(pokemon => {
    return pokemon.abilities.normal.includes(req) || pokemon.abilities.hidden === req;
  })
  if (res.length === 0) {
    return `No Pokemon with Ability ${ability}`
  }
  return res;
}

