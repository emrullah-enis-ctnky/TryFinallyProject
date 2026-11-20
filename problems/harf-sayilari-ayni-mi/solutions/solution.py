class Solution:
    def areAnagrams(self, first, second):
        if len(first) != len(second):
            return False
        counts = [0] * 26
        for a, b in zip(first, second):
            counts[ord(a) - 97] += 1
            counts[ord(b) - 97] -= 1
        return all(value == 0 for value in counts)
