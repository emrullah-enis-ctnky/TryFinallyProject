class Solution:
    def countGridPaths(self, grid):
        if not grid or not grid[0] or grid[0][0] == 1:
            return 0
        ways = [0] * len(grid[0])
        ways[0] = 1
        for row in grid:
            for col, blocked in enumerate(row):
                if blocked:
                    ways[col] = 0
                elif col > 0:
                    ways[col] += ways[col - 1]
        return ways[-1]
