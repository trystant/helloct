var SphereClient = require('sphere-node-sdk').SphereClient
var Config = require('./config.js')
var client = new SphereClient(Config)

client.customers.fetch()
.then(function (response){
  var customers = response.body.results
  console.log(`Customers: ${JSON.stringify(customers)}`);
  process.exitCode = 1;
})
.catch(function (err){
  console.error(err)
  process.exit(1)
});

client.productProjections.fetch()
.then(function (response){
  var products = response.body.results
  console.log(`Products: ${JSON.stringify(products)}`);
  process.exitCode = 1;
  })
.catch(function (err){
  console.error(err)
  process.exit(1)
});
