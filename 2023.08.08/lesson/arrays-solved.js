/* eslint-disable max-len */
/*
  Arrays tasks

  Materials:
  - https://uk.javascript.info/array-methods
  - https://uk.javascript.info/object-copy
  - https://www.youtube.com/watch?v=WJUk3GXarMw
*/

/*
   0. Given two Arrays [1,2,3,4], [5,6,7,8]
      Insert second Array to the begining of the first
      [1,2,3,4], [5,6,7,8] -> [5,6,7,8,1,2,3,4]
*/

const firstCollectNumber = [1,2,3,4];
const secondCollectNumber = [5,6,7,8];
const resultCollect = secondCollectNumber.concat(firstCollectNumber)
console.log(resultCollect)

// 1. Given Arrays [1,2,3,4,5,6]. Insert value 11 in the middle of the array.

const arr = [1,2,3,4,5,6];
arr.splice(3,0,11)
console.log(arr)

/*
   2. Given an Array [1,2,undefined,0,NaN,true,BigInt(10),null,-9,Infinity,{},"-1",""].
      filter this Array in 2 different ways, to has:
      - only numbers inside
      - only objects inside
*/

const mixArray = [1,2,undefined,0,NaN,true,BigInt(10),null,-9,Infinity,{},"-1",""]
const numberArray = mixArray.filter(item => typeof item === 'number')
console.log(numberArray)
const objectArray = mixArray.filter(item => typeof item === 'object')
console.log(objectArray)

// 3. Given an Array [1,100,201,34,-12,0,3.12]. Return the Sum of its items

const numbersArray = [1,100,201,34,-12,0,3.12];
const sum = numbersArray.reduce((acc, item)=> acc+=item, 0);
console.log(sum);

/*
   4. Given an Array [-3,4,9,123].
      Return new Array that has incremented every item by 1:
      [-3,4,9,123] -> [-2,5,10,124]
*/

const hasArray = [-3,4,9,123]
const increaseItemOfArray = hasArray.map((item)=> ++item)
console.log(increaseItemOfArray)

// 5. Create an Array of 1000 items and fill it with Random Unique Integer values
const createArray = (length) => Array.from( {length: length}, (value, key) => key );

const shuffle = (array) => array.sort( (a, b) => Math.random() - 0.5 );

// console.log(createArray(20))

console.log(5, shuffle(createArray(1000)));


/*
   6. Given an Array for example: [2,3,4,7,8,10].
      Return the Array of gaps:
      [2,3,4,7,8,10] -> [5,6,9]
      [-2,3,4] -> [-1,0,1,2]
*/

const arrayWithoutSomeNumbers = [2,3,4,7,8,10]

let arrayWithSomeNumbers = []


for (let i = Math.min(...arrayWithoutSomeNumbers); i < Math.max(...arrayWithoutSomeNumbers); i++){
  if (!arrayWithoutSomeNumbers.includes(i)){
    arrayWithSomeNumbers.push(i)
  }
}

console.log(arrayWithSomeNumbers);
/*
   7. Deduplicate given Array [1,4,3,-1,-3,5,1,9,-1,3,100,4]
      Result: [1,4,3,-1,-3,5,9,100]
*/

const duplicateArray = [1,4,3,-1,-3,5,1,9,-1,3,100,4];

const deDuplicateArray = duplicateArray.filter((item,index) => duplicateArray.indexOf(item) === index);
console.log(deDuplicateArray);

/*
    8. Merge two Arrays into one using 3 different variants:
      - just merge: [-100,1,2,3,4,5,7,8,9] + [1,3,-1,4,-10,7,6] -> [-100,1,2,3,4,5,7,8,9,1,3,-1,4,-10,7,6]
      - with deduplication [-100,1,2,3,4,5,7,8,9] + [1,3,-1,4,-10,7,6] -> [-100,1,2,3,4,5,7,8,9,-1,-10,6]
      - with sorting [-100,1,2,3,4,5,7,8,9] + [1,3,-1,4,-10,7,6] -> [-100,-10,-1,1,2,3,4,5,6,7,8,9]
 */


const firstArrayForMerge = [-100,1,2,3,4,5,7,8,9]
const secondArrayForMerge = [1,3,-1,4,-10,7,6]

const totalArrayMerge = firstArrayForMerge.concat(secondArrayForMerge)
console.log(totalArrayMerge)

const arrWithoutDuplicats = firstArrayForMerge.concat(secondArrayForMerge).filter((item,index)=> totalArrayMerge.indexOf(item) === index)
console.log(arrWithoutDuplicats)

