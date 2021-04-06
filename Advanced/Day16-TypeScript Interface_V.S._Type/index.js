"use strict";
// optional properties
var test = {
    hello: 'world'
};
var test2 = {
    hello: 'world'
};
var testExtend = {
    prop: '1123',
    prop2: 1234
};
// interface IError extends TPrimitive { }  // error, can't extend primitive type
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var MessageOption;
(function (MessageOption) {
    MessageOption[MessageOption["error"] = 0] = "error";
    MessageOption[MessageOption["success"] = 1] = "success";
    MessageOption[MessageOption["info"] = 2] = "info";
})(MessageOption || (MessageOption = {}));
function printMessage(message) {
    console.log(message);
}
function printMessage2(message) {
    console.log(message);
}
printMessage('error');
printMessage2(MessageOption.error);
