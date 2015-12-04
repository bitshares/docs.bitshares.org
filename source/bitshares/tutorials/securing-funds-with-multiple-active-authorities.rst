***********************
Proposing a Transaction
***********************

.. contents:: Table of Contents
   :depth: 3

Preface
#######

Adding Active Authorities
#########################

Proposing a "Funds" Transaction
###############################

Proposed transactions can be used everywhere multiple parties have to agree for
a transaction to become valid.

Crafting a Transaction
**********************

If is recommended that the reader first reads through the following tutorial:

* :doc:`construct-transaction`

Proposing a Transaction
***********************

A proposed transaction is encapsulated within another operation type. We can
achieve this by slightly modifying our procedure:

::

    >>> begin_builder_transaction
    >>> add_operation_to_builder_transaction $HANDLE [opId, {operation}]

    # New:
    >>> propose_builder_transaction2 $HANDLE <proposing-account-name> <expiration> <review-period-secs> false

    >>> set_fees_on_builder_transaction $HANDLE BTS
    >>> sign_builder_transaction $HANDLE true

Approving a Proposal
********************

A proposal can be approved simply by:

::

    >>> approve_proposal <approving-account> <proposal_id> {"active_approvals_to_add" : ["<account-name-required-for-approval>"]} false

When replacing the final ``false`` with true, the transaction will be
broadcasted!

Example: Transfer
#################

The operation id for the ``transfer_operation`` is thus ``0`` (third line) and
the core elements (removing fee) of this operation take the form:

.. code-block:: json

      {
        "from": "1.2.0",
        "to": "1.2.0",
        "amount": {
          "amount": 0,
          "asset_id": "1.3.0"
        }
      }

We add an operation to a transaction as follows (line breaks inserted for
readability):

::

    >>> begin_builder_transaction
    0
    >>> add_operation_to_builder_transaction
         0
        [0,{
               "from": "1.2.0",
               "to": "1.2.0",
               "amount": {
                 "amount": 1000000,
                 "asset_id": "1.3.0"
               }
           }]

The corresponding ``id`` can be obtained with ``get_account``, and
``get_asset``. Note that the amount is in satoshi taking into consideration the
``precision`` of the asset,

We add a fee payed in BTS, sign and broadcast the transaction (if valid):

::

    >>> set_fees_on_builder_transaction 0 BTS
    >>> sign_builder_transaction 0 true

Approval can be added via

::

    approve_proposal <approving-account> <proposal_id> {"active_approvals_to_add" : ["<account-name-required-for-approval>"]} false
