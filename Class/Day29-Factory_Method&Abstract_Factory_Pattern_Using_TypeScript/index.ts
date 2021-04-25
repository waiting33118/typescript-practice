import Swordsman from './characters/Swordsman'
import Warlock from './characters/Warlock'
import WeaponFactory from './weapons/WeaponFactory'
import Weapons from './weapons/Weapons'


const swordsman = new Swordsman('Tony')
const warlock = new Warlock('Toby')

const weaponFactory = new WeaponFactory()


swordsman.attack(warlock)

const dagger = weaponFactory.createWeapon(Weapons.Dagger)
swordsman.equip(dagger)

swordsman.attack(warlock)