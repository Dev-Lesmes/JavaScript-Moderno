// ---------- Inicio Ejercicio 1 (mensaje, console y document) ---------
/*

// Cuadros de diálogo

prompt('recibe datp');                //mensaje que captura variable
alert('error')                        //mensaje informativo
confirm("¿deseas quitarlo?")          //true o false

// Mostrar en consola del navegador

console.time('Ejecución');            // Habilita la ecución de tiempo
console.log([1,2,3]);                 // Muestra los datos en una linea
console.table([1,2,3]);               // Muestra los datos en una tabla
console.warn('amarillo')              // Mensaje en amarillo
console.error('rojo')                 // Mensaje en rojo
console.timeEnd('Ejecución');         // Finaliza y muestra el tiempo de ejecución

//document contiene todo el html (DOM)

document.querySelector('h1')            // selecciona una etiqueta del DOM
document.getElementById('app').innerHTML = `Bienvenido`;  //incruta en el html un string


*/
// ---------- Fin Ejercicio 1 ---------


// ---------- Inicio Ejercicio 2 (estilos y variables)---------

// Variables - Estilos (camelcase,underscore,Pascal case)

/*
var primerNombre = 'camelcase'          //Más recomendada para JS
var primer_nombre = 'underscore'
var PrimerNombre = 'Pascal case'
*/

// 3 maneras de crear variables (var, let , const)
/*
//var
si se declara var esta solo queda de forma local al metodo que se va a utilizar.
mientra si no se usa var aplica para todo el documento *.js
fuente:https://es.stackoverflow.com/questions/60382/en-que-momento-usar-var-en-javascript-y-por-que-es-necesario
*/

/*
//let se usa siempre que el valor puede ser modificado en el futuro pero no se puede crear una idefinida inicial o genera error ejemplo:

let letNombre // undifined
let letNombre = 'underscore' // no se puede volver a declarar ej: undifined a underscore

// ejemplo 2: esta es la manera correcta
letNombre = "cambio su valor"
letNombre = "sobre escribir"
console.log(letNombre)
*/

/*
//una constante siempre se debe inicializar y no se puede cambiar su valor

//const producto         // error se debe inicializar
const productoFunciona = "inicializada con string"
console.log(productoFunciona)
*/

// ---------- Fin Ejercicio 2 ---------


// ---------- Inicio Ejercicio 3 (concatenar) ---------

/*
let nombre = prompt('Cual es tu nombre');
let edad = prompt('Cual es tu edad');

console.log('i\'am ')

//concatenar de la manera clasica (+)
document.getElementById('concatenar_clasico').innerHTML = 'i\'am ' + nombre +", "+"i'am " + edad + " years old";

//concatenar variables modernas (``) tambien llamadas templates literals
document.getElementById('concatenar_moderno').innerHTML = `i'am  ${nombre}, i'am ${edad} years old`;
*/

// ---------- Fin Ejercicio 3 ---------

// ---------- inicio Ejercicio 4 (metodos en las variables de cadena de texto) ---

/*
let nombre = "Camilo L"

console.log(nombre.length)                        //Cantidad de carácteres solo aplica en texto
console.log(nombre.concat(' ','de Bogotá'))       //Concatenar
console.log(nombre.toLowerCase())                 //String a minúsculas
console.log(nombre.toUpperCase())                 //String a mayúsculas
console.log(nombre.indexOf("L"))                  //Me indica en que numero se encuentra ese caracter (7), sino lo encuentra genera (-1)
console.log(nombre.toUpperCase())                 //String a mayúsculas
console.log(nombre.substring(0,6))                //toma el texto y lo corta usando el indice
console.log(nombre.slice(-8,4))                   // toma un “trozo” de un array, indicado por un índice de inicio y un índice final 
console.log(nombre.split(' '))                    //divide por el espacio la cadena
console.log(nombre.replace('L','Lesmes'))         //reemplaza la cadena
console.log(nombre.includes('Camilo'))            //retorna un boleano si el contenido se encuentra True
console.log(nombre.repeat(3))                 //repite la cadena el numero de veces que se le indique
*/
// ---------- Fin Ejercicio 4 ---------


