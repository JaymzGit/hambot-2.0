const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let role = message.author.role;
if (message.member.roles.some(role => role.name === 'Staff')) {
    let user = message.author;
    let channel = message.channel.name;
    if (user.bot) return;
        try {
            const embed = new Discord.RichEmbed()
                .setDescription(`${user} has marked this issue as \`${message.content.toString().toUpperCase().slice(5)}\``)
                .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
                .setColor('#00FFFF')
            await message.channel.send(embed);
            await message.delete(1);
            console.log(`\nTag command was used in #${channel}`)
        } catch (error) {
            console.error(error)
    }
}
}

module.exports.help = {
  name:"tag"
}
