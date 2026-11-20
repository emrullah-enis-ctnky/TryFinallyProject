class Solution:
    def shortestEnoughRange(self, sales, target):
        left = 0
        total = 0
        best = len(sales) + 1
        for right, value in enumerate(sales):
            total += value
            while total >= target:
                best = min(best, right - left + 1)
                total -= sales[left]
                left += 1
        return 0 if best > len(sales) else best