// ---------- inicio Ejercicio 5 (Operadores Aritméticos) ---
/*
//Se crean constantes porque no quiero que el valor de la variable cambie
const numero1 = 30;
      numero2 = 20;
      numero3 = 20.20;
      numero4 = .1020;
      numero5 = -3;

//let porque el valor va cambiar
let resultado;

//suma
resultado = numero1 + numero2;
//resta
resultado = numero1 - numero2;
//Multiplicación
resultado = numero1 * numero2;
//División
resultado = numero1 / numero2;
//Modulo (Residuo)
resultado = numero1 % numero2;
//Pi
resultado = Math.PI; //3.14
//Redondeo estandar
resultado = Math.round(2.4);
//Redondeo positivo
resultado = Math.ceil(2.4); //3
//redondeo negativo
resultado = Math.floor(2.4); //2
//Raiz cuadrada
resultado = Math.sqrt(144); //12
//Numero absoluto
resultado = Math.abs(numero5); //3
//Potencia
resultado = Math.pow(8,2); //64
//Minimo
resultado = Math.min(3,6,5,1,9,7,8); //1
//Maximo
resultado = Math.max(3,6,5,1,9,7,8); //9
//Numero Aleatorio
resultado = Math.random(); //0.548866781700361
//Jerarquía de las operaciones incluida
resultado = 10 + 20 *5 //110
resultado = (10 + 20) * 5 //150 
//20% de descuente de 3 productos
resultado = (10 + 20 + 70) * .20 //20

console.warn("resultado es: ",resultado)

//incremento positivo
let incremento = 5
++incremento                               //6
incremento += 2                              
console.warn("Incremento es: ",incremento) //8

//decremento
--incremento
--incremento //6
incremento -=3
console.error("Incremento es: ",incremento) //3

*/
// ---------- Fin Ejercicio 5 ---------

// ---------- inicio Ejercicio 6 (Tipos de datos) ---
/*
//Tipo Primitivos
let valor;                                             //undefined;
valor = undefined                                      //undefined;
valor = 'juan';                                        //string
valor = true;                                          //boolean
valor = Symbol('Simbolo')                              //symbol
valor = null;                                          //object null

valor = 20;                                            //number
valor = 20.20;                                         //number
valor = -30;                                           //number

//Referencia o de tipo objeto
valor = [1,2,3,4]                                      //object array
valor = {valor:'juan', profesion:'desarrollador'}      //object object
valor = new Date()                                     //object 

console.log(typeof valor)
*/
// ---------- Fin Ejercicio 6 ---------


// ---------- inicio Ejercicio 7 (operadores de comparación) ---
/*
const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

console.log(numero1>numero2);                         //false
console.log(numero1<numero2);                         //true

//Comparador igual
//comparador no tan estricto omite el tipo (==)
console.log(20 == numero3);                           //true
console.log("no estricto: ", null == undefined)        //true
//comparador estricto por tipo y elemento (===)
console.log(20 === numero3);                          //true
console.log("Estricto: ", null === undefined)        //true

console.log('hola' == ' hola');                       //false

//Diferente
console.log("Diferente: ",2 != 3)                     //true

//A-Z menor peso que a-z (JS moderno)
console.error("minuscas son mayores que las mayusculas: ",'z'>'A') //True
*/
// ---------- Fin Ejercicio 7 ---------

