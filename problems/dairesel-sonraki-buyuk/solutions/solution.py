class Solution:
    def circularNextGreater(self, nums):
        result = [-1] * len(nums); stack = []
        for i in range(2 * len(nums)):
            index = i % len(nums)
            while stack and nums[stack[-1]] < nums[index]: result[stack.pop()] = nums[index]
            if i < len(nums): stack.append(i)
        return result
