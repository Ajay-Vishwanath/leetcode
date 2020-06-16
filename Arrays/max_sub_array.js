var maxSubArray = function (nums) {

    let maxGlobal = nums[0];

    let maxCurrent = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(maxCurrent + nums[i], nums[i])
        maxGlobal = Math.max(maxGlobal, maxCurrent)
    }

    return maxGlobal;
};