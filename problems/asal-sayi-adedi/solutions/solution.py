class Solution:
    def countPrimes(self, n):
        if n <= 2: return 0
        prime = [True] * n; prime[0] = prime[1] = False
        for value in range(2, int((n - 1) ** 0.5) + 1):
            if prime[value]:
                for multiple in range(value * value, n, value): prime[multiple] = False
        return sum(prime)
