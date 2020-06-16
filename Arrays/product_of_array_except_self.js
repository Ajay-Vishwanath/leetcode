var productExceptSelf = function (nums) {
    if (nums.length < 2) {
        throw new Error('You need more than 2 integers in nums for this function to work!')
    }

    let productsOfAllExceptSelf = [];

    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        productsOfAllExceptSelf[i] = productSoFar;
        productSoFar *= nums[i];
    }

    productSoFar = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        productsOfAllExceptSelf[i] *= productSoFar;
        productSoFar *= nums[i]
    }

    return productsOfAllExceptSelf;
};