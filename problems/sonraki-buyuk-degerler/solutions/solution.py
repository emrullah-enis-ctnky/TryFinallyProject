class Solution:
    def nextGreaterValues(self, nums):
        result = [-1] * len(nums); stack = []
        for i, value in enumerate(nums):
            while stack and nums[stack[-1]] < value: result[stack.pop()] = value
            stack.append(i)
        return result
