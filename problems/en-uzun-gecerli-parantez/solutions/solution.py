class Solution:
    def longestValidParentheses(self, text):
        stack = [-1]; best = 0
        for i, char in enumerate(text):
            if char == "(": stack.append(i)
            else:
                stack.pop()
                if not stack: stack.append(i)
                else: best = max(best, i - stack[-1])
        return best
