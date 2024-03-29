const Discord = require("discord.js");
const fs = require("fs");
const { prefix } = require("../prefixes.json");
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix)) return;

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have permissions to change the prefix!");
  if(!args[0] || args[0 == "help"]) return message.channel.send("Usage: `-prefix <desired prefix here>`");

  let prefixes = JSON.parse(fs.readFileSync("../prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("../prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}