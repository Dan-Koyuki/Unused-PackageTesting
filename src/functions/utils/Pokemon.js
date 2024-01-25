import Pokedex from "../../models/pokedex.js";
import { capitalize } from "./helper.js";

/**
 * findById - Find a specific Pokemon by its ID.
 * @param {string} id - 4-digit ID of the Pokemon (e.g., "0001" - "0898").
 * @returns {object|null} - Pokemon object with the matching ID, or null if not found.
 */
export const findById = (id) => {
  if (typeof id !== 'string' || id.length !== 4 || isNaN(id.toString())) {
    throw new Error('Invalid ID format. Please provide a 4-digit numeric ID.');
  }

  const res = Pokedex.find((pokemon) => pokemon.id === id);

  if (!res || res.length === 0) {
    throw new Error('No Pokemon Found!');
  }

  return res;
};

/**
 * findByName - Find a specific Pokemon by its Name.
 * @param {string} name - Name of the Pokemon (e.g., "Bulbasaur" - "Calyrex").
 * @returns {object|null} - Pokemon object with the matching Name, or null if not found.
 */
export const findByName = (name) => {
  if (typeof name !== 'string'){
    throw new Error("Invalid Pokemon Name. Please Provide a correct Pokemon Name.");
  }
  const req = capitalize(name);
  const res = Pokedex.find((pokemon) => pokemon.name === req);

  if (!res || res.length === 0){
    throw new Error('No Pokemon Found!');
  }

  return res;
};

/**
 * findByRegion - Find all Pokemon from a Region.
 * @param {string} region - name of Region (e.g., "kanto" - "galar").
 * @returns {Array} - array of Pokemon object with the matchin Region.
 */
export const findByRegion = (region) => {
  const Region = ['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'hisui', 'galar', 'paldea'];
  if (typeof region !== 'string' || !Region.includes(region.toLowerCase())){
    throw new Error("Invalid Region Name. Please Provide a correct Region Name.");
  }
  const req = capitalize(region);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.region === req;
  });

  if (!res || res.length === 0){
    throw new Error(`No Pokemon Found from ${region}!`);
  }

  return res;
};

/**
 * findByType - Find all Pokemon with certain Type.
 * @param {string} type - name of Type (e.g., 'grass', 'fire').
 * @returns {Array} - array of Pokemon object with matching Type.
 */
export const findByType = (type) => {
  const valid = ['fire', 'normal', 'grass', 'water', 'electric', 'ground', 'rock', 'ice', 'steel', 'dragon', 'dark', 'ghost', 'bug', 'fighting', 'flying', 'psychic', 'fairy', 'poison'];
  if (typeof type !== 'string' || !valid.includes(type)){
    throw new Error("Invalid Type! Please provide a correct Type of Pokemon");
  }
  const req = capitalize(type);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.types.includes(req);
  });

  if (!res || res.length === 0){
    throw new Error(`No Pokemon with ${type} type!`);
  }

  return res;
};

/**
 * findByTypes - Find all Pokemon with certain Types Combination. Order of type doesn't matter.
 * @param {Array} types - Array of Types (e.g., ['grass', 'poison'], ['fire', 'water']).
 * @returns {Array} - Array of Pokemon objects with matching type combination.
 */
export const findByTypes = (types) => {
  const valid = ['fire', 'normal', 'grass', 'water', 'electric', 'ground', 'rock', 'ice', 'steel', 'dragon', 'dark', 'ghost', 'bug', 'fighting', 'flying', 'psychic', 'fairy', 'poison'];

  if (!Array.isArray(types) || !types.every((type) => valid.includes(type))) {
    throw new Error("Invalid Type of Pokemon! Please provide a correct Type of Pokemon");
  }

  const req = types.map((type) => capitalize(type));
  const res = Pokedex.filter((pokemon) => {
    return req.every((type) => pokemon.types.includes(type));
  });

  if (!res || res.length === 0) {
    throw new Error(`No Pokemon with combination type of ${types.join(', ')}!`);
  }

  return res;
};

/**
 * findByAbility - Find all Pokemon with certain Ability.
 * @param {string} ability - name of Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {Array} array of Pokemon objects with the matching Ability.
 */
