var express = require('express').createServer();
var io = require('socket.io').listen(express);

var port = process.env.PORT || 1337;
express.set('view engine', 'jade');

express.get('/', function(req,res){
  res.render('index', {layout:false});
});

io.sockets.on('connection', function(socket){
  socket.on('message', function(data){
    console.log('got message: ' + data.body);
    socket.emit('repeat', { message: 'you said: ' + data.body });
  });
});

express.listen(port);
