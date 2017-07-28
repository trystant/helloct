# Node.js Hello API

Simple Node.js based application that fetches customers and products from a commercetools project.

Uses commercetools [nodejs SDK](https://commercetools.github.io/nodejs/sdk/)

# Setup
1. Install the latest version of node on your system
2. Clone this repository
3. Copy your Client Id, Client Secret and Project Key from the commercetools [Admin Center](https://admin.commercetools.com)
4. Insert these strings into the config.js file
5. Define your Auth and http hosts. Dependent on which datacenter your commercetools project is hosted on.

```
EU
Auth Host
https://auth.sphere.io
http Host
https://api.sphere.io

US
Auth Host
https://auth.commercetools.co
http
https://api.commercetools.co
```

# Request Builder

Insert project-key

Build custom URI's for your requests

# Build and Start

Gulp runs build and start command for you

On build code is transpiled by babel from /src to /dist

On start node runs the index file from /dist


```
$ npm install

$ gulp

```
