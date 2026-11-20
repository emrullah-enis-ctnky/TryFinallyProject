class Solution:
    def findPairIndices(self, nums, target):
        first_index = {}
        for i, value in enumerate(nums):
            complement = target - value
            if complement in first_index:
                return [first_index[complement], i]
            first_index.setdefault(value, i)
        return []
