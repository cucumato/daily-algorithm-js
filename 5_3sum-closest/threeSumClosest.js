/**
 * LeetCode (Medium) - 3Sum Closest
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Constraints: 3 <= nums.length <= 10^3, -10^3 <= nums[i] <= 10^3, -10^4 <= target <= 10^4
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a-b);

    let closestSumDiff = 13000; // max diff is 13000 (By constraint, max target value is 10000 and min 3sum is -3000)
    for (let i=0; i<nums.length-2; i++) {
        let low=i+1, high=nums.length-1;

        while (low<high) {
            const sum = nums[i] + nums[low] + nums[high];
            const currentSumDiff = sum-target;

            if (Math.abs(currentSumDiff) < Math.abs(closestSumDiff)) {
                closestSumDiff = currentSumDiff;
            }
            
            if (currentSumDiff < 0) low++;
            else if (currentSumDiff > 0) high--;
            else return target;
        }
    }

    return closestSumDiff+target;
};
// Time complexity: O(n^2), Space complexity: O(1)