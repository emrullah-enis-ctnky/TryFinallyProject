class Solution:
    def minimumCover(self, text, required):
        if not required: return ""
        from collections import Counter
        need = Counter(required); have = Counter(); missing = len(required); left = 0; best = (len(text) + 1, 0)
        for right, char in enumerate(text):
            if have[char] < need[char]: missing -= 1
            have[char] += 1
            while missing == 0:
                if right - left + 1 < best[0]: best = (right - left + 1, left)
                first = text[left]; have[first] -= 1; left += 1
                if have[first] < need[first]: missing += 1
        return "" if best[0] > len(text) else text[best[1]:best[1] + best[0]]
