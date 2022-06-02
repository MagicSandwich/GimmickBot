const { Telegraf } = require('telegraf')
const path = require('path')
const fs = require('fs')
const config = require('./BOTCONFIG.js')
const token = config.token;
const bot = new Telegraf(token);

let commands = []

bot.start((ctx) => ctx.reply(config.startText))

function LoadCommands() {
    let CommandsDir = path.join(__dirname, ".", "commands"); //get directory of commands
    fs.readdir(CommandsDir, (err, files) => {
      if (err) console.log(err);
      else
        files.forEach((file) => {
          let cmd = require(CommandsDir + "/" + file); //require as js file
          if (!cmd.command || !cmd.description || !cmd.run)
            return console.log(
              "Unable to load Command: " +
                file.split(".")[0] +
                ", Reason: File didn't had run/name/desciption"
            );
        bot.command(cmd.command,(ctx)=>{cmd.run(ctx)}) //load command from exports
        commands.push({ "command": cmd.command, "description": cmd.description });
        console.log("Command Loaded: " + file.split(".")[0]); 
        });
    });
  }

bot.help((ctx) => {
    let str = "Commands of this bot:\n"
    commands.forEach(command => {
       str += `/${command.command} - ${command.description} \n`
    });
    ctx.reply(str);
})
LoadCommands()

bot.launch()
console.log("Logged in!")
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))