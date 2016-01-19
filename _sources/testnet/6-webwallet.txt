**********
Web Wallet
**********

Since we need to provide a way for people to enter the
network/blockchain, we need to install the web wallet into nginx.

Dependencies
############

We first install everything we need to compile the web wallet:

.. code-block:: sh

    sudo apt-get install git nodejs-legacy npm
    sudo npm install -g webpack coffee-script

Fetching the web wallet
#######################

Afterwards, we download the `graphene-ui` repository from Cryptonomex
and install the Node dependencies.

.. code-block:: sh

    git clone https://github.com/cryptonomex/graphene-ui
    cd graphene-ui/

    for I in dl web; do cd $I; npm install; cd ..; done

Configuration
#############

What we need now is the `chain_id` of the chain we have running. We can
get it by executing:::

    $ curl --data '{"jsonrpc": "2.0", "method": "get_chain_properties", "params": [], "id": 1}' http://127.0.0.1:11011/rpc && echo

The chain id is used to let the web wallet know to which network it
connects and how to deal with it. For this we modify the file
`dl/src/chain/config.coffee` and add our blockchain:::

        Test:
            core_asset: "TEST"
            address_prefix: "TEST"
            chain_id: "<chain-id>"

Furthermore, we need to tell our web wallet to which witness node to
connect to. This can be done in the file
`dl/src/stores/SettingsStore.js`. ::

    connection: "ws://<host>:<port>",
    faucet_address: "https://<host>",

    # also edit the "default" settings

Compilation
###########

We compile the web wallet with

.. code-block:: sh

    cd web
    npm run build

which will generate the static files in the `dist/` folder.
