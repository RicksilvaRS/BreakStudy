
const readline = require('readline')
const turno = readline.createInterface({
   
input: process.stdin,
output: process.stdout});
turno.question('Digite o alimento: ', (alimento) => {

    
    
    switch (alimento){
        case (alimento = "Proteína"):
            console.log("Carne")
            break;
        case (alimento="Carboidrato"):
            console.log("Batata Doce")
            break;
        case (alimento="Fruta"):
            console.log("Banana")
            break;
        case (alimento="Verdura"):
            console.log("Batata")
            break;
        default:
            console.log("Alimento Indisponível")
        }


    // if (hora === 'Manhã'){
    //     console.log("Bom dia!")
    //     } else if (hora === "Tarde") {
    //         console.log("Boa tarde!")
    //     } else {
    //         console.log("Boa noite!")
    //     }
       
 turno.close()
       
}
)
