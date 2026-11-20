class Solution:
    def moveZerosToEnd(self, nums):
        nonzero = [value for value in nums if value != 0]
        return nonzero + [0] * (len(nums) - len(nonzero))
