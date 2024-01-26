import Types from "../../models/types";
import { capitalize, throwErrorIfEmpty } from "../utils/helper";


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
  const res = Types.filter((t) => {
    return t.id === req
  });

  throwErrorIfEmpty(res, "No Pokemon Type found!");

  return res;
}