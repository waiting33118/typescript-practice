import Character from '../characters/Character'
import Attack from '../abilities/Attack'

export default class MagicAttack implements Attack {
  public attack(self: Character, target: Character) {
    console.log(`${self.name} casts magic and pierces through ${target.name}`)
  }
}