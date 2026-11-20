#include <string>
class Solution { public: int countWords(std::string text) { if (text.empty()) return 0; int count = 1; for (char ch : text) if (ch == ' ') ++count; return count; } };
