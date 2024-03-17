/*
    Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
    Result::100
    [++a] [+] [+] [b++] [+] [+] [c++] [-] [+] [a++] 
    [++a]
    - Value:11
    - Explain:prefix
    [+]
    - Explain:add operator
    [+]
    - Explain:unary plus
    [b++] after plus operator
    - Value:20
    - Explian:postfix
    [+]
    - Explain:add operator
    [+]
    - Explain:unary plus   
    [c++]
    - Value:80
    - Explian:postfix
    [-]
    - Explain:sub operator
    [+] 
    - Explain:unary plus   
    [a++]
    - Value:11
    - Explain:postfix
    */
/*
    a=12
    b=21
    c=81
   */
console.log(++a + -b + +c++ - -a++ + +a);
/*  13+-21+81--13+14
    Result::100
    [++a] [+]  [-] [b] [+] [+] [c++] [-] [-] [a++] [+] [+] [a] 
    [++a]
    - Value:13
    - Explain:prefix
    [+]
    - Explain:add operator
    [-]
    - Explain:unary negation operator
    [b] after negation operator
    - Value:-21
    - Explian:negation
    [+]
    - Explain:add operator
    [+]
    - Explain:unary plus   
    [c++]
    - Value:81
    - Explian:postfix
    [-]
    - Explain:sub operator
    [-] 
    - Explain:unary negation operator  
    [a++]
    - Value:13
    - Explain:postfix
    [+]
    - Explain:add operator
    [+] 
    - Explain:unary plus operator 
    [a]
    - Value:14
    - Explain:after postfix for a
    */
/*
    a=14
    b=21
    c=82
     */
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*  81+21+13*21-22*13+12-1
    Result::100
    [--c] [+]  [+] [b] [+] [--a] [*] [+] [b++] [-] [+] [b] [*] [a] [+] [--a] [-] [+] [true] 
    [--c]
    - Value:81
    - Explain:prefix
    [+]
    - Explain:add operator
    [+]
    - Explain:unary plus operator
    [b] after plus operator
    - Value:21
    - Explian:after plus operator
    [+]
    - Explain:add operator
    [--a]
    - Value:13
    - Explian:prefix
    [*]
    - Explain:multiply operator
    [+] 
    - Explain:unary plus operator  
    [b++]
    - Value:21
    - Explain:postfix
    [-] 
    - Explain:sub operator
    [+]
    - Explain:unary plus operator 
    [b] 
    - Value:22
    - Explain:after postfix for b
    [*]
    - Explain:multiply operator
    [a] 
    - Value:13
    - Explian:number
    [+]
    - Explain:add operator
    [--a]
    - Value:12
    - Explian:prefix
    [-] 
    - Explain:sub operator
    [+] 
    - Explain:unary plus operator 
    [true]
    - Value:1
    - Explian:after plus operator
    */

/*
    Challenge 2
    */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++e * ++g + ++f + -d); // 173
