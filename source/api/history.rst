*******************
Cuenta API History 
*******************

La API history está disponible desde el nodo completo a través de websockets.

Si no ha configurado su conexión de websockets, lea :doc: `este
artículo <websocket> `.


.. contents:: Tabla de Contenidos
   :depth: 2

Historial de Cuenta
####################
.. doxygenfunction:: graphene::app::history_api::get_account_history

Historial de Mercado
####################
.. doxygenfunction:: graphene::app::history_api::get_fill_order_history
.. doxygenfunction:: graphene::app::history_api::get_market_history
.. doxygenfunction:: graphene::app::history_api::get_market_history_buckets
