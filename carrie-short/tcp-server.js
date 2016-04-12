const net = require ('net');
const fs = require ('fs')



const server = net.createServer((socket) => {
  const writeToFile = fs.createWriteStream(__dirname + '/log_' + Date.now() + '.txt');
  socket.pipe(writeToFile);
});

server.listen(3000,() => {
  process.stdout.write('server up on 3000\n');
});
