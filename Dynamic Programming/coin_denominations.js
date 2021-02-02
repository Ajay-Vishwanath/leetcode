var coinChange = function (coins, amount) {
    //optimization
    coins = coins.sort((a, b) => a - b);

    //fill it with something that is invalid
    let minCoinsToAmount = new Array(amount + 1).fill(amount + 1);
    minCoinsToAmount[0] = 0;

    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            if (currentAmount >= coin) {
                minCoinsToAmount[currentAmount] = Math.min(
                    minCoinsToAmount[currentAmount],
                    1 + minCoinsToAmount[currentAmount - coin]
                );
            } else {
                break;
            }
        }
    }

    return minCoinsToAmount[amount] > amount ? -1 : minCoinsToAmount[amount];
};
