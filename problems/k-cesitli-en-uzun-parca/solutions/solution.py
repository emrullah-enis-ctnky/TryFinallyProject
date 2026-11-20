class Solution:
    def longestLimitedAlphabetRun(self, text, k):
        counts = [0] * 26
        left = distinct = best = 0
        for right, letter in enumerate(text):
            index = ord(letter) - ord("a")
            if counts[index] == 0:
                distinct += 1
            counts[index] += 1
            while distinct > k:
                old = ord(text[left]) - ord("a")
                counts[old] -= 1
                if counts[old] == 0:
                    distinct -= 1
                left += 1
            best = max(best, right - left + 1)
        return best