// ---------- inicio Ejercicio 8 (Convertir String a numero) ---
/*
const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

console.log(typeof numero1) //string

//No los suma, lo concatena
console.log("resultado es: ",numero1 + numero2)                   //5010

//Convertir string a Numero
console.log("resultado Number: ", Number(numero1) + numero2)      //60
console.log("resultado parseInt: ", parseInt(numero1) + numero2)  //60
console.log("resultado NaN: ", Number(numero3));                  //Nan (No es un numero)

//Number (Js Moderno)
let dato;
dato = Number("20");                //20
dato = Number('20.10931')           //20.10931
dato = Number(true)                 //1                 
dato = Number(false)                //0
dato = Number(null)                 //0
dato = Number(undefined)            //Nan (No es un numero)
dato = Number('hola mundo')         //Nan (No es un numero)
dato = Number([1,2,3,4])            //Nan (No es un numero)
console.log("Convert Number: ",dato)

//ParseFloat y ParseInt
datos = parseInt('100');            //100
datos = parseInt('100');            //100
datos = parseFloat('100');          //100
datos = parseFloat('100.2030');     //100.2030
console.log("Convert parse: ",datos)

// toFixed
datofixed = '18.12356463'
console.log("Fixed parse: ", parseFloat(datofixed).toFixed(2)) //18.12
*/
// ---------- Fin Ejercicio 8 ---------

// ---------- inicio Ejercicio 9 (Convertir numero a String) ---
/*
let cp;

cp = 90210;
console.warn(cp.length); //undefined solo aplica para cadena de texto

cp = String(cp);
console.warn(cp.length); //5
console.log(typeof cp);  //string

let dato;
dato = '4' + '4';
console.log(dato.length); //2

//Boleanos
boolean_true = true;
boolean_false = false;
boolean_true = String(boolean_true);
console.log("Boolean Str: ",boolean_true.length); //4
console.log("Boolean false: ",boolean_false.length); //undefined

//arreglo
arreglo = [1,2,3];
console.log("arreglo: ",arreglo.length); //3

//tostring();
dato = 20;   //20
dato = true; //true
dato = null; //error
dato = dato.toString();

console.error(dato);
console.error(dato.length);
*/

// ---------- Fin Ejercicio 9 ---------


// ---------- inicio Ejercicio 10 (template literals o string template) ---

//no van a variar
const producto1 = 'Pizza',
      precio1 = 30,
      producto2 = 'Hamburguesa',
      precio2 = 40;

//Forma vieja de crear un html (String template)

//la variable va cambiar
/*
let html;
html = '<ul>'+
       '<li>Orden: ' + producto1 + '</li>' +
       '<li>Precio: ' + precio1 + '</li>'  +
       '<li>Orden: ' + producto2 + '</li>' +
       '<li>Precio: ' + precio2 + '</li>'  +
       '<hr>'+
       '<li>Total: '+ (precio1+precio2) + '</li>' +
      '</ul>';

       console.log(html)
       
//pintamos en el DOM
document.getElementById('ejercicio_10_template_forma_vieja').innerHTML = html;
*/

/*
//Template Literals (JS moderno)
//en la forma moderna puede contener funciones en sus templates (JS MODERNO)
let hml_literals;

hml_literals = `
            <ul>
                  <li>Orden: ${producto1} </li>
                  <li>Precio: ${precio1} </li>
                  <li>Orden: ${producto2} </li>
                  <li>Precio: ${precio2} </li>
                  <hr>
                  <li>Total: ${total(precio1,precio2)}  </li>
            </ul>
            `;

function total(precio1,precio2){
      return precio1 + precio2;
}

document.getElementById('ejercicio_10_template_forma_moderna_literals').innerHTML = hml_literals;
*/

// ---------- Fin Ejercicio 10 ---------


