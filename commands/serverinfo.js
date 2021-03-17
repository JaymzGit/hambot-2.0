const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    let role = message.author.role;
if (message.member.roles.cache.some(role => role.name === 'High Staff')) {
		const infoEmbed = new Discord.MessageEmbed()
		.setColor('#00FFFF')
		.setTitle(`Info about ${message.guild.name}`)
		.setAuthor(message.client.user.username, message.client.user.displayAvatarURL)
		
		.addField('Total members (:people_holding_hands:):', message.guild.memberCount)
		.addField('Server created at (:calendar_spiral:):', message.guild.createdAt.toLocaleString('en-US'))
		.addField('Roles (:small_orange_diamond:):', message.guild.roles.cache.map(r => `${r}`).join(' | '))
		.addField('Nitro Boost Level :', message.guild.premiumTier)
		
		message.channel.send(infoEmbed);
		message.delete();
	}
}

module.exports.help = {
  name:"serverinfo"
}