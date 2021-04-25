import Role from "../characters/Role";
import Equipment from "../equipments/Equipment";
import Equipments from "../equipments/Equipments";

export default abstract class Armour implements Equipment {
  abstract name: string
  public type = Equipments.Armour
  abstract availableRoles: Role[]
}