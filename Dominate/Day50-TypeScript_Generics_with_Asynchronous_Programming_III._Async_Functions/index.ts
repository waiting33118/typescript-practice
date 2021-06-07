function delayAfter<T>(miliseconds: number, value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), miliseconds)
  })
}

async function example1() {
  const message = await delayAfter(3000, 'hello')
  console.log(message)
}

// example1()

// async function example2 (){
//   const message = await 'Hello'
// }

async function example3() {
  const result = await Promise.race([
    delayAfter(5000, 'Hello'),
    delayAfter(3000, 123),
    delayAfter(4000, true)
  ])

  console.log(result)
}

// example3()

async function example4() {
  const result = await Promise.all([
    delayAfter(5000, 'Hello'),
    delayAfter(3000, 123),
    delayAfter(4000, true)
  ])

  console.log(result)
}

// example4()

async function example5_1() {
  console.log('e_1')
  return await Promise.resolve(123)
}

async function example5_2() {
  console.log('e_2')
  return Promise.resolve(123)
}

// example5_1().then(console.log)
// example5_2().then(console.log)

async function example6_1() {
  console.log('first async')
  return await delayAfter(1000, 'hello')
}
async function example6_2() {
  const result = await example6_1()
  console.log('second async')
  await delayAfter(2000, 'hello2')
  return result
}

example6_2().then(console.log)
