class Solution:
    def searchSortedMatrix(self, matrix, target):
        rows, cols = len(matrix), len(matrix[0])
        left, right = 0, rows * cols - 1
        while left <= right:
            middle = (left + right) // 2
            value = matrix[middle // cols][middle % cols]
            if value == target:
                return True
            if value < target:
                left = middle + 1
            else:
                right = middle - 1
        return False
