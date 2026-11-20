class Solution:
    def targetRange(self, nums, target):
        left, right = 0, len(nums)
        while left < right:
            middle = (left + right) // 2
            if nums[middle] < target: left = middle + 1
            else: right = middle
        first = left
        if first == len(nums) or nums[first] != target: return [-1, -1]
        left, right = first, len(nums)
        while left < right:
            middle = (left + right) // 2
            if nums[middle] <= target: left = middle + 1
            else: right = middle
        return [first, left - 1]
