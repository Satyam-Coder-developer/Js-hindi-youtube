//Primitive:-7types:-call by value
//Null,Number,String,Symbol,Undefined,Boolean,Bigint
const score=100;
const scorevalue=100.3;
const isLoggedin=false;
const outsideTemp=null;
let useremail;
const id=Symbol('123') 
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNumber=2557899n;//Big int

//Reference Type-Non-Primitive
//Array,Object,Function
const heroes=["Shaktiman","Doga","Naagraj"];//Array
let myObj={
    name:"Satyam",   //object
    age:22,
} 

//Function declaration
const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);