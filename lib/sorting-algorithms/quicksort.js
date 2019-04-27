const {
    performance
} = require('perf_hooks');

function pivot(arr, start, end) {

    if(end - start <= 2) {
        return arr;
    }

    const swap = (arr,from, to) => {
        [arr[from],arr[to]] = [arr[to],arr[from]];
    };

    const p = arr[start];
    let swapIdx = start;

    for(var i = start + 1; i < end; i++) {
        if(p > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start, swapIdx);

    pivot(arr, start, swapIdx + 1);
    pivot(arr, swapIdx + 1, end-1);

    return swapIdx;
}

function quickSort(arr) {

    if(arr.length <= 1) return arr;

    let p = pivot(arr,0,arr.length - 1);

    return arr;
}

function pivot2(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start to the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort2(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot2(arr, left, right) //3
        //left
        quickSort2(arr,left,pivotIndex-1);
        //right
        quickSort2(arr,pivotIndex+1,right);
    }
    return arr;
}

arr = Array.apply(null,{length:100000}).map(e => Math.random());
arr2 = Array.apply(null,{length:100000}).map(e => Math.random());


start = performance.now();
console.log(quickSort(arr));
end = performance.now();
console.log('Time: ', (end - start)/1000);

start = performance.now();
console.log(quickSort2(arr2));
end = performance.now();
console.log('Time 2: ', (end - start)/1000);