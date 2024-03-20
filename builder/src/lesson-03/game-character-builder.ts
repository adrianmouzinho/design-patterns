import { Class, GameCharacter, Skill, Weapon } from './game-character'
import { IGameCharacterBuilder } from './game-character-builder.interface'

export class GameCharacterBuilder implements IGameCharacterBuilder {
  private gameCharacter?: GameCharacter

  constructor() {
    this.reset()
  }

  buildName(name: string): GameCharacterBuilder {
    this.gameCharacter!.name = name
    return this
  }

  buildClass(_class: Class): GameCharacterBuilder {
    this.gameCharacter!.class = _class
    return this
  }

  buildSkill(skill: Skill): GameCharacterBuilder {
    this.gameCharacter!.addSkill(skill)
    return this
  }

  buildWeapon(weapon: Weapon): GameCharacterBuilder {
    this.gameCharacter!.addWeapon(weapon)
    return this
  }

  public reset(): void {
    this.gameCharacter = new GameCharacter()
  }

  public getGameCharacter(): GameCharacter {
    const gameCharacter = this.gameCharacter!
    this.reset()
    return gameCharacter
  }
}