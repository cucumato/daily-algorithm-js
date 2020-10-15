/**
 * Leetcode (Medium) - 22. Generate Parentheses
 * 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    addParenthesis(result, '(', n-1, n);

    return result;
};

const addParenthesis = (result, s, open, close) => {
    
    if (open===0 && close===0) {
        result.push(s);
        return;
    }

    if (close > open)
        addParenthesis(result, s+')', open, close-1);

    if (open > 0)
        addParenthesis(result, s+'(', open-1, close);
};
// it's for sure better than O(2^n) but not so sure

// * try closure method later