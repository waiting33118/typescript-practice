class ContructIsForbidden {
  private constructor() {

  }
}

// let forbiddenObject = new ContructIsForbidden()    // error


class SingletonPerson {
  private constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly hasPet: boolean
  ) { }

  private static Instance: SingletonPerson = new SingletonPerson('Tony', 23, true)

  static getInstance(): SingletonPerson { return this.Instance }
}

const uniquePerson = SingletonPerson.getInstance()

console.log(uniquePerson)
console.log(uniquePerson.name)
console.log(uniquePerson.age)
console.log(uniquePerson.hasPet)


class LazySingletonPerson {
  private constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly hasPet: boolean
  ) { }

  private static Instance: LazySingletonPerson | null = null

  static getInstance(): LazySingletonPerson {
    if (this.Instance === null) {
      this.Instance = new LazySingletonPerson('Tony', 23, true)
    }
    return this.Instance
  }
}