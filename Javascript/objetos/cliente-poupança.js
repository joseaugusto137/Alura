
function cliente (nome, cpf, email, saldo){
    this.nome = nome
    this. cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldopoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldopoup = saldopoup
}

const ju = new clientePoupanca('Ju', '145899654577', 'ju@gmail.com', 100, 200)

//console.log(ju)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldopoup += valor
}

ju.depositarPoup(30)

console.log(ju.saldopoup)

