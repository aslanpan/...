const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  var oyun = [
    "🔥7/24 Aktif-Türk-Eğlenceli-Moderasyon",
    "✨a!yardım - ✨a!ping - 🔥a!moderasyon - ✨a!eğlence",
    "💫Gelişmiş Bot Dahası Geliyor Bekleyin.!",
    "⭐️Yapımcım Kaan Bey - +64 Komut!",
    "👿Alone Tayfa Botu Aktif! "
    //DBL EKLENCEKSENİZ 5000 EN İYİ DEĞİŞİM SÜRESİDİR! EKLEMEK İSTEMİYORSANIZ İDEAL 2500
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 3000); //DEĞİŞME SÜRESİ

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  client.user.setActivity(
    `${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`
  );
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
