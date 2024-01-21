import Learnsets from "../../models/utils/learnset.js";

export const learnsetByID = (id) => {
  return Learnsets.find(entry => entry.id === id);
}
