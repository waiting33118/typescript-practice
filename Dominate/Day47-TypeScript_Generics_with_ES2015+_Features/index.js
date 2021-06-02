"use strict";
var typedMap = new Map();
typedMap.set(1, 'hello');
typedMap.get(1);
typedMap.has(1);
var typedSet = new Set();
typedSet.add(123);
typedSet.values();
typedSet.clear();
var unspecifiedTypeMap1 = new Map();
unspecifiedTypeMap1.set(1, 2);
unspecifiedTypeMap1.get(1);
var unspecifiedTypeSet1 = new Set();
unspecifiedTypeSet1.add(1);
unspecifiedTypeSet1.values();
var unspecifiedTypeMap2 = new Map([[123, 'Hello']]);
unspecifiedTypeMap2.get(123);
var unspecifiedTypeSet2 = new Set([1, 2, 3, 4, 5]);
unspecifiedTypeSet2.add(6);
unspecifiedTypeSet2.values();
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
function delay(milliSeconds, value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(value);
        }, milliSeconds);
    });
}
var promiseRaceTest = Promise.race([
    delay(1000, 'string'),
    delay(2000, 123),
    delay(3000, true)
]);
promiseRaceTest.then(function (result) { return console.log(result); });
