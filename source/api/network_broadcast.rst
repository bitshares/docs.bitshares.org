*********************
API Network Broadcast
*********************

La API network broadcast está disponible desde el nodo completo a través de websockets.

Si no has configurado tu conexión de websockets, lee :doc: `este
artículo <websocket> `.

.. contents:: Tabla de Contenidos
   :depth: 2

Transacciones
##############
.. doxygenfunction:: graphene::app::network_broadcast_api::broadcast_transaction
.. doxygenfunction:: graphene::app::network_broadcast_api::broadcast_transaction_with_callback

Bloque
######
.. doxygenfunction:: graphene::app::network_broadcast_api::broadcast_block
