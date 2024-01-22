function myCustomFilter(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

function myCustomReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}
const filterResult1 = myCustomFilter([1, 2, 3, 4], function(e) {
    return e % 2 === 0;
});
console.log(filterResult1); // Output: [2, 4]

const filterResult2 = myCustomFilter([1, 2, 3, 4], function(e) {
    return e % 2 !== 0;
});
console.log(filterResult2); // Output: [1, 3]
let arrayToReduce = [1, 2, 3, 4, 5];
let reduceResult = myCustomReduce(arrayToReduce, function(acc, curr) {
    return acc + curr;
}, 0);
console.log(reduceResult); // Output: 15
