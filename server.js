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
"¡Has capturado la falsa muerte de Maria Teresa Campos! Bueno, mejor dicho, la \"falsa\" muerte",
"¡Has capturado a Herobrine, trans icon! Es canon",
"¡Has capturado una carabina daisy modelo 105! Hace pum",
"¡Has capturado Billy the Hatcher! Dispuesto a hacerte pasar un buen rato",
"¡Has capturado el 11 de Abril! Es todo tuyo, celebra lo que quieras ese día",
"¡Has capturado a Mocito Feliz! Aparecerá en todas tus fotos",
"¡Has capturado un meme gracioso! Qué risa jajaja",
"¡Has capturado un oso de agua! El cabrón resiste en el espacio, qué envidia",
"¡Has capturado una PS5! Flipa colega, podrás jugar al Beyond Good & Evil 2",
"¡Has capturado acciones en bolsa! No sé qué se hace con eso, tú sabrás",
"¡Has capturado Zamora! Haz lo que quieras con ella, total, a nadie le importa",
"¡Has capturado a Victor Hugo en su lecho de muerte! Pobrecito :c",
"¡Has capturado a 3 amigos sentados de pana! Se les ve agusto mi pana",
"¡Has capturado a Chelo García Cortés! No sé quién es XD",
"¡Has capturado sensacionalismo barato! Enhorabuena, tendrás muchas visitas",
"¡Has capturado un bebé! No sabe hablar ni andar, es un inútil",
"¡Has capturado ese pájaro de ahí! No se ve muy bien pero bueno",
"¡Has capturado a Germán de Aída! Mucho mejor que Fidel, dónde vamos a parar",
"¡Has capturado el minuto 6:30 de Spiderman 2! ¡Pizza time!",
"¡Has capturado al Absolute Madman! Mírale, lo hizo, está loco",
"¡Has capturado al gato que te había robado el Mountain Dew! Maldito ladrón",
"¡Has capturado al hombre más guapo del mundo! Sencillamente irresistible",
"¡Has capturado un kiwi bebé! Esta es la pinta que tiene la fruta antes de estar madura",
"¡Has capturado un bonito pasillo! Oh, hay dos caminos. Será mejor que tomes el de la izquierda",
"¡Has capturado una refrescopeta! Tiene un aspecto endiabladamente amenazante",
"¡Has capturado a Jordi Pujol! Poco se habla de que este ser sigue vivo",
"¡Has capturado a Danny DoRito! \"Oooh, pues tampoco está tan mal ser un dorito\", dijo sonriendo",
"¡Has capturado Death spacito! El videojuego creado por el genio Kojima Fonsi",
"¡Has capturado proteína soluble de chocho! Mmmmm rico",
"¡Has capturado este animal! No sé qué coño es, apáñatelas para averiguar qué come",
"¡Has capturado a Ian McKellen en la película Cats! Meow",
"¡Has capturado a Lady Gaga y Tony Bennett! Te quejarás eh, dos personas en una sola tirada",
"¡Has capturado a McManaman! Gran centrocampista retirado en 2005",
"¡Has capturado el Easter Egg de la cabeza de John Romero en Doom 2! Este era el verdadero jefe final :o",
"¡Has capturado el Multioso! Es muy majo en verdad, me daría pena matarlo",
"¡Has capturado a Elodin el nominador! Ta loco ta loco",
"¡Has capturado el cartel del Graspop de 2018! Santo Dios bendito",
"¡Has capturado a Lin Ghast Miranda! Será añadido en Minecraft 2",
"¡Has capturado un 2x1 en cristales! * para gafas de graduado de vista y de sol",
"¡Has capturado un Hericium erinaceus! También llamado Melena de león, ¡es comestible!",
"¡Has capturado una bella imagen de mis vacaciones en Japón en 1954! Qué buenos recuerdos tengo",
"¡Has capturado la Fábrica de Moneda y Timbre! Ojalá visitarla, la verdad",
"¡Has capturado la cuenta de numeritos! Espero que no twittee más desde iPhone",
"¡Has capturado el d100! Es caótico pero divertido",
"¡Has capturado a Paca la Piraña! Yo soy mujer polaca, con el coño atrás como las vacas",
"¡Has capturado chistes cortos muy divertidos para los niños! JA ja ja...",
"¡Has capturado a Baby Ezio! El nuevo personaje de Mario Kart",
"¡Has capturado a Wesley Snipes siendo detenido por fraude fiscal! Dónde te sentastee",
"¡Has capturado tres rábanos y medio! Es que estaban de oferta",
"¡Has capturado Niños Grandes 2! La obra magna de Adam Sandler",
"¡Has capturado la bandera de la Isla de Man! Mmmm patas",
"¡Has capturado al hombre lámpara! Pero no le molestes porfa, parece ocupado",
"¡Has capturado a Gaimon! El verdadero protagonista de One Piece",
"¡Has capturado Shrek 5! El endgame de los ogros",
"¡Has capturado Homunculus Loxodontus! Espera pacientemente",
"¡Has capturado un botón rojo! ¡Por favor no lo toques!",
"¡Has capturado el disco 11 de Minecraft! -Toc toc toc- pffshhhh uf uf hmph -toc toc- -flush-",
"¡Has capturado una figura de Technoblade! Para los amantes de las patata",
"¡Has capturado el single de Lore Lore Macu Macu! Hace 54 años de esto. Feel old yet?",
"¡Has capturado un tractor de ocasión! Nada mejor que un John Deere 3350 1990/115CV",
"¡Has capturado a Dr. Phil M&M! Lo que aquí sería Juan y Medio Conguito",
"¡Has capturado la universidad de Murcia! Donde Grefg se sacó la carrera de ser un picao",
"¡Has capturado a Ennio Morricone! Pobrecillo, déjale, si está muerto",
"¡Has capturado a Papá Pig comiéndose a Peppa Pig! El último capítulo de la serie",
"¡Has capturado un mapuche! Pregúntale a Fran qué hace. Y si eres Fran pregúntatelo a ti mismo",
"¡Has capturado el Tiktok de Cristina Pedroche! ¡Risas infinitas!",
"¡Has capturado el ayuntamiento de Mollet! És molt bonic",
"¡Has capturado hentai de buizel! Joder qué asco tío ostia joder mierda",
"¡Has capturado al Yannis! Qué suerte tío",
"¡Has capturado la Game Boy SP Tribal! El más guay del barrio",
"¡Has capturado el skate sobre ruedas! Menudo swag tío",
"¡Has capturado un emoji hetero! Buenas noches princesa",
"¡Has capturado 4 achantes en la puerta de marina! Te lo has comío 4 veces eeee",
"¡Has capturado Fuyu no Hanashi! Me gusta la parte en la que dice Mada tokenai mahō no yōna",
"¡Has capturado la Virgen del Pilar! Dice que no quiere ser francesa",
"¡Has capturado Boboddy! La primera B es por Biznuz",
"¡Has capturado al vecino mientras cortaba las plantas de su jardín! Joder tío, ya le has jodido todo",
"¡Has capturado una Ouya! Inversión de futuro",
"¡Has capturado el pelo de Phil Spector! Ya está muerto así que no creo que lo use",
"¡Has capturado a Adelante! Es muy cariñosa",
"¡Has capturado a Pierluigi Collina! El árbitro de la portada del Pro Evolution Soccer 2003",
"¡Has capturado un meme sobre la Comuna! Efectivamente nunca hubo música medieval",
"¡Has capturado un bolardo de Barcelona! Nuestro salvador",
"¡Has capturado nuestro récord en un Escape Room! Fuimos los peores entre los mejores",
"¡Has capturado al señor que no conocemos! Pero es como si fuera parte de la familia",
"¡Has capturado a Marcel Steiner en acción! Participó en Vela en la clase Tornado entre los años 2016 y 2019",
"¡Has capturado a Fernando Tejero con el cantante de Franz Ferdinand! El segundo no tenía ni idea de con quién se estaba echando la foto",
"¡Has capturado al famoso jugador de fútbol Kun Agüero! Bueno vamo a juga",
"¡Has capturado a Shinji pidiendo a Glados que ponga despacito! Es un ejemplo de algo que se puede dibujar con una tableta gráfica",
"¡Has capturado un ficus! ¡Silencio! Está haciendo la fotosíntesis",
"¡Has capturado a Ringo Starr reflejado en una cuchara! Otro día más en la vida de Ringo",
"¡Has capturado un bonito fondo de pantalla! Sé la envídia de tus amigos",
"¡Has capturado una piedra! No sé cuál es, pregúntale a Eloy",
"¡Has capturado a una abuela! O un mono, no lo tengo claro, lo dejo abierto a debate",
"¡Has capturado al perro very nice! Very nice",
"¡Has capturado al davus! ¡Cuidado! ¡Va armado!",
"¡Has capturado al Antherio profe! Te enseña todo sobre los ficus japoneses",
"¡Has capturado al chihuahua adios! Adios!",
"¡Has capturado al chamaco! 50 XD y lo tiro",
"¡Has capturado el Parking de Cultos Religiosos! Para aparcar tu sotana",
"¡Has capturado a Hanzo Betis! Estará disponible en Overwatch 2",
"¡Has capturado a Porta! Juegazo",
"¡Has capturado a Sif! Es el Gran Lobo Gris",
"¡Has capturado la imagen más desagradable de internet! Apártala por favor",
"¡Has capturado un sabroso almuerzo! ¡Que aproveche!",
"¡Has capturado a una persona llorando muy fuerte! ¡Mira qué fuerte llora!",
"¡Has capturado a un titán con una polla titánica! Titánicamente juguetón",
"¡Has capturado a Benedict Cucumber! Es la mierda más graciosa que he visto",
"¡Has capturado un Jabalí Común! K susto me llevao sus muertos",
"¡Has capturado la insoportable levedad del ser! Pf qué putada tío",
"¡Has capturado a Vegetta Fascista! Es decir, Vegetta normal y corriente",
"¡Has capturado a Paco Sans! Tirititi",
"¡Has capturado una escena destornillante de Campamento Flipy! Es, si se me permite la expresión, tronchante",
"¡Has capturado una puta escultura griega! Pero como no tiene sobrepeso los progres no irán a aplaudir su autoestima",
"¡Has capturado la desesperación! Ta wapo e XD",
"¡Has capturado la skin de Daredevil en el Fortnite! Tienes solo 3 días para pagar 10 euros por ella y luego desaparece para siempre",
"¡Has capturado el concepto del paso del tiempo! No veas tú qué movida",
"¡Has capturado la versión original de la Metamorfosis de Kafka! Dicen que está chulo",
"¡Has capturado un cielo bonito! Sé de alguien a quien le gustaría",
"¡Has capturado una imagen relatable! Cuando te pasa",
"¡Has capturado un cubo Ghost! Encima con las pegatinas esas para que no se escurra",
"¡Has capturado la vaca de Top Secret! Peli muy recomendada",
"¡Has capturado a Lou Ferrigno! El mejor Hulk y no hay discusión",
"¡Has capturado la cara de iTownGameplay! Le noto raro, qué estaría haciendo en ese momento",
"¡Has capturado al alcalde de Vigo! Le falta luces a este señor",
"¡Has capturado un álbum de Lamicards! Pero vacío, ahora te toca completarlo",
"¡Has capturado una agradable partida de rol al aire libre! Ya está empezada, pero puedes unirte si quieres",
"¡Has capturado una bonita mano! Ufff qué bonita es, me gusta",
"¡Has capturado un rey en castillo! Wawawiwo",
"¡Has capturado a Sabaton encima de un tanque! Saluda, ¡no muerden!",
"¡Has capturado un toro viniendo a ti a toda velocidad! Detrás de él hay como otros 900, así que no tengas prisa",
"¡Has capturado una copia de Moulin Rouge en italiano! Ahora es mucho más sexy",
"¡Has capturado el manillar de aquel incidente! Literalmente la peor decisión que tomé en la vida",
"¡Has capturado a Szeth-son-son-Vallano! Es calvo",
"¡Has capturado un temazo! Tiene hasta las lyrics para que no te pierdas al cantar ole ole ole ole beti oleee",
"¡Has capturado la prueba del código morse! Apunta Varo: raya punto punto espacio creo ¿punto? quizás era una raya da igual punto punto raya puede que espacio ¿lo estás apuntando?",
"¡Has capturado la intro de un youtuber que está empezando! Espero que le vaya bien",
"¡Has capturado un mensaje importante de CD Projekt! Parece que se vuelve a retrasar el juego, esperemos que salga bien",
"¡Has capturado un npc sin cargar del Cyberpunk! No pasa nada, un fallo lo tiene cualquiera",
"¡Has capturado öOoOoOoOoOo! Una banda de rock experimental francesa, la recomiendo",
"¡Has capturado a David Bisbal Japonés! Ave María-chan",
"¡Has capturado unas cuantas esponjas! Mételas en una bolsa antes de pasar por caja",
"Vaya, por fin has despertado. ¡Has capturado un arresto!",
"¡Has capturado a David Tennant! Tiene puesto el traje de los domingos",
"¡Has capturado una filtración del nuevo personaje del Smash! Lo he visto en 4chan",
"¡Has capturado un croissant relleno de caca! ¡Mi favorito!",
"¡Has capturado un concierto de Muse desde un ángulo muy agradable! Aun así es muy chulo",
"¡Has capturado una pandilla de amigos! Hay uno negro",
"¡Has capturado una frase del joker! Da que pensar",
"¡Has capturado el recuento de las cacas! Esto es secreto, no lo compartas",
"¡Has capturado a Lisa Simpsons! Necesita un aparato",
"¡Has capturado un río! Si lleva agua, suena, o algo así",
"¡Has capturado al del medio de los Chichos! Se me ha aparecío en sueños",
"¡Has capturado a Chiqui de Gran Hermano! No la recuerdo en la obra de George Orwell",
"¡Has capturado el Big Bang! Ahí te has pasao",
"¡Has capturado Despacito 2! Por fin"]

