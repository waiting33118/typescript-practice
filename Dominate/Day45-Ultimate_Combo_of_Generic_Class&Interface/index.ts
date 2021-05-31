interface LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
}

interface LinkedList<U> {
  head: LinkedListNode<U> | null
  length(): number
  at(index: number): LinkedListNode<U> | null
  insert(index: number, value: U): void
  remove(index: number): void
}

// class MyLinkedList implements LinkedList<T> {}

// class MyGenericLinkedList<T> implements LinkedList<T> {}

class GenericLinkedListNode<T> implements LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null

  constructor(public value: T) {}
}

class GenericLinkedList<T> implements LinkedList<T> {
  public head: LinkedListNode<T> | null = null

  public length() {
    if (this.head === null) return 0

    let count = 0
    let currentNode: LinkedListNode<T> | null = this.head

    while (currentNode !== null) {
      currentNode = currentNode.next
      count++
    }
    return count
  }

  public at(index: number): LinkedListNode<T> | null {
    const length = this.length()

    if (index >= length) throw new Error('Index out of bound')

    let currentIndex = 0
    let currentNode = this.head as LinkedListNode<T>
    while (currentIndex !== index) {
      currentNode = currentNode.next as LinkedListNode<T>
      currentIndex++
    }
    return currentNode
  }

  public insert(index: number, value: T) {
    const length = this.length()
    const newNode = new GenericLinkedListNode(value)

    if (length < index) throw new Error('Index out of bound')
    else if (length === index) {
      if (index === 0) {
        this.head = newNode
      } else {
        const node = this.at(index - 1) as LinkedListNode<T>
        node.next = newNode
      }
    } else {
      if (index === 0) {
        const originalHead = this.head
        this.head = newNode
        this.head.next = originalHead
      } else {
        const prevNode = this.at(index - 1) as LinkedListNode<T>
        const originalNode = prevNode.next as LinkedListNode<T>
        prevNode.next = newNode
        newNode.next = originalNode
      }
    }
  }

  public remove(index: number) {
    throw new Error('ERROR')
  }

  public getInfo() {
    let currentNode = this.head
    let currentIndex = 0

    while (currentNode !== null) {
      console.log(`Index ${currentIndex}: ${currentNode.value}`)
      currentNode = currentNode.next
      currentIndex++
    }
  }
}

const l = new GenericLinkedList<number>()

l.insert(0, 123)
l.insert(1, 456)
l.insert(2, 789)
l.insert(1, 11111)
l.getInfo()
