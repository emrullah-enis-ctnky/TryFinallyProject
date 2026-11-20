class Solution:
    def sortedSquares(self, nums):
        result = [0] * len(nums)
        left, right = 0, len(nums) - 1
        for index in range(len(nums) - 1, -1, -1):
            if abs(nums[left]) > abs(nums[right]):
                result[index] = nums[left] ** 2; left += 1
            else:
                result[index] = nums[right] ** 2; right -= 1
        return result
