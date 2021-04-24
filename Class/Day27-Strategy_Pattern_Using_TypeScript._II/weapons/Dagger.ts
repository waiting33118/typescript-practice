import StabAttack from "../abilities/StabAttack";
import Role from "../characters/Role";
import Weapon from "./Weapons";


export default class Dagger implements Weapon {
  public readonly name = 'Dagger'

  public attackStrategy = new StabAttack()

  public availiableRoles = []
}