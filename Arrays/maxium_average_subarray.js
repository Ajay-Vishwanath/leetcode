/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
  let totalNumbers = nums.length;
  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first subarray of size k
  for (let index = 0; index < k; index++) {
      currentSum += nums[index];
  }
  maxSum = currentSum;

  // Slide the window of size k through the array to find the max sum
  // The loop starts from k since we already computed the sum for the first `k` elements
  for (let index = k; index < totalNumbers; index++) {
      // Add the next element and remove the first element of the previous window
      currentSum += nums[index] - nums[index - k];
      // Update maxSum if the new currentSum is greater than the existing maxSum
      maxSum = Math.max(maxSum, currentSum);
  }

  // The result should be the average, so divide by k
  return maxSum / k
};