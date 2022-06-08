const { Telegraf , Scenes, session } = require('telegraf')
const { enter, leave } = Scenes.Stage
const path = require('path')
const fs = require('fs')
const config = require('./BOTCONFIG.JS')
const token = config.token;
const bot = new Telegraf(token);

let commands = []
let scenes = [];

if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}


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
        commands.push({ "command": cmd.command, "description": cmd.description , "usage":cmd.usage});
        console.log("Command Loaded: " + file.split(".")[0]); 
        });
    });
    
  }



bot.help((ctx) => {
    let str = "Команды этого МОЩНОГО БОТА:\n"
    commands.forEach(command => {
       str += `/${command.command} ${command.usage} - ${command.description} \n`
    });
    ctx.reply(str);
})
LoadCommands()

const i_runic = require('./inline-commands/i_runic.js');
const i_safebooru = require('./inline-commands/i_safebooru.js');
const i_nuzhdik = require('./inline-commands/i_nuzhdik.js');
const i_nft = require('./inline-commands/i_nft.js');
const i_grepper = require('./inline-commands/i_grepper.js');


bot.on('inline_query',async (ctx) => {
  let query = ctx.update.inline_query.query;
  if(!query) query = "void"

  booru = await i_safebooru.run(query)
  grep = await i_grepper.run(query)

  setTimeout(() => {
  ctx.answerInlineQuery([
    {
      type: i_safebooru.type,  
      id: 43,    
      title: i_safebooru.title,    
      description: i_safebooru.description,
      photo_url: booru,
      thumb_url:'https://imag.malavida.com/mvimgbig/download-s/safebooru-24432-0.jpg'
    },
    {
      type: i_runic.type,  
      id: 2,    
      title: i_runic.title,    
      description: i_runic.description,
      thumb_url:'https://2ch.hk/b/arch/2021-05-31/thumb/247831109/16224488720050s.jpg',
      input_message_content: {message_text: i_runic.run(query)}
    },
    {
      type: i_nuzhdik.type,  
      id:3,    
      title: i_nuzhdik.title,    
      description: i_nuzhdik.description,
      thumb_url:'https://sticker-collection.com/stickers/plain/HypeRjuman/ffeb9857-40b5-43e9-884a-665e9967a4dafile_235464.webp',
      input_message_content: {message_text: i_nuzhdik.run(query)}
    },
    {
      type: i_nft.type,  
      id: 4,    
      photo_url: i_nft.run(query),
      thumb_url:i_nft.run(query),
      title: i_nft.title,    
      description: i_nft.description,
      
    },
    {
      type: i_grepper.type,  
      id:5,    
      title: i_grepper.title,    
      description: i_grepper.description,
      thumb_url:'https://sticker-collection.com/stickers/plain/HypeRjuman/ffeb9857-40b5-43e9-884a-665e9967a4dafile_235464.webp',
      input_message_content: {message_text: grep , parse_mode: "MarkdownV2"}
    },
  ], {cache_time: 0});
},1500)
})


const DrainScene = require('./scenes/DrainScene.js')
const RunicScene = require('./scenes/RunicScene.js')

const stage = new Scenes.Stage([DrainScene,RunicScene], {
  ttl: 69,
})
bot.use(session())
bot.use(stage.middleware())
bot.launch()
console.log("Logged in!")
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))