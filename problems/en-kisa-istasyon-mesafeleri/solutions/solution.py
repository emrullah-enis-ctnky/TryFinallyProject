import heapq

class Solution:
    def shortestStationDistances(self, n, edges, source):
        graph = [[] for _ in range(n)]
        for a, b, time in edges:
            graph[a].append((b, time))
            graph[b].append((a, time))
        distance = [float("inf")] * n
        distance[source] = 0
        queue = [(0, source)]
        while queue:
            cost, node = heapq.heappop(queue)
            if cost != distance[node]:
                continue
            for neighbor, time in graph[node]:
                candidate = cost + time
                if candidate < distance[neighbor]:
                    distance[neighbor] = candidate
                    heapq.heappush(queue, (candidate, neighbor))
        return [-1 if value == float("inf") else value for value in distance]
