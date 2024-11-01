function fibs(n){
    let arr = [0];

    if(n === 1){
        return arr;
    }
    arr.push(1);
    if(n === 2){
        return arr;
    }
    for(let i = 1; i < n - 1; i++){
        arr.push(arr[i] + arr[i-1]);
    }   
    return arr;
}

function fibsRec(n, arr = []){
    if (n === 1){
        if(!arr.length){
            return [0];
        }
        arr.push(1);
        return 1;
    }
    if (n === 0){
        arr.push(0);
        return 0;
    }
    arr.push(arr[n-1] + arr[n-2]);
    return(fibs(n, arr));
}

function mergeSort(array) {
    if(array.length == 1){
        return array;
    }

    let leftLength = Math.trunc(array.length / 2);
    let rightLength = array.length - leftLength;

    let leftArray = mergeSort(array.slice(0, leftLength));
    let rightArray = mergeSort(array.slice(leftLength, array.length));

    let lIndex = 0;
    let rIndex = 0;

    let mergedArray = [];

    while(lIndex < leftLength && rIndex < rightLength){
        if(leftArray[lIndex] <= rightArray[rIndex]){
            mergedArray.push(leftArray[lIndex]);
            lIndex += 1;
        }
        else{
            mergedArray.push(rightArray[rIndex]);
            rIndex += 1;
        }
    }
    
    while(lIndex < leftLength){
        mergedArray.push(leftArray[lIndex]);
        lIndex += 1;
    }
    while(rIndex < rightLength){
        mergedArray.push(rightArray[rIndex]);
        rIndex += 1;
    }

    return mergedArray;
}


