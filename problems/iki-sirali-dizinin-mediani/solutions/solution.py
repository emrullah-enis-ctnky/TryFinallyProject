class Solution:
    def medianOfSortedArrays(self, first, second):
        if len(first) > len(second): first, second = second, first
        m, n = len(first), len(second); left, right = 0, m
        while left <= right:
            i = (left + right) // 2; j = (m + n + 1) // 2 - i
            a = float("-inf") if i == 0 else first[i - 1]; b = float("inf") if i == m else first[i]
            c = float("-inf") if j == 0 else second[j - 1]; d = float("inf") if j == n else second[j]
            if a <= d and c <= b:
                if (m + n) % 2: return float(max(a, c))
                return (max(a, c) + min(b, d)) / 2
            if a > d: right = i - 1
            else: left = i + 1
        return 0.0
