module.exports = { //each command is wrapped in module.exports object
    command : "nft", //for name of the command
    description: "получить лютого нфт (0-9999)", //for help
    usage:"[0-9999]",
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        let args = ctx.update.message.text.split(' ').slice(1);
        let n = 0;
        if(!args[0]){n = Math.floor(Math.random() * 9999);}else{n=parseInt(args[0]);}
        if(n < 0 || n > 9999){ ctx.reply('ОТ 0 ДО 9999 ПО РУССКИ ЖЕ НАПИСАНО?????? 1-ДЕН 9999-ҒА ДЕЙІНГІ САНДЫ ТАҢДАҢЫЗ')}
        let s = String(n);
	    if(s.length == 3) {s = "0" + s;}else if(s.length == 2) {s = "00" + s;}else if(s.length == 1) {s = "000" + s;} //lord forgive me
        ctx.replyWithPhoto({ url: "https://www.larvalabs.com/public/images/cryptopunks/punk"+s+".png"});
    },
}