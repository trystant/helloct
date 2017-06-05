var createClient = require('@commercetools/sdk-client').createClient
var createAuthMiddlewareForClientCredentialsFlow = require('@commercetools/sdk-middleware-auth').createAuthMiddlewareForClientCredentialsFlow
var createHttpMiddleware = require('@commercetools/sdk-middleware-http').createHttpMiddleware
var createRequestBuilder = require('@commercetools/api-request-builder').createRequestBuilder
var authConfig = require('./config.js')

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow(authConfig)

const httpMiddleware = createHttpMiddleware({
  host: 'https://api.sphere.io',
})

const client = createClient({
  middlewares: [
    authMiddleware,
    httpMiddleware
  ],
})

const requestCustomers = {
  uri: '/down-under/customers',
  method: 'GET'
}

client.execute(requestCustomers)
      .then((response) => {
        var customers = response.body.results
        console.log(customers);
        process.exitCode = 1;
      })
      .catch((err) => {
         console.error(err)
         process.exitCode = 1;
       });

const requestProducts = {
  uri: '/down-under/product-projections',
  method: 'GET'
}

client.execute(requestProducts)
      .then((response) => {
        var products = response.body.results;
        console.log(products);
        process.exitCode = 1;
      })
      .catch((err) => {
        console.error(err)
        process.exitCode = 1;
      });
