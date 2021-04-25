import BasicArmour from "../armours/BasicArmour";
import BasicSword from "../weapons/BasicSword";
import EquipmentFactory from "./EquipmentFactory";

class SwordsmanEquipmentFactoty implements EquipmentFactory {
  public createWeapon() {
    return new BasicSword()
  }

  public createArmour() {
    return new BasicArmour()
  }
}

export default SwordsmanEquipmentFactoty