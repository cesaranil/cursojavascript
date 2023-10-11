const nombres = ['Arturo', 'Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafaelo', 'Gema', 'Diana', 'Sara']

/* 
	📌 Break
	La sentencia break nos sirve para salir de bloques de tipo Switch.
	Pero tambien nos sirve para forzar la salida de un ciclo.
*/

/* 
for(let i = 0; i < nombres.length; i++){
    if(nombres[i][0] !== 'A'){
        console.log('ALTO! Hay un nombre que no Empieza por la letra A')
        console.log(nombres[i] + ' No Empieza por la letra A')
        break
    }

    console.log(nombres[i])
} */

/* 
	📌 Continue
	La sentencia continue nos sirve para saltar a la siguiente iteración.
*/

console.log('Lista de Invitados')
for(let i = 0; i < nombres.length; i++){
    if(nombres[i][0] === 'R'){
        continue
    }
    console.log(nombres[i])
}