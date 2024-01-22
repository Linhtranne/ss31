function truncate(str, n) {
    if (str.length <= n) {
        return str;
    } else {
        return str.slice(0, n) + " ...";
    }
}
console.log(truncate("Hello world, I’m Peter", 11));
