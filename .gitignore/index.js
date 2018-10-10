const Discord = require("discord.js");
const bot = new Discord.Client();

var PREFIX = ("/");

bot.on('ready', () => {
    console.log("Actif")
})

bot.on('message', msg => {
    if(msg.content[0] === PREFIX) {
        if(msg.content === PREFIX + 'roleLOTRO') {

            let role = msg.guild.roles.find('name', 'lotro')

            if(msg.member.roles.find('name', 'lotro')) {
                msg.member.removeRole(role)
                msg.reply("Vous n'avez plus le rôle LOTRO.")
            }
            else {
                msg.member.addRole(role)
                msg.reply("Vous avez le rôle LOTRO.")
            }
        }
    }
});

bot.on('message', msg => {
    if(msg.content[0] === PREFIX) {
        if(msg.content === PREFIX + 'rolePUBG') {

            let role = msg.guild.roles.find('name', 'Les Pub(g)iens')

            if(msg.member.roles.find('name', 'Les Pub(g)iens')) {
                msg.member.removeRole(role)
                msg.reply("Vous n'avez plus le rôle PUBG.")
            }
            else {
                msg.member.addRole(role)
                msg.reply("Vous avez le rôle PUBG.")
            }
        }
    }
});

bot.on('message', msg => {
    if(msg.content[0] === PREFIX) {
        if(msg.content === PREFIX + 'roleMINECRAFT') {

            let role = msg.guild.roles.find('name', 'Miners')

            if(msg.member.roles.find('name', 'Miners')) {
                msg.member.removeRole(role)
                msg.reply("Vous n'avez plus le rôle MINECRAFT.")
            }
            else {
                msg.member.addRole(role)
                msg.reply("Vous avez le rôle MINECRAFT.")
            }
        }
    }
});


bot.login(process.env.TOKEN);
