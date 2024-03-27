const { stdin } = require('process')
const readline = require('readline')
const regiao =readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

regiao.question('qual o seu país? ', (pais) =>{
    if (pais.toLowerCase() == 'brasil'){
        console.log('brasileiro')
    } else {
        console.log('você é estrangeiro')
    }
    regiao.close()
})