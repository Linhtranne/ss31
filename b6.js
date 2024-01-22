function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

// Ví dụ sử dụng hàm
const result1 = fakeFind([1, 2, 3, 4], function (e) {
    return e % 2 === 0;
});
console.log(result1); // 2

const result2 = fakeFind([1, 2, 3, 4], function (e) {
    return e % 2 !== 0;
});
console.log(result2); // 1
//Hàm fakeFind duyệt qua từng phần tử trong mảng và kiểm tra điều kiện trong callback function
//. Nếu tìm thấy phần tử thoả mãn, nó sẽ trả về phần tử đó; ngược lại, nó trả về undefined.