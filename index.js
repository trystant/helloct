var SphereClient = require('sphere-node-sdk').SphereClient
var Config = require('./config.js')
var argv = require('minimist')(process.argv.slice(2))
var client = new SphereClient(Config)

client.customers.fetch()
.then(function (result){
    console.log("Customers!")
    console.log(JSON.stringify(result))
    process.exitCode = 1;
})
.catch(function (err){
  console.error(err)
  process.exit(1)
});

client.productProjections.fetch()
.then(function (result){
  console.log("Products!");
  console.log(JSON.stringify(result))
  process.exitCode = 1;
  })
.catch(function (err){
  console.error(err)
  process.exit(1)
});
