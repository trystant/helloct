import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createRequestBuilder } from '@commercetools/api-request-builder'
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

const requestBuilder = createRequestBuilder({ projectKey: '' })

// Uses request builder helper to build custom uri
const productsUri = requestBuilder.products
      .build()

const customersUri = requestBuilder.customers
      .build()

const channelsUri = requestBuilder.channels
      .build()

const requestProducts = {
    uri: productsUri,
    method: 'GET'
}

const requestCustomers = {
  uri: customersUri,
  method: 'GET'
}

const requestChannels = {
  uri: channelsUri,
  method: 'GET'
}

const p1 = client.execute(requestCustomers)
const p2 = client.execute(requestProducts)
const p3 = client.execute(requestChannels)

//Executes all the requests and returns promises containing all the responses
Promise.all([p1,p2,p3])
       .then((responses) => {
         responses.forEach((response) => {
          console.log(response.body.results)
        });
       })
       .catch((reason) => {
         console.log(reason)
       })
