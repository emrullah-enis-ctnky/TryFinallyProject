class Solution:
    def countCodeOccurrences(self, codes, target):
        left, right = 0, len(codes)
        while left < right:
            middle = (left + right) // 2
            if codes[middle] < target:
                left = middle + 1
            else:
                right = middle
        first = left
        left, right = 0, len(codes)
        while left < right:
            middle = (left + right) // 2
            if codes[middle] <= target:
                left = middle + 1
            else:
                right = middle
        return left - first
