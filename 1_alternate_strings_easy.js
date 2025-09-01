// Alternate string - 1

var mergeAlternately = function(word1, word2) {
    let output = ""
    let i=0
    while(i < word1.length || i < word2.length){
        word1[i] ? output += word1[i] : ""
        word2[i] ? output += word2[i] : "" 
        i++
    }

    return output
};

// let word1 = "abc", word2 = "pqr"
// let word1 = "ab", word2 = "pqrs"
let word1 = "abcd", word2 = "pq"

console.log(mergeAlternately(word1, word2))