import Role from './Role'
import Character from './Character'
import MagicAttack from '../abilities/MagicAttack'

export default class Warlock extends Character {
  constructor(name: string) {
    super(name, Role.Warlock, new MagicAttack())
  }
}