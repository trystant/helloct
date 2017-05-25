var SphereClient = require('sphere-node-sdk').SphereClient
var Config = require('./config.js')
var client = new SphereClient(Config)

client.customers.fetch()
.then(function (result){
    console.log(`Customers: ${JSON.stringify(result)}`);
    process.exitCode = 1;
})
.catch(function (err){
  console.error(err)
  process.exit(1)
});

client.productProjections.fetch()
.then(function (result){
  console.log(`Products: ${JSON.stringify(result)}`);
  process.exitCode = 1;
  })
.catch(function (err){
  console.error(err)
  process.exit(1)
});
