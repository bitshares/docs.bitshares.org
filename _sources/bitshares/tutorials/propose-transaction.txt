***********************
Proposing a Transaction
***********************

Proposed transactions can be used everywhere multiple parties have to agree for
a transaction to become valid.

Crafting a Transaction
######################

If is recommended that the reader first reads through the following tutorial:

* :doc:`construct-transaction`

Proposing a Transaction
#######################

A proposed transaction is encapsulated within another operation type. We can
achieve this by slightly modifying our procedure:

::

    >>> begin_builder_transaction
    >>> add_operation_to_builder_transaction $HANDLE [opId, {operation}]

    # New:
    >>> propose_builder_transaction2 $HANDLE <proposing-account-name> <expiration> <review-period-secs> false

    >>> set_fees_on_builder_transaction $HANDLE BTS
    >>> sign_builder_transaction $HANDLE true

Definition
**********

.. doxygenfunction:: graphene::wallet::wallet_api::propose_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::propose_builder_transaction2

Approving a Proposal
####################

A proposal can be approved simply by:

::

    approve_proposal <approving-account> <proposal_id> {"active_approvals_to_add" : ["<account-name-required-for-approval>"]} false

When replacing the final ``false`` with true, the transaction will be
broadcasted!

Available approval options are:

*	``active_approvals_to_add``
*	``active_approvals_to_remove``
*	``owner_approvals_to_add``
*	``owner_approvals_to_remove``
*	``key_approvals_to_add``
*	``key_approvals_to_remove``

Definition
**********

.. doxygenfunction:: graphene::wallet::wallet_api::approve_proposal

Example: Setting Smartcoin parameter
####################################

A simple *asset_update* takes the following form:

::

     get_prototype_operation asset_update_bitasset_operation
     [
       12,{
         "fee": {
           "amount": 0,
           "asset_id": "1.3.0"
         },
         "issuer": "1.2.0",
         "asset_to_update": "1.3.0",
         "new_options": {
           "feed_lifetime_sec": 86400,
           "minimum_feeds": 1,
           "force_settlement_delay_sec": 86400,
           "force_settlement_offset_percent": 0,
           "maximum_force_settlement_volume": 2000,
           "short_backing_asset": "1.3.0",
           "extensions": []
         },
         "extensions": []
       }
     ]

The operation id for the ``asset_update_bitasset_operation`` is thus ``12``
(third line) and the core elements (removing fee) of this operation take the
form:

.. code-block:: js

    {
       "issuer": "1.2.0",
       "asset_to_update": "1.3.0",
       "new_options": {
         "feed_lifetime_sec": 86400,
         "minimum_feeds": 1,
         "force_settlement_delay_sec": 86400,
         "force_settlement_offset_percent": 0,
         "maximum_force_settlement_volume": 2000,
         "short_backing_asset": "1.3.0",
         "extensions": []
       },
       "extensions": []
    }


We add an operation to a transaction as follows (line breaks inserted for
readability):

::

    >>> begin_builder_transaction
    0
    >>> add_operation_to_builder_transaction
            0
            [12, {
                  "asset_to_update": "1.3.113",
                  "issuer": "1.2.0",
                  "extensions": [],
                  "new_options": {
                    "feed_lifetime_sec": 86400,
                    "force_settlement_delay_sec": 86400,
                    "short_backing_asset": "1.3.0",
                    "maximum_force_settlement_volume": 200,
                    "force_settlement_offset_percent": 0,
                    "minimum_feeds": 7,
                    "extensions": []
                  },
                }]

The corresponding asset ``id`` can be obtained with ``get_asset``.

Now let's make it a proposal for the committee members to sign:

::

    >>> propose_builder_transaction2 0 init0 "2015-12-10T14:55:00" 3600 false

We add a fee payed in BTS, sign and broadcast the transaction (if valid):

::

    >>> set_fees_on_builder_transaction 0 BTS
    >>> sign_builder_transaction 0 true
