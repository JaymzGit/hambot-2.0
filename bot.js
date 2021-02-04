//Import all libraries or dependecies
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const ping = require("minecraft-server-util")
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

//Check for any files in the commands folders (aka checking if the bot has the following commands or not)
fs.readdir("./commands/", (err, files) => {

//If there's a command file that ends with .js then proceed as normal otherwise, console will say "Couldn't find commands."
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

//To get output in console 
//>...[1:20:56 AM INFO]: [discord.js] - JS:tag.js
  jsfile.forEach((f, i) =>{
    var d = new Date().toLocaleTimeString();
    let props = require(`./commands/${f}`);
//Displays all files that are found in the commands folder
    console.log(`>...[${d} INFO]: [discord.js] - JS:${f}`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
	console.log(`\n${bot.user.username} is online!`);
	bot.user.setActivity("over Ham5teak", {type: "WATCHING"});
})

bot.on("message", async message => {
//Checks for if the channel name in lower case includes "announcements" OR "updates"
if (message.channel.name.includes("announcements") || message.channel.name.includes("updates") || 
	message.channel.name.includes("events") || message.channel.name.includes("competitions") ||
	message.channel.name.includes("staff-applications")){
    let user = message.author;
    let role = message.author.role;
    let channel = message.channel.name;
    if (user.bot) return;
        try {
            const name = message.member.displayName;
            //If the message is bigger than size 0 (0 = message only) (>1 = message + GIF/picture)
            if (message.attachments.size > 0) {
                var Attachment = (message.attachments).array();
                const embed = new Discord.RichEmbed()
                .setDescription(message.content)
                .setAuthor(name, message.author.avatarURL)
                .setImage(Attachment[0].url)
                .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
                .setColor('#00FFFF')
        		const sentEmbed = await message.channel.send(embed);
                await message.delete(500);
                //Logs to console an announcement was made.
                console.log(`\nAn image-inclusive announcement was made in #${channel}`)  
        		await sentEmbed.react('👍');
        		await sentEmbed.react('❤️');
            }else if(message.attachments.size < 1) {
                //Does the same thing but if message doesn't include picture/GIF
                const name = message.member.displayName;
                const embed = new Discord.RichEmbed()
                .setDescription(message.content)
                .setAuthor(name, message.author.avatarURL)
                .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
                .setColor('#00FFFF')
        		const sentEmbed = await message.channel.send(embed);
                await message.delete();
                //Logs to console an announcement was made.
                console.log(`\nAn announcement was made in #${channel}`)
        		await sentEmbed.react('👍');
        		await sentEmbed.react('❤️');
            }
        } catch (error) {
            //Logs to console any errors.
            console.error(error)
        }
    }
 
//Checks for if the channel name in lower case includes "polls" or "suggestions"
if (message.channel.name.toLowerCase().includes('polls')|| message.channel.name.toLowerCase().includes('suggestions')) {
    let user = message.author;
    let role = message.author.role;
    let channel = message.channel.name;
    if (user.bot) return;
    try {
        const name = message.member.displayName;
        const embed = new Discord.RichEmbed()
        .setDescription(message.content)
        .setAuthor(name, message.author.avatarURL)
        .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
        .setColor('#00FFFF')
 
        const sentEmbed = await message.channel.send(embed);
        await message.delete();
        await sentEmbed.react('✅');
        await sentEmbed.react('❌');
    } catch (error) {
            console.error(error)
        }
}

//Alert System
if (message.content.includes("op")) {
if (message.channel.name.includes("console")){ 
    if (message.content.includes("a server operator")) {
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "a server operator";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(staff).send(`**WARNING!** \`/op\` or \`/deop\` was used.`);
        message.delete(200);
        bot.channels.get(alerts).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-creative")) {
if (message.content.includes("[HamAlerts] Thank you")) {
    let channel = message.channel.name;
    var messageSplitted = message.content.split("\n");  
    var substring = "[HamAlerts]";
    filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
    bot.channels.get(receipts).send(`\`\`\`${filtered}\`\`\``);
    }
}

if (message.channel.name.includes("console-lobby")) {
if (message.content.includes("[LP] Set * to true for ")) {
    if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = " [LP]";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
      	bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
	}
}
}

if (message.channel.name.includes("console-survival")) {
if (message.content.includes("[LP] Set * to true for ")) {
    if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = " [LP]";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
      	bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
	}
}
}

if (message.channel.name.includes("console-svsurvival")) {
if (message.content.includes("[LP] Set * to true for ")) {
    if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = " [LP]";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
	}
}
}

if (message.channel.name.includes("console-prison")) {
if (message.content.includes("[LP] Set * to true for ")) {
    if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = " [LP]";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
	}
}
}

if (message.channel.name.includes("console-factions")) {
if (message.content.includes("[LP] Set * to true for  ")) {
    if(message.content.includes("[Messaging] Sending log with id:")){
        const staff = '701520308976353421';
        const lp = '701630251666767952';
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = " [LP]";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
	}
}
}

if (message.channel.name.includes("console-skyblocks")) {
if (message.content.includes("[LP] Set * to true for ")) {
    if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = " [LP]";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
	}
}
}

if (message.channel.name.includes("console-creative")) {
if (message.content.includes("[LP] Set * to true for ")) {
    if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = " [LP]";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
	}
}
}

if (message.channel.name.includes("console-minigames")) {
if (message.content.includes("[LP] Set * to true for ")) {
    if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = " [LP]";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
	}
}
}

