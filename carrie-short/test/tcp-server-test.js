const net = require('net');
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;
const tcp = require(__dirname + '/../lib/tcp-server.js');
var numFiles;

describe('TCP Server connection test', () => {
  after(() => {
    tcp.close();
  });
  before(() => {
    numFiles = fs.readdirSync(__dirname + '/../logs').length;
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
  it('should create a new file in logs', () => {
    var newNumFiles = fs.readdirSync(__dirname + '/../logs').length;
    expect(numFiles + 1).to.eql(newNumFiles);
  });
});
