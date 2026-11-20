class Solution:
    def isMountain(self, nums):
        peak = 0
        while peak + 1 < len(nums) and nums[peak] < nums[peak + 1]: peak += 1
        if peak == 0 or peak == len(nums) - 1: return False
        while peak + 1 < len(nums) and nums[peak] > nums[peak + 1]: peak += 1
        return peak == len(nums) - 1
