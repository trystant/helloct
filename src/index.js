import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import config  from './../config.js'

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

const requestProducts = {
  uri: '/down-under/product-projections',
  method: 'GET'
}

const p1 = client.execute(requestCustomers)
const p2 = client.execute(requestProducts)

Promise.all([p1,p2])
       .then((responses) => {
         responses.forEach((response) => {
          console.log(response.body.results)
        });
       })
       .catch((reason) => {
         console.log(reason)
       })
