import { train } from './train.js'

const args = process.argv.slice(2)
console.log("All arguments:", args)

const customIterations = args[0] ? parseInt(args[0], 10) : 10000
console.log(`Running train with ${customIterations} iterations`)

train(customIterations)
