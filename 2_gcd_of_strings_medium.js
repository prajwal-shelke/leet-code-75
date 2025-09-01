var gcdOfStrings = function(str1, str2) {
    // verfying if the given strings have a possible gcd, by checking concaneting the strings boths ways
    if(str1 + str2 !== str2 + str1) return ""

    let len1 = str1.length
    let len2 = str2.length

    // euclid's algo to find gcd
    // replace the len1 by len2, and len2 by remainder of len1 % len2
    // keep loooping
    // eventually len2 becomes 0, then len1 is the answer 
    while(len2 !== 0){
        [len1, len2] = [len2, len1 % len2]
    }

    return str1.slice(0, len1)
};

// let str1 = "ABCABC", str2 = "ABC"
// let str1 = "ABABAB", str2 = "ABAB"
// let str1 = "LEET", str2 = "CODE"
let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX", str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"

console.log("ans: ", gcdOfStrings(str1, str2))

