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


//++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++
//There are two types of memory-Stack,heap
//In Primitive type Stack memory is used and heap is used for non-prmitive type

let myOriginalName="Satyam";
let anotherName=myOriginalName
anotherName="Satya"
console.log(myOriginalName)
console.log(anotherName)

let userone={
    email:"user@email.com",
    upi:"user@ybl",
}
let userTwo=userone;
userTwo.email="satyam@google.com"
console.log(userone.email);
console.log(userTwo.email);
