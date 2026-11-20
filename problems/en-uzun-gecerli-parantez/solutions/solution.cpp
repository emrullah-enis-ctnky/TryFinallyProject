#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int longestValidParentheses(std::string text) { std::vector<int> st{-1};int best=0;for(int i=0;i<(int)text.size();i++){if(text[i]=='(')st.push_back(i);else{st.pop_back();if(st.empty())st.push_back(i);else best=std::max(best,i-st.back());}}return best; } };
