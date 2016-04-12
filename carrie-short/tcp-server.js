const net = require ('net');
const fs = require ('fs')

const writeToFile = fs.createWriteStream(__dirname + '/log_' + Date.now() + '.txt');

const server = net.createServer((socket) => {
  // socket.pipe(process.stdout);
  // socket.pipe(writeToFile);

  socket.on('data',(data) => {
    fs.writeFile(__dirname + '/log_' + Date.now() + '.txt', data, (err) => {
      if (err) throw err;
      console.log('log was saved');
    });
  });

});

server.listen(3000,() => {
  process.stdout.write('server up on 3000\n');
});
