/**
 * LeetCode (Medium) - Longest Palindromic Substring
 * Given a string s, return the longest palindromic substring in s.
 * 
 * @param {string} s
 * @return {string}
 */

// Constraint: 1 <= s.length <= 1000, s consist of only digits and English letters (lower-case and/or upper-case)
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    const dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));
    
    lps = '';
    for (let i=s.length-1; i>=0; i--) {
        for (let j=i; j<s.length; j++) {
            if (s[i]===s[j]) {
                if (j-i > 1 && !dp[i+1][j-1]) continue;

                dp[i][j] = true;
                if (lps.length < j-i+1) lps = s.substring(i, j+1);
            }
        }
    }

    return lps;
};
// Time complexity: O(n^2), Space complexity: O(n^2)

module.exports = longestPalindrome;