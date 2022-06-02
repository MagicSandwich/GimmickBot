module.exports = { //each command is wrapped in module.exports object
    command : "drain", //for name of the command
    description: "обдрейниться", //for help
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        ctx.replyWithPhoto({ source: `./images/drain/dr${Math.floor(Math.random() * 16)}.png` });
    },
}