// console.log(2>0);
// console.log(2==0);
// console.log(2>=0);
// console.log(2<0);
// console.log(2!=0);

console.log("2">1);
console.log("02>1");

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//The reason id that equality check == and Comparisons > < >= <=  work differently.
//Comparison Converts Null to a number,treating it as 0.That's Why (3)null >=0 is true and (1)null>0 is false
console.log(undefined>0);//false
console.log(undefined==0);//false
console.log(undefined>=0);//false
//=== it strictly check all aspect like "2"===2 returns false but in case of == return true
console.log("2"===2);//returns false