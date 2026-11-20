class Solution:
    def containsDuplicate(self, nums):
        return len(set(nums)) != len(nums)
