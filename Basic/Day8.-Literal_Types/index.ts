// 明文型別 Literal Types

// 只要是型別有廣義物件或複合的格式，就是屬於明文型別的一種表現形式

let info = {
  name: 'Tony',
  age: 23,
  hasPet: true
}

// 物件的明文型別（Object Literal Type）

/* 重點 1. 明文型別 Literal Types */
/*
  只要是表達廣義物件的格式
  或者是任意型別（包含原始型別的）
  複合組合（union 與 intersection 也算在內）

  -- 就隸屬於明文型別的範疇

  也可推得，通常 TypeScript 會將任何廣義物件的型別推論為明文型別的格式
*/

// 型別化名 Type Alias

// 型別化名通常會用在明文型別、複合型別（union 與 intersection）以及比較複雜的型別格式名稱必須作抽象化（Abstraction）

/* 重點 2. 型別化名 Type Alias */
/*
  若我們有一個型別 T，T 可為任何的型別
  （包含原始型別、物件型別、TypeScript 內建型別、明文型別、複合型別、Generics 通用型別等）。
  其中我們想要讓該型別 T 等效於別名 A，則可以使用 TypeScript 的 type 關鍵字進行化名宣告

  型別化名的主要目的為簡化程式碼以及進行型別的抽象化（Type Abstraction）
*/

type MathOperator = (n1: number, n2: number) => number

let powerOp: MathOperator = function (n1, n2): number {
  return n1 ** n2
}

powerOp(12, 12)

/* 重點 3. 函式型別的化名 */

type PersonInfo = {
  name: string,
  age: number,
  hasPet: boolean
}

let infoAboutMe: PersonInfo = {
  name: 'Tony',
  age: 23,
  hasPet: true
}

// infoAboutMe.newInfo = '123' wrong => no property

infoAboutMe.hasPet = false   // OK

// infoAboutMe.hasPet = '234'  type error

// 完整覆蓋屬性質

infoAboutMe = {
  name: 'Benny',
  age: 24,
  hasPet: true,
}

// infoAboutMe = {
//   name: 'Benny',
//   age: 24,
//   hasPet: true,
//   graduated: true  <= wrong  property no define in type
// }

/*  重點 4. 廣義物件型別的化名  */

function printInfo(info: PersonInfo): void {
  console.log(`Name: ${info.name}`)
  console.log(`Age: ${info.age}`)
  console.log(`Has Pet?: ${info.hasPet}`)
}

printInfo({
  name: 'Tony',
  age: 23,
  hasPet: true,
})

let infoAboutBenny = {
  name: 'Benny',
  age: 24,
  hasPet: true,
  hello: 'World',
  nothing: null
}

printInfo(infoAboutBenny)

/*
若某變數 A 儲存某物件值，其中 A 沒有被積極註記（因此 TypeScript 會對 A 作型別推論，推論出 A 的明文型別格式）。


若變數 A 作為某函式（或方法）的參數，
其中該參數有型別 T，
則 TypeScript 只會針對 A 的格式至少符合型別 T（屬性型別對應正確、"少一鍵"不行但多一鍵以上都可以），
則變數 A 通過該型別 T 的檢測
*/


/* 重點 5. 廣義物件的註記  */
/*
變數沒有被積極註記,但只要該變數至少有符合型別的格式，依然可以通過函式

若想避免此狀況發生，任何變數需要存取廣義物件時，必須進行積極註記型別的動作
*/

/*
至少有符合參數型別的條件有三，假設沒有被註記的變數為 A，而將其代入某函式（或方法）作為參數，其參數型別為 T：

 - A 必須與 T 規定的必填屬性與型別對應完全正確
 - 可以忽略 A 對 T 差集出來的屬性（相對 T 多出來的屬性）
 - A 不能缺少任一個 T 所規定的屬性
*/