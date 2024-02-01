/*
	📌 Callbacks	
	Las callbacks son funciones que podemos pasar como parametro a una función.
	Esto con el fin de que una función puede ejecutar otra función.
*/

const obtenerPostUsuario = (usuario, callback) =>{
    console.log(`Òbteniendo Post de ${usuario}...`)

    setTimeout(() =>{
        let posts = ['Post1', 'Post2', 'Post3']
        callback(posts)
    }, 3000)
}

obtenerPostUsuario('Cesar', (posts) => {
    console.log(posts)
})