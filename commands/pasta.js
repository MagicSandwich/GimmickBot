
const olds = require('../resources/olds.json')
module.exports = { //each command is wrapped in module.exports object
    command : "pasta", //for name of the command
    description: "Мощная Паста. (+18) (Parental Advisory: Explicit Content)", //for help
    usage:"",
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        ctx.reply(olds.olds[Math.floor(Math.random()*olds.olds.length)])
    },
}