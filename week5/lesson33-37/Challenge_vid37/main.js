/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
//Solution
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");


  //Question2
let st = "Elzero Web School";

// W Position May Change
if (st.toLowerCase()[(st.toLowerCase().search("w"))] === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof st ===typeof "number") {
  console.log("Good");
}

if ((st.split(" ",1)+st.split(" ",1)) === "ElzeroElzero") {
  console.log("Good");
}
