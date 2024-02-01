const promesa = new Promise((resolve, reject) => {
    //Acción que se ejecutara
    setTimeout(() => {
        const exito = false

        if(exito){
            resolve('La Operación fue exitosa')
        }else{
            reject('La Operación no tuvo exito')
        }
    }, 4000)
})

promesa.then((mensaje) => {
    alert(mensaje)
})

promesa.catch((mensaje) => {
    alert(mensaje)
})