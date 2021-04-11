class CPersonInfo {
  name: string
  age: number
  hasPet: boolean

  constructor(name: string = 'Tony', age: number = 23, hasPet: boolean = true) {
    this.name = name
    this.age = age
    this.hasPet = hasPet
  }

  printInfo() {
    console.log(`
    Name: ${this.name}
    Age: ${this.age}
    Owns a Pet? ${this.hasPet}
    `)
  }
}

let tonyInfoFromClass = new CPersonInfo()
let bennyInfoFromClass = new CPersonInfo('Benny', 23, false)
console.log(tonyInfoFromClass)
tonyInfoFromClass.printInfo()
console.log(bennyInfoFromClass)
bennyInfoFromClass.printInfo()


// let wrongClass = new CPersonInfo('Test', '22', false)  // error type


