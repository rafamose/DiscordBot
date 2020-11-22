const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();
let mensajes = [
"¡Has capturado al Yee! Con él empezó todo",
"¡Has capturado a Mauricio Colmenero! Tiembla Machupichu",
"¡Has capturado Pescaderías Prada! ¡Los mejores pescados de toda Soria!",
"¡Has capturado al Gato Ok! :cat: :thumbsup:",
"¡Has capturado al Papa Thanos! Abusará de la mitad de los menores para restaurar el orden",
"¡Has capturado a este tío en primera fila de un concierto de Dream Theater en 2014! Qué bien se lo pasó",
"¡Has capturado una mierda pinchada en un palo! XDD QUÉ TONTO",
"¡Has capturado 250.000 euros! Invita a algo cabrón",
"¡Has capturado un botellazo en la rodilla! ¿Estás bien?",
"¡Has capturado mucha suerte para el año que viene! ¡Espero que todo vaya bien!",
"!Has capturado el segundo season pass del Anno 1800! Contiene 3 DLCs para mejorar la experiencia",
"¡Has capturado dos perros! Son buenos chicos y no ladran mucho",
"¡Has capturado la localidad de Leioa! Ahí se encuentra la mejor universidad",
"¡Has capturado a 3XA, el asesino de la famosa serie Castle! Mi madre flipaba con esta serie",
"¡Has capturado a Heatran desnudo! Esto se está poniendo un poco horny",
"¡Has capturado al rapero Ice Cube pidiendo cubitos de hielo en una fiesta! Ojalá alguien le atienda a mi pana",
"¡Has capturado al Gordo Texas! Yee-haw",
"¡Has capturado el single de Son de Amores de Andy y Lucas! Vaya temardo",
"¡Has capturado Ploob Oobl! Plab Blab",
"¡Has capturado 3/4 partes del Sol! Puedes derrotar a 750.000 leones",
"¡Has capturado a Segismundo García! Mira qué estilo tiene",
"¡Has capturado a Luzu Sad! Luzu Sad",
"¡Has capturado 3 copas de natillas con galletas! Comparte un poco anda",
"¡Has capturado a Snobama! ¡Corre! Puede derrotarte con el poder de la nieve",
"¡Has capturado la falsa muerte de Maria Teresa Campos! Bueno, mejor dicho, la \"falsa\" muerte"
]

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("/capturar")) {
       var number, imageNumber;
       number = 25;
       imageNumber = Math.floor (Math.random() * (number -1 +1)) +1;
       message.channel.send(mensajes[imageNumber-1], {
            files: [
                  "./images/" + imageNumber + ".png"
            ]
       });
   }
 
 });
 client.login(process.env.TOKEN);
