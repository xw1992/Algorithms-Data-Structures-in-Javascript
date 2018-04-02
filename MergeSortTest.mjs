import {mergeSort} from './MergeSort.mjs';

let testArr = [7, 12, 3, 5, 1, 19, 21, 34, 9];

let testArr3 = [8,7,4,40,0,3,8,3,1,3,7,4,6,2,5];

mergeSort(testArr);
mergeSort(testArr3);

console.log(testArr);
console.log(testArr3);