//Guarantees no duplicate of message because it will only be from console-lobby
if (message.channel.name.includes("console-lobby")) {
    if (message.content.includes("now inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "now inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
        }
    }
}
}

if (message.channel.name.includes("console-survival")) {
    if (message.content.includes("now inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "now inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
        }
    }
}
}

if (message.channel.name.includes("console-svsurvival")) {
    if (message.content.includes("now inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "now inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
        }
    }
}
}

if (message.channel.name.includes("console-prison")) {
    if (message.content.includes("now inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "now inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
        }
    }
}
}

if (message.channel.name.includes("console-factions")) {
    if (message.content.includes("now inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "now inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-skyblocks")) {
    if (message.content.includes("now inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "now inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-creative")) {
    if (message.content.includes("now inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "now inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-minigames")) {
    if (message.content.includes("now inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "now inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

//remove
if (message.channel.name.includes("console-lobby")) {
    if (message.content.includes("no longer inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "no longer inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-survival")) {
    if (message.content.includes("no longer inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "no longer inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-svsurvival")) {
    if (message.content.includes("no longer inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "no longer inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-prison")) {
    if (message.content.includes("no longer inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "no longer inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-factions")) {
    if (message.content.includes("no longer inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "no longer inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-skyblocks")) {
    if (message.content.includes("no longer inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "no longer inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-creative")) {
    if (message.content.includes("no longer inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "no longer inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-minigames")) {
    if (message.content.includes("no longer inherits permissions from")) {
        if(message.content.includes("for a duration of")) {
            return
        }else{
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "no longer inherits permissions from";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
            bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);        }
    }
}
}

if (message.channel.name.includes("console-lobby")) {   
    if (message.content.includes("[LP] Demoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Demoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-survival")) {   
    if (message.content.includes("[LP] Demoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Demoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-svsurvival")) {   
    if (message.content.includes("[LP] Demoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Demoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
                bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-prison")) {   
    if (message.content.includes("[LP] Demoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Demoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
                bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-skyblocks")) {   
    if (message.content.includes("[LP] Demoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Demoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-creative")) {   
    if (message.content.includes("[LP] Demoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Demoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-minigames")) {   
    if (message.content.includes("[LP] Demoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Demoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

//Promote
if (message.channel.name.includes("console-lobby")) {
    if (message.content.includes("[LP] Promoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Promoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-survival")) {
    if (message.content.includes("[LP] Promoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Promoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-svsurvival")) {
    if (message.content.includes("[LP] Promoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Promoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-prison")) {
    if (message.content.includes("[LP] Promoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Promoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-factions")) {
    if (message.content.includes("[LP] Promoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Promoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-skyblocks")) {
    if (message.content.includes("[LP] Promoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Promoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-creative")) {
    if (message.content.includes("[LP] Promoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Promoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}

if (message.channel.name.includes("console-minigames")) {
    if (message.content.includes("[LP] Promoting")) {
        if(message.content.includes("[Messaging] Sending log with id:")){
        let channel = message.channel.name;
        var messageSplitted = message.content.split("\n");
        var substring = "[LP] Promoting";
        filtered = messageSplitted.filter(function (str) { return str.includes(substring); });
        bot.channels.get(lp).send(`\`\`\`${filtered}\`\`\` It originated from ${channel}!`);
    }
}
}
 
//Ham5teak Server Assistance (Answers in tickets)
for (var i = 0; i < message.embeds.length; i++) {
    if (message.embeds[i] && message.embeds[i].description && message.embeds[i].description.toLowerCase().includes("this user wants the service:")) {
    try {
        const embed = new Discord.RichEmbed()
        .setColor('#0xff3300')
        .setTitle('🥩 Ham5teak Server Assistance')
        .setDescription(`Hello! The Ham5teak Staff Team would like to assist you. \nIn order to make this process easier for us staff, please choose from the following choices by replying with the respective options \n(E.g : send a single number as a message) : \n\n**1**. **Item Lost** \n**2**. **Reporting an Issue/Bug** \n**3**. **Same IP Connection** \n**4**. **Connection Problems**\n**5**. **Forgot Password**\n**6**. **Ban/Mute Appeal**\n**7**. **Queries**`)
        .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
        await message.channel.send(embed);
        console.log('\nA ticket has been created and Ham5teak Bot has replied accordingly.');
 
    } catch (error) {
        console.log(error)
    }
}
}

let user = message.author;
	
if(!user.bot){
    if(message.content === ("1") && message.channel.topic.startsWith("TICKET")) {
        try {
        	const embed = new Discord.RichEmbed()
            .setColor('FF0000')
            .setTitle('🥩 Ham5teak Server Assistance')
            .setDescription("1. **Item Lost Due To Server Lag/Crash** \nIn-game Name:\nServer:\nItems you lost:  \n\nIf they are enchanted tools, please mention the enchantments if possible.")
            .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
            await message.channel.send(embed);
         	await message.delete();

        } catch (error) {
            console.error(error)
        }
    }
 
if(message.content === ("2") && message.channel.topic.startsWith("TICKET")) {
    try {
        const embed = new Discord.RichEmbed()
        .setColor('FF7F00')
        .setTitle('🥩 Ham5teak Server Assistance')
        .setDescription("2. **Issue/Bug Report** \nIn-Game Name : \nServer: \nIssue/Bug :")
        .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
        await message.channel.send(embed);
        await message.delete();
     
    } catch (error) {
    console.error(error)
  }
}
 
if(message.content === ("3") && message.channel.topic.startsWith("TICKET")) {
    try {  
      	const embed = new Discord.RichEmbed()
        .setColor('FFFF00')
        .setTitle('🥩 Ham5teak Server Assistance')
        .setDescription("3. **Same IP Connection** \nIn-Game Name of Same IP Connection : \n- \n- \n\nIP Address : (Format should be xxx.xxx.xxx.xxx)")
        .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
        await message.channel.send(embed);
        await message.delete();
     
    } catch (error) {
    console.error(error)
  }
}
 
  if(message.content === ("4") && message.channel.topic.startsWith("TICKET")) {
    try {
        const embed = new Discord.RichEmbed()
        .setColor('00FF00')
        .setTitle('🥩 Ham5teak Server Assistance')
        .setDescription("4. **Connection Problems** \nIn-game Name:\n\nWhat connection problem are you facing? Please explain briefly.")
        .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
        await message.channel.send(embed);
        await message.delete();  
    } catch (error) {
        console.error(error)
    }
}
 
if(message.content === ("5") && message.channel.topic.startsWith("TICKET")) {
    try {
        const embed = new Discord.RichEmbed()
        .setColor('0000FF')
        .setTitle('🥩 Ham5teak Server Assistance')
        .setDescription("5. **Forgot Password** \nIn-game Name:\nIP Address : (Format should be xxx.xxx.xxx.xxx)")
        .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
        await message.channel.send(embed);
        await message.delete();  
    } catch (error) {
        console.error(error)
    }
}
 
if(message.content === ("6") && message.channel.topic.startsWith("TICKET")) {
    try {
        const embed = new Discord.RichEmbed()
        .setColor('2E2B5F')
        .setTitle('🥩 Ham5teak Server Assistance')
        .setDescription("6. **Ban/Mute Appeal** \nWhy did you get banned/muted? \nWas it on discord or in-game? \n\nIf it was in-game, what is your in-game name and who banned/muted you? \nAlso - please do a ban appeal/mute appeal next time using https://ham5teak.xyz/forums/ban-appeal.21/")
        .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
        await message.channel.send(embed);
        await message.delete();
    } catch (error) {
        console.error(error)
    }
}
 
if(message.content === ("7") && message.channel.topic.startsWith("TICKET")) {
    try {
      const embed = new Discord.RichEmbed()
        .setColor('8B00FF')
        .setTitle('🥩 Ham5teak Server Assistance')
        .setDescription("7. **Queries** \nPlease state your questions here and wait patiently for a staff to reply. If you have to do something at the moment, please leave a note for Staff.")
        .setFooter('Ham5teak Bot 2.0 | play.ham5teak.xyz | Made by Jaymz#7815')
        await message.channel.send(embed);
        await message.delete();
    } catch (error) {
        console.error(error)
    }
}
}

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 
})
bot.login();
