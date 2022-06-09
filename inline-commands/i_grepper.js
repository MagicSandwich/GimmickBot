const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = { //each command is wrapped in module.exports object
    type: 'article',  // article photo voice document
    title : "Find answer at codegrepper.com", //for name of the command
    description: "поиск вопроса на сайте codegrepper.com", //for help
    thumb:'https://grepper.gallerycdn.vsassets.io/extensions/grepper/grepper/0.0.7/1630602430127/Microsoft.VisualStudio.Services.Icons.Default',
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (ctx) => { //main function
        if(!/^([a-zA-Z0-9 _-]+)$/.test(ctx)){return '`Error`' }
        let data1
        try {
        data1 = await fetch(`https://www.codegrepper.com/api/get_answers_1.php?v=3&s=${ctx}`)
        } catch (error) {
            //console.error(error)
            return '`Error fetching from codegrepper`'
        }
        let data = await data1.json();
        
        if(data.answers[0] === undefined ) return '`Error`'
        return '```'+data.answers[0].language+' \ '+data.answers[0].answer.toString()+' ```'
        
    },
}
