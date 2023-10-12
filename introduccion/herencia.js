class Usuario{
    constructor(usuario, password){
        this.usuario = usuario
        this.password = password
    }

    obtenerPost(){
        const post = ['post1', 'post2']
        return post
    }
}

class Moderador extends Usuario{
    constructor(usuario, password, permisos){
        super(usuario, password) // con esta palabra se copian todos los metodos y propiedades de la clase original incluyendo el constructor
        this.permisos = permisos
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`El Post con el ID ${id} ha sido borrado`)
        }else{
            console.log('No Tienes los permisos para borrar Post')
        }
    }
}

const usuario = new Usuario('Cesaranil', '123456')
console.log(usuario.obtenerPost())
//usuario.borrarPost(5)

const usuario2 = new Moderador('AndreaD', 'C2389e', ['borrar', 'editar'])
console.log(usuario2.obtenerPost())
console.log(usuario2.permisos)
usuario2.borrarPost(8)