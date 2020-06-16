var maxProfit = function (prices) {
    let highestProfit = 0;
    let lowestPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const currentDifference = currentPrice - lowestPrice;
        highestProfit = Math.max(currentDifference, highestProfit);
        lowestPrice = Math.min(lowestPrice, currentPrice);
    }

    return highestProfit;
};