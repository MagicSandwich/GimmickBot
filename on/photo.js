const Canvas = require('canvas');

module.exports = {
    on:"photo",
    /**
    * param for telegraf's syntax without requiring it here.
    * @param {import("telegraf").Context} ctx
    * @param {import("telegraf").Telegraf} bot
    */
    run: async (cctx) => { //main function
        let photos = cctx.update.message.photo
        cctx.telegram.getFileLink(photos.pop().file_id).then(async(url) => { 
          let img = await Canvas.loadImage(url.href) //load the photo in message
          let les = await Canvas.loadImage(`./images/drain/dr${Math.floor(Math.random() * 15)+1}.png`); //load random drain frame
          const canvas = Canvas.createCanvas(img.width, img.height); // new canwas
          const ctx = canvas.getContext('2d'); 
          ctx.drawImage(img, 0, 0);
          let dataImg = ctx.getImageData(0, 0, img.width, img.height);
          for(let y = 0; y < dataImg.height; y++){
            for(let x = 0; x < dataImg.width; x++){
              let i = (y * 4) * dataImg.width + x * 4; //BLACK AND WHITE MAGIC
              let avg = (dataImg.data[i] + dataImg.data[i + 1] + dataImg.data[i + 2]) / 2.;
              dataImg.data[i] = avg;
              dataImg.data[i + 1] = avg;
              dataImg.data[i + 2] = avg;
              }
          }
        
          ctx.putImageData(dataImg, 0, 0, 0, 0, dataImg.width, dataImg.height);//Put filtered image back in canvas
          ctx.globalAlpha = 0.3; // change alpha for desaturation
          ctx.drawImage(img, 0, 0); // put colored image
          ctx.globalAlpha = 1; 
          ctx.drawImage(les, 0, 0, img.width, img.height); //put drain frame

          canvas.toBuffer((err, buf) => {
            if (err) throw err // encoding failed
            cctx.replyWithPhoto({ source: buf}); //Reply with photo from buffer
          })
        }).catch((err) => {
            console.log('*** error ***');
            console.log(err);
        });
        
    },
}