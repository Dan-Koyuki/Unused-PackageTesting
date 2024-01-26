// pokedex.test.js (in src/functions/tests)
import {
  findByAbility,
  findByEggGroup,
  findByHiddenAbility,
  findById,
  findByName,
  findByRegion,
  findByNormalAbility,
  findByType,
  findByTypes,
  findByBaseStat,
  findByGenderRatio,
} from "../main/Pokemon.js";

/**
 * Test Usage for all function on Pokemon.js
 */

/**
 * findById
 * @result - check
 */
const pokemon = findById("0898");
console.log(
  "Is Pokemon Exist By ID? ",
  pokemon ? `True, ${pokemon.name}` : "False"
);

/**
 * findByName
 * @result - check
 */
const pokemonA = findByName("guzzlord");
console.log(
  "Is Pokemon Exist By Name?",
  pokemonA ? `True, ${pokemonA.name}` : "False"
);

/**
 * findByRegion
 * @result - check
 */
const pokemonB = findByRegion("kanto");
console.log(
  "Is Pokemons Exist By Region? ",
  pokemonB ? `True, ${pokemonB.length}` : "False"
);

/**
 * findByType
 * @result - check
 */
const pokemonC = findByType("fire");
console.log(
  "Is Pokemon Exist By Type? ",
  pokemonC ? `True, ${pokemonC.length}` : "False"
);

/**
 * findByTypes (combination of Type)
 * @result - check
 */
const types = ["poison", "grass"];
const pokemonCA = findByTypes(types);
console.log(
  "Is Pokemon Exist By Types? ",
  pokemonCA ? `True, ${pokemonCA.length}` : "False"
);

/**
 * findByAbility (regardless Hidden or Normal)
 * @result - check
 */
const pokemonD = findByAbility("blaze");
console.log(
  "Is Pokemons Exist By Ability? ",
  pokemonD ? `True, ${pokemonD.length}` : "False"
);

/**
 * findByHiddenAbility (only Hidden Ability)
 * @result - check
 */
const pokemonDA = findByHiddenAbility("blaze");
console.log(
  "Is Pokemons Exist By Ability? ",
  pokemonDA ? `True, ${pokemonDA.length}` : "False"
);

/**
 * findByNormalAbility (only Standard/Normal Ability)
 * @result - check
 */
const pokemonDB = findByNormalAbility('blaze');
console.log(
  "Is Pokemons Exist By Ability? ",
  pokemonDB ? `True, ${pokemonDB.length}` : "False"
);

/**
 * findByEggGroup
 * @result - check
 */
const pokemonK = findByEggGroup("ditto");
const pokemons = pokemonK.map((poke) => poke.name);
console.log(pokemons);
console.log(
  "Is Pokemon Exist By Egg Group? ", 
  pokemonK ? `True, ${pokemonK.length}` : "False"
);

/**
 * findByGenderRatio
 * @result - check
 */
const pokemonL = findByGenderRatio(12.5, 'male');
// const pokemons = pokemonL.map((poke) => poke.name);
// console.log(pokemons);
console.log(
  "Is Pokemon Exist By Male Ratio? ", 
  pokemonL ? `True, ${pokemonL.length}` : "False"
);

/**
 * findByBaseStat
 * @result - check
 */
const pokemonM = findByBaseStat(100, 'atk');
// const pokemonsM = pokemonM.map((poke) => poke.name);
// console.log(pokemonsM);
console.log(
  "Is Pokemon Exist By Base Stat? ", 
  pokemonM ? `True, ${pokemonM.length}` : "False"
);