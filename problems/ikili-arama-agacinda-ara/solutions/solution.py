class Solution:
    def searchEncodedBst(self, nodes, target):
        index = 0
        while index < len(nodes) and nodes[index] != -1:
            if nodes[index] == target:
                return True
            index = 2 * index + (1 if target < nodes[index] else 2)
        return False
