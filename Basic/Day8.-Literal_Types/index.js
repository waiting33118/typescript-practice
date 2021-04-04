"use strict";
// 明文型別 Literal Types
// 只要是型別有廣義物件或複合的格式，就是屬於明文型別的一種表現形式
var info = {
    name: 'Tony',
    age: 23,
    hasPet: true
};
var powerOp = function (n1, n2) {
    return Math.pow(n1, n2);
};
powerOp(12, 12);
var infoAboutMe = {
    name: 'Tony',
    age: 23,
    hasPet: true
};
// infoAboutMe.newInfo = '123' wrong => no property
infoAboutMe.hasPet = false; // OK
// infoAboutMe.hasPet = '234'  type error
// 完整覆蓋屬性質
infoAboutMe = {
    name: 'Benny',
    age: 24,
    hasPet: true,
};
// infoAboutMe = {
//   name: 'Benny',
//   age: 24,
//   hasPet: true,
//   graduated: true  <= wrong  property no define in type
// }
/*  重點 4. 廣義物件型別的化名  */
function printInfo(info) {
    console.log("Name: " + info.name);
    console.log("Age: " + info.age);
    console.log("Has Pet?: " + info.hasPet);
}
printInfo({
    name: 'Tony',
    age: 23,
    hasPet: true,
});
var infoAboutBenny = {
    name: 'Benny',
    age: 24,
    hasPet: true,
    hello: 'World',
    nothing: null
};
printInfo(infoAboutBenny);
