class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const Jose = new Cliente('José Augusto', 'andre@gmail.com', '14895625578', 100)


Jose.exibirSaldo()

console.log(Jose)