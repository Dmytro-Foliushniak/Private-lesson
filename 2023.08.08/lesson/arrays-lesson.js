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
console.log(0, [5,6,7,8, ...[1,2,3,4]]);

// 1. Given Arrays [1,2,3,4,5,6]. Insert value 11 in the middle of the array.
const arr1 = [1,2,3,4,5,6];
console.log(1, arr1.toSpliced(Math.round(arr1.length / 2), 0, 11));

/*
   2. Given an Array [1,2,undefined,0,NaN,true,BigInt(10),null,-9,Infinity,{},"-1",""].
      filter this Array in 2 different ways, to has:
      - only numbers inside
      - only objects inside
*/
const arr2 = [1,2,undefined,0,NaN,true,BigInt(10),null,-9,Infinity,{},"-1",""];
console.log(2.1, arr2.filter((v) => (typeof v === 'number' && Number.isFinite(v)) || typeof v === 'bigint'));
console.log(2.2, arr2.filter((v) => typeof v === 'object'));

// 3. Given an Array [1,100,201,34,-12,0,3.12]. Return the Sum of its items
console.log(3, [1, 100, 201, 34, -12, 0, 3.12].reduce((acc, item)=> acc += item, 0));

/*
   4. Given an Array [-3,4,9,123].
      Return new Array that has incremented every item by 1:
      [-3,4,9,123] -> [-2,5,10,124]
*/
console.log(4, [-3,4,9,123].map((item) => ++item));

// 5. Create an Array of 1000 items and fill it with Random Unique Integer values
new Array(1000)
  .fill('') //  O(n)
  .map((v, index) => { // O(n)
    return Number(String(Math.random() - 0.5) + index)
  });
// O(n) -> O(1000)
// O(1) -> const
// O(n) + O(n) => O(2n)

const arr5 = new Array(1000);
for (let i = 0; i < arr5.length; i++) {
  arr5[i] = Number(String(Math.random() - 0.5) + i);
}
// O(n)

/*
   6. Given an Array for example: [2,3,4,7,8,10].
      Return the Array of gaps:
      [2,3,4,7,8,10] -> [5,6,9]
      [-2,3,4] -> [-1,0,1,2]
*/
console.log(6, [2,3,4,7,8,10].reduce((res, currentNumber, index, arr) => {
  const prevNumber = arr[index - 1];
  if (index > 0 && currentNumber - 1 !== prevNumber) {
    for (let gapNumber = prevNumber + 1; gapNumber < currentNumber; gapNumber++) {
      res.push(gapNumber);
    }
  }
  return res;
}, []));
// O(n)

/*
   7. Deduplicate given Array [1,4,3,-1,-3,5,1,9,-1,3,100,4]
      Result: [1,4,3,-1,-3,5,9,100]
*/
console.log(7, [...new Set([1,4,3,-1,-3,5,1,9,-1,3,100,4])]);

/*
    8. Merge two Arrays into one using 3 different variants:
      - just merge: [-100,1,2,3,4,5,7,8,9] + [1,3,-1,4,-10,7,6] -> [-100,1,2,3,4,5,7,8,9,1,3,-1,4,-10,7,6]
      - with deduplication [-100,1,2,3,4,5,7,8,9] + [1,3,-1,4,-10,7,6] -> [-100,1,2,3,4,5,7,8,9,-1,-10,6]
      - with sorting [-100,1,2,3,4,5,7,8,9] + [1,3,-1,4,-10,7,6] -> [-100,-10,-1,1,2,3,4,5,6,7,8,9]
*/


/*
    9. Given a String "hello Young developer".
       Return an array of words ['hello','Young','developer'].
*/

/*
    10. Given a String "  hello  Young  young developer ".
        Return an array of unique words ['hello','Young','developer'].
*/
// item, item.toLowerCase(), cache.includes(item) -> cache.add(item.toLowerCase()) result.push(item)
// 1 hello , hello, {}, [] ->  {hello} [hello]
// 2 Young, young, {hello}, [hello] -> {hello, young} [hello, Young]
// 3 young, young, {hello, young} [hello, Young] -> {hello, young} [hello, Young]
// 4 developer, developer, {hello, young} [hello, Young], -> {hello, young, developer} [hello, Young, developer]
console.log(10, "  hello  Young  young developer ".trim().split(' ')
  .reduce((data, value) => {
    if (!value) {
      return data;
    }

    const cachedValue = value.toLowerCase();
    if (!data.cache.has(cachedValue)) {
      data.cache.add(cachedValue);
      data.res.push(value);
    }

    return data;
  }, { res: [], cache: new Set() } ).res);

/*
    11. Given a String in camel case "someFunctionName".
        Return string in kebab case: "someFunctionName" -> "some-function-name"
*/
// string -> array -> string
console.log(
  11,
  'someFunctionName'.split('').reduce((res, symbol) => {
    const lowerCasedSymbol = symbol.toLowerCase();

    if (symbol === lowerCasedSymbol) {
      res += symbol;
    }

    if (symbol !== lowerCasedSymbol) {
      res += `-${lowerCasedSymbol}`;
    }

    return res;
  }, ''),
);

/*
    12. Given an Array [9,[2,5],[3,[4,[6,[7]],8,[1]]]]
        Return flat Array of Numbers, don't use .flat() method:
        [9,[2,5],[3,[4,[6,[7]],8,[1]]]] -> [9,2,5,3,4,6,7,8,1]
*/
console.log(12,
  [9,[2,5],[3,[4,[6,[7]],8,[1]]]]
    .join(',')
    .split(',')
    .map(item => Number(item)),
);

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
const deepCopy = function (arrArg){
  return JSON.parse(JSON.stringify(arrArg))
}

/*
   14. Given Arrays [0,1,2,3,4,5] and [6,8,1,-1,8,3]
       Return new Array that contains items that present in both arrays:
       [0,8,1,2,3,4,5], [6,8,1,-1,8,3] -> [1,3,8]
*/
const arrWithSomeNumberOne = [0,1,2,3,4,5]
const arrWithSomeNumberTwo = [6,8,1,-1,8,3]

console.log(
  14,
  arrWithSomeNumberOne
    .reduce((acc,item)=>{
        if (arrWithSomeNumberTwo.includes(item)){
          acc.push(item)
        }
        return acc
      } ,[])
    .sort((a,b) => (a-b))
);

/*
   15. Given an Array [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
       Return index of last number 4 -> 12
*/
console.log(15, [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1].lastIndexOf(4));


/*
   16. Given an Array [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
       Return new Array with items from givern Array starts from index 4 and has 5 items
       [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1] -> [8,1,3,6,7]
*/

/*
   17. Given an Array [0,0,0,1,1,1,0,0,0]
        Use method .splice() to get two arrays like:
        [0,0,0,0,0,0] and [1,1,1]
*/
const arr171 = [0,0,0,0,0,1,1,1,0,0,0];
// const arr172 = arr171.splice(3, 3);
const startIndex = arr171.findIndex((v) => v === 1);
const lastIndex = arr171.lastIndexOf(1);
const arr172 = arr171.splice(startIndex, lastIndex);
// console.log()

// [0,0,0,1,0,1,0,1,1,1,0,0,1,1,0];
const result = [1, 2, 3].reduce((res, number) => {
  if (!res[number]) {
    res[number] = [];
  }
  res[number].push(number);
}, []);
// result[0];
// result[1];

// [[0000], [1111], [22222]]
