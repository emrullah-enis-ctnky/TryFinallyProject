class Solution:
    def prefixWordCounts(self, words, prefixes):
        children = [{}]
        counts = [0]
        for word in words:
            node = 0
            counts[node] += 1
            for char in word:
                if char not in children[node]:
                    children[node][char] = len(children)
                    children.append({})
                    counts.append(0)
                node = children[node][char]
                counts[node] += 1
        result = []
        for prefix in prefixes:
            node = 0
            for char in prefix:
                if char not in children[node]:
                    node = -1
                    break
                node = children[node][char]
            result.append(0 if node == -1 else counts[node])
        return result
