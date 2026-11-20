import heapq

class Solution:
    def mergeSortedStreams(self, streams):
        heap = []
        for stream_index, stream in enumerate(streams):
            if stream:
                heapq.heappush(heap, (stream[0], stream_index, 0))
        result = []
        while heap:
            value, stream_index, index = heapq.heappop(heap)
            result.append(value)
            index += 1
            if index < len(streams[stream_index]):
                heapq.heappush(heap, (streams[stream_index][index], stream_index, index))
        return result
