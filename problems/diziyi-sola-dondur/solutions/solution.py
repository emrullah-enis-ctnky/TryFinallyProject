class Solution:
    def rotateLeft(self, nums, k):
        if not nums:
            return []
        shift = k % len(nums)
        return nums[shift:] + nums[:shift]
