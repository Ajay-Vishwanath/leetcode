var twoSum = function (nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        const difference = target - number;
        if (hashMap[difference] !== undefined) {
            return [i, hashMap[difference]]
        }

        hashMap[number] = i;
    }
};