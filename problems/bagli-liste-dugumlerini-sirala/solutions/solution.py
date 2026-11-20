class Solution:
    def sortedListOrder(self, values, next, head):
        order = []
        node = head
        while node != -1:
            order.append(node)
            node = next[node]
        width = 1
        while width < len(order):
            merged = []
            for left in range(0, len(order), 2 * width):
                middle = min(left + width, len(order))
                right = min(left + 2 * width, len(order))
                i, j = left, middle
                while i < middle or j < right:
                    if j == right or (i < middle and values[order[i]] <= values[order[j]]):
                        merged.append(order[i])
                        i += 1
                    else:
                        merged.append(order[j])
                        j += 1
            order = merged
            width *= 2
        return order
