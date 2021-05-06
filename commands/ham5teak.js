const Discord = require("discord.js");
const ping = require("minecraft-server-util");
const fs = require("fs");
const { prefix } = require("../prefixes.json");
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix)) return;
    let role = message.author.role;
if (message.member.roles.cache.some(role => role.name === 'High Staff')) {
    let user = message.author;
    let channel = message.channel.name;
if(message.channel.name.includes("bots") || message.channel.name.includes("fun-stuff") ||  message.channel.name.includes("bot") ||  message.channel.name.includes("staff") || message.channel.name.includes("shittalk-here") || message.channel.name.includes("high-staff")) {
	try{
    	ping('play.ham5teak.xyz', (error, reponse) =>{
    	let pingembed = new Discord.MessageEmbed()
    		.setTitle('🥩 Ham5teak Server Status')
    		.setColor('#00FFFF')
    		.addField('Server IP', reponse.host)
    		.addField('Server Version (:iphone:): ', reponse.version)
    		.addField('Online Players (:people_holding_hands:):', reponse.onlinePlayers)
    		.addField('Max Players (:people_holding_hands:):', reponse.maxPlayers)
    		.setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
    	message.channel.send(pingembed);
    	message.delete();
    	message.delete();
    	console.log("Server status has been sent.");
    })
      } catch (e) {
    console.log(e.stack);
  }
}
}
}

module.exports.help = {
  name:"ham5teak"
}