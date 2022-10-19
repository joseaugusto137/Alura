const client = {
    nome: 'André',
    idade: 36,
    cpf: '55874622511',
    email: 'andre@gmail.com',
    fones: ['55998523145', '21887569843'], 
    dependente: [{
    nome: 'Sarah',
    parentesco: 'filha',
    dataNasc: '20/03/2016'
}, {
    nome: 'José',
    parentesco: 'filho',
    dataNasc: '01/09/2020'
}
],

    saldo: 100,
    depositar: function(valor){
    this.saldo += valor
}
}



let relatorio = ""

for (let info in client){
    if(typeof client[info] === 'object' || typeof client[info] === 'function')
    {
        continue
    }else{
        relatorio += `
        ${info} => ${client[info]}
        `
    }
    
}

// console.log(typeof client.depositar)
console.log(relatorio)
