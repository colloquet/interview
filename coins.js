function findLeastNumberOfCoins(coins, amount) {
  let currentAmount = amount;
  const sortedCoins = coins.slice().sort((a, b) => b - a);
  const neededCoins = [];

  for (let coin of sortedCoins) {
    while (currentAmount > 0) {
      if (currentAmount - coin >= 0) {
        neededCoins.push(coin);
        currentAmount -= coin;
      } else {
        break;
      }
    }

    if (currentAmount === 0) {
      break;
    }
  }

  return neededCoins.length;
}

console.time('ME');
for (let index = 0; index < 10; index++) {
  findLeastNumberOfCoins([1, 2, 5, 10], 6345345);
}
console.timeEnd('ME');
