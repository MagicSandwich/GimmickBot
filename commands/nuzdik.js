const nuzdik = require('nuzhdiki')
module.exports = { //each command is wrapped in module.exports object
    command : "nuzhdik", //for name of the command
    description: "Мощный нуждик.", //for help
    usage:"",
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        let nuzhdik = nuzdik.getNuzhdik()
        ctx.replyWithMarkdownV2('``` '+ nuzhdik.nuzhdik+' ```')
    },
}