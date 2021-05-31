"use strict";
var numberArr = [1, 2, 3];
var stringDict = {
    message: '123',
    language: 'Eng'
};
var booleanDict = {
    message: true,
    isOpen: true
};
var numberPrimitiveArr = [1, 2, 3];
var stringPrimitiveArr = ['1', '2', '3'];
var numOrStringPrimitiveArr = [1, '2', 3];
var user = {
    name: 'Tony',
    age: 23,
    hasPet: true
};
// let falsePrimitive: TypedPrimitiveArray<number | string> = [1, '2', 3]
function traverseElements(values, callback) {
    for (var i = 0; i < values.length; i++) {
        callback(values[i], i);
    }
}
var numberArray = [1, 2, 3, 4, 5];
var traverseCallback = function (el, index) {
    console.log("Index: " + index + " - Value: " + el);
};
traverseElements(numberArray, traverseCallback);
traverseElements([1, 2, 3, 4, 5], function (el, index) {
    console.log("Index: " + index + " - Value: " + el);
});
traverseElements([1, 2, 3, 4, 5], function (el, index) {
    console.log("Index: " + index + " - Value: " + el);
});
