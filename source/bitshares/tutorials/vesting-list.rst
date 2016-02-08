*********************
List Vesting Balances
*********************

The vesting balances of an account can be seen from:::

>>> get_vesting_balances <account-name>

and takes the form:

.. code-block:: js

    [{
        "id": "1.13.241",
        "owner": "1.2.282",
        "balance": {
          "amount": 4158699804,
          "asset_id": "1.3.0"
        },
        "policy": [
          1,{
            "vesting_seconds": 7776000,
            "start_claim": "1970-01-01T00:00:00",
            "coin_seconds_earned": "16408550952570000",
            "coin_seconds_earned_last_update": "2016-02-08T09:00:00"
          }
        ],
        "allowed_withdraw": {
          "amount": 2114844530,
          "asset_id": "1.3.0"
        },
        "allowed_withdraw_time": "2016-02-08T11:26:12"
      }
    ]

The ``balance`` gives the total vesting balance (amount plus asset),
whereas ``allowed_withdraw`` shows the balance that can be withdrawn
already. The object also tells us that the vesting policy is
in terms of coin-days accrued (in contrast to linear vesting).
