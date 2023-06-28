/*
	📌 Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
/*const frutas = ['Manzana', 'Pera', 'Piña', 'Melon']
const comidaFavorita = ['Hamburguesa', 'Pizza', ...frutas]
console.log(comidaFavorita)

const datosLogin = {
    correo: 'correo@correo.com',
    password: '1234'
}

const usuario = {
    nombre: 'Cesar',
    edad: '28',
    ...datosLogin
}
console.log(usuario)*/

//============================================================================================

/*
	📌 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/

/*const registroUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales)
}

registroUsuario('Cesar', 'cesar@cesar.com', 'Venezuela')*/

//============================================================================================


/*
	📌 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

const amigos = ['Usirumani', 'Omely', 'Mariaceleste']
//const primerAmigo = amigos[0]
//const segundoAmigo = amigos[1]

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos
console.log(primerAmigo)

const personas = {
    nombre: 'Cesar Orellana',
    edad: '28',
    pais: 'Venezuela'
}

const {nombre, edad} = personas
console.log(nombre, edad)

const mostrarEdad = ({ nombre, edad }) => {
	console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad(personas);