let horoscopo = [ "Refachería", "Vasco", "Andaluz", "Catalán", "Basadísimo", "Emprendedor", "Otaku", "Suerte en cajas del OW", "Heterosexualidad", "Joto", "RafaTriviP", "Dab", "Amor", "Salud", "Dinero", "Suerte", "Fuerza", "Destreza", "Inteligencia", "Excitado", "Mapuche", "Madrileño", "Furro", "Escultura Griega", "Kawaii", "Destornillante", "Máquina", "Fiera"]

let horoscopoExtra = ["Cyberpunk: 2077%", "Fallout: 76%", "Soldado: 76%", "Tú: en mi camita bb", "The Virgin: tú vs The Chad: yo", "Mi bebesita: bebe lin", "Arctic Monkeys: 505%", "Rush: 2112%", "RafaTrivi: P", "El final de Ronda de la Manca: la casa de Trivi", "Dinero: por favor", "Nice: 69%", "Illo: Juan", "Cómo acabarás según un vagabundo: Solos, tristes y abandonados", "Ben: 10%", "Schalke: 04%", "Iván: B", "Sneaky Reinhardt: por favor Fran no", "Tontos muy tontos: 2%", "La ardilla hace: ajijijija", "¿Cuántos vigilan los cañaverales del sur?: unos cuatro", "Vegetta: 777% de facha"]

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("/capturar")) {
       var number, imageNumber;
       number = 180;
       imageNumber = Math.floor (Math.random() * (number -1 +1)) +1;
       message.channel.send(mensajes[imageNumber-1], {
            files: [
                  "./images/" + imageNumber + ".png"
            ]
       });
   }
      if(message.content.startsWith("/horoscopo")) {
       var lista = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
	   var listaExtra = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]; 
		lista = lista.sort(function() {return Math.random() - 0.5});
		listaExtra = listaExtra.sort(function() {return Math.random() - 0.5});
       message.channel.send("Tu horóscopo es el siguiente: \n" + horoscopo[lista[0]] + ": " + Math.round(Math.random()*120) + "%, " + horoscopo[lista[1]] + ": " + Math.round(Math.random()*120) + "%, " + horoscopo[lista[2]] + ": " + Math.round(Math.random()*120) + "%, " + horoscopoExtra[listaExtra[0]]);
   }
 
 });
 client.login(process.env.TOKEN);
