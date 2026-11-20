class Solution:
    def minimumCableMoves(self, n, edges):
        if len(edges) < n - 1:
            return -1
        graph = [[] for _ in range(n)]
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        seen = [False] * n
        components = 0
        for start in range(n):
            if seen[start]:
                continue
            components += 1
            seen[start] = True
            stack = [start]
            while stack:
                node = stack.pop()
                for neighbor in graph[node]:
                    if not seen[neighbor]:
                        seen[neighbor] = True
                        stack.append(neighbor)
        return components - 1
