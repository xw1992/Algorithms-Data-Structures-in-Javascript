function sort(arr){
    quicksort(arr, 0, arr.length - 1);
}

function quicksort(arr, low, high){
    if(low < high){
        let partitionIndex = partition(arr, low, high);
        quicksort(arr, low, partitionIndex);
        quicksort(arr, partitionIndex + 1, high);
    }
}

function partition(arr, low, high){
    let pivot = arr[high];

    let [lowIndex, highIndex] = [low, high - 1];

    while(lowIndex < highIndex){
        while(arr[lowIndex] <= pivot && lowIndex < high - 1){
            lowIndex += 1;
        }
        while(arr[highIndex] > pivot && highIndex > low){
            highIndex -= 1;
        }
        if(lowIndex < highIndex){
            swap(arr, lowIndex, highIndex);
        }
    }
    if(arr[lowIndex] > pivot){
        swap(arr, lowIndex, high);
    }

    return Math.min(lowIndex, highIndex);
}

function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

//let testArr1 = [1, 9, 12, 3, 5, 7, 19, 21, 34, 9];
//let testArr2 = [10, 80, 30, 90, 40, 50, 70];
let testArr3 = [8,7,4,40,0,3,8,3,1,3,7,4,6,2,5];

//sort(testArr1);
//sort(testArr2);
sort(testArr3);

//console.log(testArr1);
//console.log(testArr2);
console.log(testArr3);