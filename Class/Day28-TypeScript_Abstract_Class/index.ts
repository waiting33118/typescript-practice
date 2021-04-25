import StabAttack from './abilities/StabAttack'
import Swordsman from './characters/Swordsman'
import Warlock from './characters/Warlock'
import BasicSword from './weapons/BasicSword'

const swordUsingStab = new BasicSword()
swordUsingStab.switchAttackStrategy(new StabAttack())

const swordsman = new Swordsman('Tony')
const warlock = new Warlock('Toby')

swordsman.attack(warlock)

swordsman.equip(swordUsingStab)
swordsman.attack(warlock)

