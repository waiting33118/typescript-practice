type Identity<T> = T

/* type parameter */

let shouldBeNumber: Identity<number>

type Dictionary<T> = {
  [prop: string]: T
}

let correctDict: Dictionary<Boolean> = {
  hasPet: true
}

// let errorDict: Dictionary<Boolean> = {
//   info: '123'   // type error
// }

interface LinkedList<T> {
  head: LinkedListNode<T> | null
  length: number
  at(index: number): LinkedListNode<T> | null
}

interface LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
}

class TypedArray<T> {
  constructor(public values: T[]) {}
}

type operator<T> = (p1: T, p2: T) => T

let addition: operator<number> = (p1: number, p2: number) => {
  return p1 + p2
}

addition(2, 3)

let stringConcat: operator<string> = (c1: string, c2: string) => {
  return c1 + c2
}

stringConcat('1', '2')

function identityFunction<T>(something: T) {
  return something
}

identityFunction<string>('123')

type TypeConversion<T, U> = (input: T) => U

let isPositive: TypeConversion<number, Boolean> = (input: number) => {
  return input > 0
}

let anythingToString: TypeConversion<any, string> = (input: any) => {
  return input.toString()
}

/*Build-in Generics */

type MyArray<T> = T[]

let number: number[] = [1, 2, 3, 4, 5]

let number2: Array<number> = [1, 2, 3, 4, 5]

let array: Array<string> = ['1', '2', '3']

let array2: string[] = array

/* Utility type Required */

interface PersonalInfo {
  name: string
  age?: number
  hasPet?: Boolean
}

let validPersonalInfo: PersonalInfo = {
  name: 'Tony'
}

let requiredPersonalInfo: Required<PersonalInfo> = {
  name: 'Tony',
  age: 23,
  hasPet: true
}
