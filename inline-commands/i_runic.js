
module.exports = { //each command is wrapped in module.exports object
    type: 'article',  // It's a voice file.
    id: 0,    // We reflect the same ID of the request back.
    title: `runic`,    // Message appearing in tooltip.
    description: 'runify text',
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    */
    run:(query) => { //main function
        
            let NewStr = query.replace(/а/gi, "ᚣ");
            NewStr = NewStr.replace(/б/gi, "ƃ");
            NewStr = NewStr.replace(/в/gi, "ᛒ");
            NewStr = NewStr.replace(/г/gi, "ᛚ");
            NewStr = NewStr.replace(/д/gi, "ᚦ");
            NewStr = NewStr.replace(/е/gi, "ᛊ");
            NewStr = NewStr.replace(/ё/gi, "ᛊ");
            NewStr = NewStr.replace(/ж/gi, "ᛯ");
            NewStr = NewStr.replace(/з/gi, "℥");
            NewStr = NewStr.replace(/и/gi, "ᛋ");
            NewStr = NewStr.replace(/й/gi, "ᛋ");
            NewStr = NewStr.replace(/к/gi, "ᛕ");
            NewStr = NewStr.replace(/л/gi, "ᚳ");
            NewStr = NewStr.replace(/м/gi, "ᛖ");
            NewStr = NewStr.replace(/н/gi, "ᚺ");
            NewStr = NewStr.replace(/о/gi, "ᛟ");
            NewStr = NewStr.replace(/п/gi, "ᚢ");
            NewStr = NewStr.replace(/р/gi, "ᚹ");
            NewStr = NewStr.replace(/с/gi, "ᛈ");
            NewStr = NewStr.replace(/т/gi, "ᛠ");
            NewStr = NewStr.replace(/у/gi, "ᛉ");
            NewStr = NewStr.replace(/ф/gi, "ᛄ");
            NewStr = NewStr.replace(/х/gi, "ᚷ");
            NewStr = NewStr.replace(/ц/gi, "℥");
            NewStr = NewStr.replace(/ч/gi, "ᚶ");
            NewStr = NewStr.replace(/ш/gi, "ᛞ");
            NewStr = NewStr.replace(/щ/gi, "ᛞ");
            NewStr = NewStr.replace(/ъ/gi, "ᚭ");
            NewStr = NewStr.replace(/ы/gi, "ᛋ");
            NewStr = NewStr.replace(/ь/gi, "ᚭ");
            NewStr = NewStr.replace(/э/gi, "ᛊ");
            NewStr = NewStr.replace(/ю/gi, "ᛉ");
            NewStr = NewStr.replace(/я/gi, "ᚱ");
            NewStr = NewStr.replace(/a/gi, "ᚣ");
            NewStr = NewStr.replace(/b/gi, "ᛒ");
            NewStr = NewStr.replace(/c/gi, "ᛈ");
            NewStr = NewStr.replace(/d/gi, "ᚦ");
            NewStr = NewStr.replace(/e/gi, "ᛊ");
            NewStr = NewStr.replace(/f/gi, "ᚨ");
            NewStr = NewStr.replace(/g/gi, "ᚦ");
            NewStr = NewStr.replace(/h/gi, "ᚺ");
            NewStr = NewStr.replace(/i/gi, "ᛁ");
            NewStr = NewStr.replace(/j/gi, "ᛢ");
            NewStr = NewStr.replace(/k/gi, "ᛕ");
            NewStr = NewStr.replace(/l/gi, "ᛇ");
            NewStr = NewStr.replace(/m/gi, "ᛖ");
            NewStr = NewStr.replace(/n/gi, "ᚺ");
            NewStr = NewStr.replace(/o/gi, "ᛟ");
            NewStr = NewStr.replace(/p/gi, "ᚹ");
            NewStr = NewStr.replace(/q/gi, "ᛩ");
            NewStr = NewStr.replace(/r/gi, "ᚱ");
            NewStr = NewStr.replace(/s/gi, "ᛋ");
            NewStr = NewStr.replace(/t/gi, "ᛠ");
            NewStr = NewStr.replace(/u/gi, "ᚴ");
            NewStr = NewStr.replace(/v/gi, "ᛎ");
            NewStr = NewStr.replace(/w/gi, "ᛎᛎ");
            NewStr = NewStr.replace(/x/gi, "ᚷ");
            NewStr = NewStr.replace(/y/gi, "ᛉ");
            NewStr = NewStr.replace(/z/gi, "ᛇ");
    
            
            return NewStr.toString();
        
    },
}