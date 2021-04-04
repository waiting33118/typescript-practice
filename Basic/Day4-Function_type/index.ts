let aSimpleFunction = () => console.log(`total is`)
let simpleFunction = function () { console.log('Hi') }

/*
重點 1. Implicit Any
大部分的情況下，只要定義任何函式，
TypeScript 通常會無條件推論函式內的參數（Parameters）為 any 型別，
這種現象我們稱之為 Implicit Any
*/
//               Parameter Type Annotation
let addition = (num1: number, num2: number) => num1 + num2

let shouldBeString: number = addition(1, 2)   // bug

console.log(shouldBeString)
console.log(addition(6, 10))

/*
重點 2. 函式的推論與註記
  分別為輸入參數與輸出部分，大部分情況下，只要我們提供函式參數的註記，輸出就可以間接被 TypeScript 推論出來
*/

// 那麼哪些是就算我們有了參數註記卻也不能得知輸出型別的狀態呢？

//                                   Return Type Annotation
let addition2 = (num1: number, num2: number): void => console.log(num1 + num2)

JSON.parse  // 輸出類別為any


const aJSONString = '{ "name": "TONY" }'

// any
let parsedJSON = JSON.parse(aJSONString)

// Type Annotation
let parsedJSON1 = JSON.parse(aJSONString) as { name: string }
let parsedJSON2 = <{ name: string }>JSON.parse(aJSONString)
let parsedJSON3: { name: string } = JSON.parse(aJSONString)

/**
 * 重點 3. 函式回傳 any 型別
 * 遇到函式是回傳 any 型別的值，我們必須主動對該值作型別註記（Type Annotation），
 * 找回開發 TypeScript 的優勢 —— 也就是 TS 提供的型別系統（Type System）
 */



// 函式型別的覆寫

// 回傳值不可為string , 先前已有定義回傳值為number
addition = function (num1: string, num2: string) {
  return num1 + num2
}

// 回傳值為number 非 void
addition = function (num1: number, num2: number) {
  num1 + num2
}

// params 參數型別錯誤
addition = function (num1: string, num2: string) {
  return num1 + num2
}


// 重點 4. 函式不回傳值的型態
// 若定義的函式不回傳值的話，不管有沒有被註記，型別推論結果會被認定為 void


let doesItWork1 = function doesItWork1() {
  return undefined
}

let doesItWork2 = function doesItWork2(): undefined {
  return undefined
}

let doesItWork3 = function doesItWork3(): undefined {
}

let doesItWork4 = function doesItWork4(): void {
  return undefined
}