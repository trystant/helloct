import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
// import { createRequestBuilder } from '@commercetools/api-request-builder'
import { config } from './config.js'

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow(config)

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
