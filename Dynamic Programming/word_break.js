var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i=0; i<=s.length; i++){
        for (let j=0; j<i; j++){
            //optimization - we don't need to ceck that word
            if (i - j > maxLengthWord(wordDict)){
                continue;
            }
            //slice goes from j to i - so doesn't include s[i]
            if (dp[j] && wordDict.includes(s.slice(j, i))){
                dp[i] = true
                break;
            }
        }
    }

    return dp[s.length]
};

var maxLengthWord = function(array){
    let maxLength = 0;
    for (let i=0; i<array.length; i++){
        maxLength = Math.max(array[i].length, maxLength)
    }

    return maxLength;
}