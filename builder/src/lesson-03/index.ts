import { GameCharacterBuilder } from './game-character-builder'

const builder = new GameCharacterBuilder()

const character1 = builder
  .buildName('Adrian Mouzinho')
  .buildClass('Atirador de Longo Alcance')
  .buildSkill('Mira Precisa')
  .buildWeapon('Sniper')
  .buildWeapon('Metralhadora')
  .getGameCharacter()

const character2 = builder
  .buildName('John Doe')
  .buildClass('Suporte')
  .buildSkill('Camuflagem')
  .buildWeapon('Metralhadora')
  .getGameCharacter()

console.log(character1)
console.log(character2)