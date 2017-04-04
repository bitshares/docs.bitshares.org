*******************
Account History API
*******************

The history API is available from the full node via websockets.

If you have not set up your websockets connection, please read :doc:`this
article <websocket>`.

.. contents:: Table of Contents
   :depth: 2

Account History
###############
.. doxygenfunction:: graphene::app::history_api::get_account_history

Market History
##############
.. doxygenfunction:: graphene::app::history_api::get_fill_order_history
.. doxygenfunction:: graphene::app::history_api::get_market_history
.. doxygenfunction:: graphene::app::history_api::get_market_history_buckets
