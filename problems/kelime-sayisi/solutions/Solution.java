class Solution { public int countWords(String text) { if (text.isEmpty()) return 0; int count = 1; for (int i = 0; i < text.length(); i++) if (text.charAt(i) == ' ') count++; return count; } }
