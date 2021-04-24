import Attack from '../abilities/Attack'
import Role from './Role'

export default class Character {
  constructor(
    public readonly name: string,
    public readonly role: Role,
    private attackRef: Attack
  ) { }

  public introduce() {
    console.log(`
      Hi,I'm ${this.name} the ${this.role}!
    `)
  }

  public attack(target: Character) {
    // 第一個參數是指定攻擊者，是自己
    this.attackRef.attack(this, target)
  }
}