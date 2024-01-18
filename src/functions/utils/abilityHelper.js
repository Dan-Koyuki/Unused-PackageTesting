export const BoostI = (fieldState, playerState, opponentState) => {
  // for example BoostI is for ability that has a boost effect to moves Power based on Type, like adaptability
  const moves = playerState.selectedMove
  let movesPower = moves.power;
  if (playerState.currentPokemon.types.includes(playerState.selectedMove.type)) {
    movesPower = movesPower * 2;
  }

  const newMoves = { ...moves, power: movesPower };
  playerState.selectedMove = newMoves;
  return newMoves;
}

export const TypeManipulateI = (fieldState, playerState, opponentState) => {
  // Ability list:
  // Aerilate, Pixilate, Normalize, Galvanize, etc
  const moves = playerState.selectedMove
  let manipulatedType;
  let manipulatedPower;
  if (moves.type === "Normal"){
    manipulatedType = playerState.currentPokemon.ability.effect.details[0];
    manipulatedPower = moves.power * 1.3
  }

  const newMoves = { ...moves, power: manipulatedPower, type: manipulatedType};
  playerState.selectedMove = newMoves;
  return newMoves
}