//Scenes
const { Scenes } = require('telegraf')
// Handler factories
const { enter, leave } = Scenes.Stage

/**
* param for telegraf's syntax without requiring it here.
* @param {import("telegraf").Context} ctx
*/

const drain = require('../on/photo.js')
//Drain scene
const DrainScene = new Scenes.BaseScene('drain')
DrainScene.enter((ctx) => ctx.reply('Решил обдрейниться? Не осуждаю. Отправляй фото.'))
DrainScene.leave((ctx) => ctx.reply('Больше не дрейнимся. Другие приколюхи - /help'))
DrainScene.on(drain.on,(ctx)=>drain.run(ctx) ) //on photo drain the photo
DrainScene.command('exit', leave())
DrainScene.on('message', (ctx) => ctx.reply('Только фотографии. Хочешь выйти - пиши /exit')) //default case
//


module.exports = DrainScene;