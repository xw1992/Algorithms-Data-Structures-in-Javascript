function writeLine(val) {
    console.log(val.toFixed(1));
}

const smallerThan = (a, b) => a - b < 0;
const greaterThan = (a, b) => a - b > 0;

function main(input) {
    let smallerHalf = [];
    let greaterHalf = [];
    let firstVal;
    for (var a_i = 0; a_i < input.length; a_i++) {
        let curVal = input[a_i];

        if (a_i === 0) {
            firstVal = curVal;
            writeLine(curVal);
        } else if (a_i === 1) {
            smallerHalf.push(Math.min(curVal, firstVal));
            greaterHalf.push(Math.max(curVal, firstVal));
            writeLine((smallerHalf[0] + greaterHalf[0]) / 2);
        } else {
            if (curVal < smallerHalf[0]) {
                smallerHalf.push(curVal);
                heapifyUp(smallerHalf, smallerHalf.length - 1, greaterThan);
            } 
            else {
                greaterHalf.push(curVal);
                heapifyUp(greaterHalf, greaterHalf.length - 1, smallerThan);
            }

            if(smallerHalf.length > greaterHalf.length + 1){
                swap(smallerHalf, 0 , smallerHalf.length - 1);
                let exchange = smallerHalf.pop();
                heapifyDown(smallerHalf, 0, smallerThan);
                greaterHalf.push(exchange);
                heapifyUp(greaterHalf, greaterHalf.length - 1, smallerThan);
            }

            if(greaterHalf.length > smallerHalf.length + 1){
                swap(greaterHalf, 0 , greaterHalf.length - 1);
                let exchange = greaterHalf.pop();
                heapifyDown(greaterHalf, 0, greaterThan);
                smallerHalf.push(exchange);
                heapifyUp(smallerHalf, smallerHalf.length - 1, greaterThan);
            }

            if (smallerHalf.length != greaterHalf.length) {
                writeLine(smallerHalf.length > greaterHalf.length ? smallerHalf[0] : greaterHalf[0]);
            } else {
                writeLine((smallerHalf[0] + greaterHalf[0]) / 2);
            }
        }
    }
}

function heapifyDown(arr, index, heapifyDownCondition) {
    const leftChild = i => i * 2 + 1;
    const rightChild = i => i * 2 + 2;
    while ((leftChild(index) < arr.length && heapifyDownCondition(arr[index], arr[leftChild(index)])) ||
        (rightChild(index) < arr.length && heapifyDownCondition(arr[index], arr[rightChild(index)]))) {
        if (rightChild(index) < arr.length) {
            let selectChildIndex = heapifyDownCondition(arr[rightChild(index)], arr[leftChild(index)]) ? leftChild(index) : rightChild(index);
            swap(arr, index, selectChildIndex);
            index = selectChildIndex;
        } else {
            swap(arr, index, leftChild(index));
            index = leftChild(index);
        }
    }
}

function heapifyUp(arr, index, heapifyUpCondition) {
    const parent = i => Math.floor((i - 1) / 2);
    while (parent(index) != index && heapifyUpCondition(arr[index], arr[parent(index)])) {
        swap(arr, index, parent(index));
        index = parent(index);
    }
}

function swap(arr, s, t) {
    let temp = arr[s];
    arr[s] = arr[t];
    arr[t] = temp;
}

let input = [
    94455,
    20555,
    20535,
    53125,
    73634,
    148,
    63772,
    17738,
    62995,
    13401,
    95912,
    13449,
    92211,
    17073,
    69230,
    22016,
    22120,
    78563,
    16571,
    1817,
    41510];

main(input);