let start = 0;
let swappedName = "elZerO";
let result=""

for(let i=start;i<swappedName.length;i++){
    if(swappedName[i].charCodeAt()<=90 && swappedName[i].charCodeAt()>=65){
        result+=swappedName[i].toLowerCase();
    }
    else if(swappedName[i].charCodeAt()<=122 && swappedName[i].charCodeAt()>=97){
        result+=swappedName[i].toUpperCase();
    }
    else{
        result+=swappedName[i]
    }
}
console.log(result);
// Output
"ELzERo"