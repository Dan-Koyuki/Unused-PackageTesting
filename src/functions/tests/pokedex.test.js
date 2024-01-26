// pokedex.test.js (in src/functions/tests)
import {
  findByAbility,
  findByEggGroup,
  findByHiddenAbility,
  findById,
  findByMaleRatio,
  findByName,
  findByRegion,
  findByNormalAbility,
  findByType,
  findByTypes,
  findByBaseStat,
} from "../utils/Pokemon.js";

// Test Usage

// Search By ID {check}
const pokemon = findById("0898");
console.log(
  "Is Pokemon Exist By ID? ",
  pokemon ? `True, ${pokemon.name}` : "False"
);

// Search By Name {check}
const pokemonA = findByName("guzzlord");
console.log(
  "Is Pokemon Exist By Name?",
  pokemonA ? `True, ${pokemonA.stats.spa}` : "False"
);

// Search By Region {check}
const pokemonB = findByRegion("kanto");
console.log(
  "Is Pokemons Exist By Region? ",
  pokemonB ? `True, ${pokemonB.length}` : "False"
);

// Search By Type {check}
const pokemonC = findByType("fire");
console.log(
  "Is Pokemon Exist By Type? ",
  pokemonC ? `True, ${pokemonC.length}` : "False"
);

// Search By Types {check}
const types = ["poison", "grass"];
const pokemonCA = findByTypes(types);
console.log(
  "Is Pokemon Exist By Types? ",
  pokemonCA ? `True, ${pokemonCA.length}` : "False"
);

// Search By Ability {check}
const pokemonD = findByAbility("blaze");
console.log(
  "Is Pokemons Exist By Ability? ",
  pokemonD ? `True, ${pokemonD.length}` : "False"
);

const pokemonDA = findByHiddenAbility("blaze");
console.log(
  "Is Pokemons Exist By Ability? ",
  pokemonDA ? `True, ${pokemonDA.length}` : "False"
);

const pokemonDB = findByNormalAbility('blaze');
console.log(
  "Is Pokemons Exist By Ability? ",
  pokemonDB ? `True, ${pokemonDB.length}` : "False"
);


const pokemonK = findByEggGroup("monster");
// const pokemons = pokemonK.map((poke) => poke.name);
// console.log(pokemons);
console.log(
  "Is Pokemon Exist By Egg Group? ", 
  pokemonK ? `True, ${pokemonK.length}` : "False"
);

const pokemonL = findByMaleRatio(87.5);
// const pokemons = pokemonL.map((poke) => poke.name);
// console.log(pokemons);
console.log(
  "Is Pokemon Exist By Male Ratio? ", 
  pokemonL ? `True, ${pokemonL.length}` : "False"
);
// const pokemons = pokemonD?.map(poke => poke.name);
// console.log(pokemons)

const pokemonM = findByBaseStat(100, 'atk');
const pokemonsM = pokemonM.map((poke) => poke.name);
console.log(pokemonsM);
console.log(
  "Is Pokemon Exist By Male Ratio? ", 
  pokemonM ? `True, ${pokemonM.length}` : "False"
);