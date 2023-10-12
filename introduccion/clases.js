/*
	📌 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/

class Usuario {
    tipo = "usuario"

    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido

        console.log('Nuevo Usuario Registrado!')
    }

    obtenerNombreCompleto(){
        console.log('Obteniendo Datos...')
        return `${this.nombre} ${this.apellido}`
    }
}

const usuario = new Usuario('Cesar', 'Orellana')
console.log(usuario.obtenerNombreCompleto())

const usuario2 = new Usuario('Andrea', 'Arrieta')
console.log(usuario2.nombre)
