********************
Often used API Calls
********************

Overview
########

Some API calls that are most interesting for exchanges and gateways are listed
in the following table. They are compared to their corresponding API calls in
BitShares 1.0.

+-----------------------------------+--------------------------------------------------------------------------+
| BitShares 1.0 Calls               | BitShares 2.0 Calls                                                      |
+===================================+==========================================================================+
|wallet_open                        | n.A. (default ``wallet.json``)                                           |
+-----------------------------------+--------------------------------------------------------------------------+
|wallet_unlock                      | ``unlock <password>``                                                    |
+-----------------------------------+--------------------------------------------------------------------------+
|wallet_account_balance             | ``list_account_balances <account>``                                      |
+-----------------------------------+--------------------------------------------------------------------------+
|wallet_address_create              | n.A. no addresses available for sending                                  |
+-----------------------------------+--------------------------------------------------------------------------+
|wallet_account_transaction_history | ``get_account_history <account> <limit>``                                |
+-----------------------------------+--------------------------------------------------------------------------+
|wallet_transfer                    | ``transfer <front> <to> <amount> <asset> "<memo>" <broadcast>``          |
+-----------------------------------+--------------------------------------------------------------------------+
|blockchain_get_transaction         | ``get_object 1.11.<id>`` (``<id>`` integer)                              |
+-----------------------------------+--------------------------------------------------------------------------+
|blockchain_get_asset               | ``get_asset <symbol>`` or ``get_object 1.3.<id>`` (``<id>`` integer)     |
+-----------------------------------+--------------------------------------------------------------------------+
|info                               | ``info``                                                                 |
+-----------------------------------+--------------------------------------------------------------------------+


Example Outputs
################

We will now take a look at some sample ouputs for some of the API calls in the
table above. We recommend to read the following articles:

.. toctree::

   ../blockchain/Objects
   ../api/cli_wallet

``list_account_balances <account>``
***********************************

**Script**:

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.list_account_balances("dan")
    print(json.dumps(res,indent=4))

**Result**:

.. code-block:: json

    [
        {
            "asset_id": "1.3.0",
            "amount": "331104701530"
        },
        {
            "asset_id": "1.3.511",
            "amount": 3844848635
        },
        {
            "asset_id": "1.3.427",
            "amount": 8638
        },
        {
            "asset_id": "1.3.536",
            "amount": 31957981
        }
    ]

``get_account_history <account> <limit>``
******************************************

**Script**:

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.get_account_history("dan", 1)
    print(json.dumps(res,indent=4))

**Result**:

.. code-block:: json

   [
        {
            "description": "fill_order_operation dan fee: 0 CORE",
            "op": {
                "block_num": 28672,
                "op": [
                    4,
                    {
                        "pays": {
                            "asset_id": "1.3.536",
                            "amount": 20000
                        },
                        "fee": {
                            "asset_id": "1.3.0",
                            "amount": 0
                        },
                        "order_id": "1.7.1459",
                        "account_id": "1.2.21532",
                        "receives": {
                            "asset_id": "1.3.0",
                            "amount": 50000000
                        }
                    }
                ],
                "id": "1.11.213277",
                "trx_in_block": 0,
                "virtual_op": 47888,
                "op_in_trx": 0,
                "result": [
                    0,
                    {}
                ]
            },
            "memo": ""
        }
    ]

``get_object "1.11.<id>"``
***********************************

**Script**:

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.get_object("1.11.213277")
    print(json.dumps(res,indent=4))

**Result**:

.. code-block:: json

    {
        "trx_in_block": 0,
        "id": "1.11.213277",
        "block_num": 28672,
        "op": [
            4,
            {
                "fee": {
                    "asset_id": "1.3.0",
                    "amount": 0
                },
                "receives": {
                    "asset_id": "1.3.0",
                    "amount": 50000000
                },
                "pays": {
                    "asset_id": "1.3.536",
                    "amount": 20000
                },
                "account_id": "1.2.21532",
                "order_id": "1.7.1459"
            }
        ],
        "result": [
            0,
            {}
        ],
        "op_in_trx": 0,
        "virtual_op": 47888
    }


``get_asset <USD>``
***********************************

**Script**:

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.get_asset("USD")
    print(json.dumps(res,indent=4))

**Result**:

.. code-block:: json

    {
        "symbol": "USD",
        "issuer": "1.2.1",
        "options": {
            "description": "1 United States dollar",
            "whitelist_authorities": [],
            "flags": 0,
            "extensions": [],
            "core_exchange_rate": {
                "quote": {
                    "asset_id": "1.3.536",
                    "amount": 11
                },
                "base": {
                    "asset_id": "1.3.0",
                    "amount": 22428
                }
            },
            "whitelist_markets": [],
            "max_supply": "1000000000000000",
            "blacklist_markets": [],
            "issuer_permissions": 79,
            "market_fee_percent": 0,
            "max_market_fee": "1000000000000000",
            "blacklist_authorities": []
        },
        "dynamic_asset_data_id": "2.3.536",
        "bitasset_data_id": "2.4.32",
        "id": "1.3.536",
        "precision": 4
    }
