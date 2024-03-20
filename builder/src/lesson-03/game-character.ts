export type Class = 'Atirador de Longo Alcance' | 'Suporte' | 'Assaltante'
export type Skill = 'Recarga Rápida' | 'Camuflagem' | 'Mira Precisa' | 'Curativo Rápido'
export type Weapon = 'Pistola' | 'Rifle de Assalto' | 'Shotgun' | 'Sniper' | 'Metralhadora'

export class GameCharacter {
  private _name?: string
  private _class?: Class
  private _skills?: Skill[] = []
  private _weapons?: Weapon[] = []

  public get name(): string | undefined {
    return this._name
  }

  public set name(name: string) {
    this._name = name
  }

  public get class(): string | undefined {
    return this._class
  }

  public set class(_class: Class) {
    this._class = _class
  }

  public get skills(): Skill[] | undefined {
    return this._skills
  }

  public addSkill(skill: Skill) {
    this._skills?.push(skill)
  }

  public get weapons(): Weapon[] | undefined {
    return this._weapons
  }

  public addWeapon(weapon: Weapon) {
    this._weapons?.push(weapon)
  }
}