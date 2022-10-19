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

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoupanca(valor){
        this.saldoPoup += valor
    }
}

const Jose = new ClientePoupanca('José Augusto', 'jose@gmail.com', '14555236699', 100, 200)

console.log(Jose)