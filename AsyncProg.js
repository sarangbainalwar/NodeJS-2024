// console.log('start execution');

// setTimeout(() => {
//     console.log('logic execution');
// },2000)

// console.log('complete execution');

let a=10;
let b=20;


let waitingdata = new Promise((resolve,reject) => {
    setTimeout(() => {
       resolve(30);        
    },2000)
    
})

waitingdata.then((data) => {
    b=data
console.log(a+b);
}).catch((err) => {
    console.log(err);
})