const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.author;
    let role = message.author.role;
    let channel = message.channel.name;
    try {
    if (user.bot) return;
        await message.channel.send(`${user} has joined the Creative Building Competiton. You may now post your submission at #build-competition`)
 
        const build = '670897186833432577';
        await bot.channels.get(build).overwritePermissions(message.author, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true,
        READ_MESSAGE_HISTORY: true,
        ATTACH_FILES: true,
        });
        await message.delete();
 
    } catch (error) {
        console.error(error)
    }
    }

module.exports.help = {
  name:"join build-competition"
}