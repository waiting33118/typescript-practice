let typedMap = new Map<number, string>()

typedMap.set(1, 'hello')

typedMap.get(1)

typedMap.has(1)

let typedSet = new Set<number>()

typedSet.add(123)

typedSet.values()

typedSet.clear()

let unspecifiedTypeMap1 = new Map()

unspecifiedTypeMap1.set(1, 2)

unspecifiedTypeMap1.get(1)

let unspecifiedTypeSet1 = new Set()

unspecifiedTypeSet1.add(1)

unspecifiedTypeSet1.values()

let unspecifiedTypeMap2 = new Map([[123, 'Hello']])

unspecifiedTypeMap2.get(123)

let unspecifiedTypeSet2 = new Set([1, 2, 3, 4, 5])

unspecifiedTypeSet2.add(6)

unspecifiedTypeSet2.values()

// let aPrmoise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('succeeded')
//   }, 3000)
// })

// aPrmoise.then((value) => console.log(value))

// aPrmoise.then()

// const unspecifiedTylePromise = new Promise((resolve, reject) => {})

// unspecifiedTylePromise.then()

// const unspecifiedTylePromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(123)
//   }, 1000)
// })

// const resolvedPromise = Promise.resolve(true)
// const resolvedReject = Promise.reject(true)

// const testPromiseA = new Promise<number>((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1000)
//   }, 1000)
// })

// const testPromiseB = new Promise<number>((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2000)
//   }, 2000)
// })

// const testPromiseC = new Promise<number>((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3000)
//   }, 3000)
// })

// const testPromiseD = new Promise<number>((resolve, reject) => {
//   setTimeout(() => {
//     reject('Error')
//   }, 4000)
// })

// const promiseAllTest = Promise.all([
//   testPromiseA,
//   testPromiseB,
//   testPromiseC,
//   testPromiseD
// ])
//   .then(([a, b, c]) => {
//     console.log('a', a)
//     console.log('b', b)
//     console.log('c', c)
//   })
//   .catch((error) => console.log(error))

function delay<T>(milliSeconds: number, value: T): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, milliSeconds)
  })
}

const promiseRaceTest = Promise.race([
  delay<string>(1000, 'string'),
  delay<number>(2000, 123),
  delay<boolean>(3000, true)
])

promiseRaceTest.then((result) => console.log(result))
