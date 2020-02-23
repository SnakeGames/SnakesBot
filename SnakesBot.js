const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "-"

Client.on('ready', ()=>{
    console.log("The bot has been logged in!")
})

Client.on('message', (message)=>{
    if(-message.content.startsWith.apply(prefix)) return;
    if(message.author.bot) return;



    if(message.content.startsWith(prefix + "twitch"))
        message.reply("Snakes twitch channel is, https://twitch.tv/snakegamesttv (someone took snakegames so I had to use snakegamesttv)");

    if(message.content.startsWith(prefix + "help"))
        message.send.author("Snakes commands are, `-twitch, -youtube, -mcdiscord -mcleaks`.");


    if(message.content.startsWith(prefix + "youtube"))
        message.reply("Snakes youtube is, https://youtube.com/snakegamesofficial");

    if(message.content.startsWith(prefix + "mcdiscord"))
        message.reply("Snakes mc server (also ran by his friend) is https://discord.gg/Q789y3N");

    if(message.content.startsWith(prefix + "mcleaks"))
        message.reply("The MC leaks website is; https://mcleaks.net If you want to know how to use it, here is snake's recent video on it! https://www.youtube.com/watch?v=XPtgMijhlQE");
})


Client.login(process.env.token);
