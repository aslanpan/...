const Discord = require("discord.js");

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setTitle(
      "**▬▬▬▬▬▬[** ©️ **» Alone Tayfa Bot** ©️ **]▬▬▬▬▬▬**  **  **Prefixim: `a!`"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    )
    .setDescription(
      `

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

> **» a!moderasyon :** Moderasyon komutlarını görüntüler..!
> **» a!eğlence :** Sizi biraz eğlendirir..!
> **» a!invite :** Botu Davet Edebilirsiniz..!
> **» a!ping :** Botumuzun Pingini Gösterir..!
> **» a!istatistik :** Bot Bilgilerini Gösterir..!
> **» a!kullanıcıbilgim :** Kullanıcı Bilginizi Gösterir..!

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/4tEewUmaQa)**
> :round_pushpin: **Komut hakkında detaylı bilgilerimiz: a!yardım**
> :bulb: **Discord Js Sürümü: 12.4.0**

**» Bağlantılar** 
:white_small_square: | **[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=811518726070861846&scope=bot&permissions=805314622)** | **[Yapımcımın Sunucusu](https://discord.gg/4tEewUmaQa)**\n
`
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
    "komut",
    "komutlar",
    "command",
    "yardım",
    "help",
    "halp",
    "y",
    "h",
    "commands"
  ],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "yardım",
  usage: "yardım"
};
