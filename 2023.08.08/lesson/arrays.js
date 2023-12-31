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

// 1. Given Arrays [1,2,3,4,5,6]. Insert value 11 in the middle of the array.

/*
   2. Given an Array [1,2,undefined,0,NaN,true,BigInt(10),null,-9,Infinity,{},"-1",""].
      filter this Array in 2 different ways, to has:
      - only numbers inside
      - only objects inside
*/

// 3. Given an Array [1,100,201,34,-12,0,3.12]. Return the Sum of its items

/*
   4. Given an Array [-3,4,9,123].
      Return new Array that has incremented every item by 1:
      [-3,4,9,123] -> [-2,5,10,124]
*/

// 5. Create an Array of 1000 items and fill it with Random Unique Integer values

/*
   6. Given an Array for example: [2,3,4,7,8,10].
      Return the Array of gaps:
      [2,3,4,7,8,10] -> [5,6,9]
      [-2,3,4] -> [-1,0,1,2]
*/

/*
   7. Deduplicate given Array [1,4,3,-1,-3,5,1,9,-1,3,100,4]
      Result: [1,4,3,-1,-3,5,9,100]
*/

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

/*
    11. Given a String in camel case "someFunctionName".
        Return string in kebab case: "someFunctionName" -> "some-function-name"
*/

/*
    12. Given an Array [9,[2,5],[3,[4,[6,[7]],8,[1]]]]
        Return flat Array of Numbers, don't use .flat() method:
        [9,[2,5],[3,[4,[6,[7]],8,[1]]]] -> [9,2,5,3,4,6,7,8,1]
*/

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

/*
   14. Given Arrays [0,1,2,3,4,5] and [6,8,1,-1,8,3]
       Return new Array that contains items that present in both arrays:
       [0,8,1,2,3,4,5], [6,8,1,-1,8,3] -> [1,3,8]
*/

/*
   15. Given an Array [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
       Return index of last number 4 -> 12
*/

/*
   16. Given an Array [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1]
       Return new Array with items from given Array starts from index 4 and has 5 items
       [0,4,6,7,8,1,3,6,7,9,1,2,4,5,1] -> [8,1,3,6,7]
*/

/*
   17. Given an Array [0,0,0,1,1,1,0,0,0]
        Use method .splice() to get two arrays like:
        [0,0,0,0,0,0] and [1,1,1]
*/
