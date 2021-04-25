import Role from './Role'
import Character from './Character'
import SwordsmanEquipmentFactoty from '../equipments/SwordsmanEquipmentFactory'

export default class Swordsman extends Character {
  constructor(name: string) {
    let SEF = new SwordsmanEquipmentFactoty()
    super(name, Role.Swordsman, SEF.createWeapon(), SEF.createArmour())
  }
}