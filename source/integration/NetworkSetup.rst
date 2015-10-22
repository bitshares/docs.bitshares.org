***************************************
Secure Network and Wallet Configuration
***************************************

Similar to other crypto currencies, it is recommended to wait for several
confirmations of a transcation. Even though the consensus scheme of Graphene is
alot more secure than regular proof-of-work or other proof-of-stake schemes, we
still support exchanges that require more confirmations for deposits.

We provide a so called *delayed* full node which accepts the parameter
``trusted-node`` for an RPC endpoint of a trusted validating node.
The trusted-node is a regular full node directly connected to the P2P
network that works as a proxy. The delayed node will delay blocks until they are
**irreversible**. Depending on the block interval and the number of witnesses,
this may lead to a few minutes of delay.

Overview of the Setup
#####################

In the following, we will setup and use the following network:

.. graphviz::

   digraph foo {
    rankdir=LR
    node [shape=box]
    "P2P network" -> "Trusted Full Node" [dir="both"]
    "Trusted Full Node" -> "Delayed Full Node" -> "Deposit API"
    "Trusted Full Node" -> "Wallet" -> "Withdraw API"
   }

..                              +--->  Delayed Full Node ---> Deposit API
                                |
                                |
    P2P network   <->   Trusted Full Node 
                                ^
                                |
                                +<--------  Wallet <--------- Withdraw API

P2P network
***********
The BitShares client uses a peer-to-peer network to connect and broadcasts
transactions there. A block producing full node will eventually catch your
transcaction and validates it by adding it into a new block.

Trusted Full Node
*****************
We will use a Full node to connect to the network directly. We call it
*trusted* since it is supposed to be under our control.

Delayed Full Node
*****************
The delayed full node node will provide us with a delayed and several times
confirmed and verified blockchain. Even though DPOS is more resistant against
forks than most other blockchain consensus schemes, we delay the blockchain
here to reduces the risk of forks even more. All transactions that are confirmed
by the delayed node are **irreversible**.

Wallet
******
The wallet is used to initiate transfers (customer withdrawals) and connects
to the trusted full node (**not** to the delayed full node).

Deposit API
***********
Since we have a delayed full node that we can fully trust, we will interface
with this node to query the blockchain and receive notifications from it one
balance changes. Hence, we use this API to watch deposits of users into the
exchange's account. Because the delayed node only knows about irreversible
blocks all transactions are at this point irreversible as well.

Withdraw API
************
For customer withdrawals, we will interface with the wallet to initiate
transfers to the accounts of the customers on request. As we are connected to
the trusted node directly, there will not be any delay on withdrawals.

Example Configuration
#####################

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
delayed full node to.::

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
intervals), we need:::

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
with:::

    ./programs/cli_wallet/cli_wallet --server-rpc-endpoint="ws://192.168.0.100:8090" \
                                     --rpc-http-endpoint="192.168.0.102:8092"

.. note:: For security reasons, the wallet should only listen to localhost or
          the local network and should **NEVER** be exposed to the internet.

For customer withdrawals, we will interface to the wallet's API using
`192.168.0.102:8092`.
