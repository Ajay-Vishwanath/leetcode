function firstNotRepeatingCharacter(s) {

    var arr = s.split("");

    for (var i = 0; i < arr.length; i++) {
        var chr = arr[i];
        //indexOf returns first index of specified char, lastIndexOf returns last index of specified char
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            return arr[i]
        }

    }

    return "_"
}

firstNotRepeatingCharacter = s => {
    r = {}
    for (e of s)
        //way to add keys to a hash or increment them if the key is already present
        r[e] = -~r[e]
    for (e in r)
        if (r[e] == 1)
            return e
    return '_'
}