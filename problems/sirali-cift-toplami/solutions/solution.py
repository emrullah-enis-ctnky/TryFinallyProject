class Solution:
    def hasPairWithSum(self, nums, target):
        left, right = 0, len(nums) - 1
        while left < right:
            total = nums[left] + nums[right]
            if total == target:
                return True
            if total < target:
                left += 1
            else:
                right -= 1
        return False
