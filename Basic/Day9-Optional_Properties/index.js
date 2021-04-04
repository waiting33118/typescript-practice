"use strict";
/* 選用屬性 X 型別擴展   */
/*
  PersonInfo 型別，若某變數被積極註記過後，該變數必須完全符合的條件有以下：

  必須有 name 屬性，對應型別為 string
  必須有 age 屬性，對應型別為 number
  必須有 hasPet 屬性，對應型別為 boolean

*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
// pass
var account2 = {
    account: 'tony',
    password: 'agono13r3wfjo32fnl2',
    subscribed: true
};
var accountTony = {
    account: '122er13',
    password: 'gwol4t4egnleng',
    subscribed: true,
    gender: Gender.Male
};
/* function's optional properties */
var additionThreeAsDefault = function (num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1 + 3;
};
