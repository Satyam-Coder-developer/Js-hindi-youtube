//Dates
let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(typeof myDate);

let myCreatedDate=new Date(2026,0,10);
console.log(myCreatedDate.toDateString());

//let createDate=new Date(2026,0,10,7,3);
//let createDate=new Date(2026,0,10,7,3);
let createDate=new Date("01-10-2026");
// console.log(createDate.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
