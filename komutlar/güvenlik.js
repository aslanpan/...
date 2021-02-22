const Discord = require("discord.js");

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Alone Tayfa`, client.user.avatarURL)
    .setDescription(
      "[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=811518726070861846&scope=bot&permissions=805314622) | [Discord Sunucumuza Katıl](https://discord.gg/4tEewUmaQa)\n**Ping**: " +
        client.ping +
        "ms!\n\n"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      `Alone Tayfa - Moderasyon`,
      `> :white_small_square: | **a!davetkur**:Sunucunuza Link Oluşturur.
      > :white_small_square: | **a!ban**:Kişiyi Sunucudan Yasaklar..
      > :white_small_square: | **a!kick**:Kişiyi Sunucudan Uzaklaştırır.
      > :white_small_square: | **a!küfür-engel aç**:Küfür Etmenizi Engeller.
      > :white_small_square: |  **a!capslock-engelleme**:Büyük Harf Yazmanızı Engeller.
      > :white_small_square: | **a!rolbilgi**:Etiketli Üyenin Rollerini Gösterir.
      > :white_small_square: | **a!modlogayarla**:Ceza Gibi Şeyleri Ayarlamaktadır.
      > :white_small_square: | **nsfw**:+18 Kişiler Girebilir(porn*)
      > :white_small_square: | **reklam-engel**:Reklam Yapmanızı Engeller.
      > :white_small_square: | **a!reklamtaraması**:Durumunda Link Olanı Gösterir. 
      > :white_small_square: | **a!rol-ver**:Etiketlediğiniz Kişiye Rol Verirsiniz.
      > :white_small_square: | **a!sayaç-ayarla**:Sayaç Kanalını Ayarlarsınız
      > :white_small_square: | **temizle**:Belirlediğiniz Sayıda Mesaj Siler.
      > :white_small_square: | **istatistik**:Botun Durumunu Gösterir.
      > :white_small_square: | **a!hgbbkanal ayarla**:Gelen Gidenleri Gösteren Kanalı Seçersiniz.
      > :white_small_square: | **metin kanal-aç**:Metin Kanalı Oluşturur.
      > :white_small_square: | **nick**:Etiketlediğiniz Üyenin İsminini Değiştirirsiniz.  
      > :white_small_square: | **yetkilerim**:Sizin Üstünüzdeki Yetkinin İzinlerini Gösterir.\ `
    )
    .setFooter(
      `${message.author.username} tarafından istendi.`,
      message.author.avatarURL
    );
  return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [
    "moderasyon",
    "mod",
    "güvenlik",
    "moderasyon",
    "moderasyon",
    "moderasyon",
    "moderasyon",
    "moderasyon",
    "moderasyon"
  ],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "moderasyon",
  usage: "moderasyon"
};
