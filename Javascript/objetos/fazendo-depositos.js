const client = {
    nome: 'André',
    idade: 36,
    cpf: '55874622511',
    email: 'andre@gmail.com',
    fones: ['55998523145', '21887569843'] 
}

client.dependente = [{
    nome: 'Sarah',
    parentesco: 'filha',
    dataNasc: '20/03/2016'
}, {
    nome: 'José',
    parentesco: 'filho',
    dataNasc: '01/09/2020'
}]

client.saldo = 100
client.depositar = function(valor){
    this.saldo += valor
}

console.log(client.saldo)
client.depositar(30)
console.log(client.saldo)