var minWindow = function (s, t) {
    if (s === null || t === null) {
        return ""
    }

    //adding all the possible keychars into a string
    let chars = "";
    for (var i = 32; i <= 126; i++) {
        chars += String.fromCharCode(i);
    }

    //making an array with each index representing a keychar
    let letterCount = new Array(95).fill(0);

    //counting how many times each keychar appears in t via the array.
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        letterCount[chars.indexOf(char)]++
    }

    let left = 0;
    let count = 0;
    let minLength = Number.POSITIVE_INFINITY;
    let result = "";

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right]
        if (--letterCount[chars.indexOf(rightChar)] >= 0) {
            count++;
        }

        //when all the chars that appear in t are within the substring
        while (count === t.length) {
            let leftChar = s[left];

            //adding one here because needs to be inclusive
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                //adding one here because it slices up until the second argument given
                result = s.slice(left, right + 1);
            }

            //if we removed a character from t when reducing the substring
            if (++letterCount[chars.indexOf(leftChar)] > 0) {
                --count
            }

            ++left
        }
    }

    return result;
};