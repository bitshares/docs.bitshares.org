**********
API Crypto
**********

La API crypto está disponible desde el nodo completo a través de websockets.

Si no ha configurado su conexión de websockets, lea:doc: `este
artículo <websocket>`.

.. contents:: Tabla de Contenidos
   :depth: 2

Ocultar y Des-Ocultar
########################
.. doxygenfunction:: graphene::app::crypto_api::blind_sign
.. doxygenfunction:: graphene::app::crypto_api::unblind_signature
.. doxygenfunction:: graphene::app::crypto_api::blind
.. doxygenfunction:: graphene::app::crypto_api::blind_sum

Pruebas Rage
###########
.. doxygenfunction:: graphene::app::crypto_api::range_get_info
.. doxygenfunction:: graphene::app::crypto_api::range_proof_sign

Verificación
############
.. doxygenfunction:: graphene::app::crypto_api::verify_sum
.. doxygenfunction:: graphene::app::crypto_api::verify_range
.. doxygenfunction:: graphene::app::crypto_api::verify_range_proof_rewind
