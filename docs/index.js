
console.log("Hola Mundo");
var nombre = "Santi";
var edad = 12;
var argentino = true;
var yo = [12, "Santi"];
var objeto = {
    años: 12,
    nombre: "Santi",
}

let a = 1;
let b = 3;

console.log(a + b)

if(a == 1){
    console.log("a es igual a 1")
}else{
    console.log("a no es igual a 1")
}
let aniversario = 50

console.log(aniversario < 50 ? "Todavía falta" : "Felicidades!")

for (let s = 0; s < 10; s++){
    console.log("Hola", s);
}

function mostrarMensaje(nombre){
    console.log("Hola", nombre)
}

mostrarMensaje("Santi")

function saludar(nombre){
    return "Hola, " + nombre;
}

console.log(saludar("Santi"));

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];

console.log(arr1[3]);

let obj1 = {
    titulo: "JavaScript es el mejor",
};

let obj2 = {
    titulo: "Aguante JavaScriiiiiiipt",
};

console.log(obj1, obj2);

for(prop in obj1){
    console.log(obj1[prop]);
}

function op1(){
    console.log("Hola 1");
}

function op2(){
    console.log("Hola 2");
}

function op3(){
    console.log("Hola 3");
}

function op4(numero) {
    return new Promise((resolve, reject) => {
        if(numero == 5){
            reject("Numero incorrecto");
        }
        console.log("Hola 4");
        resolve("Si!");
    });
}

async function mensajes(){
    op1();
    try{
    const resultado = await op4(2);
    console.log(resultado)
    }catch(error){
    console.log(error)
    }
    op2();
    op3();
    
}

mensajes();

class Mensaje{
    #nombre
    constructor(){
        this.#nombre = "Santi";
        console.log("Constructor", this.#nombre);
    }

warning(mensaje){
    console.warn(mensaje)
}

get nombre(){
    return this.#nombre
}

set nombre(value){
    this.#nombre =  value
}
}

function Log(){

}

const mensaje = new Mensaje();
mensaje.warning("Cuidado")
mensaje.nombre = "Santino"
console.log(mensaje.nombre)
const log = new Log()