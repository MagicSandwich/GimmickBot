module.exports = { //each command is wrapped in module.exports object
    type: 'photo',
    title: "nft", //for name of the command
    description: "получить лютого нфт (0-9999)", //for help
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run:(query) => { //main function
        let n = parseInt(query);
        if(isNaN(n)){n = Math.floor(Math.random() * 9999);}
        if(n < 0 || n > 9999){ n = Math.floor(Math.random() * 9999);}
        let s = String(n);
	    if(s.length == 3) {s = "0" + s;}else if(s.length == 2) {s = "00" + s;}else if(s.length == 1) {s = "000" + s;} //lord forgive me
        return "https://www.larvalabs.com/public/images/cryptopunks/punk"+s+".png"
    },
}