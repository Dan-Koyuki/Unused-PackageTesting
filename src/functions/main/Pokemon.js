import Pokedex from "../../models/pokedex.js";
import { capitalize, throwErrorIfEmpty } from "../utils/helper.js";

/**
 * findById - Find a specific Pokemon by its ID.
 * @param {string} id - 4-digit ID of the Pokemon (e.g., "0001" - "0898").
 * @returns {object|null} - Pokemon object with the matching ID, or null if not found.
 */
export const findById = (id) => {
  if (typeof id !== "string" || id.length !== 4 || isNaN(id.toString())) {
    throw new Error("Invalid ID format. Please provide a 4-digit numeric ID.");
  }

  const res = Pokedex.find((pokemon) => pokemon.id === id);

  throwErrorIfEmpty(res, "No Pokemon Found!");

  return res;
};

/**
 * findByName - Find a specific Pokemon by its Name.
 * @param {string} name - Name of the Pokemon (e.g., "Bulbasaur" - "Calyrex").
 * @returns {object|null} - Pokemon object with the matching Name, or null if not found.
 */
export const findByName = (name) => {
  if (typeof name !== "string") {
    throw new Error(
      "Invalid Pokemon Name. Please Provide a correct Pokemon Name."
    );
  }
  const req = capitalize(name);
  const res = Pokedex.find((pokemon) => pokemon.name === req);

  throwErrorIfEmpty(res, "No Pokemon Found!");

  return res;
};

/**
 * findByRegion - Find all Pokemon from a Region.
 * @param {string} region - name of Region (e.g., "kanto" - "galar").
 * @returns {Array} - array of Pokemon object with the matchin Region.
 */
export const findByRegion = (region) => {
  const Region = [
    "kanto",
    "johto",
    "hoenn",
    "sinnoh",
    "unova",
    "kalos",
    "alola",
    "hisui",
    "galar",
    "paldea",
  ];
  if (typeof region !== "string" || !Region.includes(region.toLowerCase())) {
    throw new Error(
      "Invalid Region Name. Please Provide a correct Region Name."
    );
  }
  const req = capitalize(region);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.region === req;
  });

  throwErrorIfEmpty(res, `No Pokemon Found from ${region}!`);

  return res;
};

/**
 * findByType - Find all Pokemon with certain Type.
 * @param {string} type - name of Type (e.g., 'grass', 'fire').
 * @returns {Array} - array of Pokemon object with matching Type.
 */
export const findByType = (type) => {
  const valid = [
    "fire",
    "normal",
    "grass",
    "water",
    "electric",
    "ground",
    "rock",
    "ice",
    "steel",
    "dragon",
    "dark",
    "ghost",
    "bug",
    "fighting",
    "flying",
    "psychic",
    "fairy",
    "poison",
  ];
  if (typeof type !== "string" || !valid.includes(type.toLowerCase())) {
    throw new Error("Invalid Type! Please provide a correct Type of Pokemon");
  }
  const req = capitalize(type);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.types.includes(req);
  });

  throwErrorIfEmpty(res, `No Pokemon with ${type} type!`);

  return res;
};

/**
 * findByTypes - Find all Pokemon with certain Types Combination. Order of type doesn't matter.
 * @param {Array} types - Array of Types (e.g., ['grass', 'poison'], ['fire', 'water']).
 * @returns {Array} - Array of Pokemon objects with matching type combination.
 */
export const findByTypes = (types) => {
  const valid = [
    "fire",
    "normal",
    "grass",
    "water",
    "electric",
    "ground",
    "rock",
    "ice",
    "steel",
    "dragon",
    "dark",
    "ghost",
    "bug",
    "fighting",
    "flying",
    "psychic",
    "fairy",
    "poison",
  ];

  if (!Array.isArray(types) || !types.every((type) => valid.includes(type.toLowerCase()))) {
    throw new Error(
      "Invalid Type of Pokemon! Please provide a correct Type of Pokemon"
    );
  }

  const req = types.map((type) => capitalize(type));
  const res = Pokedex.filter((pokemon) => {
    return req.every((type) => pokemon.types.includes(type));
  });

  throwErrorIfEmpty(
    res,
    `No Pokemon with combination type of ${types.join(", ")}!`
  );

  return res;
};

/**
 * findByAbility - Find all Pokemon with certain Ability.
 * @param {string} ability - name of Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {Array} array of Pokemon objects with the matching Ability.
 */
export const findByAbility = (ability) => {
  if (typeof ability !== "string") {
    throw new Error(
      "Invalid Ability Name. Please provide a correct Ability Name."
    );
  }
  const req = capitalize(ability);
  const res = Pokedex.filter((pokemon) => {
    return (
      pokemon.abilities.normal.includes(req) || pokemon.abilities.hidden === req
    );
  });

  throwErrorIfEmpty(res, `No Pokemon with ${ability} is found!`);

  return res;
};

