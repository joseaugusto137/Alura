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
]
}


function oferecerSeguro (obj){
    const propsClientes = Object.keys(obj)

    if(propsClientes.includes("dependete")){
        console.log(`Oferta de Seguro de vida para
         ${obj.nome}`)
    }

}



 console.log(Object.entries(client))
 console.log(Object.values(client))

