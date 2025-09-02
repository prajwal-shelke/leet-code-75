var productExceptSelf = function(nums) {
    let answer = Array(nums.length).fill(1)
    let left = 1
    for(let i=0;i<nums.length;i++){
        answer[i] = left
        left = left * nums[i]
    }

    let right = 1
    for(let i=nums.length-1;i>=0;i--){
        answer[i] *= right
        right = right * nums[i]
    }

    return answer
};

let nums = [1,2,3,4] //Output: [24,12,8,6]
// let nums = [-1,1,0,-3,3]// [0,0,9,0,0]

console.log(productExceptSelf(nums))

//l=1, n=1, an=1*1
//l=1, n=2, an=1*2