/**
 * findByHiddenAbility - Find all Pokemon with certain Hidden Ability.
 * @param {string} ability - name of Hidden Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {Array} array of Pokemon objects with the matching Hidden Ability.
 */
export const findByHiddenAbility = (ability) => {
  if (typeof ability !== "string") {
    throw new Error(
      "Invalid Ability Name. Please provide a correct Ability Name."
    );
  }
  const req = capitalize(ability);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.abilities.hidden === req;
  });

  throwErrorIfEmpty(res, `No Pokemon have ${ability} as Hidden Ability!`);

  return res;
};

/**
 * findByNormalAbility - Find all Pokemon with certain Normal Ability.
 * @param {string} ability - name of Hidden Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {Array} array of Pokemon objects with the matching Normal Ability.
 */
export const findByNormalAbility = (ability) => {
  if (typeof ability !== "string") {
    throw new Error(
      "Invalid Ability Name. Please provide a correct Ability Name."
    );
  }
  const req = capitalize(ability);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.abilities.normal.includes(req);
  });

  throwErrorIfEmpty(res, `No Pokemon have ${ability} as Normal Ability!`);

  return res;
};

/**
 * findByBaseStat - Find all Pokemon that have the specified base stat.
 * @param {number} stat - Base stat of the Pokemon to search for.
 * @param {string} statType - Type of base stat ('hp', 'atk', 'def', 'spa', 'spd', 'speed').
 * @return {Array} - Array of Pokemon objects with matching base stat.
 */
export const findByBaseStat = (stat, statType) => {
  const valid = ["hp", "atk", "def", "spa", "spd", "speed"];
  if (
    (typeof stat !== "string" && typeof stat !== "number") ||
    (typeof stat === "string" && isNaN(parseInt(stat)))
  ) {
    throw new Error(
      "Invalid Stat Format! Stat should be a number or a string."
    );
  }
  if (typeof statType !== "string" || !valid.includes(statType.toLowerCase())) {
    throw new Error(
      "Invalid Stat Type! StatType should be one of 'hp', 'atk', 'def', 'spa', 'spd', 'speed'."
    );
  }

  // turn stat into string incase user put number
  const req = stat.toString();
  const res = Pokedex.filter((pokemon) => {
    return pokemon.stats[statType] === req;
  });

  throwErrorIfEmpty(
    res,
    `No Pokemon found with ${statType} base stat of ${stat}.`
  );

  return res;
};

/**
 * findByEggGroup - Find all Pokemon with certain Egg Group
 * @param {eggGroup} eggGroup -  Egg Group of the Pokemon (e.g., 'monster', 'grass', 'dragon', 'field').
 * @returns {Array} - Array of Pokemon object with matching Egg Group.
 */
export const findByEggGroup = (eggGroup) => {
  const valid = [
    "monster",
    "human-like",
    "water 1",
    "water 3",
    "bug",
    "mineral",
    "flying",
    "amorphous",
    "field",
    "water 2",
    "fairy",
    "ditto",
    "grass",
    "dragon",
    "no eggs discovered",
    "gender unknown",
  ];
  if (typeof eggGroup !== "string" || !valid.includes(eggGroup.toLowerCase())) {
    throw new Error(
      "Invalid Egg Group! Egg Group should be one of 'monster', 'human-like', 'water 1', 'water 3', 'bug', 'mineral', 'flying', 'amorphous', 'field', 'water 2', 'fairy', 'ditto', 'grass', 'dragon' or 'no eggs discovered'!"
    );
  }
  const req = capitalize(eggGroup);
  const res = Pokedex.filter((pokemon) => {
    return pokemon.eggGroups.includes(req);
  });

  throwErrorIfEmpty(res, `No Pokemon from ${eggGroup} Egg Groups!`);

  return res;
};

/**
 * findByGenderRatio - Find all Pokemon that have the specified Gender Ratio.
 * @param {number} ratio - Gender Ratio of the Pokemon.
 * @param {string} gender - Gender of the Pokemon ('male' or 'female').
 * @returns array of Pokemon objects with matching Ratio.
 */
export const findByGenderRatio = (ratio, gender) => {
  const valid = ["male", "female"];
  if (
    typeof ratio !== "number" &&
    (typeof ratio !== "string" || isNaN(parseFloat(ratio)))
  ) {
    throw new Error(
      "Invalid Gender Ratio Format! Gender Ratio should be a number!"
    );
  }
  if (typeof gender !== "string" || !valid.includes(gender.toLowerCase())) {
    throw new Error(
      "Invalid Gender of Pokemon! Gender should be 'male' or 'female'!"
    );
  }

  // parse ratio into Float incase user put string
  const req = parseFloat(ratio);
  // change male into 0 and female into 1
  const type = gender.toLowerCase() === "male" ? 0 : 1;
  const res = Pokedex.filter((pokemon) => {
    return pokemon.genderRatios[type] === req;
  });

  throwErrorIfEmpty(res, `No Pokemon with ${gender} ratio of ${ratio}!`);

  return res;
};
