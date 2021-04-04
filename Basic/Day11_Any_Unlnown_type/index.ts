let notAssign: any

notAssign = 'hello worlld'

function printNumber(num1, num2) {
  console.log(num1, num2)
}

const returnValue = JSON.parse('asdasda')

const arrayNotAnnotation = []

let anyType: any
let anyUnknown: unknown

anyType = 123
anyType = 'abc'
anyType = true
anyType = [234234, true]

anyUnknown = 2345
anyUnknown = '235 vf'
anyUnknown = false

let isNumber: number
let isString: string
let isBoolean: boolean
let isNull: null
let isUndefined: undefined
let isKindOfObject: object
let isKindOfArray: number[]
let isKindOfunction: () => void

isNumber = anyType
isString = anyType
isBoolean = anyType
isNull = anyType
isUndefined = anyType
isKindOfObject = anyType
isKindOfArray = anyType
isKindOfunction = anyType

anyType = anyUnknown
isNumber = anyUnknown  //error
isString = anyUnknown   //error
isBoolean = anyUnknown   //error
isNull = anyUnknown   //error
isUndefined = anyUnknown   //error
isKindOfObject = anyUnknown   //error
isKindOfArray = anyUnknown   //error
isKindOfunction = anyUnknown   //error


if (typeof anyUnknown === 'number') {
  isNumber = anyUnknown
}

isString = <string>anyUnknown



let isUnknown: unknown
let isAny: any

isUnknown = 123
isUnknown = '123'
isUnknown = true

isAny.test
isUnknown.test // error


let unknownObject: unknown = {
  Hello: 'world',
  response: (content: string) => console.log(content)
}

type Unique = {
  Hello: string,
  response: (content: string) => void
}

unknownObject.Hello  // error

  (<Unique>unknownObject).Hello
  (unknownObject as Unique).response('123')

let unknownPrimitive: unknown = '124124'
parseInt(unknownPrimitive, 10) // error

if (typeof unknownPrimitive === 'string') {
  parseInt(unknownPrimitive, 10)
}

