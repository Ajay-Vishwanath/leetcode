var characterReplacement = function (s, k) {
    let charCount = {};
    let windowStart = 0;
    let maxLength = 0;
    let maxCount = 0;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const endLetter = s.charAt(windowEnd);
        if (charCount[endLetter]) {
            charCount[endLetter]++;
        } else {
            charCount[endLetter] = 1;
        }
        maxCount = Math.max(maxCount, charCount[endLetter]);

        while (windowEnd - windowStart - maxCount + 1 > k) {
            const startLetter = s.charAt(windowStart);
            charCount[startLetter]--;
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    };
    return maxLength;
};