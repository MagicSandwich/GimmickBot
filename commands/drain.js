module.exports = { //each command is wrapped in module.exports object
    command : "drain", //for name of the command
    description: "обдрейниться", //for help
    usage:"[фото]",
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        ctx.reply("Жду фоточку. А хотя знаешь? Можешь и без комманды отправлять фото. Вот.");
    },
}