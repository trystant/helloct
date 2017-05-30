var createClient = require('@commercetools/sdk-client').createClient
var createAuthMiddlewareForClientCredentialsFlow = require('@commercetools/sdk-middleware-auth').createAuthMiddlewareForClientCredentialsFlow
var createHttpMiddleware = require('@commercetools/sdk-middleware-http').createHttpMiddleware
var createRequestBuilder = require('@commercetools/api-request-builder').createRequestBuilder

var authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: 'https://auth.sphere.io',
  projectKey: '',
  credentials: {
    clientId: '',
    clientSecret: '',
  },
})

var httpMiddleware = createHttpMiddleware({
  host: 'https://api.sphere.io',
})

var client = createClient({
  middlewares: [
    authMiddleware,
    httpMiddleware
  ],
})

var requestCustomers = {
  uri: '/down-under/customers',
  method: 'GET'
}

client.execute(requestCustomers)
      .then(function (response){
        var customers = response.body.results
        console.log(customers);
        process.exitCode = 1;
      })
      .catch(function (err){
         console.error(err)
         process.exitCode = 1;
       });

var requestProducts = {
  uri: '/down-under/product-projections',
  method: 'GET'
}

client.execute(requestProducts)
      .then(function (response){
        var products = response.body.results;
        console.log(products);
        process.exitCode = 1;
      })
      .catch(function (err){
        console.error(err)
        process.exitCode = 1;
      });
