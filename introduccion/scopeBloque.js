/* 📌 Block Scope / Alcance de tipo bloque
	- Pertenecen las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

const edad = 19
if(edad >= 18){
    const permitido = true
    console.log(permitido)

    if(true){
        console.log(permitido)
    }

    const mifuncion = () => {
        console.log(permitido)
    }
    mifuncion()
}

const permitido = "SI"
console.log(permitido)