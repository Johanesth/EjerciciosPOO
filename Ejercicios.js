
    // 1. Haz una clase llamada Persona que siga las siguientes condiciones:
	//  Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	//  calcularIMC()
	//  esMayorDeEdad()
	//  El constructor pide nombre, edad,sexo,peso y altura
    //  Generar el RFC a partir de el nombre, edad y sexo

    class Persona{
        constructor(nombre,edad,sexo,peso,altura){
            this._name = nombre
            this._age = edad
            this._gender = sexo
            this._weight = peso
            this._height = altura
            this._IMC =""
            this._rfc = ""

        }

        calcularIMC(){
            this._IMC=("El IMC de",this._name,"es",((this._weight)/(this._height*this._height)))
            console.log(this._IMC)
        }

        esMayorDeEdad(){
            if (this._age>=18){
                console.log(this._name,"es mayor de Edad")
            } else{
                console.log(this._name,"es menor de Edad")
            }
        }

        generarRFC(){
            this._rfc = (this._name.slice(0,4)
            + this._age + this._gender[0])
            console.log("El RFC de",this._name,"es",this._rfc)
        }

    }

    var persona1 = new Persona("Emmanuel",38,"Masculino",90,1.73)
    var persona2 = new Persona("Alan",29,"Masculino",61,1.69)

    console.log(persona1)
    persona1.calcularIMC()
    persona1.esMayorDeEdad()
    persona1.generarRFC()
    console.log(persona1)
    console.log("")
    console.log(persona2)
    persona2.calcularIMC()
    persona2.esMayorDeEdad()
    persona2.generarRFC()
    console.log(persona2)
    console.log("")


    //  2.  Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	//  -Titular y cantidad
	//  -ingresar(cantidad)
	//  -retirar(cantidad)
	//  Hacer las validaciones previas
    //  Como regla de negocio no debe de tener más de $900 y menos de $10

    class Cuenta {
        constructor(titular,cantidad){
            this._titular = titular
            this._cantidad = cantidad
        }
        ingresar(deposito){
            if (this._cantidad+deposito<900 && this._cantidad+deposito>10){
                this._cantidad += deposito
                console.log("Tu nueva cantidad es",this._cantidad)
            }else{
                console.log("No cumple con la regla del banco, tu saldo es de",this._cantidad,"tu deposito de",deposito,"no se concreto")
            }
        }
        retirar(retiro){
            if (this._cantidad-retiro<900 && this._cantidad-retiro>10){
                this._cantidad -= retiro
                console.log("Tu nueva cantidad es",this._cantidad)
            }else{
                console.log("No cumple con la regla del banco, tu saldo es de",this._cantidad,"tu retiro de",retiro,"no se concreto")
            }
        }
    }

    var cuenta1 = new Cuenta("Emmanuel",850)
    var cuenta2 = new Cuenta("Alan",899)

    cuenta1.ingresar(150)
    cuenta1.ingresar(30)
    cuenta1.retirar(100)
    cuenta1.retirar(1000)

    cuenta2.ingresar(150)
    cuenta2.ingresar(30)
    cuenta2.retirar(100)
    cuenta2.retirar(1000)

    //  3. El manchado ------- esta en ingles
    //  The Reading List
    //  An object-oriented book-list!
    
    //  Create a class BookList
        //  BookLists should have the following properties:
            //  Number of books marked as read
            //  Number of books marked not read yet
            //  A reference to the next book to read (book object)
            //  A reference to the current book being read (book object)
            //  A reference to the last book read (book object)
            //  An array of all the Books
    class Booklist{
        constructor(){
            this.readBooks      = 0
            this.notReadBooks   = 0
            this.nextBook       = {}
            this.currentBook    = {}
            this.lastBook       = {}
            this.books          = []
            this.counter        = 0
        }

        //  Every Booklist should have a few methods:
            //  .add(book),  should add a book to the books list.
            //  .finishCurrentBook(), should mark the book that is currently being read as "read"
                //  Give it a read date of new Date(Date.now())
                //  Change the last book read to be the book that just got finished
                //  Change the current book to be the next book to be read
                //  Change the next book to be read property to be the first unread book you find in the list of books
            //  Booklists and Books might need more methods than that. Try to think of more that might be useful.
        add(book){
            if ( book.read === true) {
                this.readBooks++
            } else {
                this.notReadBooks++
            }
            // resolver con cola
            this.nextBook = books[this.counter]
            this.books += book
        }
        finishCurrentBook(book){
            this.readBooks++
            this.notReadBooks--
            book.readDate = Date.now()
            this.lastBook = book
            this.currentBook = this.nextBook
            this.counter++
            this.nextBook = books[this.counter]
        }
    }
    //  Create another class called Book
        //  Each Book should have several properties:
            //  Title
            //  Genre
            //  Author
            //  Read (true or false)
            //  Read date, can be blank, otherwise needs to be a JS Date() object
    class Book{
        constructor(title, genre, author, read){
            this.title      = title
            this.genre      = genre
            this.author     = author
            this.read       = read
            this.readDate   = 0   
        }
    }

    var coding1 = new Book("Eloquent JavaScript, Second Edition","Coding", "Marijn Haverbeke",false)
    var coding2 = new Book("Learning JavaScript Design Patterns","Coding", "Addy Osmani",false)
    var coding3 = new Book("Speaking JavaScript","Coding", "Axel Rauschmayer",false)
    var coding4 = new Book("Programming JavaScript Applications","Coding","Eric Elliott",false)
    var coding5 = new Book("Understanding ECMAScript 6","Coding","Nicholas C. Zakas",false)
    var coding6 = new Book("You Don't Know JS","Coding","Kyle Simpson",false)
    var coding7 = new Book("Git Pocket Guide","Coding","Richard E. Silverman",false)
    var coding8 = new Book("Designing Evolvable Web APIs with ASP.NET","Coding","Glenn Block, et al.",false)
    
    var books = [coding1,coding2,coding3,coding4,coding5,coding6,coding7,coding8]
    // console.log(books)

    var EMGC = new Booklist()
    console.log(EMGC)

    for(var i=0; i<books.length; i++){
        EMGC.add(books[i])
    }
    console.log(EMGC)

    EMGC.finishCurrentBook(coding4)
    console.log(coding4)
    console.log(EMGC)