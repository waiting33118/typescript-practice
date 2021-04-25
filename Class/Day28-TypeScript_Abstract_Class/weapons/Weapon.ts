import Attack from "../abilities/Attack";
import MeleeAttack from "../abilities/MeleeAttack";
import Character from "../characters/Character";
import Role from "../characters/Role";

export default abstract class Weapon {
  abstract name = 'Your Weapon Name'
  abstract availableRoles: Role[] = []
  abstract attackStrategy: Attack = new MeleeAttack()

  public switchAttackStrategy(type: Attack) {
    this.attackStrategy = type
  }

  public attack(self: Character, target: Character) {
    this.attackStrategy.attack(self, target)
  }
}