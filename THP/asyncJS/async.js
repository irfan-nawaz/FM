function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("Me first!");

// OUTPUT:
// Me first!
// Hello

// setTimeOut is a function when we call it, it will declare that function in the browser timer and will go to next code and only after executing all the rest of the code, we will come back to the setTimeout check timer and if time is matched then call the function.

// when a browser function like setTimeout is completed it will be pushed into the callback queue(ready to run) and there will be an connection between call stack and callback queue through event loop
// so event loop will be runnig between call stack and callback queue and when all the global javascript code is executed and call stack is empty event loop will push the functions present in the callback queue to the call stack to run them finally.

