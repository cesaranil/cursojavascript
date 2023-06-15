/*Ejemplo #1:
const usuario = {
    edad: 27,
    pais: 'Venezuela',
    ticket: true
};

if(usuario.edad > 17){
    console.log("El usuario es mayor de edad y puede ingresar")
}else{
    console.log("El usuario es menor de edad y no puede ingresar")
}*/

//Ejemplo #2: - Combinando Operadores
/*const usuario = {
    edad: 27,
    pais: 'Venezuela',
    ticket: true
};

if(usuario.edad >= 18 && usuario.ticket){
    console.log("El usuario es mayor de edad y tiene un ticket y puede ingresar")
}else{
    console.log("El usuario es menor de edad o no tiene un ticket debido a esto no puede ingresar")
}*/

//Ejemplo #3: - Anidando condicionales

/*const usuario = {
    edad: 17,
    pais: 'Venezuela',
    ticket: false
};

if(usuario.edad >= 18){
    if(usuario.ticket){
        console.log("El usuario es mayor de edad y tiene un ticket")        
    }else{
        console.log("El usuario es mayor de edad, pero no tiene ticket")
    }    
}else{
    console.log("El usuario es menor de edad")
}*/

//Ejemplo #4: - elseif

const usuario = {
    edad: 17,
    pais: 'Venezuela',
    ticket: false
};

if(usuario.pais === "Venezuela"){
    console.log("El usuario es de venezuela")
}else if(usuario.pais === "Colombia"){
    console.log("El usuario es de Colombia")
}else if(usuario.pais === "Mexico"){
    console.log("El usuario es de Mexico")
} else {
    console.log("El usuario es de otro pais")
}