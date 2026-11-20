class Solution:
    def minimumNetworkCost(self, n, edges):
        parent = list(range(n))
        rank = [0] * n
        total = used = 0
        for a0, b0, cost in sorted(edges, key=lambda edge: edge[2]):
            a, b = a0, b0
            while parent[a] != a:
                parent[a] = parent[parent[a]]
                a = parent[a]
            while parent[b] != b:
                parent[b] = parent[parent[b]]
                b = parent[b]
            if a == b:
                continue
            if rank[a] < rank[b]:
                a, b = b, a
            parent[b] = a
            if rank[a] == rank[b]:
                rank[a] += 1
            total += cost
            used += 1
            if used == n - 1:
                return total
        return total if used == n - 1 else -1
