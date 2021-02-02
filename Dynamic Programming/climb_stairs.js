var climbStairs = function (n) {
    let countArray = new Array(n + 1).fill(0);
    countArray[0] = 1;

    for (let currentStep = 1; currentStep <= n; currentStep++) {
        let stepCount = 0;
        for (let step = 1; step <= 2; step++) {
            if (currentStep >= step) {
                stepCount += countArray[currentStep - step];
            }
        }
        countArray[currentStep] = stepCount;
    }

    return countArray[n];
};
