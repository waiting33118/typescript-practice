import BasicSword from "./BasicSword";
import BasicWand from "./BasicWand";
import Dagger from "./Dagger";
import Weapon from "./Weapon";
import Weapons from "./Weapons";


export default class WeaponFactory {
  public createWeapon(type: Weapons): Weapon {
    switch (type) {
      case Weapons.BasicSword: return new BasicSword(); break
      case Weapons.BasicWand: return new BasicWand(); break
      case Weapons.Dagger: return new Dagger(); break

      default:
        throw new Error(`${Weapons[type]} isn't registerd!`);
    }
  }
}