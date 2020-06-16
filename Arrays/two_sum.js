var twoSum = function (nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        const difference = target - number;
        //if the hashmap has a key of the difference, that means two add up to the target.
        if (hashMap[difference] !== undefined) {
            //returning the indices of the numbers that add up to the target
            return [i, hashMap[difference]]
        }

        hashMap[number] = i;
    }
};