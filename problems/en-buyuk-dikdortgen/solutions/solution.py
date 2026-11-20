class Solution:
    def largestHistogramArea(self, heights):
        stack = []
        best = 0
        for i in range(len(heights) + 1):
            current = heights[i] if i < len(heights) else 0
            while stack and heights[stack[-1]] > current:
                height = heights[stack.pop()]
                left = stack[-1] + 1 if stack else 0
                best = max(best, height * (i - left))
            if i < len(heights):
                stack.append(i)
        return best
