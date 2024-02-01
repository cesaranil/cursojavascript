/*
	📌 Callbacks	
	Las callbacks son funciones que podemos pasar como parametro a una función.
	Esto con el fin de que una función puede ejecutar otra función.
*/

const obtenerPostUsuario = (usuario, callback) =>{
    console.log(`Òbteniendo Post de ${usuario}...`)

    // Simulamos que tarda 2 segundos en obtener los posts.
    setTimeout(() =>{

        // Una vez que obtiene los posts ejecuta el callback para devolverlos.
        let posts = ['Post1', 'Post2', 'Post3']
        callback(posts)
    }, 3000)
}

// A la funcion de obtenerPosts le podemos pasar un callback que se ejecutara cuando termine de obtener los posts.
obtenerPostUsuario('Cesar', (posts) => {
    console.log(posts)
})