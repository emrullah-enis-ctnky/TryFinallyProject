class Solution:
    def compressRuns(self, text):
        result = []; i = 0
        while i < len(text):
            end = i + 1
            while end < len(text) and text[end] == text[i]: end += 1
            result.append(text[i])
            if end - i > 1: result.append(str(end - i))
            i = end
        return "".join(result)
