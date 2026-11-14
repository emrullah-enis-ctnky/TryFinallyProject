class Solution:
    def climbStairs(self, n):
        # Düz özyineleme: n = 45 için milyarlarca çağrı
        if n <= 2:
            return n
        return self.climbStairs(n - 1) + self.climbStairs(n - 2)
