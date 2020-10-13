/**
 * LeetCode - Two Sum
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map();

    for (let i=0; i<nums.length; i++) {
        const diff = target - nums[i];

        if (numMap.has(diff))
            return [numMap.get(diff), i];
        
        numMap.set(nums[i], i);
    }

    return [];
};
// Time complexity: O(n), Space complexity: O(n)