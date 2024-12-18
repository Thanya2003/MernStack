const eventemitter = require('events');
const emitter = new eventemitter();

// // register a listener
// emitter.on('messagelogged', (arg)=>{
//     console.log('listener Called', arg)
// })
// raise an event
// emitter.emit('messagelogged',{id:1, url:'http://'})




// raise logged (data: message)

// emitter.on('logged', (e)=>{
//     console.log('Thanya', e.data)
// })
// emitter.emit('logged',{data:'you are logged in'})
const Logger = require('./re');
const logger= new Logger();
logger.on('messagelogged', (arg)=>{
    console.log('listener Called', arg)
})
logger.log('message')