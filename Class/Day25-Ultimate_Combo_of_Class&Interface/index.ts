enum Role {
  Swordsman = 'Swordsman',
  Warlock = 'Warlock',
  Highwayman = 'Highwayman',
  BountyHunter = 'BountyHunter',
  Monster = 'Monster'
}

interface ICharacter {
  name: string
  role: Role
  attack(target: ICharacter): void
}

interface IStats {
  health: number
  mana: number
  strength: number
  defense: number
}

class Test { }

class Character implements ICharacter, IStats {
  constructor(
    public name: string,
    public role: Role,
    public health: number = 50,
    public mana: number = 10,
    public strength: number = 10,
    public defense: number = 5
  ) { }

  public attack(target: ICharacter) {
    let verb: string

    switch (this.role) {
      case Role.Swordsman: verb = 'attacking'; break
      case Role.Warlock: verb = 'cursing'; break
      case Role.Highwayman: verb = 'ambushing'; break
      case Role.BountyHunter: verb = 'threatening'; break
      default: throw new Error(`${this.role} didn't exist`);
    }

    console.log(`${this.name} is ${verb} ${target.name}`)
  }
}

const character1 = new Character('Tony', Role.BountyHunter)
const character2 = new Character('Benny', Role.Highwayman)


character1.attack(character2)
character2.attack(character1)


let character = new Character('Test1', Role.Swordsman)

let testCharacter: ICharacter = new Character('Test2', Role.Warlock)

character.name
character.health

testCharacter.name


class Monster implements ICharacter {
  public role = Role.Monster

  constructor(
    public name: string,
  ) { }

  public attack(target: ICharacter) {
    console.log(
      `${this.name} is attacking the ${target.role} - ${target.name}`
    )
  }
}


let monster1 = new Monster('aaa')

monster1.attack(character1)




class BountyHunter extends Character {
  public hostages: ICharacter[] = []

  constructor(public name: string) {
    super(name, Role.BountyHunter)
  }

  public capture(target: ICharacter, successRate: number) {
    const randomNumber = Math.random()
    let message: string
    let targetTitle = `${target.name} the ${target.role}`

    if (randomNumber > (1 - successRate)) {
      this.hostages = [...this.hostages, target]
      message = `${this.name} has captured ${targetTitle}`
    } else {
      message = `${this.name} failed to capture ${targetTitle}`
    }

    console.log(message)
  }

  public sellHostages() {
    const totalPrice = this.hostages.length * 1000
    const hostagesInfo = this.hostages
      .map(hostage => `${hostage.name} the ${hostage.role}`).join('\n')

    console.log(`
      ${this.name} sells all the hostages, including:
      ${hostagesInfo}

      Recieve Gold ${totalPrice}
    `)
    this.hostages = []
  }
}

const hunter1 = new BountyHunter('qqq')
const wantedCharacter = new Character('C', Role.Highwayman)
const wantedMonster = new Monster('m')
const desperdo = new Character('www', Role.Highwayman)

hunter1.capture(wantedCharacter, 1)
hunter1.capture(wantedMonster, 0.5)
hunter1.capture(desperdo, 0.01)

hunter1.sellHostages()

wantedCharacter.attack(hunter1)
monster1.attack(hunter1)


const anyCharacter: ICharacter = new BountyHunter('Test')