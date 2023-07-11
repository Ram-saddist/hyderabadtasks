// const fs = require('fs');
// const rs = fs.createReadStream('./index.html');
// rs.on('open', function () {
//   console.log('The file is open');
// });

const events = require('events');
const eventEmitter = new events.EventEmitter();

//Create an event handler:
const myEvent = function () {
  console.log('I hear someone is speaking!');
}

//Assign the event handler to an event:
eventEmitter.on('speak', myEvent);

//Fire the 'scream' event:
eventEmitter.emit('speak');