// ---------- inicio Ejercicio 11 (Arreglos y sus metodos) ---
/*
//Con Const no se pueden reasignar variables pero en el arreglo se pueden añadir elementos
const_arrego = [1,2,3];
const_arrego[3]=4;
const_arrego.push(5)
console.log(const_arrego)


//Areglo de numero (indice 0 - 5)
const numeros = [10,20,30,40,50]
console.warn(numeros);

//Areglo de Strings(método alternativo)
const meses = new Array('Enero','Febrero','Marzo','Abril');
console.log(meses);

//Areglo mezclado
const mezclado = ['hola', 20, true, null, false, undefined];
console.log(mezclado);

//para acceder al arreglo es por indices
console.log(mezclado[0]); //hola
console.log(mezclado[5]); //undefined

//    Metodos**

//comprobar si es un arreglo
console.log('¿Es un array?', Array.isArray(mezclado));

//incluir un elemento al arreglo
const añadir = new Array('Enero','Marzo','Abril');

//añade en indice solicitado pero reemplaza si existe (Marzo)
añadir[1] = 'Febrero';

//añade al final del arreglo
añadir.push('Mayo');

//añade al incio del arreglo
añadir.unshift('Mes 0');

//encontrar un elemento en el arreglo
console.log(añadir.indexOf('Mayo')); //4 (indice de la ubicación)

//Eliminar un elemento de un arreglo (el ultimo)
añadir.pop();

//Eliminar un elemento del arreglo (el primero)
añadir.shift();

console.log(añadir); //["Enero", "Febrero", "Abril"]

//Quitar de un rango
añadir.splice(2,1); //["Enero", "Febrero"]
añadir.splice(0,2); //["Abril"]

añadir.reverse(); //revierte el orden

//unir un arreglo con otro
let arreglo1 = [1,2,3],
      arreglo2 = [9.8,7];

console.log(arreglo1.concat(arreglo2)) //[1, 2, 3, 9.8, 7]

//ordenar un arreglo de texto (JS Moderno)
const frutas = ['Platano','Manzana','Fresa','Naranja','Zanahiria'];
frutas.sort();
console.log(frutas);

//ordenar un arreglo de numeros queda mal
arreglo1 = [4,10,3,2,105,1,7,8];
arreglo1.sort();
console.log("No correcto: ",arreglo1); // [1, 10, 105, 2, 3, 4, 7, 8]

//funcion para ordenar con numero bien
arreglo1.sort(function(x,y){
      return x - y //menor a mayor
      //return y - x //mayor a menor 
})
console.log("Arreglado: ", arreglo1);
*/
// ---------- Fin Ejercicio 11 ---------


// ---------- inicio Ejercicio 12 (Objetos) ---
/*
const persona = {
      nombre:'Camilo',
      apellido:'Lesmes',
      profesion:'Desarrollador',
      email:'correo@correo.com',
      edad:20,
      musica:['Rock','Salsa'],
      ubicacion:{
            ciudad:'Bogotá',
            pais:'Colombia'
      },
      //se pueden añadir funciones
      nacimiento: function(){
            //this permite un llamado dentro de los objetos
            return new Date().getFullYear() - this.edad;
      }
};

//visualizar el datos de la función del arreglo
console.warn(persona.nacimiento());

console.log(persona); //Camilo

console.log(persona.nombre); //Camilo
console.log(persona.musica[1]); //Salsa
console.log(persona.ubicacion.pais); //Colombia (JS Moderno)
console.log(persona['ubicacion']['pais']); //Colombia 

//Aplican los métodos del arreglo
persona.musica.push('Alternativo');
console.log(persona.musica);
*/
// ---------- Fin Ejercicio 12 ---------


// ---------- inicio Ejercicio 13 (Arreglo de objetos) ---
/*
const autos = [
      {modelo:'Mustang' , motor:6.2 },
      {modelo:'Camaro', motor:6.3 },
      {modelo:'Challenger', motor:6.3 },
];

console.log(autos) //array
console.log(autos.length) //3
console.log(autos[0].modelo) //Mustang


//For que va recorrer 3 veces para ver cada objecto.


//index empieza en cero, que vaya aumentando de uno en uno, ////hasta que cumpla el numero de array (3).

for (let index = 0; index < autos.length; index++) {
      console.log("Motor: ",autos[index].motor)
      //string literal
      console.log(`El modelo es: ${autos[index].modelo} y su motor es: ${autos[index].motor}`)
      
}
*/
// ---------- Fin Ejercicio 13 ---------


