// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
	  host: '127.0.0.1',
	  port: 8545,
      network_id: '*' // Match any network id
   },
   rinkeby: {
  	 host: "localhost",
  	 port: 8545,
  	 network_id: 4,
  	 gas: 4700000
   }
 }
};
