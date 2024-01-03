const {Client} = require('amocrm-js');
const config = require('./config.example');
const token = require('./token');

const client = new Client(config);

client.token.setValue(token);

module.exports = {client};
