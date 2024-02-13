function numSquares(n) {
  if (n <= 0) return 0;

  // Initialize an array to store the least number of perfect square numbers
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

  // Base case: 0 requires 0 perfect squares
  dp[0] = 0;

  // Iterate through each integer up to n
  for (let i = 1; i <= n; i++) {
    // Iterate through each perfect square up to sqrt(n)
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
}

console.log(numSquares(12)); // Output: 3 (12 = 4 + 4 + 4)
