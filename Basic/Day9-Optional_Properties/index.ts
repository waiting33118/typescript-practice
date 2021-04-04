/* 選用屬性 X 型別擴展   */

type PersonInfo = {
  name: string,
  age: number,
  hasPet: boolean
}

/*
  PersonInfo 型別，若某變數被積極註記過後，該變數必須完全符合的條件有以下：

  必須有 name 屬性，對應型別為 string
  必須有 age 屬性，對應型別為 number
  必須有 hasPet 屬性，對應型別為 boolean

*/

enum Gender {
  Male,
  Female,
  Other
}

type AccountInfo = {
  account: string,
  password: string,
  nickname: string | undefined,
  birth: Date | undefined,
  gender: Gender | undefined,
  subscribed: boolean
}

//  error missing properties
// let account: AccountInfo = {             
//   account: 'tony',
//   password: 'agono13r3wfjo32fnl2',
//   subscribed: true
// }

type SomeUnknown = {
  knows: undefined,
  identity: null
}

// let another: SomeUnknown = {}

/* 這裡我們就可以對 undefined 型別下一個簡單的重點 */
/*
  重點 1. undefined 作為物件屬性的型別

  undefined 在原生 JS 的意味就是可以放置該屬性為空值，甚至是不去定義的狀態。
  但在 TypeScript 的世界裡：undefined 這種原始型別代表必須存取名為 undefined 這種值，並不是完全省略定義它！

*/

/* 選用屬性註記（Optional Property Annotation）-- 單純就是一個 ? 符號來裝飾我們的物件屬性。 */

/* 使用選用屬性註記 <Prop>?  */

/************************************** */

/* 重點 2. 物件屬性上的選用註記  */
/*
  若某屬性 P 屬於某物件的明文型別 的屬性之一，且該屬性對應的型別值為 T，而 A 是該明文型別的別名

  選擇性地忽略 P 這個屬性。
  因為推論出來的結果會是以下的形式，因此也可以選擇寫出 P 屬性但填入 undefined 這個值
*/

type AccountInfo2 = {
  account: string,
  password: string,
  nickname?: string,
  birth?: Date,
  gender?: Gender,
  subscribed: boolean
}

// pass
let account2: AccountInfo2 = {
  account: 'tony',
  password: 'agono13r3wfjo32fnl2',
  subscribed: true,
  gender: undefined
}

/****************************** */

/*  重點 3. 快速查找型別化名宣告之位置  */
/*
  使用 VSCode 時：

將鼠標移動至你想要查找的型別化名上
如果使用 Mac，則按下 Command（⌘）；如果使用 Windows，則按下 Ctrl
看到型別化名底下有實線提示，馬上點進去

*/

type AccountSystem = {
  account: string,
  password: string,
  subscribed: boolean
}

type AccountPersonalInfo = {
  nickname?: string,
  birth?: Date,
  gender?: Gender
}

type PersonalAccount = AccountSystem & AccountPersonalInfo

let accountTony: PersonalAccount = {
  account: '122er13',
  password: 'gwol4t4egnleng',
  subscribed: true,
  gender: Gender.Male
}

/* function's optional properties */

let additionThreeAsDefault = function (num1: number, num2?: number) {
  if (num2) {
    return num1 + num2
  }
  return num1 + 3
}