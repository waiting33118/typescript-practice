// number[]
// Homogeneous Type Array
let numbers = [1, 2, 3, 4, 5, 6]

// string[]
let strings = ['hi', 'who are you']

// 覆寫
numbers[1] = 123
numbers[3] = '123'   // type error


numbers.push(1234)
numbers.push('1234')  // type error

numbers.concat([222, 3333])
numbers.concat(['123', '567']) // type error

numbers = [666, 777, 888]
numbers = ['123', '456', '789'] // type error


// 混和型態
// Heterogenous Type Array
let numberAndStrings = [1, '2', 3, '4']

// union小提示
// let A: T | U | V
// 令 A 為某變數，T、U 以及 V 為若干型別註記。
// 若將 T、U 與 V union 起來並註記在變數 A 身上，
// 則我們稱變數 A 可以存取型別為 T 或是 U 或是 V 之值以及型別的複合型態
// （如：T 和 U 皆有、或 T、U 與 V 皆複合再一起）


// {message:string}[]
let objectsArray1 = [
  { message: 'Hello' },
  { message: 'Hi' },
  { message: 'Goodbye' }
]


let objectsArray2 = [
  { message: 'Hello' },
  { message: 'Hi', revolt: true },
  { message: 'Goodbye' }
]
// 又可以稱作
// {message: string, revolt?:boolean}[]

// ({message: string} | {message: number})
let objectsArray3 = [
  { message: 'Hello' },
  { message: 10101000111001 },
  { message: 'Goodbye' }
]


// 重點 1. 陣列的型別推論
// 若集合 S 為陣列裡所有元素各種型別的集合，大部分的情形下，該陣列被 TypeScript 型別推論的結果是：
// (集合 S 裡所有型別 `union` 的結果)[]


// ((number | boolean | null)[] | (string | undefined)[])[]
let miscellaneousArraysArray = [
  [1, 2, 3],
  ['Hello', 'World'],
  [true, false, null, 123],
  ['string', undefined]
]


// 選用屬性（Optional Properties）
let objectArray5: ({ message: string, revolt?: boolean })[] = [
  { message: 'Hello' },
  { message: 'Hi', revolt: undefined },
  { message: 'Goodbye', revolt: true },
]

//  let objectArray5: {
//     message: string;
//    revolt?: boolean | undefined;
//  }[]

let emptyArray: number[] = []

// 積極標注型別

let canBeEitherNullOrNumber: (number | null)[] = [1, 2, 4]
canBeEitherNullOrNumber.splice(2, 0, null)



//  重點 2. 陣列的型別推論與註記時機
//   1.大部分的狀態下，陣列型別的推論是符合開發者期待的
//
//   2.除非遇到以下狀況，才需要對儲存陣列型別的變數積極地作型別註記：
//     空陣列值必須積極註記，這是為了要革除any 可能帶來的禍害
//     陣列裡的元素沒有你要求的型別，可以用 union 技巧作積極的型別註記
//
//  3. 為了程式碼的可讀性，通常一個陣列擁有多個型別的話（也就是 Heterogenous Type Array），
//     建議還是用 union 註記一下，不然要在陣列裡面用人眼遍歷過陣列的每一個值對應的每個型別 
//     —— 跟直接註記比起來：型別註記是比較恰當的選擇喔

