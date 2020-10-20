/**
 * Knapsack
 * Given weights and values of n items (sorted), put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
 * 
 * @param {int} W
 * @param {int[]} weights
 * @param {int[]} values
 * @param {int} n
 * @return {int} 
 */
function knapsack(W, weights, values, n) {
    const dp = new Array(n+1).map(() => new Array(W+1));

    for (let i=0; i<=n; i++) {
        for (let j=0; j<=W; j++) {
            if (i==0 || j==0)
                dp[i][j] = 0;
            else if (weights[i-1] <= j)
                dp[i][j] = Math.max(values[i-1] + dp[i-1][j - weights[i-1]], dp[i-1][j]);
            else
                dp[i][j] = dp[i-1][j]
        }
    }

    return dp[n][W];
}
// Time complexity: O(nW), Sapce complexity: O(nW)