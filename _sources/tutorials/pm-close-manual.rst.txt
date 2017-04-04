************************************
Closing/Settling a Prediction Market
************************************

All the issuer needs to do is publish a valid price feed for the asset.
The `global_settle` option will be set automatically and borrow
positions can settle at the price feed.

Python Script
#############

.. code-block:: python

    from grapheneapi import GrapheneClient
    import json


    class Config():
        wallet_host           = "localhost"
        wallet_port           = 8092
        wallet_user           = ""
        wallet_password       = ""

    if __name__ == '__main__':
        graphene = GrapheneClient(Config)
        symbol = "PM"
        issuer = "nathan"
        producer = "nathan"
        pm_result = True  # or False        <<<<-------- Result goes here
        account = graphene.rpc.get_account(issuer)
        asset = graphene.rpc.get_asset(symbol)
        # Publish a price
        settle_price = {"quote": {"asset_id": "1.3.0",
                                  "amount": 1 if pm_result else 0},
                        "base": {"asset_id": asset["id"],
                                 "amount": 1
                                 }}
        handle = graphene.rpc.begin_builder_transaction()
        tx = graphene.rpc.global_settle_asset(symbol, settle_price, True)
        print(json.dumps(tx, indent=4))
