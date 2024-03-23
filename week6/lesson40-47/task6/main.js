let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs=arr1.concat(arr2).sort().join("").toLowerCase().slice(-arr1.length);
console.log(allArrs); // fxy