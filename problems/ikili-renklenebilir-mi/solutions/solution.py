class Solution:
    def isBipartite(self, graph):
        color = [0] * len(graph)
        from collections import deque
        for start in range(len(graph)):
            if color[start]: continue
            color[start] = 1; queue = deque([start])
            while queue:
                node = queue.popleft()
                for neighbor in graph[node]:
                    if not color[neighbor]: color[neighbor] = -color[node]; queue.append(neighbor)
                    elif color[neighbor] == color[node]: return False
        return True
