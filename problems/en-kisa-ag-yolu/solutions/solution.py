from collections import deque

class Solution:
    def shortestRouteLength(self, n, edges, start, destination):
        graph = [[] for _ in range(n)]
        for source, target in edges:
            graph[source].append(target)
        distance = [-1] * n
        distance[start] = 0
        queue = deque([start])
        while queue:
            node = queue.popleft()
            if node == destination:
                return distance[node]
            for neighbor in graph[node]:
                if distance[neighbor] == -1:
                    distance[neighbor] = distance[node] + 1
                    queue.append(neighbor)
        return -1
