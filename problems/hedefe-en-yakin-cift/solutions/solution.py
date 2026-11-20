class Solution:
    def closestPair(self, prices, target):
        left, right = 0, len(prices) - 1
        best = None
        best_diff = float("inf")
        while left < right:
            pair = [prices[left], prices[right]]
            diff = abs(sum(pair) - target)
            if diff < best_diff or (diff == best_diff and (best is None or pair < best)):
                best, best_diff = pair, diff
            if sum(pair) < target:
                left += 1
            else:
                right -= 1
        return best
