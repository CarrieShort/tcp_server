const net = require('net');
const chai = require('chai');
const expect = chai.expect;
const server = require(__dirname + '/../lib/tcp-server.js');

describe('TCP Server connection test', function() {
  it('should receive a response \'request complete\' from server when connecting to port 3000', (done) => {

    var client = net.connect({port: 3000}, () => {
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
