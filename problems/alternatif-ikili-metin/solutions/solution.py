class Solution:
    def minimumAlternatingFlips(self, bits):
        first = sum(char != ("0" if i % 2 == 0 else "1") for i, char in enumerate(bits))
        return min(first, len(bits) - first)
