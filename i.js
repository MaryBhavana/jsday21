console.log("working....");

/* Async/Await - They are used to handle the promises more efficiently. The word async is
used before a function to make sure that it returns a promise. So, we therefore use async
before the function to return a promise instead of some values/function.

Await is used to wait for the result that is supposed to be returned from the promise.
So, we can use the keyword await when calling the function which returns a promise.

Await is always used with async keyword only can never be alone.
Async/Await is also used for making the API calls.*/


const fn1 = ()=>{
    return "I am function one";
}
const fn3 = ()=>{
    return "I am function three";
}
const fn2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return "I am function two";  
        }, 3000);
        
     
    })
}
    
const callFns = async () =>{
    let res1 = fn1();
    console.log(res1);//i m fn1

    let res2 = await fn2 ();
    console.log(res2);//undefined

    let res3 = fn3();
    console.log(res3); //I m fn 3
}
 callFns();

//-------------------------------------------------------------
async function tryingPromises(){
    console.log("I am inside the function");
    const response = await fetch('https://api.github.com/users');
    console.log("Before resonse received");

    const users = await response.json();

    console.log("Users are resolved");

    return users;
}

console.log("before calling function");
let d = tryingPromises();
console.log("after calling function");
console.log(d);
d.then((r)=>
{
    console.log("response received",r);
    r.map((item)=>
    {
        console.log(item.id,item.login);
        // console.log(item.login);
    })
})

console.log("end of the program");

