class Solution:
    def isValid(self, s):
        # Her turda bir çift silen yavaş yöntem
        while "()" in s or "[]" in s or "{}" in s:
            s = s.replace("()", "", 1).replace("[]", "", 1).replace("{}", "", 1)
        return s == ""
