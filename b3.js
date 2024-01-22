function confirmEnding(str, target) {
    const targetLength = target.length;
    const ending = str.slice(-targetLength);

    return ending === target;
}
console.log(confirmEnding("Hello world", "world")); // true
console.log(confirmEnding("Hello world", "orld")); // true
console.log(confirmEnding("Hello world", "world2")); // false
