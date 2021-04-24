import Attack from "../abilities/Attack";
import Role from "../characters/Role";

export default interface Weapon {
  readonly name: string
  availiableRoles: Role[]
  attackStrategy: Attack
}