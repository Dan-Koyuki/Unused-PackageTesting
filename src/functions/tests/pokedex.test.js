// pokedex.test.js (in src/functions/tests)
import { findByAbility, findById, findByName } from "../utils/Pokemon.js";

// Test Usage
// Search By ID {check}
const pokemon = findById('0001');
console.log("Is Pokemon Exist By ID? ", pokemon ? "True" : "False");

// Search By Ability {check}
const pokemonA = findByAbility('blaze');
const pokemons = pokemonA?.map(poke => poke.name);
console.log(pokemons)
console.log("Is Pokemons Exist By Ability? ", pokemonA ? `True, ${pokemonA.length}` : "False");
