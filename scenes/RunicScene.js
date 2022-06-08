//Scenes
const { Scenes } = require('telegraf')
// Handler factories
const { enter, leave } = Scenes.Stage

/**
* param for telegraf's syntax without requiring it here.
* @param {import("telegraf").Context} ctx
*/

const runic = require('../commands/runic.js')

//Scene
const RunicScene = new Scenes.BaseScene('runic')
RunicScene.enter((ctx) => ctx.reply('Введи текст, который надо обрунить. Выйти из команды - /exit'))
RunicScene.leave((ctx) => ctx.reply('Другие приколюхи - /help'))
RunicScene.command('exit', leave())
RunicScene.on('text', (ctx) => {runic.run(ctx)})
RunicScene.on('message', (ctx) => ctx.reply('Только текст. Хочешь выйти - пиши /exit'))
//



module.exports = RunicScene;
