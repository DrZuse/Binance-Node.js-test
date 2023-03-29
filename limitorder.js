require('log-timestamp');



const { Spot } = require('@binance/connector')
//import { Spot } from '@binance/connector.js'
//const Spot = require('@binance/connector')

// add timestamps in front of log messages


const apiKey = ''
const apiSecret = ''

console.log('start')
const client = new Spot(apiKey, apiSecret)
// require('console-stamp')(logger, '[HH:MM:ss.l]');
// Get account information
//client.account().then(response => client.logger.log(response.data))

// Place a new order

client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
  price: '200',
  quantity: 0.05,
  timeInForce: 'GTC'
}).then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))
  
console.log('finish')

