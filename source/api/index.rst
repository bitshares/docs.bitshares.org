Graphene API
============

This page serves as a comprehensive reference for the Graphene API. Since
BitShares 2.0 is the first blockchain that makes use of the Graphene technology,
this documentation is mostly compatible with BitShares 2.0 as well.

.. note:: All API calls are formated in JSON and return JSON only.

Interfacing with Graphene
-------------------------

.. note:: The set of available calls depends on whether you connect to a full
          node (``witness_node``) or a CLI wallet (``cli_wallet``). Both support
          RPC-JSON. The full node also supports the websocket protocol with
          notifications.

.. toctree::
   :maxdepth: 1

   access
   rpc
   websocket

Cli Wallet API
--------------

This chapter introduces the calls available to a running CLI wallet. If you
have not set up your CLI wallet yet please visit our other documentation pages
aswell.


.. toctree::
   :maxdepth: 1

   cli_wallet

Full Node APIs
--------------

.. toctree::
   :maxdepth: 1

   fullnode
   login
   database
   history
   network_broadcast
   network_node

Namespaces
----------

.. toctree::
   :maxdepth: 1

   ../namespaces/chain
   ../namespaces/app
   ../namespaces/wallet
