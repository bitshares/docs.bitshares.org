**********
Crypto API
**********

The crypto API is available from the full node via websockets.

If you have not set up your websockets connection, please read :doc:`this
article <websocket>`.

.. contents:: Table of Contents
   :depth: 2

Blinding and Un-Blinding
########################
.. doxygenfunction:: graphene::app::crypto_api::blind_sign
.. doxygenfunction:: graphene::app::crypto_api::unblind_signature
.. doxygenfunction:: graphene::app::crypto_api::blind
.. doxygenfunction:: graphene::app::crypto_api::blind_sum

Rage Proofs
###########
.. doxygenfunction:: graphene::app::crypto_api::range_get_info
.. doxygenfunction:: graphene::app::crypto_api::range_proof_sign

Verification
############
.. doxygenfunction:: graphene::app::crypto_api::verify_sum
.. doxygenfunction:: graphene::app::crypto_api::verify_range
.. doxygenfunction:: graphene::app::crypto_api::verify_range_proof_rewind
