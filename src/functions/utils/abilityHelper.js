export const BoostI = (fieldState, playerState) => {
  // for example BoostI is for ability that have boost effect to moves Power based on Type, like adaptability
  let movesPower = moves.power;
  if (pokemon.types.contain(moves.type)){
    movesPower = movesPower * 1.3
  }

  const newMoves = { ...moves, power: movesPower}
  return newMoves;
}