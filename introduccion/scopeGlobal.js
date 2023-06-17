/* 📌 Global Scope o Variables Globales
	- Son las variables declaradas fuera de una funcion.
	- Podemos acceder a ellas desde cualquier parte del código.
	- Podemos usar const, let y var.
*/

var nombre = 'Anibal';
console.log(nombre);

const saludo = () => {
	console.log('Hola ' + nombre);

	nombre = 'Cesar';
	console.log('El nuevo nombre es: ' + nombre);
};
saludo();