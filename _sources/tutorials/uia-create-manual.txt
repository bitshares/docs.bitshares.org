***********************
Creating a UIA manually
***********************

Creating an Asset
#################

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

Parameters
##########

The `precision` can any positive integer starting from `0`.
As `options` we pass a JSON object that can contain these settings:

.. code-block:: js

   {
      "max_supply" : 10000,    # Integer in satoshi! (100 for precision 1 and max 10)
      "market_fee_percent" : 0.3,
      "max_market_fee" : 1000, # in satoshi
      "issuer_permissions" : <permissions>,
      "flags" : <flags>,
      "core_exchange_rate" : {
          "base": {
            "amount": 21,           # denominator
            "asset_id": "1.3.0"     # BTS
          },
          "quote": {
            "amount": 76399,        # numerator
            "asset_id": "1.3.1"     # !THIS! asset
          }
      },
      "whitelist_authorities" : [],
      "blacklist_authorities" : [],
      "whitelist_markets" : [],
      "blacklist_markets" : [],
      "description" : "My fancy description"
   }

The flags are construction as an JSON object containing these
flags/permissions (see :docs:`../user/assets-faq`):

.. code-block:: js

   {
      "charge_market_fee" : true,
      "white_list" : true,
      "override_authority" : true,
      "transfer_restricted" : true,
      "disable_force_settle" : true,
      "global_settle" : true,
      "disable_confidential" : true,
      "witness_fed_asset" : true,
      "committee_fed_asset" : true
   }

Permissions and flags are modelled as sum of binary flags (see example
below)

White-listing is described in more detail in
:doc:`../../integration/asset-whitelist`.

Issuing Shares
##############

After creation of the asset, no shares will be in existence until they
are issued by the issuer:

::

    issue_asset <account> <amount> <symbol> <memo> True
  

Python Example
##############

.. code-block:: python

    from grapheneapi import GrapheneClient
    import json

    perm = {}
    perm["charge_market_fee"] = 0x01
    perm["white_list"] = 0x02
    perm["override_authority"] = 0x04
    perm["transfer_restricted"] = 0x08
    perm["disable_force_settle"] = 0x10
    perm["global_settle"] = 0x20
    perm["disable_confidential"] = 0x40
    perm["witness_fed_asset"] = 0x80
    perm["committee_fed_asset"] = 0x100


    class Config():
        wallet_host           = "localhost"
        wallet_port           = 8092
        wallet_user           = ""
        wallet_password       = ""

    if __name__ == '__main__':
        graphene = GrapheneClient(Config)

        permissions = {"charge_market_fee" : True,
                       "white_list" : True,
                       "override_authority" : True,
                       "transfer_restricted" : True,
                       "disable_force_settle" : True,
                       "global_settle" : True,
                       "disable_confidential" : True,
                       "witness_fed_asset" : True,
                       "committee_fed_asset" : True,
                       }
        flags       = {"charge_market_fee" : False,
                       "white_list" : False,
                       "override_authority" : False,
                       "transfer_restricted" : False,
                       "disable_force_settle" : False,
                       "global_settle" : False,
                       "disable_confidential" : False,
                       "witness_fed_asset" : False,
                       "committee_fed_asset" : False,
                       }
        permissions_int = 0
        for p in permissions :
            if permissions[p]:
                permissions_int += perm[p]
        flags_int = 0
        for p in permissions :
            if flags[p]:
                flags_int += perm[p]
        options = {"max_supply" : 10000,
                   "market_fee_percent" : 0,
                   "max_market_fee" : 0,
                   "issuer_permissions" : permissions_int,
                   "flags" : flags_int,
                   "core_exchange_rate" : {
                       "base": {
                           "amount": 10,
                           "asset_id": "1.3.0"},
                       "quote": {
                           "amount": 10,
                           "asset_id": "1.3.1"}},
                   "whitelist_authorities" : [],
                   "blacklist_authorities" : [],
                   "whitelist_markets" : [],
                   "blacklist_markets" : [],
                   "description" : "My fancy description"
                   }

        tx = graphene.rpc.create_asset("nathan", "SYMBOL", 3, options, {}, True)
        print(json.dumps(tx, indent=4))
