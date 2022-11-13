// function User(nome, email){
//     this.nome = nome
//     this.email = email
    
//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`
//     }
//     }

// function Admin(role){
//     User.call(this, 'José Augusto', '137augusto@gmai.com')

//     this.role = role || 'estudante'
// }    

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')

// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = Object.create(user)
novoUser.init('José Augusto', '137augusto@gmmail.com')

console.log(novoUser.exibirInfos())

// console.log(user.isPrototypeOf(novoUser))