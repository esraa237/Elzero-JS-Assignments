let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.splice(num)
console.log((myFriends)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 3
++num
console.log(myFriends.slice(-num,--num)); // ["Ahmed", "Elham", "Osama"];
