from collections import deque

class Solution:
    def canFinishCourses(self, n, prerequisites):
        next_courses = [[] for _ in range(n)]
        indegree = [0] * n
        for course, prerequisite in prerequisites:
            next_courses[prerequisite].append(course)
            indegree[course] += 1
        ready = deque(i for i in range(n) if indegree[i] == 0)
        completed = 0
        while ready:
            course = ready.popleft()
            completed += 1
            for following in next_courses[course]:
                indegree[following] -= 1
                if indegree[following] == 0:
                    ready.append(following)
        return completed == n