// findByAbility => Find some Pokemon that having the Ability.
// @param ability - ability of the Pokemon (e.g., 'adaptability', 'Air Lock').
// @return array of Pokemon objects with the matching ability, or null if not found.
export const findByAbility = (ability) => {
  const req = capitalize(ability);
  const res = Pokedex.filter((pokemon) => {
    return (
      pokemon.abilities.normal.includes(req) || pokemon.abilities.hidden === req
    );
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
};

// findByHiddenAbility => Find some Pokemon that having the Ability as Hidden Ability.
// @param ability - ability of the Pokemon (e.g., 'adaptability', 'Air Lock').
// @return array of Pokemon objects with the matching Hidden ability, or null if not found.
export const findByHiddenAbility = (ability) => {
  const req = capitalize(ability);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.abilities.hidden === req;
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
}

// findByStandardAbility => Find some Pokemon that having the Ability as Standard Ability.
// @param ability - ability of the Pokemon (e.g., 'adaptability', 'Air Lock').
// @return array of Pokemon objects with the matching Standard ability, or null if not found.
export const findByStandardAbility = (ability) => {
  const req = capitalize(ability);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.abilities.normal.includes(req);
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
}

// findByHPStat => Find some Pokemon that having the Base HP.
// @param HpStat - Base HP Stat of the Pokemon.
// @return array of Pokemon objects with matching Base HP, or null if not found.
export const findByHPStat = (HpStat) => {
  const req = HpStat.toString();
  const res = Pokedex.filter((pokemon) => {
    return pokemon.stats.hp === req;
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
};

// findByATKStat => Find some Pokemon that having the Base ATK.
// @param ATKStat - Base ATK Stat of the Pokemon.
// @return array of Pokemon objects with matching Base ATK, or null if not found.
export const findByATKStat = (ATKStat) => {
  const req = ATKStat.toString();
  const res = Pokedex.filter((pokemon) => {
    return pokemon.stats.atk === req;
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
};

// findByDEFStat => Find some Pokemon that having the Base DEF.
// @param DEFStat - Base DEF Stat of the Pokemon.
// @return array of Pokemon objects with matching Base DEF, or null if not found.
export const findByDEFStat = (DEFStat) => {
  const req = DEFStat.toString();
  const res = Pokedex.filter((pokemon) => {
    return pokemon.stats.def === req;
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
};

// findBySpAStat => Find some Pokemon that having the Base SpAtk.
// @param SpAStat - Base SpAtk Stat of the Pokemon.
// @return array of Pokemon objects with matching Base SpAtk, or null if not found.
export const findBySpAStat = (SpAStat) => {
  const req = SpAStat.toString();
  const res = Pokedex.filter((pokemon) => {
    return pokemon.stats.spa === req;
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
};

// findBySpDStat => Find some Pokemon that having the Base SpDef.
// @param SpDStat - Base SpDef Stat of the Pokemon.
// @return array of Pokemon objects with matching Base SpDef, or null if not found.
export const findBySpDStat = (SpDStat) => {
  const req = SpDStat.toString();
  const res = Pokedex.filter((pokemon) => {
    return pokemon.stats.spd === req;
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
};

// findBySPEStat => Find some Pokemon that having the Base Speed.
// @param SPEStat - Base Speed Stat of the Pokemon.
// @return array of Pokemon objects with matching Base Speed, or null if not found.
export const findBySPEStat = (SPEStat) => {
  const req = SPEStat.toString();
  const res = Pokedex.filter((pokemon) => {
    return pokemon.stats.speed === req;
  });

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
};

// findByEggGroup => Find some Pokemon with certain Egg Group.
// @param eggGroup - Egg Group of the Pokemon (e.g., 'monster', 'grass', 'dragon', 'field').
// @return array of Pokemon objects with matching Egg Group.
export const findByEggGroup = (eggGroup) => {
  const req = capitalize(eggGroup);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.eggGroups.includes(req);
  })

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
}

// findByMaleRatio => Find some Pokemon with certain Male Ratio.
// @param ratio - Gender Ratio of the Pokemon.
// @return array of Pokemon objects with matching Male Ratio.
export const findByMaleRatio = (ratio) => {
  const req = parseFloat(ratio); // just to make sure it was integer
  const res = Pokedex.filter((pokemon) => {
    return pokemon.genderRatios[0] === req;
  })

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
}

// findByFemaleRatio => Find some Pokemon with certain Female Ratio.
// @param ratio - Gender Ratio of the Pokemon.
// @return array of Pokemon objects with matching Female Ratio.
export const findByFemaleRatio = (ratio) => {
  const req = parseFloat(ratio); // just to make sure it was integer
  const res = Pokedex.filter((pokemon) => {
    return pokemon.genderRatios[1] === req;
  })

  if (!res || res.length === 0){
    console.log("No Pokemon Found!")
    console.log("Check Given Parameters!")
  }

  return res || null;
}