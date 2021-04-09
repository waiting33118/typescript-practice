"use strict";
////////// Union ///////////////
// 1. Only satisfy UserInfo1
let onlyInfo1 = {
    name: 'Tony',
    age: 23
};
// 2. Only satisfy UserInfo2
let onlyInfo2 = {
    hasPet: true,
    ownsMotorcycle: true
};
// 3. both satisfy
let bothSatisfy = {
    name: 'Tony',
    age: 23,
    hasPet: true,
    ownsMotorcycle: true
};
// try and error
// let error1: UnionSet = {
//   name: 'Tony',
//   ownsMotorcycle: true
// }
let error2 = {
    name: 'Tony',
    age: 23,
    ownsMotorcycle: true
};
let error3 = {
    age: 23,
    hasPet: true,
    ownsMotorcycle: true
};
let correctInfo = {
    name: 'Tony',
    age: 23,
    hasPet: true,
    ownsMotorcycle: true
};
let F = function (p1, ...args) {
    if (typeof p1 === 'number' && args instanceof Array) {
        return args.reduce((acc, cur) => acc + cur, p1);
    }
    if (p1 instanceof Array) {
        return p1.reduce((acc, cur) => acc + cur, 0);
    }
    throw new Error(`Wrong input`);
};
console.log(F(1, 2, 3, 4, 5));
console.log(F([1, 2, 3, 4, 5]));
