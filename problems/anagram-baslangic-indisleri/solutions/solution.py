class Solution:
    def anagramStartIndices(self, text, pattern):
        if len(text) < len(pattern):
            return []
        wanted = [0] * 26
        window = [0] * 26
        for letter in pattern:
            wanted[ord(letter) - 97] += 1
        for letter in text[:len(pattern)]:
            window[ord(letter) - 97] += 1
        result = []
        for start in range(len(text) - len(pattern) + 1):
            if window == wanted:
                result.append(start)
            if start + len(pattern) < len(text):
                window[ord(text[start]) - 97] -= 1
                window[ord(text[start + len(pattern)]) - 97] += 1
        return result
