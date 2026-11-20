class Solution:
    def peakIndex(self, heights):
        left, right = 0, len(heights) - 1
        while left < right:
            middle = (left + right) // 2
            if heights[middle] < heights[middle + 1]:
                left = middle + 1
            else:
                right = middle
        return left
