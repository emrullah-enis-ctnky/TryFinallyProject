class Solution:
    def searchRotated(self, nums, target):
        left, right = 0, len(nums) - 1
        while left <= right:
            middle = (left + right) // 2
            if nums[middle] == target:
                return middle
            if nums[left] <= nums[middle]:
                if nums[left] <= target < nums[middle]:
                    right = middle - 1
                else:
                    left = middle + 1
            elif nums[middle] < target <= nums[right]:
                left = middle + 1
            else:
                right = middle - 1
        return -1
