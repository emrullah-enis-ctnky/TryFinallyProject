class Solution:
    def longestPalindrome(self, text):
        best_start = best_length = 0
        for center in range(len(text)):
            for mode in (0, 1):
                left, right = center, center + mode
                while left >= 0 and right < len(text) and text[left] == text[right]:
                    length = right - left + 1
                    if length > best_length or (length == best_length and left < best_start):
                        best_start, best_length = left, length
                    left -= 1
                    right += 1
        return text[best_start:best_start + best_length]
