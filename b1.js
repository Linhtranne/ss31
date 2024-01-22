function findLongestWordLength(str) {
    const words = str.split(/\s+/);
    let maxLength = 0;
    let longestWords = [];
    for (const word of words) {
        const currentLength = word.length;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            longestWords = [word];
        } else if (currentLength === maxLength) {
            longestWords.push(word);
        }
    }
    if (longestWords.length > 0) {
        const longestWord = longestWords[0];
        const result = {
            word: longestWord,
            length: maxLength
        };
        return result;
    } else {
        return "Không tìm thấy từ trong chuỗi.";
    }
}
const inputString = ("The quick brown fox jumped over the lazy dog");
const result = findLongestWordLength(inputString);
console.log(result);
