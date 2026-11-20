class Solution:
    def hasPath(self, n, edges, source, destination):
        graph = [[] for _ in range(n)]
        for a, b in edges: graph[a].append(b); graph[b].append(a)
        seen = {source}; stack = [source]
        while stack:
            node = stack.pop()
            if node == destination: return True
            for neighbor in graph[node]:
                if neighbor not in seen: seen.add(neighbor); stack.append(neighbor)
        return False
