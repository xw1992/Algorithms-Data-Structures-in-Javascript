let input = [ 0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 8, 8, 40 ];

function countingOccurrences(arr, key){
    const higherBound = findHigherBound(arr, key, 0, arr.length - 1);
    const lowerBound = findLowerBound(arr, key, 0, arr.length - 1);
    return higherBound - lowerBound - 1;
}

function findLowerBound(arr, key, low, high){
    let middle;

    if(low > high) return high;

    middle = Math.floor((high + low)/2);

    if(arr[middle] < key){
        return findLowerBound(arr, key, middle + 1, high);
    }
    else{
        return findLowerBound(arr, key, low, middle - 1);
    }
}

function findHigherBound(arr, key, low, high){
    let middle;

    if(low > high) return low;

    middle = Math.floor((high + low)/2);

    if(arr[middle] > key){
        return findHigherBound(arr, key, low, middle - 1);
    }
    else{
        return findHigherBound(arr, key, middle + 1, high);
    }
}

console.log(countingOccurrences(input, 3));