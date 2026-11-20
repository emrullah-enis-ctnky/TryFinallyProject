class Solution:
    def rangeSum(self, nums, left, right):
        prefix = [0]
        for value in nums:
            prefix.append(prefix[-1] + value)
        return prefix[right + 1] - prefix[left]
