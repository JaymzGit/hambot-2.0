const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
	const guildID = "380308776114454528";

    if(args[0] == "help"){
      message.channel.send("Usage: `-move [serverName]` / `-move undo` E.g: -move sv");
      message.delete();
      return;
    }

    let user = message.author;
   	let role = message.author.role;
    let channel = message.channel.name;

if (message.member.roles.cache.some(role => role.name === 'Staff') || message.member.roles.cache.some(role => role.name === 'Discord Staff')) {
	if(args[0] == "tickets"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "--- Tickets ---"`);
        	channel1.setParent("606680422600146955");
        	message.author.send(`Ticket #${channel} was moved to the category "--- Tickets ---"`)
        	message.delete();
    return;
		}

    if(args[0] == "undo"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved back to the category --- Tickets ---`);
        	channel1.setParent("606680422600146955");
        	message.author.send(`Ticket #${channel} was moved to the category "--- Tickets ---"`)  
        	message.delete();
    return;
		}

	if(args[0] == "sv"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SV-Tickets"`);
        	channel1.setParent("632946682207928321");
        	message.author.send(`Ticket #${channel} was moved to the category "SV-Tickets"`)
        	message.delete();
      return;
		}

    	if(args[0] == "survival"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SV-Tickets"`);
        	channel1.setParent("632946682207928321");
        	message.author.send(`Ticket #${channel} was moved to the category "SV-Tickets"`)
        	message.delete();
      return;
		}

    	if(args[0] == "cr"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "CR-Tickets"`);
        	channel1.setParent("632946812092678154");
        	message.author.send(`Ticket #${channel} was moved to the category "CR-Tickets"`)
        	message.delete();
      return;
    }

    	if(args[0] == "creative"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "CR-Tickets"`);
        	channel1.setParent("632946812092678154");
        	message.author.send(`Ticket #${channel} was moved to the category "CR-Tickets"`)
        	message.delete();
      return;
    }   

    	if(args[0] == "fac"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "FAC-Tickets"`);
        	channel1.setParent("659020993553104896");
        	message.author.send(`Ticket #${channel} was moved to the category "FAC-Tickets"`)
        	message.delete();
      return;
    }

    	if(args[0] == "factions"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "FAC-Tickets"`);
        	channel1.setParent("659020993553104896");
        	message.author.send(`Ticket #${channel} was moved to the category "FAC-Tickets"`)
        	message.delete();
      return;
    } 

    	if(args[0] == "pr"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "PR-Tickets"`);
        	channel1.setParent("632946839792123948");
        	message.author.send(`Ticket #${channel} was moved to the category "PR-Tickets"`)
        	message.delete();
      return;
    }

    	if(args[0] == "prison"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "PR-Tickets"`);
        	channel1.setParent("632946839792123948");
        	message.author.send(`Ticket #${channel} was moved to the category "PR-Tickets"`)
        	message.delete();
      return;
    } 

    	if(args[0] == "svsv"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SEMI-SV Tickets"`);
        	channel1.setParent("667988805059346435");
        	message.author.send(`Ticket #${channel} was moved to the category "SEMI-SV Tickets"`)
        	message.delete();
      return;
    }  

    	if(args[0] == "semi-survival"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SEMI-SV Tickets"`);
        	channel1.setParent("667988805059346435");
        	message.author.send(`Ticket #${channel} was moved to the category "SEMI-SV Tickets"`)
        	message.delete();
      return;
    }    

    	if(args[0] == "mg"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "MG-Tickets"`);
        	channel1.setParent("664805277991960586");
        	message.author.send(`Ticket #${channel} was moved to the category "MG-Tickets"`)
        	message.delete();
      return;
    }  

    	if(args[0] == "minigames"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "MG-Tickets"`);
        	channel1.setParent("664805277991960586");
        	message.author.send(`Ticket #${channel} was moved to the category "MG-Tickets"`)
        	message.delete();
      return;
    }

    	if(args[0] == "sb"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SB-Tickets"`);
        	channel1.setParent("632946712805244948");
        	message.author.send(`Ticket #${channel} was moved to the category "SB-Tickets"`)
        	message.delete();
      return;
    } 

    	if(args[0] == "skyblocks"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "SB-Tickets"`);
        	channel1.setParent("632946712805244948");
        	message.author.send(`Ticket #${channel} was moved to the category "SB-Tickets"`)
        	message.delete();
      return;
    }                 

    	if(args[0] == "bug"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "--- BUG REPORTS ---"`);
        	channel1.setParent("608258579757137940");
        	message.author.send(`Ticket #${channel} was moved to the category "--- BUG REPORTS ---"`)
        	message.delete();
      return;
    } 

    	if(args[0] == "investigation"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "UNDER INVESTIGATION"`);
        	channel1.setParent("633073897398599700");
        	message.author.send(`Ticket #${channel} was moved to the category "UNDER INVESTIGATION"`)
        	message.delete();
      return;
    }
    
    	if(args[0] == "ui"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "UNDER INVESTIGATION"`);
        	channel1.setParent("633073897398599700");
        	message.author.send(`Ticket #${channel} was moved to the category "UNDER INVESTIGATION"`)
        	message.delete();
      return;
    }  

    	if(args[0] == "impt"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "IMPT-Tickets"`);
        	channel1.setParent("632947151927771167");
        	message.author.send(`Ticket #${channel} was moved to the category "IMPT-Tickets"`)
        	message.delete();
      return;
    }

    	if(args[0] == "important"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "IMPT-Tickets"`);
        	channel1.setParent("632947151927771167");
        	message.author.send(`Ticket #${channel} was moved to the category "IMPT-Tickets"`)
        	message.delete();
      return;
    }
    
    	if(args[0] == "event"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "EVENT-Tickets"`);
        	channel1.setParent("751497803837997107");
        	message.author.send(`Ticket #${channel} was moved to the category "EVENT-Tickets"`)
        	message.delete();
      return;
    }
    
    	if(args[0] == "ev"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "EVENT-Tickets"`);
        	channel1.setParent("751497803837997107");
        	message.author.send(`Ticket #${channel} was moved to the category "EVENT-Tickets"`)
        	message.delete();
      return;
    }
        
    	if(args[0] == "cb"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "CAVEBLOCKS-Tickets"`);
        	channel1.setParent("786399045081890858");
        	message.author.send(`Ticket #${channel} was moved to the category "CAVEBLOCKS-Tickets"`)
        	message.delete();
        }
        
    	if(args[0] == "caveblocks"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "CAVEBLOCKS-Tickets"`);
        	channel1.setParent("786399045081890858");
        	message.author.send(`Ticket #${channel} was moved to the category "CAVEBLOCKS-Tickets"`)
        	message.delete();
        }
            
    	if(args[0] == "dc"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "DISCORD-Tickets"`);
        	channel1.setParent("786464294732562472");
        	message.author.send(`Ticket #${channel} was moved to the category "DISCORD-Tickets"`)
        	message.delete();
        }
        
    	if(args[0] == "discord"){
    		if (user.bot) return;
        	const guild = bot.guilds.cache.get(guildID);
        	let category = guild.channels.cache.find(c => c.name == "--- Tickets ---" && c.type == "category");
        	channel1 = message.channel;
        	console.log(`\nTicket #${channel} was moved to the category "DISCORD-Tickets"`);
        	channel1.setParent("786464294732562472");
        	message.author.send(`Ticket #${channel} was moved to the category "DISCORD-Tickets"`)
        	message.delete();
        }
}
}


module.exports.help = {
  name:"move"
}