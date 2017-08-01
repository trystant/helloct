import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createRequestBuilder } from '@commercetools/api-request-builder'
import { config,host }  from './../config.js'
import { async,await } from 'asyncawait'

const await = require('asyncawait/await');
const async = require('asyncawait/async');

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow(config)

const httpMiddleware = createHttpMiddleware(host)

const client = createClient({
  middlewares: [
    authMiddleware,
    httpMiddleware
  ],
})

// Define requestBuilder variable with project key option
const requestBuilder = createRequestBuilder({
  projectKey: config.projectKey
})

// Use request builder helper to build custom URIs

const getCustomers = async () => {
  const customersUri = requestBuilder.customers
        .build()
  const requestCustomers = {
    uri: customersUri,
    method: 'GET'
  }
  const customers = await client.execute(requestCustomers);
}

const getProducts = async () => {
  const productsUri = requestBuilder.products
        .build()
  const requestCustomers = {
    uri: productsUri,
    method: 'GET'
  }
  const products = await client.execute(requestProducts);
}

const getChannels = async () => {
  const channelsUri = requestBuilder.chanels
        .build()
  const requestChannels = {
    uri: channelsUri
    method: 'GET'
  }
  const channels = await client.execute(requestChannels);
}

//Executes all the requests and returns promises containing all the responses
// Promise.all([p1,p2,p3])
//        .then((responses) => {
//          responses.forEach((response) => {
//           console.log(response.body.results)
//         });
//        })
//        .catch((reason) => {
//          console.log(reason)
//        })
