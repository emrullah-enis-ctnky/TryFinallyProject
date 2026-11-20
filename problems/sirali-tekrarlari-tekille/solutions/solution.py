class Solution:
    def uniqueSorted(self, nums):
        result = []
        for value in nums:
            if not result or result[-1] != value: result.append(value)
        return result
