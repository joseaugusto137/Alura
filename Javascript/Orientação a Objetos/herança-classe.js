const User = require('./classes')
class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '10/04/1999')


// console.log(novoAdmin)
// console.log(novoAdmin.criarCurso('JS', 20))


module.exports = Admin