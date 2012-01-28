var express = require('express').createServer();
var io = require('socket.io').listen(express);

var port = process.env.PORT || 1337;

io.sockets.on('connection', function(socket){
  socket.emit('time', {time: Date.now()});
  socket.on('beerTime', function(data){
    socket.emit('time', {time: Date.now() });
  });
});

express.get('/', function (req, res) {
  res.render('time.jade', {layout: false}); 
});

express.listen(port);
