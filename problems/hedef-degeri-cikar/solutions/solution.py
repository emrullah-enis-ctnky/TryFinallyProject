class Solution:
    def withoutTarget(self, nums, target):
        return [value for value in nums if value != target]
