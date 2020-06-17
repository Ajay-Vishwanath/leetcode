var maxProduct = function (nums) {
    let currentMaxProduct = nums[0];
    let currentMinProduct = nums[0];
    let prevMaxProduct = currentMaxProduct;
    let prevMinProduct = currentMinProduct;
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMaxProduct = Math.max(prevMaxProduct * nums[i], prevMinProduct * nums[i], nums[i]);
        currentMinProduct = Math.min(prevMaxProduct * nums[i], prevMinProduct * nums[i], nums[i]);
        ans = Math.max(ans, currentMaxProduct);
        prevMaxProduct = currentMaxProduct;
        prevMinProduct = currentMinProduct;
    }

    return ans;
};
