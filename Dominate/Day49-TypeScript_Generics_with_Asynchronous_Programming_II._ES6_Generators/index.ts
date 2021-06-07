function* numbersIteratorGenerator() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

const numbersIter = numbersIteratorGenerator()
let iterElement = numbersIter.next()
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())

function* generator1() {
  yield 1
  yield 2
  yield 3
}

function* generator2() {
  yield 1
  yield 2
  return 3
}

const iterResult1 = generator1()
const iterResult2 = generator2()

// console.log(iterResult1.next())
// console.log(iterResult1.next())
// console.log(iterResult1.next())
// console.log(iterResult1.next())

// console.log(iterResult2.next())
// console.log(iterResult2.next())
// console.log(iterResult2.next())
// console.log(iterResult2.next())

function* generatorFunc() {
  console.log('Iterator created!')

  yield 1
  yield 2
  yield 3
}

// console.log('before create iterator')
// let iterator = generatorFunc()
// console.log(iterator)
// console.log('after create iterator')

// console.log('Before invoke')
// console.log(iterator.next())
// console.log('after invoke')

function* fibonacci() {
  let n0 = 1
  let n1 = 1

  while (true) {
    yield n0
  }

  ;[n0, n1] = [n1, n0 + n1]
}

// const fibSeries = fibonacci()
// for (let i = 0; i < 10; i++) {
//   console.log(fibSeries.next())
// }

function* summationGenerator(defaultValue: number = 0) {
  let total = defaultValue
  while (true) {
    console.log(total)
    total += (yield total) as number
    console.log(total)
  }
}

let summationIter = summationGenerator()

console.log(summationIter.next(5))
console.log(summationIter.next(7))
console.log(summationIter.next(11))
