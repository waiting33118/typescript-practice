let info = {
  name: 'Tony',
  age: 22,
  hasPet: true
}

let someone = {
  knows: undefined,
  identity: null
}

/*
  為何 Nullable Type 在物件裡面作為屬性的值就不會推論成 any 型別呢？
*/


/*
  1.屬性值被錯誤的型別插入/覆寫干擾
*/

info.name = 'Kevin'
info.age = 25
info.hasPet = false

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
}

info = {            // ts error - lose one key 
  name: 'Benny',
  age: 22
}

someone = {           // ts error - unexpected key
  knows: undefined,
  identity: null,
  loves: '123'
}

/*
  3.直接對物件新增值
*/

info.job = 'Engineer'   // ts error


// delete info.hasPet
// console.log(info)

/* 小結
  JS 物件的型別會按照物件本身的格式被推論出來
  可以對物件做出的行為：
        對物件裡的屬性覆寫值，其值的型別與該屬性對應的型別相同
        對物件整體覆寫，其覆寫的物件格式必須完全相同


  常見會被 TS 警告的情形有以下
        對物件裡的屬性插入或覆寫"錯誤的型別值"
        覆寫整個物件時的格式錯誤(少一鍵 / 多一鍵 / 沒多沒少鍵，但至少其中一鍵對應值之型別錯誤）
        隨意新增原先不存在該物件的屬性


  物件的屬性若直接代入 Nullable Type，則不會被視為 any 型別
  undefined 型別的值就是 undefined；null 型別的值就是 null


*/

// 物件包物件
let nestedObject = {
  prop: 'Hello',
  child: {
    prop1: 123,
    prop2: false
  }
}

// 物件被展開到另一個物件（須具備 ES7 Rest-Spread Operator 知識）
let obj1 = { hello: 'World' }
let obj2 = { ...obj1, goodbye: 'Cruel World' }

// 使用 Object.assign
let obj3 = { hello: 'Another World' }
let obj4 = Object.assign(obj3, { goodbye: 'Cruel World' })



// object annotation

let justAnObject: object = { hello: 'world' }

// justAnObject.hello = '123'            // error
// justAnObject.hello = null             // error
justAnObject = { goodbye: 'WORLD' }   // works!
// justAnObject.newProp = 123            // error

/*
  TS 認為 object 型別指的是任何 JS 物件（儘管格式不同）都可以被套入
  不允許對該物件做細部微調（連覆寫某型別的值，其型別跟物件本身擁有屬性對應的型別相同，將那個值覆寫進去也不行！），要覆寫就得全部覆寫！
*/


// justAnObject = 123      // type error

/*  ALL PASS */
justAnObject = [1, 2, 3, '4', '5', true, { hello: 'world' }]
justAnObject = () => console.log('123')
justAnObject = new Object()
justAnObject = new Object('123')
justAnObject = new Number(42)

justAnObject = Object
justAnObject = Array

/**********************/


/*
  狹義物件的定義：僅限於 JSON 格式的物件（典型的 {} 這種東西的寫法）
  廣義物件的定義：包含 JSON 格式的物件、陣列、函式、類別、類別創建出之物件
 */
/* 結論
  1.廣義物件可以被 物件、陣列、函式、類別、類別創建出之物件 複寫
  2.一但被代入任何廣義物件，我們只能進行全面覆寫，不能進行微調動作，包含：新增屬性、改變屬性的值
  3.一但被代入任何廣義物件，全面覆寫的格式不限定，只要屬於廣義物件都可以
*/




/*
  把狹義物件換成廣義物件會發生什麼事情呢？
*/

let arrayObject = [1, 2, 3, 4, 5]
let functionObject = () => console.log('123')
let objectObject = new Promise((res) => res(123))
let primitiveObject = new String('aefFdfdvdCD')
let classItSelf = Object


// 以下應該被警告
// arrayObject.customProp = 123
// functionObject.customProp = 456
// objectObject.customProp = '123'
// primitiveObject.customProp = 'aefaf'
// classItSelf.customProp = 3.14159


arrayObject.pop = () => 123
// arrayObject.pop = function () { console.log('123') } // wrong
// arrayObject.pop = function () { return 'string' }            // wrong
