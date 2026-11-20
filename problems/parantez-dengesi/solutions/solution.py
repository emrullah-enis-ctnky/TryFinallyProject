class Solution:
    def isBalanced(self, text):
        stack = []
        pairs = {')': '(', ']': '[', '}': '{'}
        for char in text:
            if char in '([{':
                stack.append(char)
            elif not stack or stack.pop() != pairs[char]:
                return False
        return not stack
