const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = { //each command is wrapped in module.exports object
    command : "crypto", //for name of the command
    description: "Получить посленюю цену крипты в USDT", //for help
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        const quotes = [
            'ВРЕМЯ ПАМПИТЬ!',
            'ВРЕМЯ ДАМПИТЬ!',
            'HODLHODLHODLHODL',
            'Как дела на работке, работяги?',
            'Что с лицом, криптоинвесторы?',
            'pink_wojak.jpg',
            'Смешная интернет монета moment',
            'МОЩНО.',
            "We're all gonna make it",
            '🗿',
            '🗿🗿',
            '🗿🗿🗿'
        ]
        let args = ctx.update.message.text.split(' ').slice(1)
        let crypto = "BTC"
        if(args.length!=0){crypto = args.join().toUpperCase()}
        fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${crypto}USDT`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(!data.price){ ctx.reply('Произошла ошибка. Перепроверь свою писанину'); return;} 
            ctx.replyWithMarkdownV2('``` Price of $'+crypto+' in USDT: '+data.price+'```\n ` '+quotes[Math.floor(Math.random()*quotes.length)]+' `')
        });
    },
}