// ---------- inicio Ejercicio 14 (Funciones) ---

//Function Declarations
/*
function sumar(a,b) {
      return(a+b)      
}
let suma = sumar(8,9)
suma = sumar(10,19)
console.log(`la suma es: ${suma}`)

//forma clasica de validar el for
function saludar(nombre) {
      if(typeof nombre === 'undefined'){
            nombre = 'Visitante'
      }
      return `Hola ${nombre}`     
}

//forma modenar (JS Moderno) dando un valor por defecto
function saludar(nombre = 'Visitante'){
      return `Hola ${nombre}`     
}

let saludo;
saludo = saludar()
console.log(`Resultado: ${saludo}`)


//Function expression
const suma = function (a=0,b=0) {
      return a+b;      
}
console.log(suma(21,18)); //39
console.log(suma(2)); //2
*/
// ---------- Fin Ejercicio 14 ---------

// ---------- inicio Ejercicio 14 (Funciones tipos ) ---
/*
// IIFE Funciones que se declaran y se invocan inmediatamente
(function (tecnologia) {
      console.log(`Aprendiendo: ${tecnologia}`);
})('IIFE');

//Método de propiedad
const musica = {
      reproducir: function(id){
            console.log(`Reprodución con el ID: ${id}`);
      },
      pausar: function(){
            console.log(`Pause la canción`);
      },
}

//los metodos también pueden guardarse / crearse fuera del objeto
musica.borrar = function(id){
      console.log(`Borrando la canción ID: ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);
*/
// ---------- Fin Ejercicio 14 ---------

// ---------- inicio Ejercicio 15 (Try Catch - Finally ) ---
/*
//Funciòn que no existe
try {
      
      algo();

} catch (error) {
      console.log(error); //algo is not defined
} finally{
      console.warn('ejecuta de todos los modos (si existe o no) ');
      obternerClientes();
}

function obternerClientes() {
      console.log('Descargando...');
      //se ejecuta despúes de 3 segundos
      setTimeout(function(){
            console.log('completado')
      },3000);
      
}
*/
// ---------- Fin Ejercicio 15 ---------

// ---------- inicio Ejercicio 16 (Fechas ) ---
/*
//Objeto Date
const diaHoy = new Date()

let valor;

//**Métodos de Date **

//get permite traer información
//Mes
valor = diaHoy.getMonth(); //3
//Día
valor = diaHoy.getDay();   //2
valor = diaHoy.getDate();  //7
//Minutos
valor = diaHoy.getMinutes(); //30
//Hora
valor = diaHoy.getHours(); //2
//Milisegundos desde 1970
valor = diaHoy.getTime(); //1586244677570
//Obtener el año
valor = diaHoy.getFullYear(); //2020

//set modifica el metodo
valor = diaHoy.setFullYear(2018);
valor = diaHoy.getFullYear();//2018

console.log(valor);
*/
// ---------- Fin Ejercicio 16 ---------

