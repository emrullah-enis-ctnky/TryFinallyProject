class Solution:
    def longestCommonPrefix(self, words):
        prefix = words[0]
        for word in words[1:]:
            while not word.startswith(prefix): prefix = prefix[:-1]
        return prefix
