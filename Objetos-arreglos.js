// Objetos 
// Walter Cobacango 
// Acceder a las claves 
const user = {
    name: "Ana",
    lastName: "Pérez",
    age: 28,
    address: {
        city: "Quito",
        telephone: "0991234567",
        street: "Avenida 10 de Agosto"
    },
    friends: ['Pedro', 'María', 'Camila', 'Luis'],
    state: true,
    sendMail() {
        return `Enviar correo a ${this.friends[0]}`; // Cambiado para español
    },
    sendNotification: function () {
        return `Enviar notificación a ${this.friends[3]}`; // Cambiado para español
    }
};

console.log(user.state);                     
console.log(user.sendMail());                 
console.log(user.sendNotification());           

// AGREGA Y ELEMINAR ELEMENTOS DEL OBJETOS 
const user3 = {
    name: "Ana",
    lastName: "Pérez",
    age: 28,
    address: {
        city: "Quito",
        telephone: "0991234567",
        street: "Avenida 10 de Agosto"
    },
    friends: ['Pedro', 'María', 'Camila', 'Luis'],
    sendMail() {
        return `Enviar correo a ${this.friends[0]}`; // Cambiado para español
    },
    sendNotification: function () {
        return `Enviar notificación a ${this.friends[3]}`; // Cambiado para español
    }
};
// Agregar un par de clave y valor al objeto
user3.image = "t.ly/Rhgs";  // Puedes cambiar esto a un enlace de imagen relacionado con Multicines
// Eliminar un par de clave y valor del objeto
delete user3.age; // Se elimina la propiedad 'age' del objeto
console.log(user3);

/// DECOSNTRUCCION DE OBJETOS 
const user3 = {
    firstName: "Ana",
    surname: "Pérez",
    ageS: 28,
    address1: {
        city: "Quito",
        telephone: "0991234567",
        streets: {
            principal: "Avenida 10 de Agosto",
            secondary: "Calle 24 de Mayo"
        }
    }
};

// Desestructuración de propiedades del objeto
const { firstName, surname, ageS, address1 } = user3;
console.log(firstName, surname, ageS, address1);

//// CONEGLAR 
const movieUser = {
    firstName: "Carlos",
    lastName: "Martínez",
    age: 30,
    address: {
        city: "Quito",
        telephone: "0999876543",
        street: "Calle de las Estrellas"
    },
    favoriteMovies: ["Inception", "The Godfather", "Interstellar", "Parasite"]
};
Object.freeze(movieUser);
console.log(Object.isFrozen(movieUser)); // Verifica si el objeto está congelado
// Intentar agregar una nueva propiedad
movieUser.image = "t.ly/movie123"; // Esto no tendrá efecto debido a Object.freeze
console.log(movieUser); // Muestra el objeto original sin la nueva propiedad



// Arrays

//Metodos 
const profileUser= ["Walter","Cobacango",19,true,{ciudad:"quito"}]
const movie = ["Venom 3","Todos los idiomas"]
const salas =["Sala normal", "Sala Vip"]

// Agrega al final del arreglo
profileUser.push(movie)
// Agregar al inicio del arreglo
profileUser.unshift(salas)
console.log(profileUser);

// POP Y SHIFT
const Cliente_multicine= ["Walter","Cobacnago",19,"Miebro Multicine",{ciudad:"quito"}]
// Elimina el elemento del final del arreglo
Cliente_multicine.pop(Cliente_multicine)
// Elimina el elemento del inicio del arreglo
Cliente_multicine.shift(Cliente_multicine)
console.log(Cliente_multicine);

// FIND
const Movies = ["Venom 3","Sonrie 2","Un Panda en Africa","Misfit"]
// método find
const movie1 = Movies.find((e)=>e==="Venom 3")
console.log(movie1);

const movie2 = Movies.find((e)=>e==="Un Panda en Africa")
console.log(movie2);




///// findIndex
const Movies1 = ["Venom 3","Sonrie 2","Un Panda en Africa","Misfit"]
// método findIndex
const encontrar = Movies1.findIndex((f)=>f==="Joker")
console.log(encontrar)


// Concat
const nameCines = ["Multicines","SuperCines","Cinemex","CinePlex"]
const place = ["Condado","Orellana","Carapungo","Mexico"]
// método concat
const newNames = nameCines.concat(place)
console.log(newNames);

//// includes 
// Funciona únicamente con arreglos de un solo valor
const profileUser1= ["Walter","Cobacango",19,true,{ciudad:"quito"}]
console.log(profileUser1.includes(19))
console.log(profileUser1.includes(['quito']))


//// some 
// Funciona para arreglos de un solo valor y arreglo de objetos

const friends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
const usersCine =[
    {
        name:"Walter",
        lastName:"Cobacango",
        age:19
    },
    {
        name:"Azucena",
        lastName:"Acero",
        age:50
    }
]
const existe = usersCine.some(u=>u.name==="Walter")
console.log(existe)
const verifica = friends.some(f=>f==="Carlos")
console.log(verifica)





///  Reduce 
const estudiantes = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];
const carritoCompras = [
    {   movie: "Venom 3",
        qty: 1,
        price: 14.50
    },
    {   product: "Palomitas",
        qty: 2,
        price: 10,
    },
    {
        product: "Combo 3",
        qty: 1,
        price: 20,
    }
]
const resultado = estudiantes.reduce((pre, act) => pre + act.age, 0);
console.log("Edad de los estudiantes: ",resultado);
const totalProductos = carritoCompras.reduce((pre,act)=>pre+act.qty,0)
console.log("Total de productos: ",totalProductos);
const totalPagar = carritoCompras.reduce((pre,act)=>pre+act.price,0)
console.log("Total a pagar con IVA: ",totalPagar+(totalPagar*0.12))

/// Deconstruccion 
const dataNewUser = ["Ana", "Pérez", 28, true, { ciudad: "Quito" }, ["Películas", "Series"]];
const [name, lastname, age, active, address, preferences] = dataNewUser;
console.log(name);        // Muestra: Ana
console.log(lastname);    // Muestra: Pérez
console.log(age);         // Muestra: 28
console.log(active);      // Muestra: true
console.log(address);     // Muestra: { ciudad: "Quito" }
console.log(preferences);  // Muestra: ["Películas", "Series"]
// Saltar el valor en un arreglo
const [accion, , comedia] = ['🎬 Acción', '🎭 Drama', '😂 Comedia'];
console.log(accion);     // Muestra: 🎬 Acción
console.log(comedia);    // Muestra: 😂 Comedia
// Desestructurando un arreglo anidado
const categorias = ['🎥 Nuevas', '🎞️ Clásicas', '📺 Series', ['🎬 Acción', '😂 Comedia', '🕵️‍♂️ Suspenso']];
const generos = categorias[3];
const suspenso = generos[2];
console.log(suspenso);   // Muestra: 🕵️‍♂️ Suspenso
  