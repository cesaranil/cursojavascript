const usuario = {
    edad: 17,
    pais: 'venezuela'    
}

switch(usuario.pais){
    case 'venezuela':
        console.log("El usuario es de Venezuela")
        break;
    case 'colombia':
        console.log("El usuario es de Colombia")
        break;
    case 'mexico':
        console.log("El usuario es de Mexico")
        break;
    default:
        console.log("El usuario es de otro pais")

}