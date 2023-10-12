class Usuario{
    constructor(nombre, correo){
        this.nombre = nombre
        this.correo = correo
    }

    static borrar(id_usuario){
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`)
    }

    static registrados = 1200
}

//const usuario = new Usuario('Cesar', 'correo@correo')
//usuario.borrar(1)
Usuario.borrar(1)
console.log(Usuario.registrados)