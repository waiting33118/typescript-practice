/*  特殊型別的運作機制  */

/*
  never 型別這東西呢，其實要講說是型別其實也感覺不太像，更精確來說是一種函式或方法回傳值的狀況，就跟 void 很像
*/

/*  重點 1. never 型別的意義  */
/*

  never 型別的概念是程序在函式或方法執行時

    無法跳脫出該函式或方法

    出現例外結果中斷執行
*/

let runForever = function forever() {
  while (true) {

  }
}

// runForever returns [never]

// example void or never

const randomNumber: number = Math.random() * 10

function tryRandom(num: number): number | never {
  while (num > 5) {
    throw new Error('OOPS')
  }
  return num
}

let random1 = tryRandom(randomNumber)

tryRandom(6)

tryRandom(4)


// 第一點：never is a subtype of and assignable to every type

/*  任何函式或方法回傳值都有包含回傳不了值甚至例外狀況的考量  */

/* never 的出現重點在於要讓函式或方法的回傳值之型別也必須涵蓋有可能會沒辦法跳脫或者甚至中斷執行的狀況 */

type T = void | never

type U = any | never


// 第二點：No type is a subtype of or assignable to never (except never itself).
// 任何型別除了 never 本身以外，皆不是 never 的 subtype


/* 好像是 never 型別跟任何型別進行 intersection 的狀況 */

type MustBeNever = number & never; // 都已經錯誤了，怎麼會有型別值呢？


/* 重點 2. never 型別為所有型別的 Subtype */
/*
  任何型別 T（包含 never 本身）和 never 進行 union，則型別 T 會吸收掉 never 型別

  任何型別 U（包含 never 本身）和 never 進行 intersection，則型別 U 會被 never 型別強行覆蓋
*/

let mustBeNever = function () {
  throw new Error('errrrrrrror')
}

// never 型別事實上也是 assignable（可被指派到變數）的概念
let throwError: never = mustBeNever()

// 就算函式必為 never 型別，然而變數之註記型別為 number 依舊還是被 TypeScript 認定正常，因為 number 型別跟 number | never 型別完全等效
let throwError2: number = mustBeNever()


let wontThrowError = function () {
  return 42
}

// 如果你的變數註記為 never 卻可以被指派到值或者甚至是不回傳任意值但卻可以結束程序的函式或方法，那分明就是邏輯錯誤
let testWontThrowError: number = wontThrowError()



/* 重點 3. never 型別與變數指派行為 */
/*
  若變數被註記為任意型別 T，變數除了可以被型別 T 的值指派外，也可以被指派屬於 never 型別的值

  若變數被註記為 never 型別，則變數不能指派任意型別 T （除了 never 型別以外）的值

*/

/*
  函數型別中回傳值的型別推論機制，如果根據 Control-Flow Analysis（判斷式流程分析，學過編譯器或玩過語言設計的人肯定都聽過的東西）的結果，
  函式是不能被執行到結束，則該函式的回傳值會被自動推論成 never 型別。

*/


/*
  某個函式之回傳型態強行註記為 never，必須對該函式開發到無論什麼狀況都不能讓函式的執行有結束的一天（亦或者是程式在這函式裡面一定會被中斷）

*/

function possibleNotToThrowError(): never {
  const possibility = Math.random()
  if (possibility > 0.5) {
    throw new Error('Error')
  }
}

/*  重點 4. 函式型別回傳值的推論與註記  */
/*

  如果函式可以被完整的執行完畢，則 TypeScript 會根據 return 表達式回傳的值之型別或者是函式回不回傳值(void)來作為根據進行型別推論

  如果函式 100% 確定不能執行到結束的點，則 TypeScript 會無條件將該函式的回傳值之型別視為 never

  如果函式被積極註記為 never 型別，則開發者必須確保該函式的實作 100% 不會有任何結束的執行點
*/