"use strict";
// function overload in interface
// const implementAddition: AddOperation = {   // error
//   addition(p1: string, p2: string) {
//     return parseInt(p1, 10) + parseInt(p2, 10)
//   }
// }
var implementAddition2 = {
    addition: function (p1, p2) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        }
        if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }
        throw new Error("Parameter `p1` and `p2` only accept both `number` and `string` type");
    }
};
implementAddition2.addition(2, '3');
