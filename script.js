
// Calcule distancia entre click event del usuario y wally
var traedistancia = function (event, wally) {
 var diffX = event.offsetX - wally.x;
 var diffY = event.offsetY - wally.y;
 return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// Genere un string representando la diferencia, este se va a devolver que tan cerca estoy de wally
var traeAyuda = function (distancia) {
 if (distancia < 70) {
   return "Quemando!";

   } else if (distancia < 100) {
     return "Muy caliente";
   } else if (distancia < 110) {
     return "Caliente";
   } else if (distancia <160) {
     return "Tibio";
   } else if (distancia < 200) {
     return "Frio";
   } else if (distancia < 250) {
     return "Muy frio";
   } else {
     return "Congelado!";
   }
 };

 // Crea variables
 var clicks = 0;

 // coloco la ubicacion de wally en la imagen
var wally = {
   x: 0,
   y: 350
 };

 // Agrega el manejo de clicks
$("#mapa1").click(function (event) {
   clicks++;

   // Calcula distancia entre el click y wally
  var distancia = traedistancia(event, wally);
   // Convierte la distancia en ayuda
  var ayuda = traeAyuda(distancia);

   // Actualizar el elemento #distancia
  $("#distancia").text(ayuda); // muestro en mi archivo con la etiqueta p de identificador #distancia, la ayuda al usuario

   // Si está muy cerca dile que ganó, encontró a wally!
  if (distancia < 50) {
     alert("Encontraste a Wally en " + clicks + " clicks!");

   }
 });

 //buscando al segundo wally
 var clicks = 0;

 // coloco la ubicacion de wally en la imagen
var wally1 = {
   x: 260,
   y: 60
 };

 // Agrega el manejo de clicks
$("#mapa2").click(function (event) {
   clicks++;

   // Calcula distancia entre el click y wally
  var distancia = traedistancia(event, wally1);
   // Convierte la distancia en ayuda
  var ayuda = traeAyuda(distancia);

   // Actualizar el elemento #distancia
  $("#distancia").text(ayuda); // muestro en mi archivo con la etiqueta p de identificador #distancia, la ayuda al usuario

   // Si está muy cerca dile que ganó, encontró a wally!
  if (distancia < 30) {
     alert("Encontraste a Wally en " + clicks + " clicks!");

   }
 });

 //buscando al tercer wally
 var clicks = 0;

 // coloco la ubicacion de wally en la imagen
var wally2 = {
   x: 260,
   y: 260
 };

 // Agrega el manejo de clicks
$("#mapa3").click(function (event) {
   clicks++;

   // Calcula distancia entre el click y wally
  var distancia = traedistancia(event, wally2);
   // Convierte la distancia en ayuda
  var ayuda = traeAyuda(distancia);

   // Actualizar el elemento #distancia
  $("#distancia").text(ayuda); // muestro en mi archivo con la etiqueta p de identificador #distancia, la ayuda al usuario

   // Si está muy cerca dile que ganó, encontró a wally!
  if (distancia < 30) {
     alert("Encontraste a Wally en " + clicks + " clicks!");

   }
 });