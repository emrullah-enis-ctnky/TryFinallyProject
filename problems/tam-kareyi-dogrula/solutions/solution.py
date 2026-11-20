class Solution:
    def isPerfectSquare(self, count):
        if count < 0:
            return False
        left, right = 0, count
        while left <= right:
            middle = (left + right) // 2
            square = middle * middle
            if square == count:
                return True
            if square < count:
                left = middle + 1
            else:
                right = middle - 1
        return False
