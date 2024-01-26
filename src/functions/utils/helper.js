export const capitalize = (inputString) => {
  // Split the string into an array of words
  let words = inputString.split(' ');

  // Capitalize the first letter of each word
  let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words back into a string
  let resultString = capitalizedWords.join(' ');

  return resultString;
};

export const throwErrorIfEmpty = (result, message) => {
  if (!result || result.length === 0) {
    throw new Error(message);
  }
};