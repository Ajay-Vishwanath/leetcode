var minWindow = function (s, t) {
    if (s === null || t === null) {
        return ""
    }

    let chars = "";
    for (var i = 32; i <= 126; i++) {
        chars += String.fromCharCode(i);
    }


    let letterCount = new Array(95).fill(0);

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        letterCount[chars.indexOf(char)]++
    }

    // console.log(letterCount)

    let left = 0;
    let count = 0;
    let minLength = Number.POSITIVE_INFINITY;
    let result = "";

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right]
        if (--letterCount[chars.indexOf(rightChar)] >= 0) {
            count++;
        }

        while (count === t.length) {
            let leftChar = s[left];

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                result = s.slice(left, right + 1);
            }

            if (++letterCount[chars.indexOf(leftChar)] > 0) {
                --count
            }

            ++left
        }
    }

    return result;
};