class Solution:
    def maxSubArray(self, nums):
        best = current = nums[0]
        for value in nums[1:]:
            current = max(value, current + value)
            best = max(best, current)
        return best
