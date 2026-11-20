class Solution:
    def maximumSingleTradeProfit(self, prices):
        lowest = prices[0]
        best = 0
        for price in prices:
            best = max(best, price - lowest)
            lowest = min(lowest, price)
        return best
