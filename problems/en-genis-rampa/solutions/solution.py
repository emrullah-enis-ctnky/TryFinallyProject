class Solution:
    def maximumWidthRamp(self, nums):
        stack = []
        for i, value in enumerate(nums):
            if not stack or value < nums[stack[-1]]: stack.append(i)
        best = 0
        for right in range(len(nums) - 1, -1, -1):
            while stack and nums[stack[-1]] <= nums[right]: best = max(best, right - stack.pop())
        return best
