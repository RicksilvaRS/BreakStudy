const readline = require('readline');
const voto = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

voto.question('Digite sua idade para saber se seu voto ', (votar) => {
    if (votar >= 18 && votar <= 70) {
        
        console.log('VOTO OBRIGATÓRIO');
    } else if (votar>=16 && votar <=17 || votar >= 71) {
         console.log('VOTO FACULTATIVO')
    } 
    else {
        console.log('NÃO VOTA');
    }
    voto.close();
});