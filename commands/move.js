const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
      message.channel.send("Usage: `-move [serverName]` / `-move undo` E.g: -move sv");
      message.delete();
      return;
    }

    let user = message.author;
   	let role = message.author.role;
    let channel = message.channel.name;

	if(args[0] == "tickets"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "--- Tickets ---"`);
        	channel1.setParent("606680422600146955");
        	message.author.send(`Ticket #${channel} was moved to the category "--- Tickets ---"`)
        	message.delete();
		}
    return;
    }

    if(args[0] == "undo"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved back to the category --- Tickets ---`);
        	channel1.setParent("606680422600146955");
        	message.author.send(`Ticket #${channel} was moved to the category "--- Tickets ---"`)  
        	message.delete();
		}
    return;
    }

	if(args[0] == "sv"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SV-Tickets"`);
        	channel1.setParent("632946682207928321");
        	message.author.send(`Ticket #${channel} was moved to the category "SV-Tickets"`)
        	message.delete();
		}
      return;
    }

    	if(args[0] == "survival"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SV-Tickets"`);
        	channel1.setParent("632946682207928321");
        	message.author.send(`Ticket #${channel} was moved to the category "SV-Tickets"`)
        	message.delete();
		}
      return;
    }

    	if(args[0] == "cr"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "CR-Tickets"`);
        	channel1.setParent("632946812092678154");
        	message.author.send(`Ticket #${channel} was moved to the category "CR-Tickets"`)
        	message.delete();
		}
      return;
    }

    	if(args[0] == "creative"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "CR-Tickets"`);
        	channel1.setParent("632946812092678154");
        	message.author.send(`Ticket #${channel} was moved to the category "CR-Tickets"`)
        	message.delete();
		}
      return;
    }   

    	if(args[0] == "fac"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "FAC-Tickets"`);
        	channel1.setParent("659020993553104896");
        	message.author.send(`Ticket #${channel} was moved to the category "FAC-Tickets"`)
        	message.delete();
		}
      return;
    }

    	if(args[0] == "factions"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "FAC-Tickets"`);
        	channel1.setParent("659020993553104896");
        	message.author.send(`Ticket #${channel} was moved to the category "FAC-Tickets"`)
        	message.delete();
		}
      return;
    } 

    	if(args[0] == "pr"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "PR-Tickets"`);
        	channel1.setParent("632946839792123948");
        	message.author.send(`Ticket #${channel} was moved to the category "PR-Tickets"`)
        	message.delete();
		}
      return;
    }

    	if(args[0] == "prison"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "PR-Tickets"`);
        	channel1.setParent("632946839792123948");
        	message.author.send(`Ticket #${channel} was moved to the category "PR-Tickets"`)
        	message.delete();
		}
      return;
    } 

    	if(args[0] == "svsv"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SEMI-SV Tickets"`);
        	channel1.setParent("667988805059346435");
        	message.author.send(`Ticket #${channel} was moved to the category "SEMI-SV Tickets"`)
        	message.delete();
		}
      return;
    }  

    	if(args[0] == "semi-survival"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SEMI-SV Tickets"`);
        	channel1.setParent("667988805059346435");
        	message.author.send(`Ticket #${channel} was moved to the category "SEMI-SV Tickets"`)
        	message.delete();
		}
      return;
    }    

    	if(args[0] == "mg"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "MG-Tickets"`);
        	channel1.setParent("664805277991960586");
        	message.author.send(`Ticket #${channel} was moved to the category "MG-Tickets"`)
        	message.delete();
		}
      return;
    }  

    	if(args[0] == "minigames"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "MG-Tickets"`);
        	channel1.setParent("664805277991960586");
        	message.author.send(`Ticket #${channel} was moved to the category "MG-Tickets"`)
        	message.delete();
		}
      return;
    }

    	if(args[0] == "sb"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SB-Tickets"`);
        	channel1.setParent("632946712805244948");
        	message.author.send(`Ticket #${channel} was moved to the category "SB-Tickets"`)
        	message.delete();
		}
      return;
    } 

    	if(args[0] == "skyblocks"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SB-Tickets"`);
        	channel1.setParent("632946712805244948");
        	message.author.send(`Ticket #${channel} was moved to the category "SB-Tickets"`)
        	message.delete();
		}
      return;
    }                 

    	if(args[0] == "bug"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "--- BUG REPORTS ---"`);
        	channel1.setParent("608258579757137940");
        	message.author.send(`Ticket #${channel} was moved to the category "--- BUG REPORTS ---"`)
        	message.delete();
		}
      return;
    } 

    	if(args[0] == "investigation"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "UNDER INVESTIGATION"`);
        	channel1.setParent("633073897398599700");
        	message.author.send(`Ticket #${channel} was moved to the category "UNDER INVESTIGATION"`)
        	message.delete();
		}
      return;
    }

    	if(args[0] == "under"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "UNDER INVESTIGATION"`);
        	channel1.setParent("633073897398599700");
        	message.author.send(`Ticket #${channel} was moved to the category "UNDER INVESTIGATION"`)
        	message.delete();
		}
      return;
    }  

    	if(args[0] == "impt"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "IMPT-Tickets"`);
        	channel1.setParent("632947151927771167");
        	message.author.send(`Ticket #${channel} was moved to the category "IMPT-Tickets"`)
        	message.delete();
		}
      return;
    }

    	if(args[0] == "important"){
		if (message.member.roles.some(role => role.name === 'Staff')) {
    		if (user.bot) return;
        	const guild = bot.guilds.get("380308776114454528");
        	let category = guild.channels.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "IMPT-Tickets"`);
        	channel1.setParent("632947151927771167");
        	message.author.send(`Ticket #${channel} was moved to the category "IMPT-Tickets"`)
        	message.delete();
		}
      return;
    }
}


module.exports.help = {
  name:"move"
}