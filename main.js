// console.log("holii, buenos días!!")
// // alert("CUIDADO!!")
// console.log(variable)
let variable = "Variable";
// let x;
// x="holi"
// const y = "x"
// y="algo"
// console.log(variable)
var dato;

dato = 10;

variable = "Hola, Mundo!";
// console.log(variable)
// const firstName = "Sofía";
// const age = 32;
const isCool = true;
const x = null;
const y = undefined;
// console.log(y)
let z; // undefined
// console.log(z)
z = "algo";
// console.log(z)
// console.log(typeof variable)
// Mi nombre es Sofía y tengo 32 años
// concatenar
// console.log("Mi nombre es " + firstName + " y tengo " + age + " años");
// // TEMPLATE LITERAL
// console.log(`Mi nombre es ${firstName} y tengo ${age} años`);

let texto = "Este es nuestro texto";
// console.log(texto.split(""))

const numbers = [1, 2, 3, 7, 5, "cosas", true];
// const fruits = ["apples", "oranges", "pears", "grapes"];

// console.log(numbers[3]);
// I like oranges and apples
// concatenar
// console.log("I like " + fruits[1] + " and " + fruits[0]);
// //TEMPLATE LITERAL
// console.log(`I like ${fruits[1]} and ${fruits[0]}`);

const fruits = ["apples", "oranges", "pears", "grapes"];

// fruits[5] = null;

// fruits.push("strawberries");

// fruits.unshift("mangos");

// fruits.pop();
// fruits.splice(2, 1) para borras elementos especificos
// console.log(fruits);

// console.log(fruits.indexOf("oranges"));
// const person = {
//   name: "Edu",
//   age: 30,
//   hobbies: [
//     "music",
//     "movies",
//     [
//       {
//         name: "Beisbol",
//         team: true,
//       },
//       {
//         name: "Tenis",
//         team: false,
//       },
//     ],
//   ],
//   address: {
//     street: "50 Main st",
//     city: "Boston",
//     state: "MA",
//   },
// };
// person.age = 25;
// person.email = "edu@gmail.com";
// console.log(person);
// console.log(person.hobbies[2][0]["team"]);
// console.log(person.hobbies[2][0].team);
const usuarios = [
  {
    name: "Edu",
    age: 30,
  },
  {
    name: "Edu",
    age: 30,
  },
  {
    name: "Edu",
    age: 30,
  },
];
usuarios[0].age = 20;
// console.log(usuarios);

let age = 18;

// if (age >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }

let person = {
  age: 18,
  sonOfBoss: true,
};
// = operador de asignación
// == comparador
// === comparador tipo de datos
if (person.age >= 18) {
  console.log("Eres mayor de edad");
} else if (person.sonOfBoss == true) {
  console.log("No eres mayor de edad pero eres el hijo del jefe");
} else {
  console.log("Eres menor de edad");
}
// console.log(person.age >= 18)
switch (true) {
  case person.age >= 18:
    console.log("Eres mayor de edad");
    break;
  case person.sonOfBoss == true:
    console.log("No eres mayor de edad pero eres el hijo del jefe");
    break;
  default:
    console.log("Eres menor de edad");
    break;
}
// let diaActual = new Date();
// const dia_de_la_semana = diaActual.getDay()
// switch (200) {
//   case 1:
//     console.log("Es Lunes");
//     break;
//   case 2:
//     console.log("Es Martes");
//     break;
//   case 3:
//     console.log("Es Miércoles");
//     break;
//   case 4:
//     console.log("Es Jueves");
//     break;
//   case 5:
//     console.log("Es viernes");
//     break;
//   case 6:
//   case 7:
//     console.log("Es fin de semana");
//     break;
//   default:
//     console.log("Ese día no existe");
// }
let a = 5;
a = a + 5;
a = 5;
// let b = a / 2
console.log(a);
// console.log(b);

const age2 = 20;

if (age2 !== 17) console.log("Eres muy joven para beber alcohol");

if (age2 > 18 || age2 == 21) {
  console.log("Es falso");
} else {
  console.log("Es true");
}

const firstName = "Sofía";

if (age <= 17 || firstName === "Iván")
  console.log("Eres menor de edad o te llamas " + firstName);

if (age <= 17 && firstName === "Iván")
  console.log("Eres menor de edad y te llamas " + firstName);

if (!firstName) console.log(firstName + " no está definido");

const age3 = 17;

// const eresMayorDeEdad = age3 >= 18  ? "Eres mayor de edad" : "No eres mayor de edad";

age3 >= 18 ? console.log("Eres mayor edad") : console.log("Eres menor");
// Crea una variable llamada nota que sea un número que represente las calificación obtenida de un estudiante. Luego, desarrolla un condicional que muestre por consola un mensaje según la nota del estudiante de la siguiente manera:

// Si la nota de es mayor o igual a 9, muestra "Excelente desempeño académico".
// Si nota está entre 7 y hasta 9(sin incluir), muestra "Buen desempeño académico".
// Si nota está entre 5 y hasta 7(sin incluir), muestra "Normal desempeño académico".
// Si su nota está por debajo de 5, muestra "Necesita mejorar su desempeño académico".

let nota = "tres";

if (nota >= 9) {
  console.log("Excelente desempeño académico");
} else if (nota >= 7 && nota < 9) {
  console.log("Buen desempeño académico");
} else if (nota >= 5 && nota < 7) {
  console.log("Normal desempeño académico");
} else if (nota < 5) {
  console.log("Necesita mejorar su desempeño académico");
} else {
  console.log("Esta nota no es valida");
}

// let email = "sofia@gmail.com"
// if(email =="sofia@gmail.com"){
//   console.log("lo habeis hecho bien")
// }
const obj = {
  a: {
    b:true,
    c:["hola",2,3]
  },
  d:5,
  f:"hola"
};

if (typeof obj === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// if (obj.a === "Hola") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

if (typeof obj.a.b === "boolean") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

if (typeof obj.a.c[1] === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.d === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (obj.d > 4 && obj.d < 8) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.f === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (obj.f.length === 4) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}




