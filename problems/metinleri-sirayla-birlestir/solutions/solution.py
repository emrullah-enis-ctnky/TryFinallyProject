class Solution:
    def mergeAlternately(self, first, second):
        result = []
        for i in range(max(len(first), len(second))):
            if i < len(first): result.append(first[i])
            if i < len(second): result.append(second[i])
        return "".join(result)
