/**
 * LeetCode (Medium) - 3Sum
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b);   // sort nums

    if (nums.length < 3 || nums[i] > 0)  return [];  // if the smallest num is > 0, no three nums in array will add up to 0
    
    const result = [];
    for (let i=0; i<nums.length-2; i++) {
        if (nums[i] === nums[i+1]) continue;  // handle duplicates
        
        let low=i+1, high=nums.length-1;
        while (low<high) {
            const sum = nums[i] + nums[low] + nums[high];
            
            if (sum === 0)
                result.push([nums[i], nums[low], nums[high]]);
            else if (sum < 0) {
                while (low<high && nums[low] === nums[low+1]) low++;
                low++;
            } else {
                while (low<high && nums[high-1] === nums[high]) high--;
                high--;
            }
        }
    }

    return result;
};
// Time complexity: O(n^2)
// Space complexity: O(n) or O(n^2)??