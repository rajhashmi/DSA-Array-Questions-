// In DS  all data type should be same in array

//  when we declared array it goes to the computer memory its like a block and the first block is in random X-addres we can't predict but we
// predict the next block which is in x+1 address

// ==============================================================

// Q1. Find the Largest Element in an Array;

// 1. Brute

function FindLargestEl(arr) {
  let sorted = arr.sort();
  return sorted[sorted.length - 1];
}
console.log(FindLargestEl([1, 3, 5, 4, 6, 7, 8]));

// 2. better

function FindLargestElBetter(arr) {
  return Math.max(...arr);
}
console.log(FindLargestElBetter([1, 3, 5, 4, 6, 7, 8]));

// // 3. Optimal

function FindLargestElOptimal(arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(FindLargestElBetter([1, 3, 5, 4, 6, 7, 8]));

// // ===================================================================

// // Q2. Find The Second Largest Element.

// // 1 brute

function FindSecondLargestElBrute(arr) {
  let sortedArr = arr.sort();
  let SecondMaxNum = sortedArr[0];
  for (let i = 0; i < arr.length; i++) {
    if (
      SecondMaxNum < sortedArr[i] &&
      sortedArr[i] !== sortedArr[sortedArr.length - 1]
    ) {
      SecondMaxNum = sortedArr[i];
    }
  }
  return SecondMaxNum;
}
console.log(FindSecondLargestElBrute([1, 7, 7, 7, 7, 7]));

// // 2. Better

function FindSecondLargestElBetter(arr) {
  let Largest = arr[0];
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (Largest < arr[i]) {
      Largest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (secondLargest < arr[i] && arr[i] !== Largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(FindSecondLargestElBetter([1, 7, 7, 7, 7, 7]));
// // O[2n]

// // 3. Optimal

function FindSecondLargestElOptimal(arr) {
  let Largest = arr[0];
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Largest) {
      secondLargest = Largest;
      Largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== Largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(FindSecondLargestElOptimal([7, 7, 7, 3, 7]));

// // =========================================================================================

// // 3. Check if Array is Sorted

// //  brute

function isSortBrute(arr) {
  let unSortedrray = arr;
  let sortedArr = arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (unSortedrray[i] !== sortedArr[i]) {
      // console.log(unSortedrray[i],sortedArr[i]);
      return false;
    }
  }
  return true;
}
console.log(isSortBrute([1, 2, 6, 4, 5]));

// // Optimal

function isSortOptimal(arr) {
  let result = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      result = false;
    }
  }
  return result;
}
console.log(isSortOptimal([1, 2, 100, 3, 3, 4]));

// //  =====================================================================

// // 4. Remove duplicate in place from sorted array

// // Optimal

function RemoveDuplicatesOptimal(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
console.log(RemoveDuplicatesOptimal([1, 1, 2, 3, 3]));

// =============================================================================

// // 5. left Rotate the array by one place

// // brute

function leftRotateBrute(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      newArr.unshift(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(leftRotateBrute([1, 2, 3, 4, 5]));

// // Optimal

function leftRotateOptimal(arr) {
  let firstEL = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = firstEL;
  return arr;
}
console.log(leftRotateOptimal([1, 2, 3, 4, 5]));

//
// left rotate an array by D places

// 3.  move Zero to Last

// Brute

var moveZeroes = function (nums) {
  let zero = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zero.push(nums[i]);
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.push(...zero);
};

// Optimal

function moveZeroToEnd(arr) {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return "There is no zero in and array";

  for (i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [([arr[i], arr[j]] = [arr[j], arr[i]])];
      j++;
    }
  }
  return arr;
}
console.log(moveZeroToEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));

// Q4. Linear Search

// Optimal

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(LinearSearch([1, 2, 3, 4, 5], 4));

// Q5. Union Of two sorted array
// brute

function UnionOfArrayBrute(arr1, arr2) {
  let concat = arr1.concat(...arr2);
  let result = [];
  for (let i = 0; i < concat.length; i++) {
    if (!result.includes(concat[i])) {
      result.push(concat[i]);
    }
  }
  return result;
}
console.log(UnionOfArrayBrute([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]));

// Optimal

function findUnion(arr1, arr2) {
  let union = []; // Union array

  for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
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
function missingNumber(arr) {
  for (let i = 1; i <= arr.length; i++) {
    let flag = 0;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] === i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return i;
    }
  }
}
console.log(missingNumber([1, 2, 4, 5]));

// better

function missingNumberBetter(a, N) {
  const harsh = new Array(N + 1).fill(0);
  for (let i = 0; i < N - 1; i++) {
    harsh[a[i]]++;
    console.log(a[i]);
  }
  for(let i = 1; i <=N; i++){
    if(harsh[i]===0){
        return i
    }
  }
}
function main() {
  let N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumberBetter(a, N);
  console.log("This Missing Number is:", ans);
}
main();

// Optimal

function missingNumberOptimal(arr){
    let N = arr.length + 1
    let arrSum = 0;
    let IndexSum = N*(N+1)/2;
   for(let i = 0; i< N - 1; i++){
    arrSum += arr[i]
   }
   return IndexSum - arrSum
}
console.log(missingNumberOptimal([1,2,4,5]));

// Optimal

function missingNumberOptimal2(arr){
    let xor1 = 0;
    let xor2 = 0;

    for(let i = 0; i < arr.length; i++){
      console.log();
        xor2 = xor2 ^ arr[i];

        xor1 = xor1 ^ (i + 1)

    }
    xor1 = xor1 ^ arr.length+1;

    return xor1 ^ xor2
}
console.log(missingNumberOptimal2([1,2,4,5]));

// Q9.  find the maximum consecutive one

function maximumConecutiveOne(arr){
  let maxConecutiveOne = 0;
  let counter = 0;
  for(let i = 0; i < arr.length;i++){
    if(arr[i]=== 1 ){
      counter++
    }else if(arr[i] === 0){
      if(maxConecutiveOne < counter){
        maxConecutiveOne = counter
      }
      counter = 0
    }
  }
  return maxConecutiveOne
}
console.log(maximumConecutiveOne([1,1,1,1,1,0,1,1,1,1,1,1,0,1,1]));

// Find the number that appaer once and other number twice

// brute

function numberThatAppaer(arr){
  let result = 0;
  for(let i = 0; i<arr.length;i++){
    let counter = 1;
    for(let j = 0; j <arr.length;j++){
       if(i !== j && arr[i]===arr[j]){
        counter++
      }
    }
    if(counter === 1){
     result = arr[i]
    }
  }
  return result
}
console.log(numberThatAppaer([1,1,2,3,3,4,4,5,5]));



// optimal solution

// Majority Element
console.log("========================================");
function majorityElement(nums){
    let counter = 0;
    let counterTwo = 0;
    let currentElement;
    let Nlength = nums.length/2
    for(let i = 0; i < nums.length; i++){
       
        if(counter == 0){
            counter = 1
            currentElement = nums[i]
            // console.log(currentElement);
        }else if(nums[i] == currentElement){
            counter++
        }else{
            counter--
            i--
        }
    }
    for(let i = 0; i<nums.length;i++){
        if(nums[i] == currentElement){
            counterTwo++
        }
    }
    console.log(currentElement);
    console.log(counter);
    if(counterTwo > Nlength){
        return currentElement
    }else{
        return -1
    }
}
console.log(majorityElement([3,3,4]));




var maxSubArray = function(nums) {
    let maxNum = -Infinity;

    if (nums.length === 1) {
        return nums[0];
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let sum = 0;
            for (let k = i; k < j; k++) {
                sum += nums[k];
            }
            maxNum = Math.max(maxNum, sum);
        }
    }
    return maxNum;
};

console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23


// Rearrange Array Elements by Sign

var rearrangeArray = function(nums) {
    let positive = [];
    let negative = [];
    for(let i = 0; i< nums.length;i++){
        if(nums[i]>0){
            positive.push(nums[i])
        }else{
            negative.push(nums[i])
        }
    }
    let negativeCounter = 0;
    let positiveCounter = 0;

    for(let i = 0; i< nums.length;i++){
        if(i%2==0){
            nums[i] = positive[positiveCounter]
            positiveCounter++
        }else{
            console.log(i)
            nums[i] = negative[negativeCounter]
            negativeCounter++
        }
    }
    return nums
};

// Optimal

var rearrangeArray2 = function(nums) {
  let positive = 0, negative = 1;
  let ans = new Array(nums.length).fill(0)
  for(let i = 0; i < nums.length;i++){
      if(nums[i] < 0){
          ans[negative] = nums[i];
          negative += 2
      }else{
          ans[positive] = nums[i]
          positive +=2
      }
  }
  return ans
};

// Variety-2 

var rearrangeArrayVariety_2 = function(nums) {
  let positive = [];
  let negative = [];
  let secondLoop = 0;
  let ans = [];
  for(let i = 0; i< nums.length;i++){
    if(nums[i] > 0){
      positive.push(nums[i])
    }else{
      negative.push(nums[i])
    }
  }
  if(negative.length > positive.length){
    secondLoop = negative.length -1
  }else{
    secondLoop = positive.length -1
  }
  let positiveInx = 0, negativeInx = 1
  for(let i = 0; i< secondLoop*2;i++){
    if(nums[i] < 0){
      ans[negativeInx] = nums[i];
      negativeInx += 2
  }else{
      ans[positiveInx] = nums[i]
      positiveInx +=2
  }
  }
  for (let i = 0; i < positive.length; i++) {
    if (!ans.includes(positive[i])) {
      ans.push(positive[i]);
    }
  }
  return ans

};
console.log(rearrangeArrayVariety_2([1,-3,-7,3,4]));

// Leaders in an Array | Brute - Optimal

//  Brute

function leadersInAnArray(nums){
  let leadersArr = [];
  for(let i = 0; i< nums.length;i++){
    let leaders = true;
    for(let j = i; j < nums.length; j++){
      if(nums[i] < nums[j]){
        leaders = false;
      }
    }
    if(leaders){
      leadersArr.push(nums[i])
    }
  }
  return leadersArr
}
console.log(leadersInAnArray([10,22,12,3,0,6]));

//  optimal

function leadersInAnArrayOptimal(nums){
  let leadersArr = [];
  let maxNum = Number.NEGATIVE_INFINITY;
  
  for(let i = nums.length - 1; i>=0;i--){
    if(nums[i] > maxNum){
      maxNum = nums[i]
      leadersArr.push(nums[i])
    }
  }

  return leadersArr
}
console.log(leadersInAnArrayOptimal([10,22,12,3,0,6]));


set matrix to zero 

function zeroMatrix(matrix,n,m){

  function markRow(matrix, n, m, i){
    for(let j = 0; j < m; j++){
      if(matrix[i][j] !== 0){
        matrix[i][j] = -1
      }
    }
  }

  function markCol(matrix, n, m, j){
    for(let i = 0; i< n; i++){
      if(matrix[i][j] !== 0){
        matrix[i][j] = -1;
      }
    }
  }


  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      if(matrix[i][j] === 0){
        markRow(matrix, n, m, i);
        markCol(matrix, n, m, j);
      }
    }
  }

  for(let i = 0; i< n; i++){
    for(let j = 0; j< m; j++){
      if(matrix[i][j]=== -1){
        matrix[i][j]= 0
      }
    }
  }

  return matrix
}



const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const n = matrix.length;
const m = matrix[0].length;

const ans = zeroMatrix(matrix, n, m);
console.log(ans);


// // ==============================================


function setZeroes(matrix) {
  let coloum = new Array(matrix.length).fill(0)
  let row = new Array(matrix.length).fill(0)
  for(let i = 0; i< matrix.length;i++ ){
    for(let j = 0; j <matrix[i].length;j++){
      if(matrix[i][j]==0){
        row[i] = 1;
        coloum[j] = 1;
      }
    }
  }

  for(let i = 0; i<matrix.length;i++){
    for(let j = 0; j <matrix[i].length;j++){
      if(coloum[j] || row[i]){
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}
console.log(setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]));