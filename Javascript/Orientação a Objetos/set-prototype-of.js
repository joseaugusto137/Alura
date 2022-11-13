const user = { 
    nome: 'José Augusto',
    email: '137augusto@gmail', 
    nascimento: '27/10/1989',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = { 
    nome: 'Mariana',
    email: 'mariana@gmail', 
    nascimento: '15/08/1989',
    role: 'admin',
    ativo: true,
    criarCurso(){
        console.log('Curso Criado')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
