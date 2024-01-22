function fakeFilter(arr, callback) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  // Test cases
  const result1 = fakeFilter([1, 2, 3, 4], function(e) {
    return e % 2 === 0;
  });
  console.log(result1); // Output: [2, 4]
  
  const result2 = fakeFilter([1, 2, 3, 4], function(e) {
    return e % 2 !== 0;
  });
  console.log(result2); // Output: [1, 3]
  