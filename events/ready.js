const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: ${client.user.username} Adı İle Giriş Yaptı!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Oyun İsmi Ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [BOT]: Şu an ` + client.channels.size + ` Adet kanala, ` + client.guilds.size + ` Adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};