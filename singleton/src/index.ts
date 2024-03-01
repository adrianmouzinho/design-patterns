import { UserManager } from './user-manager/user-manager'

const userManager = UserManager.getInstance()

userManager.create({ username: 'adrian', password: '123' })
userManager.create({ username: 'willame', password: '123' })
userManager.create({ username: 'adrian', password: '123' })

userManager.authenticate({ username: 'adrian', password: '123' })
userManager.authenticate({ username: 'adrian', password: '1234' })

console.log(userManager.getAll())
