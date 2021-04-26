const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
      message.channel.send("Usage: `-restrict highstaff` / `-restrict sh` / `-restrict cows` / `-restrict undo`");
      message.delete();
      return;
    }

    let user = message.author;
    let role = message.author.role;
    let channel = message.channel.name;

        if (message.member.roles.cache.some(role => role.name === 'Discord Mod') || message.member.roles.cache.some(role => role.name === 'Admin')) {
   if(args[0] == "undo"){
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {
            if (user.bot) return;
            const guild = bot.guilds.cache.get("380308776114454528");
            const ticketid = message.channel.id;
            await bot.channels.cache.get(ticketid).overwritePermissions('449475721921036288', {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            });

            message.author.send(`Ticket #${channel} was unlocked.`)
            message.delete();
    }
    return;
}

    if(args[0] == "highstaff"){
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {
            if (user.bot) return;
            const guild = bot.guilds.cache.get("380308776114454528");
            const ticketid = message.channel.id;
            await bot.channels.cache.get(ticketid).overwritePermissions('449475721921036288', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('453134163420119051', {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            });

            message.channel.send(`Ticket #${channel} was locked to High Staff and above.`)
            message.delete();
    }
return;
}

    if(args[0] == "hs"){
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {
            if (user.bot) return;
            const guild = bot.guilds.cache.get("380308776114454528");
            const ticketid = message.channel.id;
            await bot.channels.cache.get(ticketid).overwritePermissions('449475721921036288', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('453134163420119051', {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            });

            message.channel.send(`Ticket #${channel} was locked to High Staff and above.`)
            message.delete();
    }
return;
}

    if(args[0] == "sh"){
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {
            if (user.bot) return;
            const guild = bot.guilds.cache.get("380308776114454528");
            const ticketid = message.channel.id;
            await bot.channels.cache.get(ticketid).overwritePermissions('449475721921036288', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('453134163420119051', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('528492844348866560', {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            });

            message.channel.send(`Ticket #${channel} was locked to Server-Heads and above.`)
            message.delete();
    }
return;
}

    if(args[0] == "serverhead"){
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {
            if (user.bot) return;
            const guild = bot.guilds.cache.get("380308776114454528");
            const ticketid = message.channel.id;
            await bot.channels.cache.get(ticketid).overwritePermissions('449475721921036288', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('453134163420119051', {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            });

            message.channel.send(`Ticket #${channel} was locked to Server-Heads and above.`)
            message.delete();
    }
return;
}

    if(args[0] == "cows"){
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {
            if (user.bot) return;
            const guild = bot.guilds.cache.get("380308776114454528");
            const ticketid = message.channel.id;
            await bot.channels.cache.get(ticketid).overwritePermissions('449475721921036288', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('453134163420119051', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('528492844348866560', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('380582068134084618', {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            });

            message.channel.send(`Ticket #${channel} was locked to Co-Owners and above.`)
            message.delete();
    }
return;
}

    if(args[0] == "coowner"){
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {
            if (user.bot) return;
            const guild = bot.guilds.cache.get("380308776114454528");
            const ticketid = message.channel.id;
            await bot.channels.cache.get(ticketid).overwritePermissions('449475721921036288', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('453134163420119051', {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            });

            message.channel.send(`Ticket #${channel} was locked to Co Owners and above.`)
            message.delete();
    }
return;
}

    if(args[0] == "coowners"){
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {
            if (user.bot) return;
            const guild = bot.guilds.cache.get("380308776114454528");
            const ticketid = message.channel.id;
            await bot.channels.cache.get(ticketid).overwritePermissions('449475721921036288', {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            });

            await bot.channels.cache.get(ticketid).overwritePermissions('453134163420119051', {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            });

            message.channel.send(`Ticket #${channel} was locked to Co-Owners and above.`)
            message.delete();
    }
return;
}
}
}



module.exports.help = {
  name:"restrict"
}