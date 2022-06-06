const Booru = require('booru');
module.exports = { //each command is wrapped in module.exports object
    command : "anime", //for name of the command
    description: "Получить красивую аниме картинку по тегам (SFW)", //for help
    usage:"[Теги через пробел]",
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
    Booru.search('safebooru', ctx.update.message.text.split(' ').slice(1), { limit: 1, random: true }).then(
        posts => {
            if(posts[0]){
                ctx.replyWithPhoto({ url: posts[0].fileUrl });
            }else{
                ctx.reply('НИЧЕГО НЕ НАШЛО.\nЛибо таких картинок еще не придумали, либо ты в тегах ошибся.')}
            },
          )
         
    },
}