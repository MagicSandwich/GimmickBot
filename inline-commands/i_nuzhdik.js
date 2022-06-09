const nuzdik = require('nuzhdiki')
module.exports = { //each command is wrapped in module.exports object
    type: 'article',  // It's a voice file.
    id: 3,    // We reflect the same ID of the request back.
    title: `Нуждик мощный`,    // Message appearing in tooltip.
    description: 'Смешной текст',
    thumb:'https://sticker-collection.com/stickers/plain/HypeRjuman/ffeb9857-40b5-43e9-884a-665e9967a4dafile_235464.webp',
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run:(query) => { //main function
            return nuzdik.getNuzhdik().nuzhdik;
        
    },
}