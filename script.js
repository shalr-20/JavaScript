//CONSTRUCTOR-------------------------------------------
// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("Constructor created");
//         this.brandName=brand;
//         this.mileageRate=mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner=new ToyotaCar("fortuner", 10);
// console.log(fortuner);



//INHERITANCE---------------------------------------------
// class Person{
//     constructor(){
//         console.log("Enter parent constructor");
//         this.species="homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         console.log("Enter child constructor");
//         super(); //to invoke parent's class constructor
//         this.branchName=branch;
//         console.log("Exit child constructor");
//     }
//     work(){
//         console.log("Solve problems, build something");
//     }
// }

// let user=new Engineer("Chemical engineer");






//asynchronous
// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("hello");
// }, 4000) ;//2s=2000ms
// console.log("3");
// console.log("4");






//CALLBACK
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, ()=>{
//     console.log("getting data2 .....");
//     getData(2, ()=>{
//         console.log("getting data3 .....");
//         getData(3, ()=>{
//             console.log("getting data4 .....");
//             getData(4);
//         });
//     });
// });


















//PROMISES
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         //resolve("success");
//         reject("error");
//     });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res);
// });

// promise.catch((err)=>{
//     console.log("error", err);
// });

// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }
// (async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })();


// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// })

// function asyncFunc(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1...");
// asyncFunc().then((res)=>{
//     console.log("fetching data2...");
//     asyncFunc2().then((res)=>{
//     });
// });

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(200);
//         }, 2000);
//     });
// }

// async function getWD() {
//     await api();
// }
// getWD();
