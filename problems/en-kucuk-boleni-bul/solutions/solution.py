class Solution:
    def smallestDivisor(self, nums, threshold):
        left, right = 1, max(nums)
        while left < right:
            divisor = (left + right) // 2
            total = sum((value + divisor - 1) // divisor for value in nums)
            if total <= threshold: right = divisor
            else: left = divisor + 1
        return left
