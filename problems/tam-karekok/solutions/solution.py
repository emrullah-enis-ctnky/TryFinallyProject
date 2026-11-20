class Solution:
    def integerSquareRoot(self, n):
        left, right = 0, n
        while left <= right:
            middle = (left + right) // 2
            if middle * middle <= n: left = middle + 1
            else: right = middle - 1
        return right
