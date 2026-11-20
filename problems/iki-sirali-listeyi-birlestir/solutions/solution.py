class Solution:
    def mergeEncodedLists(self, values1, next1, head1, values2, next2, head2):
        result = []
        a, b = head1, head2
        while a != -1 and b != -1:
            if values1[a] <= values2[b]:
                result.append(values1[a])
                a = next1[a]
            else:
                result.append(values2[b])
                b = next2[b]
        while a != -1:
            result.append(values1[a])
            a = next1[a]
        while b != -1:
            result.append(values2[b])
            b = next2[b]
        return result
