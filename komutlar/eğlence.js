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
      `Alone Tayfa - eğlence`,
      `:white_small_square: | **a!oylama**:Oylama Oluşturur Ve Tepkileri Hazırlar.\n:white_small_square: | **a!afk**:Sizi Afk Bırakır Etiketleri Engeller.\n:white_small_square: | **a!söv**:Bir Kişiye Küfür Eder.\n:white_small_square: | **a!emojiyazı**:Yazdığınız Yazıyı Emojilerle Gönderir.\n:white_small_square: | **a!avatar**:Profilinizdeki Resmi Paylaşır.\n:white_small_square:  | **a!ara155**:Polis Çağırma Gifi Atar.!\n:white_small_square: | **a!herkesebendençay**:Çay fotoğrafı atar.\n:white_small_square: | **a!hesapla**:Matematik İşlemi Yapabilirsiniz.\n:white_small_square: | **a!mca**:Minecraft Başarımını Gösterir.\n:white_small_square: | **a!mesajdöndür**:Mesajı Tersine Çevirip Gönderir.\n:white_small_square: | **a!aşçı**: Çizgili Yazılarla Mesajınızı Gönderir. \n:white_small_square: | **a!oylama**:Mesajınızı Gönderir Ve Tepki Ekler.\n:white_small_square: | **a!simit**:Rastgele Simit Gifi Atar.\n:white_small_square: | **a!slots**:Meyve Tutturmaca Oyunudur.\n:white_small_square: | **a!stresçarkı**:Stres Çarkı Çevirir.\n:white_small_square: | **a!yaz**:Mesajınızı Şekilli Yazar. \ `
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
    "eğlence",
    "eğlence",
    "eğlence",
    "eğlence",
    "fun",
    "eğlence",
    "f",
    "e",
    "eğlence"
  ],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: "eğlence",
  usage: "eğlence"
};
