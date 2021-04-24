import MagicAttack from "../abilities/MagicAttack";
import Role from "../characters/Role";
import Weapon from "./Weapons";


export default class BasicWand implements Weapon {
  public readonly name = 'Basic Wand'

  public attackStrategy = new MagicAttack()

  public availiableRoles = [
    Role.Warlock
  ]
}