interface LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | T
}

interface LinkedList<U> {
  head: LinkedListNode<U> | null
  length(): number
  at(index: number): LinkedListNode<U> | null
  insert(index: number, value: U): void
  remove(index: number): void
}

class C<T> {
  constructor(public memberProp: T) {}

  public memberFunc() {
    return this.memberProp
  }

  get value() {
    return this.memberProp
  }

  set value(input: T) {
    this.memberProp = input
  }
}

let instC1 = new C<number>(123)

instC1.memberFunc()
const value = instC1.value
instC1.value = 333

let instC2: C<number> = new C(321)

instC2.memberFunc()

const value2 = instC2.value

let instC3 = new C(444)

instC3.memberFunc()

const value3 = instC3.value

class D extends C<number> {}

class E<T> extends C<T> {}

const test = new E(123)

class Cparent<T, U> {
  constructor(private member1: T, private member2: U) {}

  get memberA() {
    return this.member1
  }
  get memberB() {
    return this.member2
  }
}

class Cchild1<T, U> extends Cparent<T, U> {}

const testA = new Cchild1(1, '2')
testA.memberA
testA.memberB

class Cchild2<T, U = T> extends Cparent<T, U> {}

const testB = new Cchild2(1, '2')

testB.memberA
testB.memberB

class Cchild3<T, U extends T> extends Cparent<T, U> {}

const testC = new Cchild3(1, 2)

testC.memberA
testC.memberB
