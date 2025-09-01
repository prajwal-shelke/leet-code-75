var kidsWithCandies = function(candies, extraCandies) {
    let output = []
    for(let c of candies){
        if(c+extraCandies >= Math.max(...candies)){
            output.push(true)
        } else{
            output.push(false)
        }
    }
    return output
};

// let candies = [2,3,5,1,3], extraCandies = 3 //Output: [true,true,true,false,true] 
//  let candies = [4,2,1,1,2], extraCandies = 1 //Output: [true,false,false,false,false] 
 let candies = [12,1,12], extraCandies = 10 //Output: [true,false,true]

console.log(kidsWithCandies(candies, extraCandies))