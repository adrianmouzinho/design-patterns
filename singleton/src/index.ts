import { LogsRegistry } from './logs-registry/logs-registry'
import { UserManager } from './user-manager/user-manager'

// Gerenciador de usuários
// const userManager = UserManager.getInstance()

// userManager.create({ username: 'adrian', password: '123' })
// userManager.create({ username: 'willame', password: '123' })
// userManager.create({ username: 'adrian', password: '123' })

// userManager.authenticate({ username: 'adrian', password: '123' })
// userManager.authenticate({ username: 'adrian', password: '1234' })

// console.log(userManager.getAll())

// Registrador de logs
const logsRegistry = LogsRegistry.getInstance()

logsRegistry.register('Primeiro log.')
logsRegistry.register('Segundo log.')
console.log(logsRegistry.list())
