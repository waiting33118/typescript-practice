"use strict";
let info = {
    name: 'Tony',
    age: 22,
    hasPet: true
};
let someone = {
    knows: undefined,
    identity: null
};
/*
  為何 Nullable Type 在物件裡面作為屬性的值就不會推論成 any 型別呢？
*/
/*
  1.屬性值被錯誤的型別插入/覆寫干擾
*/
info.name = 'Kevin';
info.age = 25;
info.hasPet = false;
///////
// info.name = false    // ts warning
// info.age = null      //ts warning
// info.hasPet = '123'  // ts warning
// someone.knows = 'Nothing' // ts warning
// someone.identity = 'abc'     // ts warning
/*
  2.物件分別被正確或者是錯誤的物件格式整體複寫
*/
info = {
    name: 'Patrick',
    age: 33,
    hasPet: true
};
// info = {            // ts error - lose one key 
//   name: 'Benny',
//   age: 22
// }
// someone = {           // ts error - unexpected key
//   knows: undefined,
//   identity: null,
//   loves: '123'
// }
/*
  3.直接對物件新增值
*/
// info.job = 'Engineer'   // ts error
delete info.hasPet;
console.log(info);
