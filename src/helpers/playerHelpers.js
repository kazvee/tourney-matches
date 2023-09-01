export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculate the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Add a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assign the value to the wins key
    player.wins = currentWins;

    return player;
  });
};