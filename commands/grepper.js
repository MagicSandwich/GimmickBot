const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = { //each command is wrapped in module.exports object
    command : "grep", //for name of the command
    description: "поиск вопроса на сайте codegrepper.com", //for help
    usage:"[вопрос]", // for usage
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        if(!/^([a-zA-Z0-9 _-]+)$/.test(ctx)){return '``` Error ```' }
        fetch(`https://www.codegrepper.com/api/get_answers_1.php?v=3&s=${ctx.update.message.text.split(' ').slice(1).join(' ')}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(!data.answers[0]){ ctx.reply('Произошла ошибка. Перепроверь свою писанину'); return;} 
            ctx.replyWithMarkdownV2('```'+data.answers[0].language+' '+data.answers[0].answer.toString()+' ```')
        });
    },
}
