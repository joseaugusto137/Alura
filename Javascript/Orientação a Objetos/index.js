const User = require('./classes')
const Admin = require ('./herança-classe')

const novoUser = new User('Mariana', 'mariana@m.com', '15/07/1987')

// console.log(novoUser.exibirInfos())

// novoUser.#nome = 'Marcia'
// novoUser.#email = 'marcia@gmail.com'

// console.log(novoUser.exibirInfos())


const novoAdmin = new Admin('Rodrigo', 'r@r.com', '10/01/2000')
// console.log(novoAdmin.exibirInfos())

// console.log(novoAdmin.nome)
console.log(novoAdmin.nome)

novoAdmin.nome = 'André'

console.log(novoAdmin.nome)