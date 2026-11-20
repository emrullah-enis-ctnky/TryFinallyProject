class Solution:
    def longestUniqueLength(self, text):
        last_seen = {}
        left = best = 0
        for right, char in enumerate(text):
            if char in last_seen and last_seen[char] >= left:
                left = last_seen[char] + 1
            last_seen[char] = right
            best = max(best, right - left + 1)
        return best
