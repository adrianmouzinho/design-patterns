import { Class, Skill, Weapon } from './game-character'
import { GameCharacterBuilder } from './game-character-builder'

export interface IGameCharacterBuilder {
  buildName(name: string): GameCharacterBuilder
  buildClass(_class: Class): GameCharacterBuilder
  buildSkill(skill: Skill): GameCharacterBuilder
  buildWeapon(weapon: Weapon): GameCharacterBuilder
}