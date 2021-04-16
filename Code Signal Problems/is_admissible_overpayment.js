function isAdmissibleOverpayment(prices, notes, x) {
    let additionalSpent = 0;

    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];

        if (notes[i] !== "Same as in-store") {
            let percentage = determinePercent(notes[i]);
            let realPrice;

            if (determineHigher(notes[i])) {
                realPrice =
                    (currentPrice * 100) / (100 + determinePercent(notes[i]));
                console.log(realPrice);
                additionalSpent += currentPrice - realPrice;
            } else {
                realPrice =
                    (currentPrice * 100) / (100 - determinePercent(notes[i]));
                additionalSpent -= realPrice - currentPrice;
            }
        }
    }

    return x >= additionalSpent;
}

function determinePercent(string) {
    let currentChar = 0;

    while (string[currentChar] !== "%") {
        currentChar++;
    }

    return parseFloat(string.slice(0, currentChar));
}

function determineHigher(string) {
    if (string.includes("higher")) {
        return true;
    }

    return false;
}
