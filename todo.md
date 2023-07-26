Realizar un algoritmo que defina una palabra es palindromo
Entrada: palabra
salida: es palindromo o no

function palindro(str){
const strRever = str.split('').reverse().join('');

return strRever === str ? 'es palindromo' : 'no es palindromo'
}

console.log(palindro ('hola'))
console.log(palindro ('perro'))
console.log(palindro ('oso'))
console.log(palindro ('ana'))
console.log(palindro ('casa'))
console.log(palindro ('somos'))

function palindro(men = parseInt(prompt("Inroduce una palabra: "))){

const texto = men.split('').reverse().join('');

return texto === men ? 'es palindromo' : 'no es palindromo';

console.log(palindro);
}*/
/*var teentitans = ["Robin", "BeastBoy", "Raven", "Ciborg", "StarFire"];

function heroes(){
var ligajusticia = ["Batman", "Superman", "Aquaman"];
console.log(teentitans + " " + ligajusticia);
}

heroes();

 var miNombre = "Troleaste en el clash";

function hey(){
console.log("Hola " + miNombre);
}

hey();

/_var ed = 18;
if(ed === 18){
console.log("Puedes votar xd");
} else if(ed > 18){
console.log("puedes volver a votar");
}else {
console.log("Nel we");
}_/

 var op1 = "piedra";
var op2 = "papel";
var op3 = "tijeras";

var a = function(use, cpu){
if(use != cpu){
if(use === op1 && cpu === op3){
console.log("Ganaste usando piedra")
}else if(use === op2 && cpu === op1){
console.log("Ganaste usando papel")
}else if(use === op3 && cpu === op2){
console.log("Ganaste usando tijeras")
}else {
console.log("La cpu gano")
} if(use == cpu){
console.log("Es un empate")
}
}
}
a(op1,op3);

var preguntamemano = prompt("Ingresa una opcion piedra, tijeras, papel");

var per = preguntamemano.toLowerCase();

var op = ["piedra", "tijeras", "papel"];

var ma = op[Math.floor(Math.random() * 3)];

switch (true){
case(per === ma):
alert("Empate");
break;
case(per === 1 && ma === 2):
alert("Ganaste");
break;
case(per === 3 && ma === 1):
alert("Ganaste");
break;
default:
alert("Perdiste");
}

var frutas = ["Manzana", "Platano", "Cereza"];

console.log(frutas);

var est = ["Maria", "Sergio", "Rosa"];

function saludar(est) {
console.log(`Hola, ${est}`);
}

for(var est of est){
saludar(est);
}

var est = ["Maria", "Sergio", "Rosa"];

function saludar(est) {
console.log(`Hola, ${est}`);
}

for(var i = 0; i < est.length; i++){
saludar(est[i]);
}

var est =["Maria", "Sergio","Rosa", "Dan"];

function sal(est){
console.log(`Hola, ${est}`);
}

while(est.length > 0){
console.log(est)
var estu = est.shift();
sal(estu);
}

var miAuto = {
marca: "Toyota",
modelo: "Corrolla",
anio: 2023,
detalleDelAuto: function(){
console.log(`Auto, ${this.modelo} ${this.anio}`);
}
};

function auto(marca, modelo, anio){
this.marca = marca;
this.modelo = modelo;
this.anio = anio;
}

var autoNuevo = new auto("tesla", "model 3", 2020);

var autoNUevo2 = new auto("Tesla", "ModelX", 2023);
var autoNuevo3 = new auto("Toyoto", "DRX", 2022);

function auto(marcA, modelO, aniO){
this.marca = marcA;
this.modelo = modelO;
this.anio = aniO;
}

var all = [];
for(let i= 0; 1 < 5; i++){
var marca = prompt("Ingresa una marca de cualquier auto que quieras: ");

var modelo = prompt("Ingresa cualquier modelo de auto que quieras" );

var anio = prompt("Ingresa el año del coche ")

all.push(new auto (marca, modelo, anio));

}

for (let i= 0; i < all.length; i++){
console.log(all[i]);
}

var articulos = [
{ nombre: "Bici", costo: 3000},
{ nombre: "Tv", costo: 2500},
{ nombre: "Libro", costo: 320},
{ nombre: "Celular", costo: 10000},
{ nombre: "Laptop", costo: 20000},
{ nombre: "Teclado", costo: 500},
{ nombre: "Audifonos", costo: 1700},
]

function pal(str){
var re = /[^A-Za-z0-9]/g;
str = str.toLowerCase().replace(re, ` `);
var a = str.length;
for(var i = 0; i < a/2; i++){
if (str[i] !== str[a - 1 - i]){
return false;
}
return true;
}

}

const tipsup = "basic";

if (tipsup == "free"){
return "Solo curos gratis";
}else if (tipsup == "basic"){
return "Casi todos los curosos durante un mes";
}else if(tipsup == "expert"){
return "Casi todos los curosos durante un año";
}else if(tipsup == "chingona"){
return "Todos los cursos para ti y una persona mas";
}else {
return "no tienes sub"
}

let typeofsub = [
"free",
"basic",
"expert",
"chingona"
];

for (let i = 0; i < 5; i++) {
console.log("El valor de i es: " + i);
}
1111
for (let i = 10; i >= 2; i--) {
console.log("El valor de i es: " + i);
}

let typesub = [
"solo los grapa we",
"casi todo por un mes",
"casi todo por un año",
"a prro todo por un año y una persona mas"
];

for (let i = 0; i < typeofsub.length; i++){
if(typesub == typeofsub[i]){
console.log(`a ${typeofsub[i]} xd ${typesub[i]}`)
}
}

let i = 0;
while (i < 4){
i++;
return `El valor es de ${i}`;
}
let a =10;
while (a >=2){
i--;
return `El valor es ${a}`;
}

while (res != `8`){
let pre = prompt(`¿Cunto es 4 + 4?`)
res = pre;
}

function imprimirPrimerElemntoArray(arr) {
console.log(arr[0])
}

imprimirPrimerElemntoArray([`Juanita`, `Nestor`, `Leo`])

function primer(arr) {
for (let i = 0; i < arr.length; i++){
console.log(arr[i])
}
}

primer([`Juan`, `XD`, `L`])

function im(obj) {
const arr = Object.values(obj);
for (let i = 0; i < arr.length; i++){
console.log(arr[i])
}
}

im(obj)

function tipo(sub) {
if (sub == "free"){
return "Solo curos gratis";
}else if (sub == "basic"){
return "Casi todos los curosos durante un mes";
}if(sub == "expert"){
return "Casi todos los curosos durante un año";
}if(sub == "chingona"){
return "Todos los cursos para ti y una persona mas";
}
console.warn("Nel perro ponga una")
}


function tipo(sub) {
    if (tipo[sub]){
        console.log(tipo[sub]);
        return;
}
    console.warn("Nel")
}