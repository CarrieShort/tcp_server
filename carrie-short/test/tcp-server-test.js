const net = require('net');
const chai = require('chai');
const expect = chai.expect;
const tcp = require(__dirname + '/../lib/tcp-server.js');

describe('TCP Server connection test', () => {
  after(() => {
    tcp.server.close();
  });
  it('should receive a response \'request complete\' from server', (done) => {

    var client = net.connect({
      port: 3000
    }, () => {
      client.write('This is the data i send');
    });

    client.on('data', (data) => {
      expect(data.toString()).to.eql('request complete');
      client.end();
    });

    client.on('end', () => {
      console.log('disconnected from server');
      done();
    });

  });
});
