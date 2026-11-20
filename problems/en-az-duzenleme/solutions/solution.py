class Solution:
    def minimumEdits(self, source, target):
        previous = list(range(len(target) + 1))
        for i, left in enumerate(source, 1):
            current = [i] + [0] * len(target)
            for j, right in enumerate(target, 1):
                current[j] = previous[j - 1] if left == right else 1 + min(previous[j - 1], previous[j], current[j - 1])
            previous = current
        return previous[-1]
