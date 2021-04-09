////////// Union ///////////////

type UserInfo1 = {
  name: string,
  age: number
}

type UserInfo2 = {
  hasPet: boolean,
  ownsMotorcycle: boolean
}

type UnionSet = UserInfo1 | UserInfo2


// 1. Only satisfy UserInfo1

let onlyInfo1: UnionSet = {
  name: 'Tony',
  age: 23
}

// 2. Only satisfy UserInfo2

let onlyInfo2: UnionSet = {
  hasPet: true,
  ownsMotorcycle: true
}

// 3. both satisfy

let bothSatisfy: UnionSet = {
  name: 'Tony',
  age: 23,
  hasPet: true,
  ownsMotorcycle: true
}


// try and error

// let error1: UnionSet = {
//   name: 'Tony',
//   ownsMotorcycle: true
// }

let error2: UnionSet = {
  name: 'Tony',
  age: 23,
  ownsMotorcycle: true
}

let error3: UnionSet = {
  age: 23,
  hasPet: true,
  ownsMotorcycle: true
}

// empty set 

// let emptySet: UnionSet = {}


/////////  intersection ////////////


type IntersectionSet = UserInfo1 & UserInfo2

let correctInfo: IntersectionSet = {
  name: 'Tony',
  age: 23,
  hasPet: true,
  ownsMotorcycle: true
}


//////////////////////////////////////

type PrimitiveIntersection = number & string  // never

type MixIntersection = UserInfo1 & number



///////////////////////////////////////


interface ISummation {
  (...args: number[]): number
  (arr: number[]): number
}

let F: ISummation = function (p1: number | number[], ...args: number[]) {
  if (typeof p1 === 'number' && args instanceof Array) {
    return args.reduce((acc, cur) => acc + cur, p1)
  }
  if (p1 instanceof Array) {
    return p1.reduce((acc, cur) => acc + cur, 0)
  }

  throw new Error(`Wrong input`)
}

console.log(F(1, 2, 3, 4, 5))
console.log(F([1, 2, 3, 4, 5]))