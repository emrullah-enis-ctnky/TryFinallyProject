class Solution:
    def longestOnesAfterFlips(self, bits, k):
        left = zeros = best = 0
        for right, bit in enumerate(bits):
            if bit == 0: zeros += 1
            while zeros > k:
                if bits[left] == 0: zeros -= 1
                left += 1
            best = max(best, right - left + 1)
        return best
