class Solution:
    def windowMaximums(self, nums, k):
        from collections import deque
        q = deque(); result = []
        for i, value in enumerate(nums):
            while q and q[0] <= i - k: q.popleft()
            while q and nums[q[-1]] <= value: q.pop()
            q.append(i)
            if i >= k - 1: result.append(nums[q[0]])
        return result
