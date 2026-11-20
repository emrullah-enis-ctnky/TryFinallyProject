class Solution:
    def largestFilledSquare(self, grid):
        if not grid or not grid[0]:
            return 0
        cols = len(grid[0])
        dp = [0] * (cols + 1)
        best = 0
        for row in grid:
            diagonal = 0
            for col in range(1, cols + 1):
                above = dp[col]
                dp[col] = 0 if row[col - 1] == 0 else 1 + min(diagonal, dp[col - 1], dp[col])
                best = max(best, dp[col])
                diagonal = above
        return best * best
