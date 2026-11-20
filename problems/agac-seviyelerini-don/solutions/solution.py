from collections import deque

class Solution:
    def levelValues(self, nodes):
        if not nodes or nodes[0] == -1:
            return []
        queue = deque([0])
        result = []
        while queue:
            level = []
            for _ in range(len(queue)):
                index = queue.popleft()
                level.append(nodes[index])
                left, right = 2 * index + 1, 2 * index + 2
                if left < len(nodes) and nodes[left] != -1:
                    queue.append(left)
                if right < len(nodes) and nodes[right] != -1:
                    queue.append(right)
            result.append(level)
        return result
