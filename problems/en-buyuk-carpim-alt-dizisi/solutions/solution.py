class Solution:
    def maxProductSubarray(self, nums):
        high = low = best = nums[0]
        for value in nums[1:]:
            if value < 0: high, low = low, high
            high = max(value, high * value); low = min(value, low * value)
            best = max(best, high)
        return best
