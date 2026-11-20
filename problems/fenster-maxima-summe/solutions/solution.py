from collections import deque

class Solution:
    def sumWindowMaximums(self, nums, k):
        indices = deque()
        total = 0
        for i, value in enumerate(nums):
            while indices and indices[0] <= i - k:
                indices.popleft()
            while indices and nums[indices[-1]] <= value:
                indices.pop()
            indices.append(i)
            if i >= k - 1:
                total += nums[indices[0]]
        return total
