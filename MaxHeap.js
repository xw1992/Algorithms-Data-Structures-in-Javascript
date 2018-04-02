class MaxHeap{
    constructor(arr){
        this.arr = arr;
        this.buildMaxHeap();
    }

    buildMaxHeap(){
        for(let i = Math.floor(this.arr.length/2) -1; i >= 0; i--)
            this.heapifyDown(i);
    }

    add(val){
        this.arr.push(val);
        this.heapifyUp(this.arr.length - 1);
    }
    
    pop(){
        this.swap(0, this.arr.length - 1);
        const max = this.arr.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(index){
        const leftChild = i => i * 2 + 1;
        const rightChild = i => i * 2 + 2;
        while((leftChild(index) < this.arr.length && this.arr[leftChild(index)] > this.arr[index]) || 
        (rightChild(index) < this.arr.length && this.arr[rightChild(index)] > this.arr[index])){
            if(rightChild(index) < this.arr.length){
                let biggerChildIndex = this.arr[leftChild(index)] > this.arr[rightChild(index)]? leftChild(index) : rightChild(index); 
                this.swap(index, biggerChildIndex);
                index = biggerChildIndex;
            }
            else{
                this.swap(index, leftChild(index));
                index = leftChild(index);
            }
        }
    }

    heapifyUp(index){
        const parent = i => Math.floor((i-1)/2);
        while(parent(index) != index && this.arr[parent(index)] < this.arr[index]){
            this.swap(index, parent(index));
            index = parent(index);
        }
    }

    swap(s, t){
        let temp = this.arr[s];
        this.arr[s] = this.arr[t];
        this.arr[t] = temp;
    }
}

let input = [4, 10, 3, 5, 1];

const maxHeap = new MaxHeap(input);

console.log(maxHeap.arr);

let max = maxHeap.pop();

console.log("pop: " + max);

console.log(maxHeap.arr);

let newElem = 20;

console.log("add: " + newElem);

maxHeap.add(newElem);

console.log(maxHeap.arr);

newElem = 12;

console.log("add: " + newElem);

maxHeap.add(newElem);

console.log(maxHeap.arr);

newElem = 8;

console.log("add: " + newElem);

maxHeap.add(newElem);

console.log(maxHeap.arr);

max = maxHeap.pop();

console.log("pop: " + max);

console.log(maxHeap.arr);