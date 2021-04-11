"use strict";
class CPersonInfo {
    constructor(name = 'Tony', age = 23, hasPet = true) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }
    printInfo() {
        console.log(`
    Name: ${this.name}
    Age: ${this.age}
    Owns a Pet? ${this.hasPet}
    `);
    }
}
let tonyInfoFromClass = new CPersonInfo();
let bennyInfoFromClass = new CPersonInfo('Benny', 23, false);
console.log(tonyInfoFromClass);
tonyInfoFromClass.printInfo();
console.log(bennyInfoFromClass);
bennyInfoFromClass.printInfo();
