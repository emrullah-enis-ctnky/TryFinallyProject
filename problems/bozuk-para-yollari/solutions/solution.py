class Solution:
    def countCoinWays(self, coins, amount):
        ways = [0] * (amount + 1)
        ways[0] = 1
        for coin in coins:
            for total in range(coin, amount + 1):
                ways[total] += ways[total - coin]
        return ways[amount]
