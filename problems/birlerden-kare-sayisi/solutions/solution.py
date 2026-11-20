class Solution:
    def countOneSquares(self, grid):
        if not grid or not grid[0]: return 0
        cols=len(grid[0]); dp=[0]*(cols+1); total=0
        for row in grid:
            diagonal=0
            for j in range(1,cols+1):
                above=dp[j]
                if row[j-1]: dp[j]=1+min(dp[j],dp[j-1],diagonal); total+=dp[j]
                else: dp[j]=0
                diagonal=above
        return total
