module.exports = { //each command is wrapped in module.exports object
    command : "stats", //for name of the command
    description: "Статы", //for help
    usage:"",
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        let date_ob = new Date();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        res = `*Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\n` 
        res += `*OS:* ${(process.platform)}\n`
        res += `*Node:* ${(process.version)}\n`
        res += `*Time:* ${hours}:${minutes.toString().padStart(2,"0")}`
        await ctx.replyWithMarkdown('*STATS*\n' + res)
    },
}