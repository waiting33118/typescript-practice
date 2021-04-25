import MagicAttack from "../abilities/MagicAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicWand extends Weapon {
  public readonly name = 'Basic Wand'

  public availableRoles = [
    Role.Warlock
  ]

  public attackStrategy = new MagicAttack()

}