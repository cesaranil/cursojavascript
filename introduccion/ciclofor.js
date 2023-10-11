const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara', 'Kratos']
//nombres.forEach((nombre) => {
//    console.log(nombre)
//})

/* 
	📌 Ciclo For
	Repite un bloque de código mientras se cumpla una condición.

	Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
	Expresión 2: Una condicion, mientras se cumpla se ejecutara el bloque de código.
	Expresión 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de código.
*/

/*for( let numero = 1; numero <=100; numero++){
    console.log(numero)
}

for(let numero = 50; numero > 0; numero--){
    console.log(numero)
}*/

for(let numero = 0; numero < nombres.length; numero++){
    console.log(nombres[numero])
}