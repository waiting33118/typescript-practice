//  primitive types

let myName = 'Tony'
let age = 20
let hasPet = false
let nothing = undefined
let nothingLiterally = null

/*  undefined & null calls "nullable types"
    in typescript will be classify into 'any'
*/


// age = '123'  //typescript shows error!


/*
  Type inference(型別推論)
  設法確保不將不同型別的東西，指派進經過型別推論後的變數
*/

// nothing = '123'   // typescript won't be warning!
// nothing = true


//  Delay initialization

let messageToSend    // the type is any!

messageToSend = '123'   // type inference won't be work
messageToSend = 1212121


/* 小結
  當對這些被指派 Nullable Types 的變數或者不立即被指派值的變數做型別註記
*/

let absoluteNothing: undefined = undefined
let literallyAbsoluteNothing: null = null

// absoluteNothing = 123            // typescript will warning!
// literallyAbsoluteNothing = '123' // typescript will warning!


/* 具有型別但是預設為“空”值或 Nullable Types */

let canBeNullableString: string

canBeNullableString = '123'

// canBeNullableString = undefined  // typescript will warning!
// canBeNullableString = null       // typescript will warning!

/* 原因是：TS 已經認證該變數必須得是 string 的型態。 */


let canBeNullableString1: string

// let myString = canBeNullableString1   //typescript will show warning!

canBeNullableString1 = 'hello'


// var

var abc

var bbb = abc

/*  TDZ problem
  未確定變數被正式丟入合法的值之前的這段空間，不能使用該變數
*/


/*
  我們原先的目的是想讓變數除了可以成為我們指定的型別外，也可以成為 Nullable Type
  須使用 `union` type
*/

let a: string | null = null

a = '123'
a = null
a = '123'


/*
  對遲滯性指派進行型別註記
*/

let A: string
let B: number = 123
A = B.toString()

