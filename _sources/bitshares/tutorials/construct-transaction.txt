**********************************
Manually Construct Any Transaction
**********************************

General Procedure
#################

The general principle for generating, singing and broadcasting an arbitrary
transactions works as follows:

1. Create an instance of the transaction builder
2. Add arbitrary operation types
3. Add the required amount of fees
4. Sign and broadcast your transaction

The corresponding API calls in the :doc:`../../integration/apps/cliwallet` are:

::

    >>> begin_builder_transaction
    >>> add_operation_to_builder_transaction $HANDLE [opId, {operation}]
    >>> set_fees_on_builder_transaction $HANDLE BTS
    >>> sign_builder_transaction $HANDLE true

The `begin_builder_transaction` call returns a number we call ``$HANDLE`` It
allows to construct several transactions in parallel and identify them
individually!

The `opId` and the JSON structure of the `operation` can be obtained with:

::

    get_prototype_operation <operation-type>

The operation types available are:

.. doxygentypedef:: graphene::chain::operation
   :outline:

In practise, each operation has to pay a fee, and hence, each operation has to
carry a ``fee`` member. When crafting a transaction, you now have the choice
between either defining each fee for your operations individually, or you use
``set_fees_on_builder_transaction`` that sets the fee for each operation
automatically to the chosen asset.

Example: Transfer
#################

A simple *transfer* takes the following form:

::

    get_prototype_operation transfer_operation
    [
      0,{
        "fee": {
          "amount": 0,
          "asset_id": "1.3.0"
        },
        "from": "1.2.0",
        "to": "1.2.0",
        "amount": {
          "amount": 0,
          "asset_id": "1.3.0"
        },
        "extensions": []
      }
    ]

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
                 "amount": 0,
                 "asset_id": "1.3.0"
               }
           }]

The corresponding ``id`` can be obtained with ``get_account``, and
``get_asset``.

We add a fee payed in BTS, sign and broadcast the transaction (if valid):

::

    >>> set_fees_on_builder_transaction 0 BTS
    >>> sign_builder_transaction 0 true
