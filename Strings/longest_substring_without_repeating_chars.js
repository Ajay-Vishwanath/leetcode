var lengthOfLongestSubstring = function (s) {
    let aPointer = 0;
    let bPointer = 0;
    let max = 0;
    let charSet = new Set();

    while (bPointer < s.length) {
        if (!charSet.has(s[bPointer])) {
            charSet.add(s[bPointer]);
            max = Math.max(max, charSet.size)
            bPointer++;
        } else {
            charSet.delete(s[aPointer]);
            aPointer++
        }
    }
    return max;
};