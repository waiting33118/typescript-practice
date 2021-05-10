// strick null type

let a: number | undefined

const b = a


// no implicit any

function summation(a: number, b: number) {
  return a + b
}
