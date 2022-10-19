const clientes = [
    {
        nome: 'André',
        cpf: '14896621023',
        dependentes: [{
            nome: 'Sara',
            parentesco:'filha',
            dataNasc: '20/03/2019'
        },
        {
        nome: 'Sonia',
        parentesco: 'filha',
        dataNasc: '04/05/2020'
        }],
    },
    {
        nome: 'Juliana',
        cpf: '14789522222',
        dependentes: [{
            nome: 'Sofia',
            parentesco: 'filha',
            dataNasc: '30/04/2017'
        }]
    }]

    // --------------------- operador de espalhamento (...)

    const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

    console.log(listaDependentes)
    console.table(listaDependentes)