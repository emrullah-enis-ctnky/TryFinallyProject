class Solution:
    def diagonalSum(self, matrix):
        n = len(matrix)
        return sum(matrix[i][i] + (matrix[i][n - 1 - i] if i != n - 1 - i else 0) for i in range(n))
