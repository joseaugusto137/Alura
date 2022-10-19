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

// client.dependente.push({
//     nome: 'José',
//     parentesco: 'filho',
//     dataNasc: '01/09/2020'
// })

// console.log(client)

const filhoMaisNovo = client.dependente.filter(dependente => dependente.dataNasc ==='01/09/2020' )

console.log(filhoMaisNovo[0].nome)