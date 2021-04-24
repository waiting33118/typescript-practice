import Attack from '../abilities/Attack'
import Weapon from '../weapons/Weapons'
import Role from './Role'

export default class Character {
  private attackRef: Attack

  constructor(
    public readonly name: string,
    public readonly role: Role,
    private weaponRef: Weapon
  ) {
    this.attackRef = this.weaponRef.attackStrategy
  }

  public introduce() {
    console.log(`
      Hi,I'm ${this.name} the ${this.role}!
    `)
  }

  public attack(target: Character) {
    // 第一個參數是指定攻擊者，是自己
    this.attackRef.attack(this, target)
  }

  public switchAttackStrategy(type: Attack) {
    this.attackRef = type
  }

  public equip(weapon: Weapon) {
    const { availiableRoles: roles } = weapon

    if (roles.length === 0 || roles.indexOf(this.role) !== -1) {
      console.log(`${this.name} has equipped ${weapon.name}`)
      this.weaponRef = weapon
      this.attackRef = this.weaponRef.attackStrategy
    } else {
      throw new Error(`${this.role} cannot equip ${weapon.name}`);
    }
  }
}