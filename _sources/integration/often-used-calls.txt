********************
Often used API Calls
********************

.. contents:: Table of Contents
   :depth: 3

Overview
########

Some API calls that are most interesting for exchanges and gateways are listed
in the following table. They are compared to their corresponding API calls in
BitShares 1.0.

We will now take a look at some sample ouputs for some of the API calls in the
table above. We recommend to read the following articles:

.. toctree::

   ../blockchain/Objects
   ../api/cli_wallet

``list_account_balances <account>``
###################################

Script
******

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.list_account_balances("dan")
    print(json.dumps(res,indent=4))

Result
******

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

Reference
*********

.. doxygenfunction:: graphene::wallet::wallet_api::list_account_balances

``transfer <from> <to> <amount> <asset> "<memo>" <broadcast>``
###############################################################

Script
******

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.transfer("fromaccount","toaccount","10", "USD", "$10 gift", True);
    print(json.dumps(res,indent=4))

The final parameter ``True`` states that the signed transaction will be
broadcast. If this parameter is ``False`` the transaction will be signed but
not broadcast, hence not executed.

Result
******

.. code-block:: json

    {
      "ref_block_num": 18,
      "ref_block_prefix": 2320098938,
      "expiration": "2015-10-13T13:56:15",
      "operations": [[
          0,{
            "fee": {
              "amount": 2089843,
              "asset_id": "1.3.0"
            },
            "from": "1.2.17",
            "to": "1.2.7",
            "amount": {
              "amount": 10000000,
              "asset_id": "1.3.0"
            },
            "memo": {
              "from": "GPH6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
              "to": "GPH6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
              "nonce": "16430576185191232340",
              "message": "74d0e455e2e5587b7dc85380102c3291"
            },
            "extensions": []
          }
        ]
      ],
      "extensions": [],
      "signatures": [
        "1f147aed197a2925038e4821da54bd7818472ebe25257ac9a7ea66429494e7242d0dc13c55c6840614e6da6a5bf65ae609a436d13a3174fd12f073550f51c8e565"
      ]
    }

Reference
*********

.. doxygenfunction:: graphene::wallet::wallet_api::transfer

``transfer2 <from> <to> <amount> <asset> "<memo>"``
###############################################################

Script
******

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.transfer2("fromaccount","toaccount","10", "USD", "$10 gift");
    print(json.dumps(res,indent=4))

This method works just like transfer, except it always broadcasts and returns
the transaction ID along with the signed transaction.

Result
******

.. code-block:: json

    [b546a75a891b5c51de6d1aafd40d10e91a717bb3,{
      "ref_block_num": 18,
      "ref_block_prefix": 2320098938,
      "expiration": "2015-10-13T13:56:15",
      "operations": [[
          0,{
            "fee": {
              "amount": 2089843,
              "asset_id": "1.3.0"
            },
            "from": "1.2.17",
            "to": "1.2.7",
            "amount": {
              "amount": 10000000,
              "asset_id": "1.3.0"
            },
            "memo": {
              "from": "GPH6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
              "to": "GPH6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
              "nonce": "16430576185191232340",
              "message": "74d0e455e2e5587b7dc85380102c3291"
            },
            "extensions": []
          }
        ]
      ],
      "extensions": [],
      "signatures": [
        "1f147aed197a2925038e4821da54bd7818472ebe25257ac9a7ea66429494e7242d0dc13c55c6840614e6da6a5bf65ae609a436d13a3174fd12f073550f51c8e565"
      ]
    }
   ]

Reference
*********

.. doxygenfunction:: graphene::wallet::wallet_api::transfer2


``get_account_history <account> <limit>``
##########################################

Script
******

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.get_account_history("dan", 1)
    print(json.dumps(res,indent=4))

Result
******

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

Reference
*********

.. doxygenfunction:: graphene::wallet::wallet_api::get_account_history

``get_object "1.11.<id>"``
###################################

Script
******

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.get_object("1.11.213277")
    print(json.dumps(res,indent=4))

Result
******

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

Reference
*********

.. doxygenfunction:: graphene::wallet::wallet_api::get_object

``get_asset <USD>``
###################################

Script
******

.. code-block:: python

    import json
    from grapheneapi import GrapheneAPI
    client = GrapheneAPI("localhost", 8092, "", "")
    res = client.get_asset("USD")
    print(json.dumps(res,indent=4))

Result
******

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

Reference
*********

.. doxygenfunction:: graphene::wallet::wallet_api::get_asset

Correspondences with BitShares 1.0 Calls
########################################

+----------------------------------------+--------------------------------------------------------------------------+
| BitShares 1.0 Calls                    | BitShares 2.0 Calls                                                      |
+========================================+==========================================================================+
|``wallet_open``                         | n.A. (default ``wallet.json``)                                           |
+----------------------------------------+--------------------------------------------------------------------------+
|``wallet_unlock``                       | ``unlock <password>``                                                    |
+----------------------------------------+--------------------------------------------------------------------------+
|``wallet_account_balance``              | ``list_account_balances <account>``                                      |
+----------------------------------------+--------------------------------------------------------------------------+
|``wallet_address_create``               | n.A. no addresses available for sending                                  |
+----------------------------------------+--------------------------------------------------------------------------+
|``wallet_account_transaction_history``  | ``get_account_history <account> <limit>``                                |
+----------------------------------------+--------------------------------------------------------------------------+
|``wallet_transfer``                     | ``transfer <from> <to> <amount> <asset> "<memo>" <broadcast>``           |
|                                        | ``transfer2 <from> <to> <amount> <asset> "<memo>"``                      |
+----------------------------------------+--------------------------------------------------------------------------+
|n.A.                                    | ``get_transaction_id(const signed_transaction & trx)``                   |
+----------------------------------------+--------------------------------------------------------------------------+
|``blockchain_get_transaction``          | ``get_object 1.11.<id>`` (``<id>`` integer)                              |
+----------------------------------------+--------------------------------------------------------------------------+
|``blockchain_get_asset``                | ``get_asset <symbol>`` or ``get_object 1.3.<id>`` (``<id>`` integer)     |
+----------------------------------------+--------------------------------------------------------------------------+
|``info``                                | ``info``                                                                 |
+----------------------------------------+--------------------------------------------------------------------------+
