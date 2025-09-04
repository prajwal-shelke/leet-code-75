/**
 * @param {character[]} chars
 * @return {number}
 */
// not optimsed
// var compress = function(chars) {
//     let prev = ""
//     let count = 1
//     let len = chars.length
//     for(let i=0; i < chars.length; i++){
//         console.log("\n\nIndex : ",i)
//         let char = chars[i]
//         if(prev === char){
//             count++
//             chars.splice(i, 1)
//             i--
//             console.log("Compressed :", chars, "Removed :", char)
//         }
//         if(prev!=char){
//             console.log("New char detected : ", char)
//             console.log("Count of the previous char : ", count)
//             let temp = prev
//             prev = chars.splice(i,1)[0]
//             if(temp !== ""){
//                 chars.splice(i, 0, temp)
//                 i++
//             }
//             if(count>1){
//                 chars.splice(i, 0, ...(count > 9 ? count.toString().split("") : [count.toString()]))
//                 count > 9 && i++
//                 count = 1
//                 i++
//             }
//             i--
//             console.log("Updated Array: ",chars, "Updated Index: ", i)
//         }
//     }

//     chars.push(prev)
//     count > 1 && chars.push(...(count > 9 ? count.toString().split("") : [count.toString()]))
//     console.log("Final :",chars)
// };

//optimised solution
/*One pointer (i/j) is for reading and counting duplicates.

The other pointer (write) is for writing the compressed result in-place.

This is a classic two-pointer technique where one pointer lags (building the output) while the other scans ahead.

👉 In short:
The DSA pattern here is Two Pointers (fast & slow pointers), applied for in-place array modification.*/ 
var compress = function(chars) {

    let i = 0;

    let j = 0;

    let write = 0;

    let long = chars.length;

   while(i < long){
    j = i;

    while(j < long && chars[j] === chars[i]){
        j++
    }

    let count = j - i;


    chars[write] = chars[i];
    write++;

    if(count > 1){
        let str = count.toString();
        for(let k = 0; k < str.length; k++){
            chars[write] = str[k];
            write++;
        }
    }

    i = j;

   }
   console.log(chars)

   return write;

};

let chars = ["a","a","b","b","c","c","c"] //["a","2","b","2","c","3"] same variable
// let chars = ["a"] //["a"] same variable
compress(chars)