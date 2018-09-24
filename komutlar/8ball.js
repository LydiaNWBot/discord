const Discord = require('discord.js');

const cevaplar = [
    "**Naber**",
    "**İyi Sen",
    "**Seni Seviyorum**",
    "**Neyse Ben Gaçar**",
    "**Dünyanın  Dehası Sende Bence :)**",
    "**İmkansız lıgı Yapıyosun Ganga**"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: ?sorucevap <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sorucevap', 
  description: ' SİHİRLİ SoruCevap SENİN SÖYLEDİKLERİNE CEVAP VERİR',
  usage: 'sorucevap <soru>'
};