function callBackFunctionCall(callbackFxn){

    setTimeout(()=>{console.log("line 1")},3000)
    // console.log("line 1")
    callbackFxn()

}


// loading time for function1 - 3 seconds (DB call)
// loading time for function2 - 2 seconds load image 
// loading time for function3 - 5 seconds load image 


let print = function(){
    console.log("line 2")
}


callBackFunctionCall(print)