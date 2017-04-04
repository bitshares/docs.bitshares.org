***************************************
Secure Network and Wallet Configuration
***************************************

The delayed full node should be in the same *local* network as the trusted full
node is in the same network and has internet access. Hence we will work with
the following IPs and open the corresponding RPC ports:

* Trusted Full Node:
   * extern: internet access **required**
   * intern: ``192.168.0.100``
   * port: ``8090``

* Delayed Full Node:
   * extern: **no** internet access required
   * intern: ``192.168.0.101``
   * port: ``8090``

* Wallet:
   * extern: **no** internet access required
   * intern: ``192.168.0.102``
   * port: ``8092``

Let's go into more detail how to set these up.

Trusted Full Node
*****************

For the trusted full node, the default settings can be used.  For later, we
will need to open the RPC port and listen to an IP address to connect the
delayed full node to.

.. code-block:: sh

    ./programs/witness_node/witness_node --rpc-endpoint="192.168.0.100:8090"

.. note:: A *witness* node is identical to a full node if no authorized
          block-signing private key is provided.

Delayed Full Node
*****************

The delayed full node will need the IP address and port of the p2p-endpoint
from the trusted full node and the number of blocks that should be delayed.  We
also need to open the RPC/Websocket port (to the local network!) so that we can
interface using RPC-JSON calls.

For our example and for 10 blocks delaye (i.e. 30 seconds for 3 second block
intervals), we need:

.. code-block:: sh

    ./programs/delayed_node/delayed_node --trusted-node="192.168.0.100:8090" \
                                         --rpc-endpoint="192.168.0.101:8090"
                                         -d delayed_node \
                                         -s "0.0.0.0:0" \
                                         --p2p-endpoint="0.0.0.0:0" \
                                         --seed-nodes "[]"

We could now connect via RPC:

* ``192.168.0.100:8090`` : The trusted full node exposed to the internet
* ``192.168.0.101:8090`` : The delayed full node not exposed to the internet

.. note:: For security reasons, an exchange should only interface with the delayed
          full node.

For obvious reasons, the trusted full node is should be running before
attempting to start the delayed full node.

For customer deposits, we will interface to the delayed node's API using
`192.168.0.101:8090`.

Wallet
******

The wallet initiates outgoing transfers and has to connect to your trusted node
because the *delayed* node has no P2P connections. We furthermore open up a
RPC-JSON-HTTP port to be able to interface with API requests. The wallet can be
connected to the trusted node and listens for RPC requests on port ``8092``
with:

.. code-block:: sh

    ./programs/cli_wallet/cli_wallet --server-rpc-endpoint="ws://192.168.0.100:8090" \
                                     --rpc-http-endpoint="192.168.0.102:8092"

.. note:: For security reasons, the wallet should only listen to localhost or
          the local network and should **NEVER** be exposed to the internet.

For customer withdrawals, we will interface to the wallet's API using
`192.168.0.102:8092`.
