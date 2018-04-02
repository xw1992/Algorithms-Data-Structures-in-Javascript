function binarySearch(arr, left, right, target){
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}

let array = [0, 2, 3, 4, 10, 40];

let index = binarySearch(array, 0, array.length - 1, 2);
console.log(index);