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
