class Usuario {

    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(`El nombre completo es ${this.nombre} ${this.apellido}`)
    }

    addMascota(mascotaAAgregar){
        this.mascotas.push(mascotaAAgregar)
        // console.log(`Array de mascotas: ${this.mascotas}`)
    }

    countMascotas(){
        console.log(`El usuario tiene ${this.mascotas.length} mascotas`)
    }

    addBook(libro,autor){
        this.libros.push({Nombre: libro, Autor: autor})
        console.log(JSON.stringify(this.libros))
    }

    getBookName(){
        let nombresDeLibros=[]

        for(let i in this.libros)
        nombresDeLibros.push(this.libros[i].Nombre);

        console.log(nombresDeLibros)
    }

}

let usuario1 = new Usuario("Lucas", "Perez", [{Nombre: "Ficciones", Autor: "Borges"}], ["perro","gato"])

usuario1.getFullName()
usuario1.addMascota("tortuga")
usuario1.countMascotas()
usuario1.addBook("Rayuela","Cortázar")
usuario1.getBookName()