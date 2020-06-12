var groupAnagrams = function (strs) {

    const result = []
    const sortedMap = {};

    for (let i = 0; i < strs.length; i++) {

        const sortedWord = strs[i].split('').sort().join('');

        if (sortedMap[sortedWord]) {
            sortedMap[sortedWord].push(strs[i])
        } else {
            sortedMap[sortedWord] = [strs[i]]
        }
    }

    for (let key in sortedMap) {
        result.push(sortedMap[key])
    }

    return result;
};