const concatSortArr = firstArrayForMerge.concat(secondArrayForMerge).filter((item,index)=> totalArrayMerge.indexOf(item) === index).sort((a,b) => a-b)
console.log(concatSortArr)

/*
    9. Given a String "hello Young developer".
       Return an array of words ['hello','Young','developer'].
*/

const hello = 'hello Young developer'

const helloArr = hello.split(' ')

console.log(helloArr)

/*
    10. Given a String "  hello  Young  young developer ".
        Return an array of unique words ['hello','Young','developer'].
*/

const spaceHello = '  hello  Young  young developer ';
const arrHello = spaceHello.split(' ').filter((item,index)=> item !== '' & item !== 'young' )

console.log(10, arrHello)


/*
    11. Given a String in camel case "someFunctionName".
        Return string in kebab case: "someFunctionName" -> "some-function-name"
*/

const camelCaseStr = 'someFunctionName'

const kebabStr = camelCaseStr.split('').map((item) => {
  if (/[A-Z]/.test(item)) {
    return `-${item.toLowerCase()}`
  }
  return item
})
  .join('')

console.log(kebabStr)

/*
    12. Given an Array [9,[2,5],[3,[4,[6,[7]],8,[1]]]]
        Return flat Array of Numbers, don't use .flat() method:
        [9,[2,5],[3,[4,[6,[7]],8,[1]]]] -> [9,2,5,3,4,6,7,8,1]
*/

const enclosedArr = [9,[2,5],[3,[4,[6,[7]],8,[1]]]]

let joinArr = enclosedArr.join(',').split(',').map(item => Number(item))

console.log(12, joinArr)


/*
    13. Given an Array
        const arr1 = [3,{a:1},[2],null,NaN,Infinity,undefined];
        Create function deepCopy for copy arr1 into arr2:
        const arr2 = deepCopy(arr1);
        arr2[1].a = 2;
        arr2[2][0] = 3;

        arr2[1].a // 2
        arr2[2][0] // 3

        arr1[1].a // 1
        arr1[2][0] // 2
*/

const arr1 = [3,{a:1},[2],null,NaN,Infinity,undefined]

const deepCopy = function (arrArg){
  let copyArr = []
  return copyArr = JSON.parse(JSON.stringify(arrArg))
}

const arr2 = deepCopy(arr1)

arr2[1].a = 2
arr2[2][0] = 3;

console.log(arr2)
console.log(arr1)

/*
   14. Given Arrays [0,1,2,3,4,5] and [6,8,1,-1,8,3]
       Return new Array that contains items that present in both arrays:
       [0,8,1,2,3,4,5], [6,8,1,-1,8,3] -> [1,3,8]
*/

const arrWithSomeNumberOne = [0,1,2,3,4,5]
const arrWithSomeNumberTwo = [6,8,1,-1,8,3]

const test =  arrWithSomeNumberOne.reduce((acc,item)=>{
  if (arrWithSomeNumberTwo.includes(item)){
    acc.push(item)
  }
  return acc
} ,[]).sort((a,b)=> (a-b))

console.log(test)


/*
   15. Given an Array [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
       Return index of last number 4 -> 12
*/

const arrayIndexOf = [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
console.log(15, arrayIndexOf.indexOf(4))

/*
   16. Given an Array [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
       Return index of last number 4 -> 12
*/
const arrayLastIndexOf = [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
console.log(arrayIndexOf.lastIndexOf(4))
/*
   17. Given an Array [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
       Return new Array with items from givern Array starts from index 4 and has 5 items
       [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1] -> [8,1,3,6,7]
*/

const finallyArray = [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
const spliceArray = finallyArray.splice(4, 5)
// const spliceArray = finallyArray.slice(4, 4 + 5)
console.log(17, spliceArray, finallyArray)

/*
   18. Given an Array [0,0,0,1,1,1,0,0,0]
        Use method .splice() to get two arrays like:
        [0,0,0,0,0,0] and [1,1,1]
*/

const lastArray = [0,0,0,1,1,1,0,0,0]
let zeroArray = [];
let onceArray = []
lastArray.sort((a,b)=>a-b).forEach((item,index,array)=>{
  if (item === 0){
    zeroArray = array.splice(index, array.filter(item => item === 0).length)
  }

  if (item !==0) {
    onceArray = array
  }
})
console.log(zeroArray)
console.log(onceArray)
