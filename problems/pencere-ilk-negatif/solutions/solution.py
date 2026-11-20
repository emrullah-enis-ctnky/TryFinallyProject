from collections import deque

class Solution:
    def firstNegativePerWindow(self, values, k):
        negatives = deque()
        result = []
        for i, value in enumerate(values):
            if value < 0:
                negatives.append(i)
            while negatives and negatives[0] <= i - k:
                negatives.popleft()
            if i >= k - 1:
                result.append(values[negatives[0]] if negatives else 0)
        return result
