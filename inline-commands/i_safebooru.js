const Booru = require('booru');
module.exports = { //each command is wrapped in module.exports object
    type: 'photo',  // It's a voice file.
    id: 0,    // We reflect the same ID of the request back.
    title: `anime`,    // Message appearing in tooltip.
    description: "Получить красивую аниме картинку по тегам (SFW)", //for help
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run: async (query) => {//main function
    /*Booru.search('safebooru', query, { limit: 1, random: true }).then(
        posts => {
            if(posts[0]){
                
                res =  posts[0].fileUrl
                return res;
            }
        }).catch(err =>{
            
           res =  'https://safebooru.org//images/190/f09e8108539251a7f0918bfe9cdde93730f19a24.jpg';
           return res;
        })
        */
        let res = await Booru.search('safebooru', query, { limit: 1, random: true })
        if(res[0] === undefined) return 'https://2ch.hk/b/arch/2018-05-10/thumb/175700279/15258960383361s.jpg'
        return res[0].fileUrl;
        
    }
}