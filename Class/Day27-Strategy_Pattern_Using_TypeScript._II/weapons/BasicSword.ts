import MeleeAttack from "../abilities/MeleeAttack";
import Role from "../characters/Role";
import Weapon from "./Weapons";


export default class BasicSword implements Weapon {
  public readonly name = 'Basic Sword'

  public attackStrategy = new MeleeAttack()

  public availiableRoles = [
    Role.Swordsman,
    Role.Highwayman
  ]
}