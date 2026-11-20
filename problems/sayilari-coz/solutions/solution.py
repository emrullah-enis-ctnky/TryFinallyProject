class Solution:
    def decodeWays(self, code):
        if code[0] == "0": return 0
        prev2 = prev1 = 1
        for i in range(1, len(code)):
            current = prev1 if code[i] != "0" else 0
            pair = int(code[i - 1:i + 1])
            if 10 <= pair <= 26: current += prev2
            prev2, prev1 = prev1, current
        return prev1
