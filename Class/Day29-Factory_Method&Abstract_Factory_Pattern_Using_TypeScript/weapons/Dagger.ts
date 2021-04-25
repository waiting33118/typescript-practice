import StabAttack from "../abilities/StabAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class Dagger extends Weapon {
  public readonly name = 'Dagger'

  public availableRoles: Role[] = []

  public attackStrategy = new StabAttack()

}