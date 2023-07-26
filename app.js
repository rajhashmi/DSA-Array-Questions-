// In DS  all data type should be same in array

//  when we declared array it goes to the computer memory its like a block and the first block is in random X-addres we can't predict but we
// predict the next block which is in x+1 address 

// ==============================================================

// Q1. Find the Largest Element in an Array;

// 1. Brute

function FindLargestEl(arr){
    let sorted = arr.sort()
    return sorted[sorted.length - 1]
}
console.log(FindLargestEl([1,3,5,4,6,7,8]));

// 2. better 

function FindLargestElBetter(arr){
    return Math.max(...arr)
}
console.log(FindLargestElBetter([1,3,5,4,6,7,8]));

// 3. Optimal

function FindLargestElOptimal(arr){
    let maxNum = arr[0]
    for(let i = 0; i< arr.length;i++){
        if(maxNum < arr[i]){
            maxNum = arr[i]
        }
    }
    return maxNum
}
console.log(FindLargestElBetter([1,3,5,4,6,7,8]));


// ===================================================================


