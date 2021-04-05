// function overload in interface

interface AddOperation {
  addition(p1: number, p2: number): number
  addition(p1: string, p2: string): number
}

// const implementAddition: AddOperation = {   // error
//   addition(p1: string, p2: string) {
//     return parseInt(p1, 10) + parseInt(p2, 10)
//   }
// }

const implementAddition2: AddOperation = {
  addition(p1: number | string, p2: number | string) {
    if (typeof p1 === 'number' && typeof p2 === 'number') {
      return p1 + p2
    }
    if (typeof p1 === 'string' && typeof p2 === 'string') {
      return parseInt(p1, 10) + parseInt(p2, 10)
    }

    throw new Error(`Parameter \`p1\` and \`p2\` only accept both \`number\` and \`string\` type`)
  }
}

implementAddition2.addition(2, 4)

/////////// try ///////////////////
interface AddOperation1 {
  add(p1: number, p2: number): number
  add(p1: number, p2: number): number
}

interface AddOperation2 {
  add(p1: number, p2: number): number
  add(p1: number, p2: number): string
}

interface AddOperation3 {
  add(p1: number): number
  add(p1: number, p2: number): number
}


interface Test1 {
  a: string,
  b: number,
  c: boolean
}

interface Test1 {
  d: number[]
}

const result: Test1 = {
  a: 'a',
  b: 2,
  c: true,
  d: [1, 2, 3, 4, 5]
}