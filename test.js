/* eslint-disable @typescript-eslint/no-floating-promises */
//import { Scenes, session, Telegraf } from 'telegraf'

const Canvas = require('canvas');

const token = '5237245294:AAFtRBZ1J_hwhMhru9-GNa_K8jSOTQV_lyM'
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}


//Scenes
const { Telegraf , Scenes, session } = require('telegraf')
// Handler factories
const { enter, leave } = Scenes.Stage


//Drain scene
const DrainScene = new Scenes.BaseScene('drain')
DrainScene.enter((ctx) => ctx.reply('OK. Now send me the photo'))
DrainScene.leave((ctx) => ctx.reply('Leaving Drain Scene'))
const drain = require('./on/photo.js')
DrainScene.on(drain.on,(ctx)=> drain.run(ctx,bot.telegram))
DrainScene.command('exit', leave())
DrainScene.on('message', (ctx) => ctx.reply('Only photos.'))


// Greeter scene
const greeterScene = new Scenes.BaseScene('greeter')
greeterScene.enter((ctx) => ctx.reply('Hi'))
greeterScene.leave((ctx) => ctx.reply('Bye'))
greeterScene.hears('hi', enter('greeter'))
greeterScene.on('message', (ctx) => ctx.replyWithMarkdown('Send `hi`'))

// Echo scene
const echoScene = new Scenes.BaseScene('echo')
echoScene.enter((ctx) => ctx.reply('echo scene'))
echoScene.leave((ctx) => ctx.reply('exiting echo scene'))
echoScene.command('back', leave())
echoScene.on('text', (ctx) => ctx.reply(ctx.message.text))
echoScene.on('message', (ctx) => ctx.reply('Only text messages please'))


const bot = new Telegraf(token)

const stage = new Scenes.Stage([greeterScene, echoScene, DrainScene], {
  ttl: 100,
})
bot.use(session())
bot.use(stage.middleware())
bot.command('greeter', (ctx) => ctx.scene.enter('greeter'))
bot.command('echo', (ctx) => ctx.scene.enter('echo'))
bot.command('drain', (ctx) => ctx.scene.enter('drain'))
bot.on('message', (ctx) => ctx.reply('Try /echo or /drain or /greeter'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))