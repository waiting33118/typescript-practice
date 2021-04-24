import Character from '../characters/Character'
import Attack from '../abilities/Attack'

export default class StabAttack implements Attack {
  public attack(self: Character, target: Character) {
    console.log(`${self.name} stabs through ${target.name} with his sword!`)
  }
}