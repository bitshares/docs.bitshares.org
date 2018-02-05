*****************
API Network Nodes 
*****************

La API network node está disponible desde el nodo completo a través de websockets.

Si no has configurado tu conexión de websockets, lee :doc: `este
artículo <websocket> `.


.. contents:: Tabla de Contenidos
   :depth: 2

Obtener Información de Red
##########################
.. doxygenfunction:: graphene::app::network_node_api::get_info
.. doxygenfunction:: graphene::app::network_node_api::get_connected_peers
.. doxygenfunction:: graphene::app::network_node_api::get_potential_peers
.. doxygenfunction:: graphene::app::network_node_api::get_advanced_node_parameters

Cambiar las Configuraciones de Red
###################################
.. doxygenfunction:: graphene::app::network_node_api::add_node
.. doxygenfunction:: graphene::app::network_node_api::set_advanced_node_parameters
