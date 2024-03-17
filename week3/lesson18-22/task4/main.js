let points = 10;
//solution 1 without changing the value of the variable

console.log(points+(points+points+points)/points); // 13

console.log(points-(points+points)/points); // 8;

//solution 2 with change the variable value and return the value back

points++;
points++;
++points;
console.log(points);//13

points--;
points--;
points--;
--points;
--points;
console.log(points);//8

++points;
++points;//points = 10 ; again