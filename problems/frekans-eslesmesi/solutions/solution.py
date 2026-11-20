class Solution:
    def countOccurrences(self, nums, target):
        return sum(value == target for value in nums)
