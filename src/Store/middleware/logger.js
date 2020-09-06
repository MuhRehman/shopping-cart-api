const logger = (store) => (next) => (action) => {
next(action); 
};

export default logger;

///example logger and authorization middle ware...

///// kaise convert kia jaye  ...... multiple argument wale function ko //// single argumne wale funciton mey.

//  myFun = (a) => {
// return  (function (b) {
//     return(function (c) {
//         return  a+b+c
//     })
//   })
//   };

// myFun(8)(2)(3)
