*********************
Network Broadcast API
*********************

The network broadcast API is available from the full node via websockets.

If you have not set up your websockets connection, please read :doc:`this
article <websocket>`.

.. contents:: Table of Contents
   :depth: 2

Transactions
############
.. doxygenfunction:: graphene::app::network_broadcast_api::broadcast_transaction
.. doxygenfunction:: graphene::app::network_broadcast_api::broadcast_transaction_with_callback

Block
#####
.. doxygenfunction:: graphene::app::network_broadcast_api::broadcast_block
