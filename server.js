const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();
let mensajes = [
"¡Has capturado al Yee! Con él empezó todo",
"¡Has capturado a Mauricio Colmenero! Tiembla Machupichu",
"¡Has capturado Pescaderías Prada! ¡Los mejores pescados de toda Soria!",
"¡Has capturado al Gato Ok! :cat: :thumbsup:",
"¡Has capturado al Papa Thanos! Abusará de la mitad de los menores para restaurar el orden",
"¡Has capturado a este tío en primera fila de un concierto de Dream Theater en 2014!",
"¡Has capturado una mierda pinchada en un palo!,
"¡Has capturado 250.000 euros!",
"¡Has capturado un botellazo en la rodilla!",
"¡Has capturado mucha suerte para el año que viene!",
"!Has capturado el segundo season pass del Anno 1800!",
"¡Has capturado dos perros!",
"¡Has capturado la localidad de Leioa!",
"¡Has capturado a 3XA, el asesino de la famosa serie Castle!",
"¡Has capturado la falsa muerte de Maria Teresa Campos!"
]

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("/capturar")) {
       var number, imageNumber;
       number = 15;
       imageNumber = Math.floor (Math.random() * (number -1 +1)) +1;
       message.channel.send(mensajes[imageNumber-1], {
            files: [
                  "./images/" + imageNumber + ".png"
            ]
       });
   }
 
 });
 client.login(process.env.TOKEN);
