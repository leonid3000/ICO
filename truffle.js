module.exports = {
  networks: {
    development: {
      host: process.env.HOST || "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: process.env.HOST || "localhost",
      port: 8545,
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  },
  mocha: {
    useColors: true
  }
};
