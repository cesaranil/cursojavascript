/*const saludo = (nombre = 'Amigo') => {
    console.log(`Hola ${nombre}!`)
}

saludo('Cesar')
saludo('Amor mio')
saludo('Usirumani')
saludo()*/

// MULTIPLES PARAMETROS

const operacion = (tipo, numero1, numero2) => {
    //console.log(numero1 + numero2)

    if(tipo === 'suma'){
        console.log(numero1 + numero2)
    }else if(tipo === 'resta'){
        console.log(numero1 - numero2)
    }
}

operacion('suma', 100, 24)
operacion('resta', 100, 50)

