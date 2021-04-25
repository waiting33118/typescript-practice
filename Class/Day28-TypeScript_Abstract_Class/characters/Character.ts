import Weapon from '../weapons/Weapon'
import Role from './Role'

export default class Character {
  constructor(
    public readonly name: string,
    public readonly role: Role,
    private weaponRef: Weapon
  ) { }

  public introduce() {
    console.log(`
      Hi,I'm ${this.name} the ${this.role}!
    `)
  }

  public attack(target: Character) {
    // 第一個參數是指定攻擊者，是自己
    this.weaponRef.attack(this, target)
  }

  public equip(weapon: Weapon) {
    const { availableRoles: roles } = weapon

    if (roles.length === 0 || roles.indexOf(this.role) !== -1) {
      this.weaponRef = weapon

    } else {
      throw new Error(`${this.role} cannot equip ${weapon.name}`)
    }
  }
}