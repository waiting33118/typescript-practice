import MeleeAttack from "../abilities/MeleeAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicSword extends Weapon {
  public readonly name = 'Basic Sword'

  public availableRoles = [
    Role.Swordsman,
    Role.Highwayman
  ]

  public attackStrategy = new MeleeAttack()
}