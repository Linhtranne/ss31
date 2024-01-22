function largestOfArrs(...arrays) {
    const maxNumbers = [];

    for (const array of arrays) {
        if (Array.isArray(array) && array.length > 0) {
            const maxNumber = Math.max(...array);
            maxNumbers.push(maxNumber);
        } else {
            maxNumbers.push(undefined);
        }l
    }

    return maxNumbers;
}
const array1 =([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]);
const array2 =([1, 2, 3, 4], [5, 1, 2, 9]);
const array3 =([]);

const result = largestOfArrs(array1, array2, array3);
console.log(result);
