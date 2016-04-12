const net = require ('net');
const fs = require ('fs')

var dir = './logs';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const server = net.createServer((socket) => {
  const writeToFile = fs.createWriteStream(__dirname + '/logs/log_' + Date.now() + '.txt');
  socket.pipe(writeToFile);
});

server.listen(3000,() => {
  process.stdout.write('server up on 3000\n');
});
