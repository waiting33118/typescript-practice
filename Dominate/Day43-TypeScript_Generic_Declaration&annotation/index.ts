let numberArr: Array<number> = [1, 2, 3]

// let unspecifiedTypeParamArr: Array = [1, 2, 3] // 無指定泛用參數

type GT<T1> = T1

type DefaultStringDict<T = string> = {
  [prop: string]: T
}

let stringDict: DefaultStringDict = {
  message: '123',
  language: 'Eng'
}

let booleanDict: DefaultStringDict<Boolean> = {
  message: true,
  isOpen: true
}

type Primitives = number | string | boolean | null | undefined

type PrimitiveArray<T extends Primitives> = Array<T>

let numberPrimitiveArr: PrimitiveArray<number> = [1, 2, 3]

let stringPrimitiveArr: PrimitiveArray<string> = ['1', '2', '3']

let numOrStringPrimitiveArr: PrimitiveArray<number | string> = [1, '2', 3]

interface PersonalInfo {
  name: string
  age: number
  hasPet: Boolean
}

// let invalidObjectArray: PrimitiveArray<PersonalInfo> = [
//   {
//     name: 'Tony',
//     age: 23,
//     hasPet: true
//   }
// ]

interface UserInfo {
  name: string
  age: number
  hasPet: boolean
}

interface UserAccount {
  email: string
  password: string
  subscribed: boolean
}

type User<T extends UserInfo | UserAccount> = T

let user: User<UserInfo> = {
  name: 'Tony',
  age: 23,
  hasPet: true
}

type TypedPrimitiveArray<T extends Primitives> = T extends number
  ? T[]
  : T extends string
  ? T[]
  : never

// let falsePrimitive: TypedPrimitiveArray<number | string> = [1, '2', 3]

function traverseElements<T>(
  values: Array<T>,
  callback: (el: T, index: number) => void
) {
  for (let i = 0; i < values.length; i++) {
    callback(values[i], i)
  }
}

let numberArray = [1, 2, 3, 4, 5]

const traverseCallback = (el: number, index: number) => {
  console.log(`Index: ${index} - Value: ${el}`)
}

traverseElements<number>(numberArray, traverseCallback)

traverseElements<number>(
  [1, 2, 3, 4, 5] as Array<number>,
  function (el: number, index: number) {
    console.log(`Index: ${index} - Value: ${el}`)
  }
)

traverseElements<number>([1, 2, 3, 4, 5], function (el, index) {
  console.log(`Index: ${index} - Value: ${el}`)
})
