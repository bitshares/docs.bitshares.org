***********************
Creating a UIA manually
***********************

Of course a UIA can also be created *manually* by means of the
:doc:`../../integration/apps/cliwallet` command:

.. or by manually constructing a transaction, signing and broadcasting
   it (:doc:`construct-transaction`).
.. CLI
.. ###

::

    >>> create_asset <issuer> <symbol> <precision> <options> {} false

.. note:: A `false` at the end allows to check and verify the
          constructed transaction and does **not** broadcast it.  The
          empty `{}` could be used to construct a :doc:`../user/mpa` and
          is subject of another tutorial.

The `precision` can any positive integer starting from `0`.

As `options` we pass a JSON object that can contain these settings:

.. code-block:: json

   {
      "max_supply" : 10000  // Integer in satoshi! (100 for precision 1 and max 10)
      "market_fee_percent" : 0.3,
      "max_market_fee" : 1000, // in satoshi
      "issuer_permissions" : <permissions>,
      "flags" : <flags>,
      "core_exchange_rate" : {
          "base": {
            "amount": 21,           // denominator
            "asset_id": "1.3.0"     // BTS
          },
          "quote": {
            "amount": 76399,        // numerator
            "asset_id": "1.3.1"     // !THIS! asset
          }
      },
      "whitelist_authorities" : [],
      "blacklist_authorities" : [],
      "whitelist_markets" : [],
      "blacklist_markets" : [],
      "description" : "My fancy description"
   }

The flags are construction as an JSON object containing these
flags/permissions:

.. code-block::

   {
      "charge_market_fee" : true
      "white_list" : true
      "override_authority" : true
      "transfer_restricted" : true
      "disable_force_settle" : true
      "global_settle" : true
      "disable_confidential" : true
      "witness_fed_asset" : true
      "committee_fed_asset" : true
   }

White-listing is described in more detail in
:doc:`../../integration/asset-whitelist`.
