import Attack from "../abilities/Attack";
import MeleeAttack from "../abilities/MeleeAttack";
import Character from "../characters/Character";
import Role from "../characters/Role";
import Equipment from "../equipments/Equipment";
import Equipments from "../equipments/Equipments";

export default abstract class Weapon implements Equipment {
  abstract name = 'Your Weapon Name'
  abstract availableRoles: Role[] = []
  abstract attackStrategy: Attack = new MeleeAttack()
  public type = Equipments.Weapon

  public switchAttackStrategy(type: Attack) {
    this.attackStrategy = type
  }

  public attack(self: Character, target: Character) {
    this.attackStrategy.attack(self, target)
  }
}