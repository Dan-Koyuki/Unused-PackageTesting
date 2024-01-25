// pokedex.test.js (in src/functions/tests)
import {
  findByATKStat,
  findByAbility,
  findByDEFStat,
  findByEggGroup,
  findByHPStat,
  findByHiddenAbility,
  findById,
  findByMaleRatio,
  findByName,
  findByRegion,
  findBySPEStat,
  findBySpAStat,
  findBySpDStat,
  findByStandardAbility,
  findByType,
  findByTypes,
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

const pokemonDB = findByStandardAbility('blaze');
console.log(
  "Is Pokemons Exist By Ability? ",
  pokemonDB ? `True, ${pokemonDB.length}` : "False"
);

// Search By HP Stat {check}
const pokemonE = findByHPStat(100);
// const pokemons = pokemonE.map((poke) => poke.name);
// console.log(pokemons);
console.log(
  "Is Pokemon Exist By HP Stat? ",
  pokemonE ? `True, ${pokemonE.length}` : "False"
);

// Search By ATK Stat {check}
const pokemonF = findByATKStat(100);
// const pokemonsF = pokemonF.map((poke) => poke.name);
// console.log(pokemonsF);
console.log(
  "Is Pokemon Exist By Atk Stat? ",
  pokemonF ? `True, ${pokemonF.length}` : "False"
);

// Search By DEF Stat {check}
const pokemonG = findByDEFStat(100);
// const pokemonsG = pokemonG.map((poke) => poke.name);
// console.log(pokemonsG);
console.log(
  "Is Pokemon Exist By Def Stat? ",
  pokemonG ? `True, ${pokemonG.length}` : "False"
);

// Search By SpA Stat {check}
const pokemonH = findBySpAStat(100);
// const pokemonsH = pokemonH.map((poke) => poke.name);
// console.log(pokemonsH);
console.log(
  "Is Pokemon Exist By SpA Stat? ",
  pokemonH ? `True, ${pokemonH.length}` : "False"
);

// Search By SpD Stat {check}
const pokemonI = findBySpDStat(100);
// const pokemonsI = pokemonI.map((poke) => poke.name);
// console.log(pokemonsI);
console.log(
  "Is Pokemon Exist By SpD Stat? ",
  pokemonI ? `True, ${pokemonI.length}` : "False"
);

// Search By Speed Stat {check}
const pokemonJ = findBySPEStat(100);
// const pokemonsJ = pokemonJ.map((poke) => poke.name);
// console.log(pokemonsJ);
console.log(
  "Is Pokemon Exist By Speed Stat? ",
  pokemonJ ? `True, ${pokemonJ.length}` : "False"
);

const pokemonK = findByEggGroup("monster");
// const pokemons = pokemonK.map((poke) => poke.name);
// console.log(pokemons);
console.log(
  "Is Pokemon Exist By Egg Group? ", 
  pokemonK ? `True, ${pokemonK.length}` : "False"
);

const pokemonL = findByMaleRatio(87.5);
const pokemons = pokemonL.map((poke) => poke.name);
console.log(pokemons);
console.log(
  "Is Pokemon Exist By Male Ratio? ", 
  pokemonL ? `True, ${pokemonL.length}` : "False"
);
// const pokemons = pokemonD?.map(poke => poke.name);
// console.log(pokemons)
