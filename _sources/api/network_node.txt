*****************
Network Nodes API
*****************

The network node API is available from the full node via websockets.

If you have not set up your websockets connection, please read :doc:`this
article <websocket>`.

.. contents:: Table of Contents
   :depth: 2

Obtain Network Information
##########################
.. doxygenfunction:: graphene::app::network_node_api::get_info
.. doxygenfunction:: graphene::app::network_node_api::get_connected_peers
.. doxygenfunction:: graphene::app::network_node_api::get_potential_peers
.. doxygenfunction:: graphene::app::network_node_api::get_advanced_node_parameters

Change Network Settings
#######################
.. doxygenfunction:: graphene::app::network_node_api::add_node
.. doxygenfunction:: graphene::app::network_node_api::set_advanced_node_parameters
