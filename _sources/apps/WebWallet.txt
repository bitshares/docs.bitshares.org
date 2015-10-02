**********
Web Wallet
**********

The web wallet is a wallet implemented solely in Javascript. It makes use of
modern Web development tools and libraries -- to just a few:

* Coffee-Script
* LESS
* React-JS
* WebPack
* LoDash
* Foundation
* Highcharts
* Mocha
* ...

The webwallet (per default) connects to a full node (non-block-producing witness
node) on the same host via websockets.

Download
########

The sources can be downloaded from github.

    git clone https://github.com/cryptonomex/graphene-ui

They consist of libraries, a JS-console, and the wallet, as well as other
tools.

Installing Dependencies
#######################

First, we need to install the dependencies via `npm`:

    for I in cli dl web; do cd $I; npm install; cd ..; done

Bundling
########

We now bundle the web wallet into JavaScript, CSS, and HTML assets.

    cd ./web
    npm run-script build

The resulting assets can be found in the `dist` folder.

Testing Bundle
##############

    npm test

Live Development
################

    npm start
