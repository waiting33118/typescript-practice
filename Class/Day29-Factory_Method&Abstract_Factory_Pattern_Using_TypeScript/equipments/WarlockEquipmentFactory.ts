import BasicRobe from "../armours/BasicRobe";
import BasicWand from "../weapons/BasicWand";
import EquipmentFactory from "./EquipmentFactory";

class WarlockEquipmentFactory implements EquipmentFactory {
  public createWeapon() {
    return new BasicWand()
  }

  public createArmour() {
    return new BasicRobe()
  }
}

export default WarlockEquipmentFactory