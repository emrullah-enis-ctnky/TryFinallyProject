class Solution:
    def removeAdjacentDuplicates(self, text):
        stack = []
        for char in text:
            if stack and stack[-1] == char: stack.pop()
            else: stack.append(char)
        return "".join(stack)
