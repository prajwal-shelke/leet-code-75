
//not optimised
// var canPlaceFlowers = function(flowerbed, n) {
//     let len = flowerbed.length;
//     for (let i = 0; i < len; i++) {
//         let left = i === 0 || flowerbed[i - 1] === 0;
//         let right = i === len - 1 || flowerbed[i + 1] === 0;

//         if (left && right && flowerbed[i] === 0) {
//             flowerbed[i] = 1;
//             n--;
//         }
//     }
//     return n <= 0;
// };

//optimised
// greedy approach
var canPlaceFlowers = function(flowerbed, n) {
    let len = 0
    for (let i=0; i<len;i++){
        let right = i === 0 || flowerbed[i-1] === 0
        let left = i === len - 1 || flowerbed[i+1] === 0

        if(left && flowerbed[i] && right){
            n--
            flowerbed[i] = 1
        }
    }
    return n <= 0
}


// let flowerbed = [1,0,0,0,1], n = 1 //Output: true
// let flowerbed = [1,0,0,0,1], n = 2 //Output: false
let flowerbed = [1,0,0,0,0,1], n = 2 //Output: false

console.log(canPlaceFlowers(flowerbed, n))