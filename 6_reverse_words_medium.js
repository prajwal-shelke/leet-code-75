var reverseWords = function(s) {
    console.log(s.split(" "))
    return s.split(" ").filter(c=>c).reverse().join(" ")
};

// let s = "the sky is blue" //Output: "blue is sky the"
let s = "  hello world  " //Output: "world hello"s
// let s = "a good   example" //Output: "example good a"

console.log(reverseWords(s))