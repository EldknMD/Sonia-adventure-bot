exports.run = (client, message, Discord) => {
    message.channel.send("huh?...")
    
setTimeout(() => {
    message.channel.send("IT'S YOU?")
    message.channel.send("¿Tú, ahora?")
}, 1000);
setTimeout(() => {
    message.channel.send("Leon forgot to tell me you'll arrive... Let me give him a **friendly** call")
    message.channel.send("Lionel olvidó decirme que venías... que novedad... Le haré una llamada **amistosa** por este imprevisto")
}, 2000);
setTimeout(() => {
    message.channel.send("...")
}, 3000);
setTimeout(() => {
    message.channel.send("... huh...")
}, 4000);
setTimeout(() => {
    message.channel.send("It's here. Yeah... I was waiting for your call to be ready... you know, use slippers and pijamas all day is comfy but not socially acceptable , you know?")
    message.channel.send("Está aquí... si... Esperaba tu llamada para estar lista... usar pantuflas y pijamas todo el día es bastante cómodo, pero no muy aceptado socialmente...")
}, 5000);
setTimeout(() => {
    message.channel.send("Leon can't remember your language... galarian is kinda hard to understand to outsiders... He says it was spanish, but since he remembers you liked fish and chips and use a lot of internet slang... so... **english** or **spanish**?")
    message.channel.send("Lionel no recuerda tu lengua... No lo malinterpretes. El galarience es un poco difícil de entender para los extranjeros... Él dice que hablabas español, pero también recalcó que amabas el pescado con papas fritas y usar siglas del internet para expresarte... así que... **Inglés** o **español**?")
    .then(() => {
        message.channel.awaitMessages(response => response.content, {
          max: 1,
          time: 60000,
          errors: ['time'],
        })
      
        .then((collected) => {
          switch (collected.first().content) {
            case "esp":
            case "Español":
            case "español":
            case "spa":
            case "Spa":
            case "spanish":
            case "Spanish":
            message.channel.send(`¡Muchas muchas gracias!`);
            break;

            case "Ing":
            case "ing":
            case "Eng":
            case "eng":
            case "inglés":
            case "Inglés":
            case "Ingles":
            message.channel.send(`Thank you so much! `);
            break;
      
            default:
            message.channel.send(`Restart. Can't read that.`);
          }})
          .catch(() => {
            message.channel.send("Out of time. Try again.");
          });
      });
}, 7000)
}
    
    /*
    
    
    var start = new Discord.RichEmbed()
	.setColor('#ffa420')
	.setTitle('Hey there!')
	.setDescription("Heard you wanted to start a new Pokémon Journey... That's soooo cute!")
	.setThumbnail('https://i.ibb.co/KDYybj5/soniapokemon.jpg')
    .addField('I could be useful In that case...', 'Somehow...', false)
    .addField('Greetings, fellow!', "My name is Sonia, and I'm professor Magnolia's assistant. You have the face of someone who isn't from around here...", false)
    .addField('So... Tell me about you...', "Where are you from?", false)
    .setImage("https://i.ibb.co/j4yp5nW/giphy.gif")
	.setFooter("Answer tip: Kanto, Jotho, Hoenn, Sinnoh, Unova, Kalos, Alola or Galar. Or simply wherever you live", 'https://i.ibb.co/KDYybj5/soniapokemon.jpg');

message.channel.send(start);
};
*/