// ---------- inicio Ejercicio 17 (Estructuras de control JS ) ---
/*
//IF ELSE 
const edad = 18;

if(edad >= 18){
      console.log('Si puedes entrar al sitio')
} else{
      console.log('No puedes entrar al sitio')
}

let puntaje; //undefined

if(typeof puntaje !='undefined'){
      console.log(`El puntaje fue de ${puntaje}`);
}else{
      console.log(`No hay puntaje`);

}

//ELSEIF 
//Operador && (and) debe ser exacto

let hora = 25;

if(hora > 0 && hora <= 11){
      console.log("Buenos días");
}else if (hora > 11 && hora <=17){
      console.log("Buenas tardes") ;     
}else if (hora > 17 && hora <=24){
      console.log("Buenas Noches");
}else{
      console.log("Hora fuera de rango");
}

//operador || (OR) Si se cumple una o la otra

let   efectivo = 250,
      credito = 250,
      disponible = efectivo + credito,
      totalCarrito = 500;

if (totalCarrito < efectivo || totalCarrito < credito){
      console.log('Puede pagar');
}else if (totalCarrito<=disponible){
      console.log('Page con ambos');
}else{
      console.log("No puede pagar");
}

//Ternario IF

const logueado = true;
console.log(logueado === true ? 'Si se logueo' : 'No se logueo') 

// Switch
//Ejemplo 1
const metodoPago = 'bitcoins';

switch(metodoPago){
      case 'efectivo':
            console.log(`el usuario pago con ${metodoPago}`)
            break;
      case 'cheque':
            console.log(`El usuario pago con ${metodoPago}`)
      case 'tarjeta':
            console.log(`El usuario pago con ${metodoPago}`)
      default:
            console.log('Metodo de pago no soportado')
}
//Ejemplo 2
let mes;
switch(new Date().getMonth()){
      case 0:
            mes = 'Enero';
            break;
      case 1:
            mes = 'Febrero';
            break;
      case 2:
            mes = 'Marzo';
            break;
      case 3:
            mes = 'Abril';
            break;
      case 4:
            mes = 'Mayo';
            break;
      case 5:
            mes = 'Junio';
            break;
      case 6:
            mes = 'Julio';
            break;
      case 7:
            mes = 'Agosto';
            break;
      case 8:
            mes = 'Septiembre';
            break;
      case 9:
            mes = 'Octubre';
            break;
      case 10:
            mes = 'Noviembre';
            break;
      case 11:
            mes = 'Diciembre';
            break;
}

console.log(`Este mes es: ${mes}`)

*/
// ---------- Fin Ejercicio 17 ---------
/*
//For Loops 1
for (let i = 0; i < 10; i++ ){
      if(i % 2 == 0){ //modulo 0
            console.log(`Numero ${i} es par`);
      }
      else{
            console.log(`Numero ${i} es impar`);
      }

}

//For Loops 2
for (let i = 1; i <= 4; i++ ){
      if(i == 2){
            console.log('voy en el 2');
            continue;// (es igual al else)
      }
      console.log(`${i}`) // 1 voy en el 2 3 4

}

//For Loops 3
for (let i = 1; i <= 4; i++ ){
      if(i == 2){
            console.log('voy en el 2');
            break;// (termina la ejecución)
      }
      console.log(`${i}`) // 1 voy en el 2

}

// For loop comparar 1
const arregloProductos1 = ['Camisa','Boleto','Lapiz']
for (let i = 0; i < arregloProductos1.length ; i++ ){
      console.warn(`For - Producto #${i} se añadio: ${arregloProductos1[i]}`) // Camisa Boleto Lapiz

}

// While comparar 1
const arregloProductos2 = ['Camisa','Boleto','Lapiz']
i = 0
while(i<arregloProductos2.length){
      console.error(`While - Producto #${i} se añadio: ${arregloProductos2[i]}`)
      i++
}

// Do While (corre el codigo al menos una vez sin importar si la condición se cumplo
i = 10
do{
      console.warn(`Numero: ${i}`) //10

      i++;
}while(i<4); //no se ejecuta porque no cumple la condición

*/

// ---------- Fin Ejercicio 18 ---------

// ---------- inicio Ejercicio 19 ( ForEach, maps y iteradores) ---

// **ForEach (arreglos)**
const pendientes = ['Tarea','Comer','Aprender JS']

pendientes.forEach(function(pendiente, index){
      console.log(`${index} : ${pendiente}`); //0 : Tarea 1 : Comer  2 : Aprender JS
});

