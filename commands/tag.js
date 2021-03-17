const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let role = message.author.role;
if (message.member.roles.cache.some(role => role.name === 'Staff') || message.member.roles.cache.some(role => role.name === 'Discord Staff')) {
    let user = message.author;
    const username = message.member.displayName;
    let channel = message.channel.name;
    if (user.bot) return;
        try {
            const embed = new Discord.MessageEmbed()
                .setDescription(`${user} has marked this issue as \`${message.content.toString().toUpperCase().slice(5)}\``)
                .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
                .setColor('#00FFFF')
            await message.channel.send(embed);
            await message.delete();
            console.log(`\n#${channel} was tagged as ${message.content.toString().toUpperCase().slice(5)} by ${username}`)
        } catch (error) {
            console.error(error)
    }
}
}

module.exports.help = {
  name:"tag"
}