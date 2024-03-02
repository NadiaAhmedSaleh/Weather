


/* Promise */

//you can only use then if the function is returning promise or variable carrying promise
/*
function tmam (){

    console.log("tamaam")
}
                                    //must    //optional
let hamada = new Promise (function (resolved , rejected){

    console.log("hello");   // this is the logic of function hamada
    resolved();             // lazm tst2bl function tmam in another function w t7otha f el paramter of promise function
     rejected();            //if there's an error call the rejected function but only one of them will work

})                        
hamada.then(tmam);          //calling hamada then tmam

//hamada.then(tmam).catch()       //if error the catch will happen

*/
///////////////////////////////////////////////

/*  Async - Await */

//the new promise and then

//once you write async to a function this function will automatically return promise
// awaite == then
//you have to write await inside async function

function hambozo(){

    console.log("noooooo")
}

function tmam(){
    console.log("yess")
}

async function getData(){

    await tmam();
     
    hambozo();
}

getData();