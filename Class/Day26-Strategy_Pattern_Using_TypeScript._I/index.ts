import Swordsman from './characters/Swordsman'
import Warlock from './characters/Warlock'

const swordsman = new Swordsman('Tony')
const warlock = new Warlock('Toby')

swordsman.attack(warlock)
warlock.attack(swordsman)
