module.exports = { //each command is wrapped in module.exports object
    command : "", //for name of the command
    description: "", //for help
    usage:"", // for usage
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        
    },
}
