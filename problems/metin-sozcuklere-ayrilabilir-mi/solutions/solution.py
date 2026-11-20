class Solution:
    def canSegment(self, text, words):
        reachable = [False] * (len(text) + 1); reachable[0] = True
        for start in range(len(text)):
            if reachable[start]:
                for word in words:
                    if text.startswith(word, start): reachable[start + len(word)] = True
        return reachable[-1]
