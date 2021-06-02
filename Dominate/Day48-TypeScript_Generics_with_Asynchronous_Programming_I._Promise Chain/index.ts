type Tsuccess = {
  (result: string): void
}

type Terror = {
  (message: string): void
}

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

function sendRequestAsPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.9) {
      reject('500')
      return
    }

    const time = Math.random() * 5000
    setTimeout(() => {
      resolve('200')
    }, time)
  })
}

console.time('1')
console.time('2')

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
  .then((result) => {
    console.log(result)
    console.timeEnd('1')

    return sendRequestAsPromise()
  })
  .then((result) => {
    console.log(result)
    console.timeEnd('2')
  })
  .catch((err) => console.log(err))
