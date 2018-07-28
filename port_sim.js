
var SerialPort = require('serialport');
var port = new SerialPort('/dev/tnt1', { autoOpen: false });
 
port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message);
  }
 
  // Because there's no callback to write, write errors will be emitted on the port:
  port.write('main screen turn on');
});
 
// The open event is always emitted
port.on('open', function() {
  // open logic
});