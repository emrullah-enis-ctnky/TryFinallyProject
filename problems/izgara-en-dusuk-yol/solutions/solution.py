class Solution:
    def minimumPathSum(self, grid):
        rows, cols = len(grid), len(grid[0])
        costs = [float("inf")] * (cols + 1)
        costs[1] = 0
        for row in range(rows):
            for col in range(cols):
                costs[col + 1] = min(costs[col], costs[col + 1]) + grid[row][col]
        return costs[cols]
