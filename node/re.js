const eventemitter = require('events');
const emitter = new eventemitter();
class logger extends eventemitter{
    log(message){
        console.log(message);
        this.emit('messagelogged', {id: 1, url: 'https://'})
    }
}
module.exports=logger;