// **map para recorrer un arreglo de objetos**
const carrito = [
      {id: 1, producto:'Libro'},
      {id: 2, producto:'Camisa'},
      {id: 3, producto:'Guitarra'},
]

//almacena en una variable y extrae la información

const nombreProducto = carrito.map(function(carrito){
      return carrito.producto
})
console.warn(nombreProducto) //["Libro", "Camisa", "Guitarra"]

//**Iteradores**

const automovil = {
      modelo:'Camaro',
      motor:150,
      marca:'Ford',
}

for (let auto in automovil){
      console.log(`${auto} : ${automovil[auto]}`) //modelo : Camaro motor : 150
}

const ciudades = ['Londres','New York', 'Madrid']
const ordenes = new Set([123,231,131]) 
const datos = new Map();
datos.set('nombre','juan');
datos.set('profesion','desarollador web')

console.log(ciudades) // (3) ["Londres", "New York", "Madrid"]
console.log(ordenes)  // Set(3){123, 231, 131}
console.log(datos)    // Map(2) {"nombre" => "juan", "profesion" => "desarollador web"}


/*          Iterator

** entries : devuelve una matriz cuyos elementos son matrices correspondientes a los [key, value] ej:([0, "Londres"])
** values: devuelve los valores de las propiedades enumerables ej: (londres)
** keys:  devuelve el indice
** default: imprimen los valores que vienen por defecto
*/

// entries a las ciudades
for(let ciudad of ciudades.entries()){
      console.log("entries --> ",ciudad) 
      /*
      (2) [0, "Londres"]
      0: 0
      1: "Londres"
      length: 2
      */
}

//values a las ciudades
for(let ciudad_val of ciudades.values()){
      console.warn("ciudad_val --> ",ciudad_val) 
      /*
      Londres
      New York
      Madrid
      */
}

//keys a las ciudades
for(let ciudad_keys of ciudades.keys()){
      console.error("ciudad_keys --> ",ciudad_keys) 
      /*
      0
      1
      2
      */
}


// entries para las ordenes
for(let orden of ordenes.entries()){
      //en el set la llave no existe lo que hace que el valor se repita
      console.log("entries --> ",orden) 
      /*
      [123, 123]
      0: 123
      1: 123
      length: 2
      */
}

//values a las ordenes
for(let orden_val of ordenes.values()){
      console.warn("orden_val --> ",orden_val) 
      /*
      123
      231
      131
      */
}

//keys a las ordenes
for(let orden_keys of ordenes.keys()){
      console.error("orden_keys --> ",orden_keys) 
      /*
      123
      231
      131
      */
}

// entries para las Map
for(let dato of datos.entries()){
      //en el set la llave no existe lo que hace que el valor se repita
      console.log("entries --> ",dato) 
      /*
      (2) ["nombre", "juan"] 
      0: "nombre"1: "juan" 
      length: 2__proto__: Array(0)
      */
}

//values a las MAP
for(let dato_val of datos.values()){
      console.warn("dato_val --> ",dato_val) 
      /*
      123
      juan
      desarollador web
      */
}

//keys a las ordenes
for(let dato_keys of datos.keys()){
      console.error("dato_keys --> ",dato_keys) 
      /*
      nombre
      profesion
      */
}

// ---------- Fin Ejercicio 19 ---------


// ---------- inicio Ejercicio 19 ( iterador string ejemplo con html) ---
const texto = "texto dos"

for (let i = 0 ; i < texto.length; i++){
      console.log(texto[i]) //t e x t o   d o s
}

//JS MODERNO
for (let letra in texto){
      console.warn(letra) //0 1 2 3 4 5 6 7 8
}

for (let letra of texto){
      console.log(letra) //t e x t o   d o s
}

const enlaces = document.getElementsByTagName('a')
for (let enlace of enlaces){
      console.log(enlace) //  <a href="http://instagram.com"></a>
      console.log(enlace.href) //http://adobe.com/
}

// ---------- Fin Ejercicio 19 ---------
