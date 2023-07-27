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

  // Q2. Find The Second Largest Element.

// 1 brute

function FindSecondLargestElBrute(arr){
        let sortedArr = arr.sort()
        let SecondMaxNum = sortedArr[0];
        for(let i = 0; i< arr.length;i++){
            if(SecondMaxNum< sortedArr[i] && sortedArr[i]!== sortedArr[sortedArr.length - 1]){
                SecondMaxNum = sortedArr[i]
            }
        }
        return SecondMaxNum
}
console.log(FindSecondLargestElBrute([1,7,7,7,7,7,]));

// 2. Better 

function FindSecondLargestElBetter(arr){
    let Largest = arr[0];
    let secondLargest = -1;
    for(let i = 0; i<arr.length; i++){
        if(Largest < arr[i]){
            Largest = arr[i]
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(secondLargest < arr[i] && arr[i]!== Largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(FindSecondLargestElBetter([1,7,7,7,7,7,]));
                                                                        // O[2n]

// 3. Optimal 

function FindSecondLargestElOptimal(arr){
   let Largest = arr[0];
    let secondLargest = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > Largest){
            secondLargest = Largest;
            Largest = arr[i]
        }else if (arr[i] > secondLargest && arr[i]!== Largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(FindSecondLargestElOptimal([7,7,7,3,7]));

// =========================================================================================

// 3. Check if Array is Sorted 

//  brute 

function isSortBrute(arr){
    let unSortedrray = arr;
    let sortedArr = arr.sort()
    
    for(let i = 0; i<arr.length; i++){
    if( unSortedrray[i] !== sortedArr[i]){
        // console.log(unSortedrray[i],sortedArr[i]);
        return false
    }
    }
    return true

}
console.log(isSortBrute([1,2,6,4,5]));

// Optimal 

function isSortOptimal(arr){
    let result = true
    for(let i = 0; i< arr.length - 1; i++){
        if(arr[i]>arr[i + 1]){
            result = false;
        }
    }
    return result
}
console.log(isSortOptimal([1,2,100,3,3,4]));


//  =====================================================================

// 4. Remove duplicate in place from sorted array

// Optimal 

function RemoveDuplicatesOptimal(nums){
    if(nums.length === 0) return 0;

    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j]!== nums[i]){
            i++
            nums[i] = nums[j]
        }
    }
    return i +1
}
console.log(RemoveDuplicatesOptimal([1,1,2,3,3]));



// 5. left Rotate the array by one place

// brute

function leftRotateBrute(arr){
    let newArr = [];
    for(let i = 0; i<arr.length;i++){
        if(i!==0){
            newArr.unshift(arr[i])
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
   
}
console.log(leftRotateBrute([1,2,3,4,5]));


// Optimal

function leftRotateOptimal(arr){
    let firstEL = arr[0]
    for(let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length - 1] = firstEL
    return arr
    
}
console.log(leftRotateOptimal([1,2,3,4,5]));

// 3.  move Zero to Last

// Brute

var moveZeroes = function(nums) {
    
    let zero = []
  for(let i =0;i<nums.length;i++){
      if(nums[i]==0){
          zero.push(nums[i])
          nums.splice(i,1)
          i--
      }
  }
  return nums.push(...zero)
  
};

// Optimal

function moveZeroToEnd(arr){
    let j = -1;
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === 0){
            j = i;
            break;
        }
    }

    if(j === -1) return "There is no zero in and array"

    for(i = j + 1; i < arr.length;i++){
        if(arr[i]!==0){
            [[arr[i],arr[j]] = [arr[j],arr[i]]]
            j++
        }
    }
    return arr
}
console.log(moveZeroToEnd([1,0,2,3,2,0,0,4,5,1]));



// Q4. Linear Search 

// Optimal

function LinearSearch(arr,target){
    for(let i = 0; i< arr.length; i++ ){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}
console.log(LinearSearch([1,2,3,4,5],4));


// Q5. Union Of two sorted array
// brute

 function UnionOfArrayBrute(arr1,arr2){
    let concat = arr1.concat(...arr2)
    let result = [];
    for(let i = 0; i < concat.length;i++){
        if(!result.includes(concat[i])){
            result.push(concat[i])
        }
    }
    return result
 }
 console.log(UnionOfArrayBrute([1,2,3,4,5],[1,2,3,4,5,6]));




 // Optimal

 function findUnion(arr1, arr2) {
    let union = []; // Union array
  
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
      if (i < arr1.length && (j === arr2.length || arr1[i] <= arr2[j])) {
        if (union.length === 0 || union[union.length - 1] !== arr1[i])
          union.push(arr1[i]);
        i++;
      } else {
        if (union.length === 0 || union[union.length - 1] !== arr2[j])
          union.push(arr2[j]);
        j++;
      }
    }
  
    return union;
  }
  
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2 = [2, 3, 4, 4, 5, 11, 12];
  
  const union = findUnion(arr1, arr2);
  
  console.log("Union of arr1 and arr2 is:");
  console.log(union.join(" "));
  
//   ===========================



// ===============================

// Q8.  Find the missing Number

//  brute
function missingNumber(arr){

    for(let i = 1; i<= arr.length; i++){
        let flag = 0;

      for( let j = 0; j < arr.length - 1;j++){
        if(arr[j]=== i){
            flag = 1
            break;
        }
      }
      if(flag === 0){
        return i
      }
    }
}
console.log(missingNumber([1,2,4,5]));


