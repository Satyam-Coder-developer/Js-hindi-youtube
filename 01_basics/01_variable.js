const accountId=144523 // const keyword means we cannot change
let accountEmail="satyam@google.com"  //two  ways to declare variable let and var
var accountPassword="12345"
accountCity="Delhi"

accountEmail="satya@123"
accountPassword="12458"
accountCity="Kolkata"
let accountState;

//accountId=1 // not allowed

/*Prefer not to use var
because of issue in block scope and functional scope


*/
console.log(accountId);
console.table([,accountId,accountEmail,accountPassword,accountCity,accountState]);