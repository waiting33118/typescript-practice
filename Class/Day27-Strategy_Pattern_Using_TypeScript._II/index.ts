import Swordsman from './characters/Swordsman'
import Warlock from './characters/Warlock'
import BasicSword from './weapons/BasicSword'
import Dagger from './weapons/Dagger'

const swordsman = new Swordsman('Tony')
const warlock = new Warlock('Toby')

swordsman.attack(warlock)

swordsman.equip(new Dagger())

swordsman.attack(warlock)

try {
  swordsman.equip(new BasicSword())
} catch (error) {
  console.log(error)
}
