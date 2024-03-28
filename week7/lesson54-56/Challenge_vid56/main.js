/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let X = 0;
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] == "Stop") {
        break;
    } else X ++;
}
document.write(`<div>We Have ${X} Admins</div><hr>`);
for(let j = 0 ; j < X ; j++){
    let counter=0;
    document.write(`<div>The Admin for Team ${j+1} Is ${myAdmins[j]}`);
    document.write(`<h3>Team Members:</h3>`);
    for(let k = 0 ; k < myEmployees.length ; k++){
        if(myEmployees[k][0]==myAdmins[j][0]){
            counter++;
            document.write(`<p>${counter} - ${myEmployees[k]}</p>`)
        }
    }
    document.write(`</div><hr>`);
}