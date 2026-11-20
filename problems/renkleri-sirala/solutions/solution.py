class Solution:
    def sortPartColors(self, colors):
        result = list(colors)
        low = current = 0
        high = len(result) - 1
        while current <= high:
            if result[current] == 0:
                result[low], result[current] = result[current], result[low]
                low += 1
                current += 1
            elif result[current] == 2:
                result[current], result[high] = result[high], result[current]
                high -= 1
            else:
                current += 1
        return result
