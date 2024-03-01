import chalk from 'chalk'
import { User, UserProps } from './user'

export class UserManager {
  // eslint-disable-next-line
  private static instance: UserManager
  private users: User[] = []

  // eslint-disable-next-line
  private constructor() {}

  public static getInstance(): UserManager {
    if (!UserManager.instance) {
      UserManager.instance = new UserManager()
    }

    return UserManager.instance
  }

  public create({ username, password }: UserProps): User | null {
    const existingUser = this.users.find((user) => user.username === username)

    if (existingUser) {
      console.log(chalk.red('User already exists.'))
      return null
    }

    const user = new User({ username, password })
    this.users.push(user)

    console.log(chalk.green('User created successfully!'))

    return user
  }

  public authenticate({ username, password }: UserProps): boolean {
    const existingUser = this.users.find((user) => user.username === username)

    if (!existingUser) {
      console.log(chalk.red('User not found.'))
      return false
    }

    if (existingUser.password !== password) {
      console.log(chalk.red('Invalid password.'))
      return false
    }

    console.log(chalk.green('User signed in successfully!'))

    return true
  }

  public getAll(): User[] {
    return this.users
  }
}
