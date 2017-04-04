**************************
Claiming A Vesting Balance
**************************

Web Wallet
==========

Claiming vesting balances using the web wallet (GUI) is quite simple.
All you need to do is enter your account's page, click on *Vesting
Balances* and pick the balance you would like to claim. The
corresponding transaction is constructed automatically and will be
signed after your confirmation.

.. image:: vesting-claim.png
        :alt: Claim Vesting Balances
        :width: 500px
        :align: center

Console Wallet
==============
From the CLI wallet, vesting balances from witnesses can be claimed by
using:::

    withdraw_vesting <account> <amount> <asset>

Unfortunately, no call exists for non-witness-pay vesting balances, yet
but a transaction can be :doc:`constructed manually <construct-transaction>`
with the operation ``vesting_balance_withdraw_operation`` and takes the
form:

.. code-block:: js

    [
      33,{
        "fee": {
          "amount": 0,
          "asset_id": "1.3.0"
        },
        "vesting_balance": "1.13.0",
        "owner": "1.2.0",
        "amount": {
          "amount": 0,
          "asset_id": "1.3.0"
        }
      }
    ]

