/**
 * @param {number[]} nums
 * @return {boolean}
 */
// unoptimized
// var increasingTriplet = function(nums) {
//     if(nums.length < 3) return false
//     let uniqueElem = new Set(nums)
//     if(uniqueElem.size < 3) return false
//     let i=0,j=1,k=2
//     while(i < nums.length-2 || j < nums.length-1 || k < nums.length){
//         console.log('Check ', nums[i],nums[j],nums[k])
//         if(i<j<k && nums[i]<nums[j] && nums[j]<nums[k]){
//             return true
//         }
//         if(!(nums[i]<nums[j])){ // first condition false then
//             j++
//         }
//         if(!(nums[j]<nums[k])){ // second condition false then
//             k++
//         }
//         if(k>=nums.length && !(j>=nums.length-1)){
//             console.log("K reached")
//             j++
//             k=j+1
//         }
//         if(j>=nums.length-1){
//             console.log("J reached")
//             i++
//             j=i+1
//             k=j+1
//         }

//     }

//     return false
// };

//optimized
var increasingTriplet = function(nums) {

    let first = Infinity;
    let second = Infinity;

    for(let i = 0; i < nums.length; i++) {

        if (nums[i] <= first) {
            first = nums[i];
        }
        else if (nums[i] <= second) {
            second = nums[i];
        }
        else return true;
    }

    return false;
}

// let nums = [1,5,0,4,1,3] //true
// let nums = [20,100,10,12,5,13] //true
// let nums = [1,2,3,4,5] //true
// let nums = [5,4,3,2,1]// false
// let nums = [2,1,5,0,4,6] //true
// Explanation: One of the valid triplet is (3, 4, 5), because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
let nums = [1,2,1,3] //Output: true

console.log(increasingTriplet(nums))