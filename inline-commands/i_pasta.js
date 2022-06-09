const olds = require('../resources/olds.json')
module.exports = { //each command is wrapped in module.exports object
    type: 'article',  // It's a voice file.
    id: 3,    // We reflect the same ID of the request back.
    title: `Паста с двачей`,    // Message appearing in tooltip.
    description: 'Смешная паста с двачей (+18)',
    thumb:'https://2ch.hk/b/arch/2018-07-01/thumb/178702441/15304035298810s.jpg',
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run:(query) => { //main function
            return olds.olds[Math.floor(Math.random()*olds.olds.length)];
    },
}