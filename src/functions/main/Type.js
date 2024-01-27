import Types from "../../models/types.js";
import { capitalize, throwErrorIfEmpty } from "../utils/helper.js";

/**
 * pokeTypeInfo - retrieve detail for a Type of Pokemon.
 * @param {string} type - Type of Pokemon (e.g., 'normal' - 'dragon').
 * @returns Type object that have maching type.
 */
export const pokeTypeInfo = (type) => {
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
  const res = Types.find((t) => {
    return t.id === req
  });

  throwErrorIfEmpty(res, "No Pokemon Type found!");

  return res;
}