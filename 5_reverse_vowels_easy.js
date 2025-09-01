var reverseVowels = function(s) {
    let vowels = ["a", "e", "i", "o", "u"]
    let order = [], chars = []
    for (let i=0; i< s.length; i++){
        let char = s[i]
        if(vowels.includes(char.toLowerCase())){
            order.push(i)
            chars.push(char)
        }
    }
    s=s.split("")
    for(let i=chars.length - 1; i>=0;i--){
        s[order[order.length -1 -i]] = chars[i]
    }
    return s.join("")
};

let s = "IceCreAm" // output : "AceCreIm"

console.log(reverseVowels(s))