const binarySearch = (arr, num, firstLast) => {
    const len = arr.length;
    let low = 0;
    let high = len - 1;
    let result = -1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (num === arr[mid]) {
            result = mid;
            firstLast ? low = mid + 1 : high = mid - 1 ;
        } else if (num < arr[mid]){
            high =  mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return result;

}

let first = binarySearch([0, 0, 0, 0, 2, 2, 2, 2, 4, 4],  2, 0);
let second = binarySearch([0, 0, 0, 0, 2, 2, 2, 2, 4, 4],  2, 1);
console.log(first, second);
