class Solution:
    def rotateRight(self, nums, k):
        shift = k % len(nums)
        if shift == 0:
            return nums[:]
        return nums[-shift:] + nums[:-shift]
