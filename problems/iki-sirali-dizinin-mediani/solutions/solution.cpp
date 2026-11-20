#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: double medianOfSortedArrays(std::vector<int>& first, std::vector<int>& second) { if(first.size()>second.size())return medianOfSortedArrays(second,first);int m=first.size(),n=second.size(),lo=0,hi=m;while(lo<=hi){int i=(lo+hi)/2,j=(m+n+1)/2-i;int a=i==0?INT_MIN:first[i-1],b=i==m?INT_MAX:first[i],c=j==0?INT_MIN:second[j-1],d=j==n?INT_MAX:second[j];if(a<=d&&c<=b)return (m+n)%2?std::max(a,c):((long long)std::max(a,c)+std::min(b,d))/2.0;if(a>d)hi=i-1;else lo=i+1;}return 0.0; } };
