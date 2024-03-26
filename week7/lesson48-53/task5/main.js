let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j=letter.length;
let i=letter.length;
for(--i;i<friends.length;i++){
    if(friends[i][0]==letter.toUpperCase()){
        continue;
    }
    else{
        console.log(`${j} => ${friends[i]}`);
        j++;
    }
}
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"