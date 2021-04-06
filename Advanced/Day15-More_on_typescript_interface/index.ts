type Dictionary = {
  [propName: string]: string
}

let normalDictionary: Dictionary = {
  hello: 'world',
  thisFeature: 'cool',
  checked: true    // error
}

let emptyDictionary: Dictionary = {}



interface StringTypedList {
  [index: number]: string
}

let stringTypedArray: StringTypedList = {
  123: 'Hello',
  [4]: 'Hi'
}

let emptyTypedArray: StringTypedList = {}

let arrayTest: StringTypedList = [1, 2, 3]  // error

let emptyArray: StringTypedList = []

stringTypedArray[0]
stringTypedArray[1]


type UseBothKeyType = {
  [key: number]: string,
  [key: string]: string
};

let both: UseBothKeyType = {
  happy: 'birthday',
  [123]: 'qwe'
}

type UserInfo = {
  name: string,
  [prop: string]: string
}

type UserInfo2 = {
  name: string,
  birth: Date,
}


///////readonly//////////////////


type TypeAccountReadonly = {
  readonly email: string,
  readonly password: string,
  name?: string,
  age?: number
}

interface InterfaceAccountReadonly {
  readonly email: string
  readonly password: string
  name?: string
  age?: number
}

let sampleAccount: TypeAccountReadonly = {
  email: 'asdfsodklfmsopd',
  password: 'sdfgsdpgsdg',
  name: 'Tony',
  age: 23
}

sampleAccount.email

sampleAccount.email = 'wefwsefesrfsfed'    // error , readonly


// hybrid type interface

interface Counter {
  (start: number): void

  increment(): number
  reset(): void
  value: number
}

function createCounter(): Counter {
  let value: number
  let initializedNumber: number

  const counter = (function (startNumber: number) {
    initializedNumber = startNumber
    value = startNumber
  }) as Counter

  counter.increment = function () {
    value++
    return value
  }

  counter.reset = function () {
    value = initializedNumber
  }

  Object.defineProperty(counter, 'value', {
    get() { return value }
  })

  return counter
}

const counter: Counter = createCounter()

counter(1)

console.log(counter.value)

counter.increment()
counter.increment()
counter.increment()

counter.reset()