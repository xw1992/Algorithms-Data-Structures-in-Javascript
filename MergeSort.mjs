export function mergeSort(arr){
    sort(arr, 0, arr.length - 1);
}

function sort(arr, l, r){
    if(l < r){
        let m = Math.floor((l+r)/2);
        sort(arr, l, m);
        sort(arr, m+1, r);

        merge(arr, l, m, r);
    }
}

function merge(arr, l, m, r){
    let intermeidate = [];
    let lp = l, rp = m + 1, le = m, re = r;
    let lv, rv;

    while(lp <= le || rp <= re){
        lv = lp <= le? arr[lp] : Number.POSITIVE_INFINITY;
        rv = rp <= re? arr[rp] : Number.POSITIVE_INFINITY;
        if(lv <= rv){
            intermeidate.push(lv);
            lp += 1;
        }
        else{
            intermeidate.push(rv);
            rp += 1;
        }
    }
    intermeidate.forEach((ele, index) => arr[index + l] = ele);
}