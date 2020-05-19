var isAnagram = function (s, t) {

    let charCount = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charCount[char]) {
            charCount[char]++
        } else {
            charCount[char] = 1;
        }
    }

    for (let j = 0; j < t.length; j++) {
        let char = t[j];
        if (!charCount[char] || --charCount[char] < 0) {
            return false
        } else if (charCount[char] === 0) {
            delete charCount[char]
        }
    }

    if (Object.keys(charCount).length === 0) {
        return true
    } else {
        return false
    }
};