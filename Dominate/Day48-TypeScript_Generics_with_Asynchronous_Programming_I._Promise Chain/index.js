"use strict";
// function sendRequest(success: Tsuccess, error: Terror) {
//   console.time()
//   if (Math.random() > 0.9) {
//     error('500 internal server error')
//     return
//   }
//   const time = Math.random() * 5000
//   setTimeout(() => {
//     success('200 ok')
//   }, time)
// }
// sendRequest(
//   function (result) {
//     console.log(result)
//     console.timeEnd()
//     sendRequest(
//       function (result) {
//         console.log(result)
//         console.timeEnd()
//       },
//       function (message) {
//         console.log(message)
//       }
//     )
//   },
//   function (message) {
//     console.log(message)
//   }
// )
function sendRequestAsPromise() {
    return new Promise(function (resolve, reject) {
        if (Math.random() > 0.9) {
            reject('500');
            return;
        }
        var time = Math.random() * 5000;
        setTimeout(function () {
            resolve('200');
        }, time);
    });
}
console.time('1');
console.time('2');
// sendRequestAsPromise()
//   .then((result) => {
//     console.log(result)
//     console.timeEnd('1')
//     sendRequestAsPromise()
//       .then((result) => {
//         console.log(result)
//         console.timeEnd('2')
//       })
//       .catch((error) => console.log(error))
//   })
//   .catch((error) => console.log(error))
sendRequestAsPromise()
    .then(function (result) {
    console.log(result);
    console.timeEnd('1');
    return sendRequestAsPromise();
})
    .then(function (result) {
    console.log(result);
    console.timeEnd('2');
})
    .catch(function (err) { return console.log(err); });
