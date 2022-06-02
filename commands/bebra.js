module.exports = { //each command is wrapped in module.exports object
    command : "bebra", //for name of the command
    description: "ЗАНЮХНИ БЕБРУЛЕЧКУ", //for help
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        ctx.replyWithMarkdownV2('``` nuhai bebery ```')
    },
}