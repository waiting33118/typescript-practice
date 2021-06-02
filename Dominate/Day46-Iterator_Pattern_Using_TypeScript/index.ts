interface Iterator<T> {
  next(): void
  isDone(): Boolean
  currentItem: T | undefined
}

interface Iterable<T> {
  createIterator(): Iterator<T>
}

class NormalIterator<T> implements Iterator<T> {
  public currentItem: T | undefined = undefined
  private currentIndex = 0

  constructor(private items: Array<T>) {
    this.currentItem = items[0]
  }

  public isDone() {
    return this.currentItem === undefined
  }

  public next() {
    if (this.isDone()) throw new Error('Iterator out of bound!')

    this.currentIndex++
    this.currentItem = this.items[this.currentIndex]
  }
}

class MyArray<T> implements Iterable<T> {
  constructor(public items: Array<T>) {}

  createIterator() {
    return new NormalIterator<T>(this.items)
  }
}

let aCollection = new MyArray<number>([1, 2, 3, 4, 5])

let aIterator = aCollection.createIterator()

while (!aIterator.isDone()) {
  console.log(`Iterated value: ${aIterator.currentItem}`)
  aIterator.next()
}

try {
  aIterator.next()
} catch (error) {
  console.log('out of bound')
}
