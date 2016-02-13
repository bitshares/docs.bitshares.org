*********
API Guide
*********

This page serves as a comprehensive reference for the Graphene API and
its blockchain, such as :doc:`../bitshares/index` and
:doc:`../muse/index`.

APIs are separated into two categories, namely

* the **Blockchain API** which is used to query blockchain data (account, assets, trading history, etc.) and 
* the **Wallet API** which has your private keys loaded and is required when interacting with the blockchain with new transactions.

.. note:: In order to interface with *the wallet*, you need to run the
          :doc:`../integration/apps/cliwallet`. Neither the
          **light-wallet**, nor the **hosted web wallet** will provide
          you with an API.

In contrast to many existing ecosystems, there is no centralized services that
let's you access private API calles after successful authentication. Instead,
your run your wallet (and optionally a full node) **locally** and are with
**your own API service provider**. This obviously has the advantage that you
don't need to give access to your funds to any third party but has the slight
disadvantage that you need to run a local :doc:`wallet appilcation
<../integration/apps/cliwallet>`, that however does not download the
whole blockchain for verification. If you run a sensitive business, we
recommend to also run a local full node to download and verify the
blockchain and interface your wallet with your local full node.

This page will give you a detailed description of both API categories, the
Remote Procedure Calls and Websockets, and will give an introduction to many
available calls.

Interfacing with Graphene
#########################

The set of available calls depends on whether you connect to a full node
(``witness_node``) or the wallet (``cli_wallet``). Both support RPC-JSON. The
full node also supports the websocket protocol with notifications.

Which blockchain network you connect to (BitShares, MUSE, ..) depends on the
configuration of the full node and the wallet. If you run a full node, we
recommend to connect your wallet to your local full node even though it could
be connected to any other public full node as well.

.. graphviz::

   digraph foo {
    rankdir=LR;
    ranksep=0.5;
    nodesep=0.1;
    overlap=false;
    splines=ortho;

    node [shape=box];
    node [fontname=Verdana,fontsize=12]
    node [style=filled]
    node [fillcolor="#EEEEEE"]
    node [color="#EEEEEE"]
    edge [color="#31CEF0", dir=back, fontsize=9, fontname=Verdana]

    "P2P network" -> "Full Node" [dir="both"]
    "Full Node" -> "Blockchain API"
    "Full Node" -> "Wallet" -> "Withdraw API"

    {rank=same "Withdraw API" "Blockchain API"}
   }

For sensitive businesses that want to ensure that deposits are irreversible, we
recommend the use of the :ref:`High Security Setup <highsecuritynetworksetup>`.
That contains a *delayed node* to pass only irreversible transactions to the API.

.. note:: All API calls are formated in JSON and return JSON only.

Wallet API
----------

This chapter introduces the calls available via wallet API. If you have not set
up your wallet yet, you can find more information on the
:doc:`../integration/apps/cliwallet` and the :doc:`../integration/apps/cli-faq`
pages.

.. toctree::
   :maxdepth: 1

   rpc
   wallet-api

Blockchain API(s)
-----------------

The blockchain API can be used to obtain any kind of data stored in the
blockchain. Besides data stores in the blockchain itself (blocks, transactions,
etc. ..), higher level objects (such as accounts, balances, etc. ...) can be
retrieved through the full node's database.

It is not required to run a local full node if you want to query a particular
blockchain or database, but you can also query any existing public node for
information.

.. toctree::
   :maxdepth: 1

   rpc
   websocket
   blockchain-api

Blockchain Objects and their Identifiers
--------------------------------------

In contrast to many other projects, the Graphene technology distinguishes
different kinds of objects, in the protocol and implementation space.

In the protocol space, there are raw objects such as, accounts, assets,
committee members as well as orders, proposals and balances. The implementation
space is used to gain access to higher abstraction layers for instance content
of the current database state (these include, current global blockchain
properties, dynamic asset data, transaction histories as well as account
statistics and budget records).

.. toctree::
   :maxdepth: 1

   ../development/blockchain/objects
