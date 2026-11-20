class Solution:
    def maxWindowSum(self, nums, k):
        window = sum(nums[:k]); best = window
        for i in range(k, len(nums)):
            window += nums[i] - nums[i - k]
            best = max(best, window)
        return best
