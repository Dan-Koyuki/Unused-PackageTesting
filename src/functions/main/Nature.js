import Natures from "../../models/natures.js";
import { capitalize, throwErrorIfEmpty } from "../utils/helper.js";

export const pokeNatureInfo = (nature) => {
  const valid = [
    'adamant', 'bashful',
    'bold', 'brave',
    'calm', 'careful',
    'docile', 'gentle',
    'hardy', 'hasty',
    'impish', 'jolly',
    'lax', 'lonely',
    'mild', 'modest',
    'naive', 'naughty',
    'quiet', 'quirky',
    'rash', 'relaxed',
    'sassy', 'serious',
    'timid'
  ];

  if (typeof nature !== 'string'){
    throw new Error("Invalid Nature name format!");
  }

  if (!valid.includes(nature.toLowerCase())){
    throw new Error(`${nature} nature not found!`);
  }
  
  const req = capitalize(nature);

  const res = Natures.find((n) => {
    return n.name === req;
  })

  throwErrorIfEmpty(res, 'Something went wrong. Please try again later!');

  return res;
}