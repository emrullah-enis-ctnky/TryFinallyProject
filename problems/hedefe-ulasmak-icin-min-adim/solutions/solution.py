class Solution:
    def minimumJumps(self, jumps):
        if len(jumps) == 1: return 0
        steps = end = farthest = 0
        for i in range(len(jumps) - 1):
            if i > farthest: return -1
            farthest = max(farthest, i + jumps[i])
            if i == end:
                if farthest == end: return -1
                steps += 1; end = farthest
                if end >= len(jumps) - 1: return steps
        return -1
