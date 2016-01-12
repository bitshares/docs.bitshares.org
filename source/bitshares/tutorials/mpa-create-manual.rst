***********************
Creating a MPA manually
***********************

We can create a MPA manually by means of the
:doc:`../../integration/apps/cliwallet` command:

    >>> create_asset <issuer> <symbol> <precision> <options> <mpaoptions> false

.. note:: A `false` at the end allows to check and verify the
          constructed transaction and does **not** broadcast it. The
          main difference between create a UIA and a MPA is
          ``<mpaoptions>``!

All options (except for ``mpaoptions`` are similar to creating a UIA as
described in a separate tutorial (:doc:`uia-create-manual`).

MPA-specific settings
######################

In order to create a MPA, we need to define some MPA-specific
parameters:

.. code-block:: js

      {
       "feed_lifetime_sec" : 60 * 60 * 24,
       "minimum_feeds" : 7,
       "force_settlement_delay_sec" : 60 * 60 * 24,
       "force_settlement_offset_percent" : 1 * GRAPHENE_1_PERCENT,
       "maximum_force_settlement_volume" : 20 * GRAPHENE_1_PERCENT,
       "short_backing_asset" : "1.3.0",
      }

See a detailed explanation of the parameters in
:doc:`../user/assets-faq`.

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
    GRAPHENE_100_PERCENT = 10000
    GRAPHENE_1_PERCENT = GRAPHENE_100_PERCENT / 100


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
        mpaoptions = {"feed_lifetime_sec" : 60 * 60 * 24,
                      "minimum_feeds" : 7,
                      "force_settlement_delay_sec" : 60 * 60 * 24,
                      "force_settlement_offset_percent" : 1 * GRAPHENE_1_PERCENT,
                      "maximum_force_settlement_volume" : 20 * GRAPHENE_1_PERCENT,
                      "short_backing_asset" : "1.3.0",
                      }

        tx = graphene.rpc.create_asset("nathan", "BITSYMBOL", 3, options, mpaoptions, True)
        print(json.dumps(tx, indent=4))
