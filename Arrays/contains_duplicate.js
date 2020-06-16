var containsDuplicate = function (nums) {
    const numberSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]

        if (numberSet.has(currentNum)) {
            return true;
        }

        numberSet.add(currentNum);
    }

    return false;
};