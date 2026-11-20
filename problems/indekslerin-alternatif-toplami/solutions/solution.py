class Solution:
    def alternatingIndexSum(self, nums):
        return sum(value if i % 2 == 0 else -value for i, value in enumerate(nums))
